// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  let list1 = [
    "milk",
    "coffee",
    "orange",
    "breads",
    "banana",
    "mango",
    "butter",
  ];

  var [myarray, setmyarray] = new useState([]);
  var [myarray1, setmyarray1] = new useState([]);

  const onClick = () => {
    var item = list1[Math.floor(Math.random() * list1.length)];
    myarray.push(item);
    setmyarray((myarray) => [...myarray]);
    setmyarray1(myarray);
    // console.log(myarray);
  };

  const filter = (e) => {
    const keyword = e.target.value;

    myarray = myarray1.filter((item) => {
      return item.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    setmyarray(myarray);
  };

  return (
    <>
      <div className="container">
        <form className="d-flex col-md-5 mx-5 my-3" role="search">
          <input
            className="form-control me-2"
            onChange={filter}
            type="search"
            placeholder="Search"
            aria-label="Filter"
          />

          <div className="container">
            <button type="button" onClick={onClick} className="btn btn-primary">
              +
            </button>
          </div>
        </form>

        <div className="a mx-5">
          {myarray.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
