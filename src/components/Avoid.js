import React from "react";

export default class Avoid extends React.Component {
  // state = {
  //   avoid: []
  // };

  // componentDidMount() {
  //   const { userConcerns } = this.props;
  //   const avoidArray = [...this.state.avoid];

  //   userConcerns.forEach(concern => {
  //     fetch(
  //       `https://api.nutridigm.com/api/v1/nutridigm/topitemstoavoid?subscriptionId=test&problemId=` +
  //         `${concern.problemID}`
  //     )
  //       .then(data => data.json())
  //       .then(data => avoidArray.push(data));
  //   });
  //   this.setState({
  //     avoid: avoidArray
  //   });
  // }

  render() {
    return (
      <div className="card">
        <h4>Foods to Avoid</h4>
        {/* <form>
          <select onChange={this.handleClick}>
            {concerns.map(concern => (
              <option id={concern.problemID} value={concern.problemID}>
                {concern.problem}
              </option>
            ))}
          </select>
        </form> */}

        {this.props.userConcerns.map(concern => (
          <p>{concern.avoid}</p>
        ))}
      </div>
    );
  }
}
