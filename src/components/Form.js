import React from "react";

const Form = props => {
  return(
    <form onSubmit={ props.weather }>
      <input type="text" name="location" placeholder="City, State, Country..."/>
      <button>Go!</button>
    </form>
  );
}

export default Form;