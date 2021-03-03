import React from 'react'
import "../styles/Tweet.scss"

function Tweet({name,tweet,setTweets,tweets}) {
    const deleteTweet = (e) => {
        setTweets(tweets.filter((state) => state.id !== tweet.id));
        
    }
    return (
        <div className="tweet-container">
            <ul className="message-list">
                <div className="message">

                    <li className="tweet-message">{tweet.message} </li>
                    <button onClick={deleteTweet}>Delete</button>
                    <button class="like">Like Me</button>
                </div>
            </ul>
        </div>
    );
};


export default Tweet;
