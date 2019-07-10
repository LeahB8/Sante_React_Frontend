import React from "react";

export default class Consume extends React.Component {
  render() {
    const consume_array = [
      "Leafy green vegetables, whole grains, beans and legumes",
      "Three litres of water throughout the day, Manuka honey or Agave syrup as an alternative to  sugar",
      "Natural stevia sweetener, and healthy fats such as avaocado or extra-virgin oils",
      "Quinoa, omega threes such as salmon or cod liver oil, meats in high protein, or vegetarian alternatives",
      "Fresh fruits high in fibre or antioxidants and seeds such as chia, flax",
      "Caffeine alternatives like herbal teas including peppermint, camomile, roibos, sage",
      "Products high in calcium, such as yogurt as well as grain alternatives like almond flour or channa flour"
    ];

    // let show = consume_array[Math.floor(Math.random() * consume_array.length)];

    return (
      <div className="card">
        <h2>Top Foods to Consume</h2>

        {this.props.userConcerns.map(concern => (
          <React.Fragment>
            <p>
              <strong>{concern.problem}</strong>
            </p>
            <p>
              {concern.consume ===
              '["We have not yet curated the Top best items to consume/do for this condition."]'
                ? consume_array[
                    Math.floor(Math.random() * consume_array.length)
                  ]
                : concern.consume.replace(/"/g, "").replace(/[\[\]']+/g, "")}
            </p>
          </React.Fragment>
        ))}
      </div>
    );
  }
}
