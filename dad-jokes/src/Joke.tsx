import React, { Component } from "react";
import "./Joke.css";
type JokeItemProps = {
  item: any;
  upvote: () => void;
  downvote: () => void;
};
const Joke: React.FC<JokeItemProps> = ({ item, upvote, downvote }) => {
  const getColor = () => {
    if (item.votes >= 15) {
      return "#4CAF50";
    } else if (item.votes >= 12) {
      return "#8BC34A";
    } else if (item.votes >= 9) {
      return "#CDDC39";
    } else if (item.votes >= 6) {
      return "#FFEB3B";
    } else if (item.votes >= 3) {
      return "#FFC107";
    } else if (item.votes >= 0) {
      return "#FF9800";
    } else {
      return "#f44336";
    }
  };
  const getEmoji = () => {
    if (item.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (item.votes >= 12) {
      return "em em-laughing";
    } else if (item.vote >= 9) {
      return "em em-smiley";
    } else if (item.vote >= 6) {
      return "em em-slightly_smiling_face";
    } else if (item.vote >= 3) {
      return "em em-neutral_face";
    } else if (item.vote >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  };

  return (
    <div className="Joke">
      <div className="Joke-buttons">
        <i className="fas fa-arrow-up" onClick={upvote} />
        <span className="Joke-votes" style={{ borderColor: getColor() }}>
          {item.votes}
        </span>
        <i className="fas fa-arrow-down" onClick={downvote} />
      </div>
      <div className="Joke-text">{item.text}</div>
      <div className="Joke-smiley">
        <i className={getEmoji()} />
      </div>
    </div>
  );
};
export default Joke;
