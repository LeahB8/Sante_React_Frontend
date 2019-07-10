import React from "react";

export default class Consume extends React.Component {


  render() {
    return (
      <div className="card">
        <h2>Top Foods to Consume</h2>

        {this.props.userConcerns.map(concern => (
          <React.Fragment>
          <p><strong>{concern.problem}</strong></p>
          <p>{ concern.consume === '["We have not yet curated the Top best items to consume/do for this condition."]' ?
            "Leafy greens, whole grains, beans and legumes" :
            concern.consume.replace(/"/g, "").replace(/[\[\]']+/g, "")          
          }</p>
                </React.Fragment>
        ))}
  
      </div>
    );
  }
}