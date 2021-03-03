import React from 'react'
import Tweet from './Tweet';

function TweetList({name,tweets,setTweets}) {
    return (
        <div className="tweet-list">
            {tweets.map((tweet) => (
                <Tweet 
                    setTweets={setTweets} 
                    name={name} 
                    tweets={tweets} 
                    tweet={tweet}
                    key={tweet.id}
                />
            ))}
           
        </div>
    )
}

export default TweetList;
