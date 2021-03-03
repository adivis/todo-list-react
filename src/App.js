import React,{useState} from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
import "./styles/Tweet.scss";

function App() {
  const [name, setName] = useState("Aditi");
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);
  const message="This is where you write tweet";
  return (
    <div class="main">
          <h1 class="main-heading">To-Do List</h1>
          <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} />
          <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>

  );
}

export default App;
