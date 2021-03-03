import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import "../styles/Tweet.scss";

function CreateTweet({textInput,setTextInput,tweets,setTweets}) {
    const userInputHandler = (e) =>{
        // console.log(e);
        setTextInput(e.target.value);
    }
    const submitTweetHandler = (e) =>{
        e.preventDefault();
        setTweets([...tweets,{message:textInput, id:uuidv4()}]);
        setTextInput("");
    }
    return (
        <form onSubmit={submitTweetHandler}>

            <input type="text" value={textInput} onChange={userInputHandler}/>
            <button><i class="far fa-plus-square"></i></button>
        </form>
    )
}

export default CreateTweet;
