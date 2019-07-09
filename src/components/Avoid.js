import React from "react";

export default class Avoid extends React.Component {


  render() {
    return (
      <div className="card">
        <h4>Top Foods to Avoid</h4>

        {this.props.userConcerns.map(concern => (
          <p>{ concern.avoid === '["We have not yet curated the Top worst items to avoid for this condition."]' ?
                "Fatty and fried foods, caffeine and sugary drinks":
                concern.avoid
          }</p>
        ))}
      </div>
    );
  }
}
