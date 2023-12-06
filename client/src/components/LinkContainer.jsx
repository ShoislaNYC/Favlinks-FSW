import Table from "./Table"
import Form from "./Form"
import React, { useState } from "react"

function LinkContainer(){ 
    const [favLinks, setFavlinks] = useState([])
    
    function theIndex(){
        return(index == favLinks.length-1)
    }
    const handleRemove = (index) => {
        setFavlinks(oldArr => {
            return oldArr.filter((value, i) => i !==index)
            // Returns a copy of the array with a removed slot at the index
        })
        console.log("Removed!") 
      }
    
    const handleSubmit = (favLink) => {

        setFavlinks([...favLinks,favLink])

    //    let newArray = favlinks.push(favlinks)
    //    setFavlinks(newArray)
      }
        
    return(
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the Table!</p>
            <Table data={favLinks} remove = {handleRemove}/>
            <h1>Add New</h1>
            <Form handleNewSubmit = {handleSubmit} />
        </div>
    )
}
export default LinkContainer
