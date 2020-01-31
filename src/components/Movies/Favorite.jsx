import React from "react";
import AppContextHOC from "../HOC/AppContextHOC";
import CallApi from "../../api/api";
import Starborder from "../../img/star_border-24px.svg";
import Star from "../../img/star-24px.svg";

class Favorite extends React.Component {
  state = {
    isLoading: false
  };

  onClick = () => {
    const { user, session_id, item, getFavorites } = this.props;
    if (user) {
      this.setState({
        isLoading: true
      });
      CallApi.post(`/account/${user.id}/favorite`, {
        params: {
          session_id: session_id
        },
        body: {
          media_type: "movie",
          media_id: item.id,
          favorite: !this.isFavorite()
        }
      }).then(() =>
        this.setState(
          {
            isLoading: false
          },
          () => getFavorites({ user, session_id })
        )
      );
    } else {
      this.props.showLoginModal();
    }
  };

  isFavorite = () => {
    const { item, favorits } = this.props;
    return favorits.findIndex(movie => movie.id === item.id) !== -1;
  };

  render() {
    const { isLoading } = this.state;
    return (
      <img
        src={this.isFavorite() ? Star : Starborder}
        alt="star"
        onClick={this.onClick}
        className={isLoading ? "disable" : null}
      />
    );
  }
}

export default AppContextHOC(Favorite);
