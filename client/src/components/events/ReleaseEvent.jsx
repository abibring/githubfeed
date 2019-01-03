import React from 'react';
import moment from 'moment';
import markdown from 'remove-markdown';
import { ListGroupItem } from 'react-bootstrap';

const ReleaseEvent = ({ release, leave }) => (
  <div className="outer-event">
    <span className="content-img">
      <img src={release.author.avatar_url} alt='avatar of release author' className="feed-img" />
    </span>
    <ListGroupItem className="release-event">
      <span className="content">
        <span className="content-user">@{release.author.login} pushed a new release.</span>{'    '}
        <i className="content-updated">{moment(release.published_at).startOf('hour').fromNow()}.</i>
        <br /><br/>
        <div className="repo-name">{release.html_url.split('/')[3]} <span className="divider">/</span> {release.html_url.split('/')[4]}</div><br />
        <div className="release-version">{release.tag_name}</div><br />

        {markdown(release.body).length > 500
        ?
          <div className="event-body">{markdown(release.body).slice(0, 500) + '...'}</div>
        :
          <div className="event-body">{markdown(release.body)}</div>
        } 
        <br />
        
        <div>
          <a onClick={leave} href={release.html_url} className="event-link">View on Github</a>
        </div>
      </span>
    </ListGroupItem>
  </div>
);

export default ReleaseEvent;
