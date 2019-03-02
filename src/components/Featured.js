import React from "react";
import FeaturedCard from "./FeaturedComponent/Card";
import featured from "./FeaturedComponent/featured.json";

class Featured extends React.Component {

  state = {
    featuredList: featured
  };
  render() {
    const { featuredList } = this.state;
    console.log(featured);

    return (
      <div>
        <h1 className="title">Featured</h1>
        {featuredList.map(featured => {
          return (
          <FeaturedCard
          key = { featured.id }
          featuredId = { featured.id }
          name = { featured.name }
          image = { featured.image }
          type = { featured.type }
          price = { featured.price }
          size = { featured.size }
          alc = { featured.alc }
          was = { featured.was }
          />
          );
        })}
      </div>
    )
  }
}

export default Featured;