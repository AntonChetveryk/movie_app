import React from "react";
import AppContextHOC from "../HOC/AppContextHOC";
import CallApi from "../../api/api";
import Starborder from "../../img/star_border-24px.svg";
import Star from "../../img/star-24px.svg";

class Favorite extends React.Component {
  onClick = () => {
    const { user, session_id, item, getFavorites } = this.props;
    if (user) {
      CallApi.post(`/account/${user.id}/favorite`, {
        params: {
          session_id: session_id
        },
        body: {
          media_type: "movie",
          media_id: item.id,
          favorite: !this.isFavorite()
        }
      }).then(() => getFavorites(user.id));
    } else {
      this.props.showLoginModal();
    }
  };

  isFavorite = () => {
    const { item, favorits } = this.props;
    return favorits.findIndex(movie => movie.id === item.id) !== -1;
  };

  render() {
    return (
      <img
        src={this.isFavorite() ? Star : Starborder}
        alt="star"
        onClick={this.onClick}
      />
    );
  }
}

export default AppContextHOC(Favorite);
