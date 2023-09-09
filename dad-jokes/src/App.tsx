import "./App.css";
import JokeList from "./JokeList";

function App() {
  return (
    <div className="App">
      <JokeList/>
      {/* <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
          <button className="JokeList-getmore">Fetch Jokes</button>
        </div>
        <div className="JokeList-jokes">
          <div className="Joke">
            <div className="Joke-buttons">
              <i className="fas fa-arrow-up" />
              <span className="Joke-votes" style={{ borderColor: "#4CAF50" }}>
                1
              </span>
              <i className="fas fa-arrow-down" />
            </div>
            <div className="Joke-text">text</div>
            <div className="Joke-smiley">
              <i className={"em em-rolling_on_the_floor_laughing"} />
            </div>
          </div>
          <div className="Joke">
            <div className="Joke-buttons">
              <i className="fas fa-arrow-up" />
              <span className="Joke-votes" style={{ borderColor: "#f44336" }}>
                1
              </span>
              <i className="fas fa-arrow-down" />
            </div>
            <div className="Joke-text">text</div>
            <div className="Joke-smiley">
              <i className={"em em-confused"} />
            </div>
          </div>
          <div className="Joke">
            <div className="Joke-buttons">
              <i className="fas fa-arrow-up" />
              <span className="Joke-votes" style={{ borderColor: "#f44336" }}>
                1
              </span>
              <i className="fas fa-arrow-down" />
            </div>
            <div className="Joke-text">text</div>
            <div className="Joke-smiley">
              <i className={"em em-angry"} />
            </div>
          </div>

          <div className="Joke">
            <div className="Joke-buttons">
              <i className="fas fa-arrow-up" />
              <span className="Joke-votes" style={{ borderColor: "#FFEB3B" }}>
                1
              </span>
              <i className="fas fa-arrow-down" />
            </div>
            <div className="Joke-text">text</div>
            <div className="Joke-smiley">
              <i className={"em em-slightly_smiling_face"} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
