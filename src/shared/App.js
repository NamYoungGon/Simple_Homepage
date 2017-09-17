import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Introduction, Gallery, FreeBoard, TalkRoom, Posts } from 'pages/index.async.js';
import Top from 'components/Top';
import Nav from 'components/Nav';
import OneToOne from 'popup/OneToOne';

class App extends Component {
    render() {
        return (
            <div className="ui container">
                <Top/>
                <Nav/>
                <div className="ui grid">
                <Route exact path="/" component={Introduction}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/freeboard" component={FreeBoard}/>
                <Route path="/talkroom" component={TalkRoom}/>
                <Route path="/posts" component={Posts}/>
                </div>
                <OneToOne/>
            </div>
        );
    }
}

export default App;