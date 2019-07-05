import React from "react";
import Concern from './Concern'


export default class ConcernList extends React.Component {
  render() {
    const { concern } = this.props

    return (
      <div>
          <h1>{concern.problem}</h1>          
      </div>
    );
  }
}



