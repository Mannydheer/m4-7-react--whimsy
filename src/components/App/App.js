import React from 'react';
import styled from 'styled-components';
import 'focus-visible';

import avatar from '../../assets/carmen-sandiego.png';

import Tweet from '../Tweet';

//reducer:

const initialState = {
  numOfLikes: 100,
  numOfRetweets: 100,
  isLiked: false,
  isRetweeted: false,
}

const reducer = (state, action) => {

  switch (action.type) {

    case 'update-tweet-info':
      if (state.isLiked === false) {
        state.numOfLikes += 1;
      }
      else {
        state.numOfLikes -= 1;
      }
      return {
        ...state,
        isLiked: !(state.isLiked),
      }

    case 'is-retweeted-current-user':
      if (state.isRetweeted === false) {
        state.numOfRetweets += 1;
      }
      else {
        state.numOfRetweets -= 1;
      }
      return {
        ...state,
        isRetweeted: !(state.isRetweeted)
      }


    default: throw new Error
  }


}


const App = () => {


  const [tweetState, dispatch] = React.useReducer(reducer, initialState)

  console.log(tweetState)




  //function that will update tweet. 
  const handleToggleLike = () => {
    dispatch({
      type: "update-tweet-info",
    })
  }

  const handleToggleRetweet = () => {
    dispatch({
      type: 'is-retweeted-current-user',
    })
  }
  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={new Date()}
        handleToggleLike={handleToggleLike}
        handleToggleRetweet={handleToggleRetweet}
        isLikedByCurrentUser={tweetState.isLiked}
        isRetweetedByCurrentUser={tweetState.isRetweeted}
        numOfLikes={tweetState.numOfLikes}
        numOfRetweets={tweetState.numOfRetweets}

      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;
