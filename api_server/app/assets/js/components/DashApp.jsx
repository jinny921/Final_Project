import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Notification from './Notification.jsx';
import UserProfile from './UserProfile.jsx';
import Notifications from './Notifications.jsx';
import Rooms from './Rooms.jsx';

export default
class DashApp extends Component {

    constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      user: null
    }
  }

  ccomponentDidMount() {
    axios.get(`http://localhost:3000/api/users/1.json`)
      .then(res => {
        console.log(res.data.user);
        console.log(res.data.user.rooms[0].name);
        const user = res.data.user;
        this.setState({ user });
      });
  }

  render() {
    let userProfile;
    if(!this.state.user){
      const userAvatarURL = "http://www.clipartbest.com/cliparts/ncB/RK7/ncBRK7qei.png";
      const firstName ="Nawar";
      const userProfile = <UserProfile avatarURL={userAvatarURL} name={firstName}/>
      console.log("hi", userProfile);
    }
      console.log(userProfile);

    return (
      <div>
        <Navbar />
        <div className="tile is-ancestor logged">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <Notifications />
              {userProfile}
            </div>
          </div>
          <Rooms/>
        </div>
      </div>
    );
  }
}
