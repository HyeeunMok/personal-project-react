import React from "react";

const EventPanel = ({ index, url, title, subtitle }) => {
  return (
    <li key={`event-${index}`} style={{borderWidth: 1, borderColor: 'grey', borderStyle: 'dotted', backgroundColor: '#C1A01E'}}>
        <div style={{marginLeft: 20, backgroundColor: '#C1A01E'}}>
          <a style={{color: '#1A1A1A'}} href={url} target="_blank">
            <p style={{fontSize: 20, backgroundColor: '#C1A01E'}}>{title}</p>
          </a>
          <p style={{fontSize: 16, fontStyle: 'italic', marginTop: -6, backgroundColor: '#C1A01E'}}>{subtitle}</p>
        </div>
    </li>
  );
}

export default ({ events, forkEvents, pullRequestEvents }) => {
  return (
    <React.Fragment>
      <h2>My Recent Forks</h2>
      <ul>
        {(forkEvents.length > 0 && forkEvents.map((event, i) => (
          <EventPanel
            index={i}
            url={event.payload.forkee.html_url}
            title={event.payload.forkee.full_name}
            subtitle={`Forked from: ${event.repo.name}`}
          />
        ))) || (<p style={{ color: 'red', fontStyle: 'italic', backgroundColor: '#C1A01E' }}>Sorry, no forks found.</p>)}
      </ul>

      <h2>My Recent Pull Requests</h2>
      <ul>
        {(pullRequestEvents.length > 0 && pullRequestEvents.map((event, i) => (
          <EventPanel
            index={i}
            url={event.payload.pull_request.html_url}
            title={event.payload.pull_request.title}
            subtitle={`Status: ${event.payload.pull_request.state}`}
          />
        ))) || (<p style={{ color: 'red', fontStyle: 'italic', backgroundColor: '#C1A01E' }}>Sorry, no pull requests found.</p>)}
      </ul>
    </React.Fragment>
  )
};
