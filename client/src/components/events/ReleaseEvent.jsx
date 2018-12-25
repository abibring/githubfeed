import React from 'react';
import moment from 'moment';
import markdown from 'remove-markdown';
import { ListGroupItem } from 'react-bootstrap';

const ReleaseEvent = ({ release }) => (
  <ListGroupItem className="release-event">
    <span className="content-img">
      <img src={release.author.avatar_url} alt='avatar of release author' className="feed-img" />
    </span>
    <span className="content">
      <span className="content-user">@{release.author.login} pushed a new release.</span>{'    '}
      <i className="content-updated">{moment(release.published_at).startOf('hour').fromNow()}.</i><br />
      <div className="repo-name">{release.html_url.split('/')[3]} / {release.html_url.split('/')[4]}</div><br />
      <div className="release-version">{release.tag_name}</div><br />
      {/* <div><b>Ranking:</b> {release.ranking}</div> */}
      {markdown(release.body).length > 500
      ?
        <div>{markdown(release.body).slice(0, 500) + '...'}</div>
      :
        <div>{markdown(release.body)}</div>
      } <br />
      <div>
        <a href={release.html_url} className="event-link">View on Github</a>
      </div>
    </span>
  </ListGroupItem>
);

export default ReleaseEvent;