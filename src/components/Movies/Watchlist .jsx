import React from "react";
import AppContextHOC from "../HOC/AppContextHOC";
import CallApi from "../../api/api";
import Bookmark from "../../img/bookmark-24px.svg";
import Bookmarkborder from "../../img/bookmark_border-24px.svg";

class Watchlist extends React.Component {
  state = {
    isLoading: false
  };
  onClick = () => {
    const { user, session_id, item, getWatchlists } = this.props;
    if (user) {
      this.setState({
        isLoading: true
      });
      CallApi.post(`/account/${user.id}/watchlist`, {
        params: {
          session_id: session_id
        },
        body: {
          media_type: "movie",
          media_id: item.id,
          watchlist: !this.isWatchlist()
        }
      }).then(() =>
        this.setState(
          {
            isLoading: false
          },
          () => getWatchlists({ user, session_id })
        )
      );
    } else {
      this.props.showLoginModal();
    }
  };

  isWatchlist = () => {
    const { item, watchlists } = this.props;
    return watchlists.findIndex(movie => movie.id === item.id) !== -1;
  };

  render() {
    const { isLoading } = this.state;
    return (
      <img
        src={this.isWatchlist() ? Bookmark : Bookmarkborder}
        alt="bookmark"
        onClick={this.onClick}
        className={isLoading ? "disable" : null}
      />
    );
  }
}

export default AppContextHOC(Watchlist);
