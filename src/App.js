import "./App.css";
import NavBare from "./Components/NavBare";
import "bootstrap/dist/css/bootstrap.min.css";
import Movielist from "./Components/Movielist";
import { useState } from "react";
import Add from "./Components/Add";
import { DataMov } from "./Components/ListMovieData";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Description from "./Components/Description";
import Lili from "./Lili";




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
         <Router>
 
     
      <NavBare
        text={textm}
        handelChange={handelChange}
        ratingChanged={ratingChanged}
        rat={star}
      />
            <Add add={handelAdd} ml={movie} />

  <Switch> 
      
 <Route exact path="/"  render={()=> <Movielist movie={movie}
        mov={movie.filter(
          (el) =>
            el.name.toUpperCase().includes(textm.toUpperCase()) &&
            el.rating >= star
        )}
      />}   /> 

     
   
 <Route path="/description/:id" exact render={(props)=><Lili {...props} list={movie}/>} />

   
          
   </Switch>
   
   </Router> 
   </div>
   
  );
}

export default App;
