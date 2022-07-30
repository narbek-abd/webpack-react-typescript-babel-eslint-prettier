import "./css.module.css";

const b = () => {
  /*eslint prefer-const: 0*/

  let q = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  alert(q);

  const str = "Hello!";
  for (const s of str) {
    console.log(s);
  }
};

const a = () => {
  setTimeout(() => {
    b();
  });
};

a();
