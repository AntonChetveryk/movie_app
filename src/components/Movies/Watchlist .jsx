import React from "react";
import { withAuth } from "../../hoc/withAuth";
import CallApi from "../../api/api";
import Bookmark from "../../img/bookmark-24px.svg";
import Bookmarkborder from "../../img/bookmark_border-24px.svg";

class Watchlist extends React.Component {
  state = {
    isLoading: false
  };
  onClick = () => {
    const { auth, authActions, movie } = this.props;
    if (auth.user) {
      this.setState({
        isLoading: true
      });
      CallApi.post(`/account/${auth.user.id}/watchlist`, {
        params: {
          session_id: auth.session_id
        },
        body: {
          media_type: "movie",
          media_id: movie.id,
          watchlist: !this.isWatchlist()
        }
      }).then(() =>
        this.setState(
          {
            isLoading: false
          },
          () => authActions.fetchWatchlists(auth)
        )
      );
    } else {
      authActions.showLoginModal();
    }
  };

  isWatchlist = () => {
    const { auth, movie } = this.props;
    return auth.watchlists.findIndex(item => item.id === movie.id) !== -1;
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

export default withAuth(Watchlist);
