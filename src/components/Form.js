import React from "react"

const Form = props => (
    <form onSubmit={props.getRepo}>
        <input type="text" name="username" placeholder="Username..."></input>
        <button>Get repositories</button>
        <h1>{props.error}</h1>
    </form>

)

export default Form;