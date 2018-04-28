import React, { Component } from 'react';
import logo from './logo.svg';
import ArticleWrapper from './components/FormField';
import ArticleCard from "./components/ArticleCard";
import Wrapper from "./components/Wrapper";
import Jumbo from './components/Jumbo';
import FormFields from './components/FormFields';
import friends from "./friends.json";
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Jumbo />
        <FormFields />
        <ArticleWrapper>
          {this.state.friends.map(friend => (
            <ArticleCard
              clickFriend={this.clickFriend}
              id={friend.id}
              key={friend.id}
              title={friend.title}
              date={friend.date}
              link={friend.link}
            />
          ))}
        </ArticleWrapper>
      </Wrapper>
    );
  }
}

export default App;
