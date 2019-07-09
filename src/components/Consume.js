import React from "react";

export default class Consume extends React.Component {


  render() {
    return (
      <div className="card">
        <h4>Top Foods to Consume</h4>

        {this.props.userConcerns.map(concern => (
          <p>{ concern.consume === '["We have not yet curated the Top best items to consume/do for this condition."]' ?
            "Leafy greens, whole grains, beans and legumes" :
            concern.consume
          }</p>
        ))}
      </div>
    );
  }
}
