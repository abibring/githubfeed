import React from 'react';
import moment from 'moment';
import markdown from 'remove-markdown';
import { ListGroupItem } from 'react-bootstrap';

const PullRequest = ({ pull }) => (
  <ListGroupItem key={pull.id} className="pull-event">
    <span className="content-img">
      <img src={pull.user.avatar_url} alt='avatar of pull creator' className="feed-img" />
    </span>
    <span className="content">
      <b className="content-user">@{pull.user.login}</b>
      <span className="content-break"> | </span>
      <i className="content-updated">{moment(pull.updated_at).startOf('day').fromNow()}</i>
      <span className="content-break"> | </span>
      <span className="pull-event-label">{pull.pull_request ? 'Pull Request' : 'Issue Event'}</span>
      <span className="repo-name">{pull.html_url.slice(19).split('/')[0]}</span>
      <div><b>Repo Owner: </b>{pull.html_url.slice(19).split('/')[1]}</div>
      <div><b>Title: </b>{pull.title}</div>
      <b>Ranking:</b> {pull.ranking}
      {markdown(pull.body).length > 500
      ?
      <div><b>Info: </b>{markdown(pull.body).slice(0, 500) + '...'}</div>
      :
      <div><b>Info: </b>{markdown(pull.body)}</div>
      }
      <div><b>View Pull Request: </b><a href={pull.pull_request.html_url} className="event-link">{pull.pull_request.html_url}</a></div>
    </span>
  </ListGroupItem>
);

export default PullRequest;