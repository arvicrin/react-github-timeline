import React from "react"

const Form = props => (
    <form onSubmit={props.getRepo}>
        <input className="Input_style" type="text" name="username" placeholder="Username..."></input>
        <button className="Button_style">Get repositories</button>
    </form>

)

export default Form;