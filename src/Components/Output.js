import React, { Component } from 'react';


class Output extends Component {

    constructor(props) {

      super(props);
      this.state = {

        value: props.value

      }

    }

  render() {

    return(

      <div className="output">

        <h5>{this.props.value}</h5>

      </div>

    );

  }

}

export default Output;