import React from "react";

export default class Consume extends React.Component {
  state = {
    consume: []
  };

  componentDidMount() {
    const { userConcerns } = this.props;

    userConcerns.forEach(concern => {
      fetch(
        `https://api.nutridigm.com/api/v1/nutridigm/topitemstoavoid?subscriptionId=test&problemId=` +
          `${concern.problemID}`
      )
        .then(data => data.json())
        .then(data =>
          this.setState({
            avoid: [...this.state.consume, data]
          })
        );
    });
  }

  render() {
    return (
      <div>
        {/* <form>
          <select onChange={this.handleClick}>
            {concerns.map(concern => (
              <option id={concern.problemID} value={concern.problemID}>
                {concern.problem}
              </option>
            ))}
          </select>
        </form> */}
        <p>{this.state.consume}</p>
      </div>
    );
  }
}
