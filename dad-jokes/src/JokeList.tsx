import React, { useState, useEffect } from "react";
import Joke from "./Joke";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./JokeList.css";
const data = [
  {
    id: 1,
    text: "Why don't eggs tell jokes? Because they might crack up!",
    votes: 0,
  },
  {
    id: 2,
    text: "I'm reading a book about anti-gravity. It's impossible to put down!",
    votes: 0,
  },
  {
    id: 3,
    text: "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
    votes: 0,
  },
  {
    id: 4,
    text: "What do you call a fake noodle? An impasta!",
    votes: 0,
  },
  {
    id: 5,
    text: "Why don't skeletons fight each other? They don't have the guts!",
    votes: 0,
  },
  {
    id: 7,
    text: "How does a penguin build its house? Igloos it together!",
    votes: 0,
  },
  {
    id: 6,
    text: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    votes: 0,
  },
  {
    id: 8,
    text: "I used to be a baker, but I couldn't make enough dough.",
    votes: 0,
  },
  {
    id: 9,
    text: "What do you call a bear with no teeth? A gummy bear!",
    votes: 0,
  },
  {
    id: 10,
    text: 'How do you organize a space party? You "planet"!',
    votes: 0,
  },
];
export type DataType = (typeof data)[0];

function JokeList() {
  const [jokes, setJokes] = useState(
    // JSON.parse(window.localStorage.getItem("jokes") || "[]")
    [...data]
  );
  //   const [loading, setLoading] = useState(false);
  //   const seenJokes = new Set(jokes.map((j) => j.text));
  //   const numJokesToGet = 10;
  //   useEffect(() => {
  //     if (jokes.length === 0) getJokes();
  //   }, [jokes]);

  //   async function getJokes() {
  //     try {
  //       const fetchedJokes: any = [];
  //       while (fetchedJokes.length < numJokesToGet) {
  //         const res = await axios.get("https://icanhazdadjoke.com/", {
  //           headers: { Accept: "application/json" },
  //         });
  //         const newJoke = res.data.joke;
  //         if (!seenJokes.has(newJoke)) {
  //           fetchedJokes.push({ id: uuidv4(), text: newJoke, votes: 0 });
  //         } else {
  //           console.log("FOUND A DUPLICATE!");
  //           console.log(newJoke);
  //         }
  //       }
  //       setJokes((prevJokes: any) => [...prevJokes, ...fetchedJokes]);
  //       window.localStorage.setItem(
  //         "jokes",
  //         JSON.stringify([...jokes, ...fetchedJokes])
  //       );
  //       setLoading(false);
  //     } catch (e) {
  //       alert(e);
  //       setLoading(false);
  //     }
  //   }

  const handleVote = (id: any, delta: any) => {
    setJokes((prevJokes: any) =>
      prevJokes.map((j: any) =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      )
    );
    window.localStorage.setItem("jokes", JSON.stringify(jokes));
  };

  function handleClick() {
    // setLoading(true);
    // getJokes();
  }

  //   if (loading) {
  //     return (
  //       <div className="JokeList-spinner">
  //         <i className="far fa-8x fa-laugh fa-spin" />
  //         <h1 className="JokeList-title">Loading...</h1>
  //       </div>
  //     );
  //   }

  const sortedJokes = jokes.sort((a: any, b: any) => b.votes - a.votes);

  return (
    <div className="JokeList">
      <div className="JokeList-sidebar">
        <h1 className="JokeList-title">
          <span>Dad</span> Jokes
        </h1>
        <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
        <button className="JokeList-getmore" onClick={handleClick}>
          Fetch Jokes
        </button>
      </div>

      <div className="JokeList-jokes">
        {sortedJokes.map((j) => (
          <Joke
            item={j}
            upvote={() => handleVote(j.id, 1)}
            downvote={() => handleVote(j.id, -1)}
          />
        ))}
      </div>
    </div>
  );
}

export default JokeList;
