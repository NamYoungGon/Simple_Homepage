import React from 'react';
import update from 'react-addons-update';
import { Grid, Segment } from 'semantic-ui-react';

const socket = window["socket"],
    roomNo = 1,
    userNo = parseInt(Math.random() * 99999, 10);

class OneToOne extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            talks : [
                {self:true, content:"안녕하세요!!"},
                {self:false, content:"반가워요!!"},
                {self:true, content:"잘지내셨어요?"},
                {self:false, content:"네. 너무요!!"}
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.addTalk = this.addTalk.bind(this);

        socket.emit("join", {
            roomNo: roomNo,
            userNo: userNo
        });

        socket.on("message", (data) => {
            this.addTalk({
                message: data.message,
                self: userNo === data.userNo ? true : false
            });
        });
    }

    handleChange(value) {
        socket.emit("message", {
            message: value,
            roomNo: roomNo,
            userNo: userNo
        });
    }

    addTalk(talk) {
        this.setState({
            talks: update(this.state.talks, {
                    $push: [{
                        self: talk.self,
                        content: talk.message
                    }]
                }
            )
        });
    }

    render() {
        return (
            <div className="oto">
                <Grid>
                    <Grid.Row className="oto__contents-box">
                        <OneToOneContents talks={this.state.talks}/>                    
                    </Grid.Row>
                    <OneToOneInput handleChange={this.handleChange}/>
                </Grid>
            </div>
        )
    }
}

class OneToOneContents extends React.Component {
    render() {
        let contents = this.props.talks.map((talk, i) => {
            return <OneToOneContent content={talk.content} self={talk.self} key={i}/>;
        });
        return (
            <Grid.Column className="oto__contents">
                { contents }
            </Grid.Column>
        )
    }
}

class OneToOneContent extends React.Component {
    render() {
        return (
            <Segment size="mini" vertical="true" textAlign={this.props.self === true ? "right" : "left"}>
                { this.props.content }
            </Segment>
        )
    }
}

class OneToOneInput extends React.Component {
    constructor(props) {
        super(props);

        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(e) {
        if (e.charCode === 13) {
            this.props.handleChange(e.target.value);
            e.target.value = "";
        }
    }

    render() {
        return (
            <Grid.Row className="oto__input-box">
                <Grid.Column>
                    <div className="ui mini fluid labeled input">
                        <div className="ui label label">Me</div>
                        <input type="text" onKeyPress={ this.sendMessage }/>
                    </div>                    
                </Grid.Column>
            </Grid.Row>
        )
    }
}

export default OneToOne;