import React, { useState } from "react";
import "./styles2.css";
import { useHistory } from 'react-router-dom';

const Movies = () => {

    const [isList, setIsList] = useState(false);

    // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = ["1", "2", "3", "4","5", "6", "7", "8","9", "10"];

  let history = useHistory();

  

    const newMovies=[
        {
            id: '1',
            name: 'Iron Man',

        },
        {
            id: '2',
            name: 'Iron Man 2',

        },
        {
            id: '3',
            name: 'Iron Man 3',

        },
        {
            id: '4',
            name: 'Iron Man 4',

        },
        {
            id: '5',
            name: 'Iron Man 5',

        },
    ]

    const getSelectedList=(data)=>{
        localStorage.setItem("selectedMovieId", JSON.stringify(data.id));
        history.push("/seats")
    }
  return (
    <div className="app">
    <div className="login-form">
        <div className="title">Hi {JSON.parse(localStorage.getItem("UserData"))?.username}</div>
       
        <ul>
      {newMovies.map((data) => (
        <li key={data.id}> 
          <p onClick={() => getSelectedList(data)}>{data.name}</p>
         
        </li>
      ))}
    </ul>

    <button className="btn btn-success" onClick={()=>{
        history.push('/')
       }} >
        Log Out
       </button>
    </div>
    </div>
  )
}

export default Movies