import React from "react";

export default class Consume extends React.Component {
  // state = {
  //   consume: []
  // };

  // componentDidMount() {
  //   const { userConcerns } = this.props;
  //   console.log(userConcerns);
  //   const concernsArray = [...this.state.consume];

  //   userConcerns.forEach(concern => {
  //     <div>
  //       <p>{concern.consume[0]}</p>;
  //     </div>;
  //   });
  //   this.setState({
  //     consume: concernsArray
  //   });
  // }

  render() {
    return (
      <div className="card">
        <h4>Foods to Consume</h4>

        {/* <form> */}
        {/* <div> */}
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
          <p>{concern.consume}</p>
        ))}
      </div>
    );
  }
}
