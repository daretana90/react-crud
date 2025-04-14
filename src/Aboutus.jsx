import React from "react";
import axios from "axios";

const baseUrl = "http://lumen/LEARN/lumen/blog/public/api/";

const client = axios.create({
  baseURL: "http://lumen/LEARN/lumen/blog/public/api/",
});

function Aboutus() {
  const [id, setId] = React.useState(45);
  const [get, setGet] = React.useState(null);
  const [set, setPost] = React.useState(null);
  const [update, setUpdate] = React.useState(null);
  const [erase, setErase] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [usuarios, setUsuarios] = React.useState([]);

  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    axios.get(`${baseUrl}user/${id}`).then((response) => {
      setGet(response.data);
    });
  }, []);
  if (!get) return null;

  function createPost() {
    axios
      .post(
        baseUrl + "users",
        {
          name: "nuevo desde REACT",
          email: "correo@dan.com",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setPost(response.data);
        console.log(set);
      })
      .catch((error) => {
        setError(error);
      });
    if (!set) return "No post created!";
    if (error) return `Error: ${error.message}`;
  }

  function updatePost(id, correo) {
    axios
      .put(
        `${baseUrl}user/${id}`,
        {
          name: "UPDATE FROM REACT",
          email: `${correo}REACT`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setUpdate(response.data);
        console.log(update);
      })
      .catch((error) => {
        setError(error);
      });
    if (!update) return "No post updated!";
    if (error) return `Error: ${error.message}`;
  }

  function deletePost(id) {
    console.log(id);
    axios
      .delete(`${baseUrl}user/${id}`)
      .then((response) => {
        setErase(response.data);
        console.log(erase);
      })
      .catch((error) => {
        setError(error);
      });
    if (!erase) return "No post deleted";
    getUsers();
    if (error) return `Error: ${error.message}`;
  }

  async function getUsers() {
    const users = await client.get(`users`);
    setUsuarios(users.data);
    console.log(users.data);
    return users.data.map((usaurio) => {
      <td key={usaurio.id}>{usaurio.id}</td>;
    });
  }

  //   const people = [
  //     {
  //       id: 1,
  //       name: "Creola Katherine Johnson",
  //       profession: "mathematician",
  //     },
  //     {
  //       id: 2,
  //       name: "Mario José Molina-Pasquel Henríquez",
  //       profession: "chemist",
  //     },
  //   ];

  const listItems = usuarios.map((person) => (
    <tr key={person.id} className="text-gray">
      <td>{person.id}</td>
      <td>{person.name}</td>
      <td>
        <input
          value={person.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border"
        />
        <button
          className="m-2"
          onClick={() => {
            updatePost(person.id, person.email);
          }}
        >
          ACTUALIZAR💫
        </button>
      </td>
      {/* <td>{person.email}</td> */}
      <td>
        <button className="m-2" onClick={() => deletePost(person.id)}>
          ELIMINAR ✖️
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="border">
        <h1 className="text-3xl font-bold underline">About us component</h1>

        <span>{get.name}</span>
        {/* <span>{get.email}</span> */}
        <br />
        {/* <span>{get.status == 1 ? "Activo" : "Inactivo"}</span> */}
        <br />
        <table className="table">
          <thead>
            <tr>
              <td>
                <button className="m-2" onClick={createPost}>
                  + REGISTRO
                </button>
              </td>
              <td>
                {/* <button className="m-2" onClick={updatePost}>
                  & ACTUALIZAR
                </button> */}
              </td>
              {/* <td>
                <button onClick={deletePost}>- ELIMINAR</button>
              </td> */}
              <td>
                <button className="m-2" onClick={getUsers}>
                  USUARIOS
                </button>
              </td>
            </tr>
          </thead>
        </table>
        <br />
        <br />
        {/* <input value={id} /> */}
        <br />

        <table className="table">
          <thead>
            <tr>
              <td>
                <b>ID</b>
              </td>
              <td>
                <b>NOMBRE</b>
              </td>
              <td>
                <b>CORREO</b>
              </td>
              <td>
                <b>ACCIÓN</b>
              </td>
            </tr>
          </thead>
          <tbody>{listItems}</tbody>
        </table>
      </div>
    </>
  );
}
export default Aboutus;
