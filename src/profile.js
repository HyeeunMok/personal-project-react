import React from "react";
// import followingList from "./followingList.js";
import EventsList from "./eventsList";
import Button from "./button.js";

export default ({ login, avatar_url, handleLogOut, forkEvents, pullRequestEvents }) => (
  <div className="profile">
    <h2>Hello {login}</h2>
    <img src={avatar_url} alt={`${login}'s avatar'`} />
    <Button value="Log Out" handleClick={handleLogOut} />
    <EventsList
      forkEvents={forkEvents}
      pullRequestEvents={pullRequestEvents}
    />
  </div>
);
