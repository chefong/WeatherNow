import React from "react";

class Form extends React.Component {
  render() {
    return(
      <form onSubmit={ this.props.weather }>
        <input type="text" name="location" placeholder="Location"/>
        <button>Go!</button>
      </form>
    );
  }
}

export default Form;