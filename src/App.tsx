import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <ul
          className="nav-bar"
          style={{ display: "flex", columnGap: 20, position: "absolute" }}
        >
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dolor</li>
          <li>Sit</li>
          <li>Amet</li>
        </ul>
        <nav>
          <ul
            style={{
              display: "flex",
              rowGap: 20,
              flexDirection: "column",
              maxHeight: "100vh",
              overflowY: "scroll",
              maxWidth: "250px",
            }}
          >
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
            <li>HELLO</li>
          </ul>
        </nav>
        <div>
          <h1 style={{ marginTop: 40 }}>Main content of the page</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            deleniti aut excepturi quidem perferendis, facilis vitae laboriosam
            impedit dolorem illo explicabo provident magnam dicta cumque?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            possimus aliquid obcaecati dolore? Corrupti, facilis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            enim repudiandae, corrupti perferendis nesciunt aperiam fuga id
            labore. Quisquam voluptatem unde quidem nisi, atque doloremque ex
            qui nulla dolore molestiae.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
