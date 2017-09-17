import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
        <div className="ui grid">
            <div className="one column row">
                <div className="column">
                    <div className="ui pointing secondary menu huge">
                        <NavLink className="item" exact to="/">Introduction</NavLink>
                        <NavLink className="item" exact to="/gallery">Gallay</NavLink>
                        <NavLink className="item" exact to="/freeboard">FreeBoard</NavLink>
                        <NavLink className="item" exact to="/talkroom">TalkRoom</NavLink>
                        <NavLink className="item" to="/posts">Posts</NavLink>
                        <div className="right menu">
                            <div role="listbox" aria-expanded="false" className="ui item dropdown">
                                <div className="text" role="alert" aria-live="polite">Language</div>
                                <i aria-hidden="true" className="dropdown icon"></i>
                                <div className="menu transition">
                                    <div className="item">English</div>
                                    <div className="item">Russian</div>
                                    <div className="item">Spanish</div>
                                </div>
                            </div>
                            <div className="item">
                                <button className="ui primary button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);

export default Nav;