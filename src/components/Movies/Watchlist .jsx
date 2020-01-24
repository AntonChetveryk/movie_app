import React from "react";
import AppContextHOC from "../HOC/AppContextHOC";
import CallApi from "../../api/api";
import bookmarkTrue from "../../img/bookmark-24px.svg";
import bookmarkFalse from "../../img/bookmark_border-24px.svg";

class Watchlist extends React.Component {
  onClickBookmark = () => {
    if (this.props.user) {
      const { user, session_id, item, getWatchlists, watchlists } = this.props;
      const watchlistIdArr = watchlists.map(watchlists => watchlists.id);
      if (watchlistIdArr.includes(item.id)) {
        CallApi.post(`/account/${user.id}/watchlist`, {
          params: {
            session_id: session_id
          },
          body: {
            media_type: "movie",
            media_id: item.id,
            watchlist: false
          }
        }).then(() => getWatchlists(user.id));
      } else {
        CallApi.post(`/account/${user.id}/watchlist`, {
          params: {
            session_id: session_id
          },
          body: {
            media_type: "movie",
            media_id: item.id,
            watchlist: true
          }
        }).then(() => getWatchlists(user.id));
      }
    } else {
      alert("Login to use this feature");
    }
  };

  render() {
    const { item, watchlists } = this.props;
    const watchlistIdArr = watchlists.map(watchlists => watchlists.id);
    return (
      <>
        <img
          src={watchlistIdArr.includes(item.id) ? bookmarkTrue : bookmarkFalse}
          alt="bookmark"
          onClick={this.onClickBookmark}
        />
      </>
    );
  }
}

export default AppContextHOC(Watchlist);
