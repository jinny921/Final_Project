import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Pinboard from './Pinboard.jsx'
import axios from 'axios';
import ActionCable from 'actioncable';

export default
class PinboardApp extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      roomAxiosData: "",
    };
  }

  reviveRoomData = () => {
    var location = window.location['pathname'].split('/')[2];
    axios.get(`/rooms/${location}.json`).then((res) => {
      this.setState({
        roomAxiosData: res.data.room,
      });
    });
  }

  componentDidMount() {
    this.reviveRoomData();
    this.setSubscription();
  }

  componentWillUnmount() {
    if(!this.cable) { return; }
    this.cable.disconnect();
  }

  setSubscription() {
    this.cable = ActionCable.createConsumer();
    this.cable.subscriptions.create("PostChannel", {
      connected: () => {},
      disconnected: (e) => {},
      received: () => {
        this.reviveRoomData();
      }
    });
  }


  render() {
    return (
      <div>
        <Navbar currentUser={this.props.user} />
        <Pinboard
          user={this.props.user}
          room={this.state.roomAxiosData}
          posts={this.state.roomAxiosData.posts}
          refreshRoom={this.reviveRoomData}
        />
      </div>
    );
  }
}
