import React from "react";
import './listOfTodos.css'
 function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text"
                      id={item.key}
                      value={item.text}
                       onChange={(e) => props.updateItem(e.target.value, item.key)}
                />
            </p>
            <span><p onClick={() => props.deleteItem(item.key)}>delete</p></span>
        </div>
    })
    return(
        <div>{listItems}</div>
    )


 }

 export default ListItems;