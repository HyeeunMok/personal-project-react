import React, { Component } from "react";
import Login from "./login.js";
import Profile from "./profile.js";

class App extends Component {
  state = {
    loggedIn: false,
    username: "",
    profile: {},
    events: []
  }

  componentDidUpdate(prevProps) {
    const {loggedIn, username} = this.state;

    if (prevProps.loggedIn !== loggedIn) {
      if (loggedIn) {
        this.fetchEvents(username);
      }
    }
  }

  // Handle change username
  handleChangeUsername = e => this.setState({ username: e.target.value });

  // Loggin
  login = username => fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(profile => this.setState({ loggedIn: true, profile }));

  // Logout
  logout = () => this.setState({ loggedIn: false, profile: {} })

  // Fetch events from the Github API
  fetchEvents = username => fetch(`https://api.github.com/users/${username}/events`)
    .then(res => res.json())
    .then(events => this.setState({ events }));

  render() {
    const {
      loggedIn,
      profile,
      username, 
      events
    } = this.state;

    console.log('State Events = ', this.state.events);

    // Filtering events here.
    const forkEvents = events.filter(e => e.type === 'ForkEvent');
    const pullRequestEvents = events.filter(e => e.type === 'PullRequestEvent');

    return (
      <div className="App">
        <h1>Github Developer</h1>
        {loggedIn ? (
          <Profile
            {...profile}
            handleLogOut={this.logout}
            forkEvents={forkEvents}
            pullRequestEvents={pullRequestEvents}
          />
        ) : (
          <Login
            handleChangeUsername={this.handleChangeUsername}
            handleLogin={() => this.login(username)}
            username={username}
          />
        )}
      </div>
    );
  }
}

export default App;