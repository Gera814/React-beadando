import React from "react";
import './listOfTodos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

 function ListItems(props) {
    const items = props.items;

    const listItems = items.map(item => {

        return <div className="list" key={item.key}>
            <div className="firstTag">
                <label htmlFor={item.key}>
                    <input id={item.key} type="checkbox"/>
                    <i></i>
                    <p>
                        <input type="text"
                               id={item.key}
                               value={item.text}
                               onChange={(e ) => props.updateItem(e.target.value, item.key)}
                        />
                    </p>
                </label>



            </div>

            <span><p onClick={() => props.deleteItem(item.key)}><FontAwesomeIcon icon={faTrash}/></p></span>
        </div>
    })
    return(
        <div>{listItems}</div>
    )


 }

 export default ListItems;