import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Aboutus from "./Aboutus";
import { Counter } from "./features/counter/Counter";

function Nosotros() {
  return (
    <>
      <h1 className="title1">Sobre nuestra empresa</h1>
      <h2 className="title2">Sobre nuestra empresa</h2>
    </>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // alert("You clicked me!");
    console.log("has hecho click");
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Other {count} times </button>;
}

function MyButton2({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times </button>;
}

function Welcome() {
  return <span>Bienvenido</span>;
}
function LogIn() {
  return <span>Log In</span>;
}

function Content() {
  let content = false;

  if (content == true) {
    content = <Welcome />;
  } else {
    content = <LogIn />;
  }
  return <div>{content}</div>;
}

function Products() {
  const products = [
    {
      name: "Uno",
      price: 100,
      id: 1,
      isFruit: true,
    },
    {
      id: 2,
      name: "Dos",
      price: 200,
      isFruit: false,
    },
    {
      id: 3,
      name: "TRE",
      price: 300,
      isFruit: true,
    },
  ];

  const listProducts = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "green" : "red",
      }}
    >
      {product.name}
    </li>
  ));

  return <ul>{listProducts}</ul>;
}

function App() {
  const [count, setCount] = useState(0);

  const [value, setValue] = useState("Change me");

  function handleClick2() {
    setCount(count + 1);
  }
  function handleChange(event) {
    setValue(event.currentTarget.value);
  }

  const user = {
    name: "Daniel Jaramillo",
    age: 34,
    description: "I am a software developer",
  };

  return (
    <>
      {/* <Products /> */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <MyButton2 count={count} onClick={handleClick2} />
      <MyButton2 count={count} onClick={handleClick2} /> */}
      {/* <MyButton></MyButton> */}
      {/* <Nosotros />
      <Content /> */}
      <Aboutus />
      <br />
      Salto de línea
      <br />
      <span>{user.name}</span>
      <br />
      <span>{user.age}</span>
      <br />
      <span className="description">{user.description}</span>
      <input value={value} onChange={handleChange} />
      <p>Valor: {value}</p>
      <Counter />
    </>
  );
}

export default App;
