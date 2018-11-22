import PropTypes from "prop-types";
import React from "react";
import moment from "moment";

/* <Tweet
  handle="@FoxNews"
  author="Fox News"
  text="hola hola hola"
  // imgUrl="https://pbs.twimg.com/profile_images/432081479/DOI_LOGO_bigger.jpg"
  // likes={234}
  // rts={321}
  timestamp={moment().subtract(100, "days")}
/>; */

export default class Tweet extends React.Component {
  render() {
    const {
      author,
      handle,
      imgUrl,
      text,
      timestamp,
      likes,
      rts,
      isGlobal,
      cueSignal
    } = this.props;

    const imgsrc = imgUrl || `https://avatars.io/twitter/${handle.slice(1)}`;
    const isDebug = Meteor.isDevelopment;

    return (
      <div
        className="Tweeeeet SandboxRoot env-bp-350"
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

                <div className="TweetAuthor js-inViewportScribingTarget">
                  <a className="TweetAuthor-link Identity u-linkBlend" href="#">
                    <div className="TweetAuthor-nameScreenNameContainer">
                      <span className="TweetAuthor-decoratedName">
                        <span className="TweetAuthor-name Identity-name customisable-highlight">
                          {author}
                        </span>

                        <span className="TweetAuthor-verifiedBadge">
                          <div
                            className="Icon Icon--verified "
                            title="Verified Account"
                            role="img"
                          />
                          <b className="u-hiddenVisually">✔</b>
                        </span>
                      </span>
                      <span className="TweetAuthor-screenName Identity-screenName">
                        {handle}
                      </span>
                    </div>
                  </a>
                </div>

                <div className="Tweet-brand">
                  <a href="#">
                    <span className="FollowButton-bird">
                      <div className="Icon Icon--twitter " />
                    </span>
                  </a>
                </div>
              </div>
              <div className="Tweet-body e-entry-content">
                <div className="u-hiddenVisually js-inViewportScribingTarget" />
                <p className="Tweet-text e-entry-title" lang="en" dir="ltr">
                  {text}
                </p>

                <div className="Tweet-metadata dateline">
                  <a
                    className="u-linkBlend u-url customisable-highlight long-permalink"
                    href="#"
                  >
                    <time
                      className="dt-updated"
                      dateTime={timestamp.toString()}
                    >
                      {moment(timestamp).format("hh:mm A - MMM DD, YYYY")}
                    </time>
                  </a>
                </div>

                <ul className="Tweet-actions Tweet-action--newsActions">
                  <li className="Tweet-action Tweet-action--newsAction">
                    <a
                      className="Tweet-action--heart TweetAction TweetAction--heartEdge"
                      href="#"
                    >
                      <div className="Icon Icon--heartEdge TweetAction-icon" />
                      <span className="TweetAction-stat">
                        {(
                          likes || Math.round(Math.random() * 8000) + 30000
                        ).toLocaleString()}
                      </span>
                    </a>
                  </li>
                  <li className="Tweet-action Tweet-action--newsAction">
                    <a
                      className="Tweet-action--replyEdge TweetAction TweetAction--replyEdge"
                      href="#"
                    >
                      <div className="Icon Icon--replyEdge TweetAction-icon" />
                      <span className="TweetAction-stat">
                        {(
                          rts || Math.round(Math.random() * 3000) + 3000
                        ).toLocaleString()}{" "}
                        people are talking about this
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </blockquote>
          </div>
        </div>

        {isDebug ? (
          <p className="debug center">
            {isGlobal ? "GLOBAL" : "LOCAL"} / {cueSignal.toUpperCase()}
          </p>
        ) : null}
      </div>
    );
  }
}

Tweet.propTypes = {
  // Name of Tweet author
  author: PropTypes.string.isRequired,
  // Handle (@name) of Tweet author (must include @)
  handle: PropTypes.string.isRequired,
  // Date and time of tweet
  timestamp: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.instanceOf(moment)
  ]),
  // OPTIONAL author pic URL. If absent, will fetch author's real pic from twitter.com
  imgUrl: PropTypes.string,
  // OPTIONAL likes count. Defaults to some value
  likes: PropTypes.number,
  // OPTIONAL RT count. Defaults to some value
  rts: PropTypes.number
};
