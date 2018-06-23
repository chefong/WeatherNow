import React from "react";

const Form = props => {
  return (
    <form onSubmit={ props.weather }>
      <div className="input-group mb-3">
        <input type="text" className="form-control" name="location" placeholder="City, State, Country..." size="10"/>
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
}

export default Form;