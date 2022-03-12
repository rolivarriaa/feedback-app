import React from "react";

function App() {
  const title = "Titulo de la página";
  const cars = ["honda", "bmw", "chevrolet", "vw"];

  const loading = false;
  const showComments = true;

  const comments = [
    {
      id: 1,
      text: "comentario #1",
    },
    {
      id: 2,
      text: "comentario #2",
    },
    {
      id: 3,
      text: "comentario #3",
    },
  ];

  return (
    <>
      <div>
        <h1 className="title">{title.toUpperCase()}</h1>
        <h3>Total de comentarios ({comments.length})</h3>
        {showComments && (
          <ul>
            {comments.map((comment, index) => (
              <li key={index}> {comment.text} </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );

  //   return React.createElement(
  //     "div",
  //     { className: "container" },
  //     React.createElement("h1", {}, "my App")
  //   );
}
export default App;
