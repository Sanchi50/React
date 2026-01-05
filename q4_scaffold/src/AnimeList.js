import { Component } from "react";
import AnimeCard from "./AnimeCard";

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const { anime } = this.props;

    return (
      <div className="anime-list">
        {anime.map((item, index) => (
          <AnimeCard
            key={index}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    );
  }
}

export default AnimeList;
