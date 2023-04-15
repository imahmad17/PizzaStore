import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Pizza, setPizza] = useState([]);
  const fetchUserData = () => {
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let arr = [];
        data.forEach((element) => {
          const { name, description, img_url, price } = element;
          const obj = {
            title: name,
            content: description,
            Image: img_url,
            Price: price,
          };
          arr.push(obj);
        });
        console.log(arr);
        setPizza(() => {
          return [...arr];
        });
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  function addNote(newNote) {
    setPizza((prevPizza) => {
      return [...prevPizza, newNote];
    });
  }

  function deleteNote(id) {
    setPizza((prevPizza) => {
      return prevPizza.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {Pizza.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            url={noteItem.Image}
            Price={noteItem.Price}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
