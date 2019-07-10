import React from "react";

export default class Avoid extends React.Component {


  

  render() {
    return (
      <div className="card" >
        <h2>Top Foods to Avoid</h2>

        {this.props.userConcerns.map(concern => (
  <React.Fragment>
    <p><strong>{concern.problem}</strong></p>
          <p>{ concern.avoid === '["We have not yet curated the Top worst items to avoid for this condition."]' ?
                "Fatty and fried foods, caffeine and sugary drinks":
                concern.avoid.replace(/"/g, "").replace(/[\[\]']+/g, "")   
          }</p>
          </React.Fragment>
        ))}
      </div>
    );
  }
}
