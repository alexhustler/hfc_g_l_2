import PropTypes from "prop-types";
import React from "react";
import moment from "moment";

export default class Tweet extends React.Component {
  render() {
    const {
      handle,
      imgUrl,
    } = this.props;

    const imgsrc = imgUrl || `https://avatars.io/twitter/${handle.slice(1)}`;

    return (
      <div
        className="Avatar"
        onClick={e => e.preventDefault()}
      >
        <div className="EmbeddedTweet EmbeddedTweet--edge js-clickToOpenTarget tweet-InformationCircle-widgetParent">
          <div className="EmbeddedTweet-tweet">
            <blockquote className="Tweet h-entry js-tweetIdInfo subject expanded">
              <div className="Tweet-header">
                <a
                  className="TweetAuthor-avatar Identity-avatar u-linkBlend"
                  href="#"
                >
                  <img className="Avatar Avatar--edge" src={imgsrc} />
                </a>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

Tweet.propTypes = {
  // Name of Tweet author
  author: PropTypes.string.isRequired,
  // Date and time of tweet
  timestamp: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.instanceOf(moment)
  ]),
  // OPTIONAL author pic URL. If absent, will fetch author's real pic from twitter.com
  imgUrl: PropTypes.string,
};
