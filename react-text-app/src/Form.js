import React from "react"
import "./App.css"

export default function Form(){
    
    const[formData, setFormData] = React.useState ({
        email: "", 
        password: "",
        passwordComfirm: "",
        joinedNewsletter: true

    })



    function handleachange(event){
        const{name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    console.log(formData)

    function handleSubmit(event){
        event.preventDefault()
        if(formData.password === formData.passwordComfirm){
            console.log("successfully signed up")
        }
        else{
            console.log("password do not match")
            return
        }

        if(formData.joinedNewsletter){
            console.log("thank you for signing up for our newsletter")
        }
    }
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className ="form">
                <input 
                    className="forminput"
                    type="email"
                    placeholder = "Email address"
                    name = "email"
                    onChange={handleachange}
                    value={formData.email}
                />

                <input
                    className="forminput"
                    type="password"
                    placeholder = "*******"
                    name = "password"
                    onChange={handleachange}
                    value={formData.password}
                />

                <input
                    className="forminput"
                    type="password"
                    placeholder = "Comfirm password"
                    name = "passwordComfirm"
                    onChange={handleachange}
                    value={formData.passwordComfirm}
                />
                
                <br />
                <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    placeholder = "Comfirm password"
                    name = "joinedNewsletter"
                    onChange={handleachange}
                    checked={formData.joinedNewsletter}
                />
                <label htmlFor="okayToEmail"> I want join newsletter</label>
                </div>
                
                <br />
                <button className="btn ">Sign Up</button>
            </form>
        </div>
    )
}