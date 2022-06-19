import React from "react"
import "./App.css"

export default function Form(){
    
    const[formData, setFormData] = React.useState ({firstName: "", lastName: "", emailAddress: "", comment: ""})

    console.log(formData)

    function handleChange(event) {
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    
    return(
        <form>
            <input 
                className="forminput"
                type="text"
                placeholder = "First Name"
                onChange={handleChange}
                name = "firstName"
                value={formData.firstName}
            />

            <input
                className="forminput" 
                type="text"
                placeholder = "First Name"
                onChange={handleChange}
                name = "lastName"
                value={formData.lastName}
            />
            <input 
                className="forminput"
                type="text"
                placeholder = "Email Address"
                onChange={handleChange}
                name = "emailAddress"
                value={formData.emailAddress}
                
            />

            <textarea 
                className="forminput" 
                placeholder="whatever you put inside"
                onChange={handleChange}
                name="comment"
                value={formData.comment}
            
            /> 
        </form>
    )
}