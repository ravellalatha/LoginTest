import React, { useState, useEffect } from "react";
import "./styles2.css";
import { useHistory } from 'react-router-dom';


const SeatsList = () => {

 // State with list of all checked item
 const [checked, setChecked] = useState([]);
 const [checkedList, setCheckedList] = useState([]);
 const checkList = ["1", "2", "3", "4","5", "6", "7", "8","9", "10"];
 let history = useHistory();


 useEffect(() => {
 
    var id = JSON.parse(localStorage.getItem("selectedMovieId"));
    var list = JSON.parse(localStorage.getItem("selectedList"));

    for(let i=0;i<list?.length;i++){
        if(list[i].id===id){
            console.log('ids', list[i].list);
            setCheckedList(list[i].list)
            break
        }
    }
 }, [])
 
    // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
   
  };


  const items = (() => {
    const fieldValue = localStorage.getItem('selectedList');
    return fieldValue === null
      ? []
      : JSON.parse(fieldValue);
  })();

  const saveSelectedOptions=()=>{
    var data = {
        id:JSON.parse(localStorage.getItem("selectedMovieId")),
        list:checked
    }
    items.push(data);
    localStorage.setItem("selectedList", JSON.stringify(items));
    history.push('/movies')
  }

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
  return (
    <div className="app">
        <div className="login-form">
    <div className="checkList">
        <div className="title">Seats</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index} style={{margin:'10px'}}>
                
              <input value={item} type="checkbox" onChange={handleCheck}  />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
         {`Selected Seats are: ${checkedItems}`}
       </div>

       <button className="btn btn-success" onClick={()=>{
        saveSelectedOptions()
       }} >
        Save
       </button>
    </div></div>
  )
}

export default SeatsList