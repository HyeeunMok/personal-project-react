import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./login.js";
import Profile from "./profile.js";
import { 
  handleChangeUsername, 
  handleChangeFirstName, 
  login, 
  handleLogout, 
  fetchFollowers,
  fetchEvents
} from "./actions";

class App extends Component {
  componentDidUpdate(prevProps) {
    const {loggedIn, profile, username} = this.props;

    if (prevProps.loggedIn !== loggedIn) {
      if (loggedIn) {
        this.props.fetchFollowers(profile.followers_url)
        this.props.fetchEvents(username);
      }
    }
  }

  render() {
    const {
      loggedIn,
      profile, 
      followers, 
      handleLogout, 
      handleChangeUsername, 
      handleChangeFirstName, 
      username, 
      firstName,
      events,
      forkEvents,
      pullRequestEvents
    } = this.props;

    return (
      <div className="App">
        <h1>Github Developer</h1>
        {loggedIn ? (
          <Profile
            {...profile}
            followers={followers}
            handleLogOut={handleLogout}
            events={events}
            forkEvents={forkEvents}
            pullRequestEvents={pullRequestEvents}
          />
        ) : (
          <Login
            handleChangeUsername={handleChangeUsername}
            handleChangeFirstName={handleChangeFirstName}
            handleLogin={() => this.props.login(username)}
            username={username}
            firstName={firstName}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  handleChangeUsername,
  handleChangeFirstName,
  login,
  handleLogout,
  fetchFollowers,
  fetchEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
