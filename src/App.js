import "./App.css";
import NavBare from "./Components/NavBare";
import "bootstrap/dist/css/bootstrap.min.css";
import Movielist from "./Components/Movielist";
import { useState } from "react";
import Add from "./Components/Add";
import { DataMov } from "./Components/ListMovieData";

function App() {
  const [movie, setMovie] = useState(DataMov);

  const [textm, setTextm] = useState("");
  const [star, setStar] = useState(1);
  const handelChange = (e) => {
    setTextm(e.target.value);
  };

  const handelAdd = (x, y, z, t) => {
    let newAction = {
      imgs: x,
      name: y,
      id: Math.random(),
      rating: z,
      years: t,
    };
    setMovie([...movie, newAction]);
  };
  const ratingChanged = (note) => {
    setStar(note);
  };
  return (
    <div className="App">
      <NavBare
        text={textm}
        handelChange={handelChange}
        ratingChanged={ratingChanged}
        rat={star}
      />

      <Add add={handelAdd} ml={movie} />

      <Movielist
        mov={movie.filter(
          (el) =>
            el.name.toUpperCase().includes(textm.toUpperCase()) &&
            el.rating >= star
        )}
      />
    </div>
  );
}

export default App;
