import React from 'react'
import {Link} from "react-router-dom"
 const items=[
   {id:'1',name:'Item1'},
   {id:'2',name: 'Item2'},
   {id:'3',name: 'Item3'},
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
