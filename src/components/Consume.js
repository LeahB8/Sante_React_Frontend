import React from "react";

export default class Consume extends React.Component {
  state = {
    consume: []
  };

  handleClick = event => {
    event.persist();
    // fetch(
    //   `https://api.nutridigm.com/api/v1/nutridigm/topitemstoconsume?subscriptionId=test&problemId=3`
    // )
    //   .then(data => data.json())
    //   .then(data =>
    //     this.setState({
    //       consume: data
    //     })
    //   );
    console.log(event);
  };

  render(event) {
    const { concerns } = this.props;
    return (
      <div>
        <form>
          <select onChange={this.handleClick}>
            {concerns.map(concern => (
              <option>{concern.problem}</option>
            ))}
          </select>
        </form>
        <p>{this.state.consume}</p>
      </div>
    );
  }
}
