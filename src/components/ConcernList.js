import React from "react";
import Concern from './Concern'


export default class ConcernList extends React.Component {
  render() {
    const { concerns } = this.props

    return (
      <div>
      { concerns.map(concern => <Concern concern={concern} />) }
      </div>
    );
  }
}



