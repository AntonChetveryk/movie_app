import React from "react";
import AppContextHOC from "../HOC/AppContextHOC";

import bookmarkTrue from "../../img/bookmark-24px.svg";
//import bookmarkFalse from "../../img/bookmark_border-24px.svg";

class Watchlist extends React.Component {
  onClickBookmark = () => {
    // const API_KEY_3 = "b3ff350532467eb0b07cf18d16f4a254";
    // const session_id = this.props.session_id;
    // const link = `https://api.themoviedb.org/3/account?api_key=${API_KEY_3}&session_id=${session_id}`;
    // this.setState(prevState => ({
    //   watchlist: !prevState.watchlist
    // }));
    // fetch(link)
    //   .then(response => response.json())
    //   .then(account => account.id)
    //   .then(accountId =>
    //     CallApi.post(`/account/${accountId}/watchlist`, {
    //       params: {
    //         session_id: this.props.session_id
    //       },
    //       body: {
    //         media_type: "movie",
    //         media_id: this.props.movie_id,
    //         watchlist: true
    //       }
    //     })
    //   );
  };
  render() {
    return (
      <>
        <img src={bookmarkTrue} alt="bookmark" onClick={this.onClickBookmark} />
      </>
    );
  }
}

export default AppContextHOC(Watchlist);
