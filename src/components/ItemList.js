import React from 'react'
import {Link} from "react-router-dom"
 const items=[
   {id:'1',name:'Item 1'},
   {id:'2',name: 'Item 2'},
   {id:'3',name: 'Item 3'},
 ]

const ItemList = () => {
  return (
    <div>
        <h1>Item List</h1>
     {items.map((item)=>(
        <li>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
        </li>
     ))}
    </div>
  )
}

export default ItemList
