import React from "react";

export default class Avoid extends React.Component {
  render() {
    const avoid_array = [
      "Foods high in sugar (e.g sweets, chocolate, cakes etc), Carbonated drinks, Smoking",
      "Exercising less than 30 minutes per day, Meats high in fat and cholestrol, dairy products",
      "Lack of physical activity, High stress levels, Highly caffienated drinks, Alcohol",
      "Processed meats, A diet high in carbohydrates, Fried food",
      "Being over-worked or over-exerted, Lack of sleep, Low energy levels, Avoid alcoholic drinks high in sugar",
      "Greasy food such as Bacon, sausages and eggs, sugary desserts such as Ice Cream"
    ];

    return (
      <div className="card">
        <h2>Top Foods to Avoid</h2>

        {this.props.userConcerns.map(concern => (
          <React.Fragment>
            <p>
              <strong>{concern.problem}</strong>
            </p>
            <p>
              {concern.avoid ===
              '["We have not yet curated the Top worst items to avoid for this condition."]'
                ? avoid_array[Math.floor(Math.random() * avoid_array.length)]
                : concern.avoid.replace(/"/g, "").replace(/[\[\]']+/g, "")}
            </p>
          </React.Fragment>
        ))}
      </div>
    );
  }
}
