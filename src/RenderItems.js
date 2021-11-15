import react, { useState, useEffect } from "react";
import classes from "./renderItems.module.css";

export default function RenderItems() {

  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((data) => data.json())
      .then((data) => setState([...data]));
  }, []);

  return (
    <div className={classes.container}>
      {state.map((item) => (
        <li className={classes.list}>
          <div className={classes.title}>
            <h1>title {item.title}</h1>
            <h1 className={classes.idStyle}>{item.id}</h1>
          </div>
          <h1>text</h1>
          <div>
            <img src={item.thumbnailUrl} alt='ok' />
          </div>
        </li>
      ))}
    </div>
  );
}
