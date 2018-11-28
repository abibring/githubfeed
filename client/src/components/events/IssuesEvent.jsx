import React from 'react';
import moment from 'moment';
import { ListGroupItem } from 'react-bootstrap';

const IssuesEvent = ({ event }) => (
  <div>
    {console.log('IssuesEvent', event)}
    <ListGroupItem key={event.id} className="events">
      <img 
        src={event.actor.avatar_url} 
        alt='avatar'
        style={{ height: 60, width: 45 }}
      />
      <div style={{ fontWeight: 'bold' }}>Event Type: {event.type}</div>
      <div>Updated At: {moment(event.payload.issue.updated_at).startOf('day').fromNow()}</div>
      <div>Event Creator: {event.actor.login}</div>
      <div>Author Association: {event.payload.issue.author_association}</div>
      {event.org ? <div>Organization: {event.org && event.org.login}</div> : '' }
      <div>Repo Name: {event.repo.name}</div>
      <div>Issue Title: {event.payload.issue.title}</div>
      <div>Issue Message: {event.payload.issue.body}</div>
      <div>Issue URL: <a href={event.payload.issue.html_url}>Visit Issue on Github</a></div>
    </ListGroupItem>
  </div>
);

export default IssuesEvent;