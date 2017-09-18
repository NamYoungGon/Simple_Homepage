import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Introduction, Gallery, FreeBoard, TalkRoom, Posts } from 'pages/index.async.js';
import Top from 'components/Top';
import Nav from 'components/Nav';
import OneToOne from 'popup/OneToOne';
import Login from 'popup/Login';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loginPopup: false
        };

        this.openLoginPopup = this.openLoginPopup.bind(this);
    }

    openLoginPopup() {
        this.setState({
            loginPopup: true
        });
    }

    render() {
        return (
                <div className="ui container">
                    <div className={this.state.loginPopup === true ? "opacity prevent" : ""}>
                        <Top/>
                        <Nav clickLogin={this.openLoginPopup}/>
                        <div className="ui grid">
                            <Route exact path="/" component={Introduction}/>
                            <Route path="/gallery" component={Gallery}/>
                            <Route path="/freeboard" component={FreeBoard}/>
                            <Route path="/talkroom" component={TalkRoom}/>
                            <Route path="/posts" component={Posts}/>
                        </div>
                    </div>
                    <div className="popup">
                        <Login/>
                    </div>
                </div>
            );
        }
    }
    /* <OneToOne/> */

export default App;