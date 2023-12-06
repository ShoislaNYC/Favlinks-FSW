import { useState } from "react"

const Form = (props)=>{
    const [name, setName] = useState("")
    const [URL, setURL] = useState("")

    const handleNameChange = (e) => {
        // console.log(e.target.value)
        setName(e.target.value)
    }
    const handleURLChange = (e) => {
        // console.log(e.target.value)
        setURL(e.target.value)
    }
    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            console.log(name,URL)

            props.handleNewSubmit({name, URL})
        }}>
                <label  htmlFor="linkName">Link Name:</label>
                <br />
                <input 
                    type="text" 
                    // value={data}
                    onChange={handleNameChange}
                />
                <br/>
                <label htmlFor="url">URL</label>
                <br />
                <input 
                    type="text" 
                    id="url" 
                    // value={url}
                    onChange={handleURLChange}
                    />
                <br />
                <input 
                    type="submit" 
                    value="Submit">
                </input>
            </form>
       
    )   
}

export default Form