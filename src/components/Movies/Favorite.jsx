import React from "react";
import AppContextHOC from "../HOC/AppContextHOC";
import CallApi from "../../api/api";
import starFalse from "../../img/star_border-24px.svg";
import starTrue from "../../img/star-24px.svg";

class Favorite extends React.Component {
  onClickStar = () => {
    if (this.props.user) {
      const { user, session_id, item, getFavorites, favorits } = this.props;
      const favoriteIdArr = favorits.map(watchlists => watchlists.id);
      if (favoriteIdArr.includes(item.id)) {
        CallApi.post(`/account/${user.id}/favorite`, {
          params: {
            session_id: session_id
          },
          body: {
            media_type: "movie",
            media_id: item.id,
            favorite: false
          }
        }).then(() => getFavorites(user.id));
      } else {
        CallApi.post(`/account/${user.id}/favorite`, {
          params: {
            session_id: session_id
          },
          body: {
            media_type: "movie",
            media_id: item.id,
            favorite: true
          }
        }).then(() => getFavorites(user.id));
      }
    } else {
      alert("Login to use this feature");
    }
  };

  render() {
    const { item, favorits } = this.props;
    const favoritsIdArr = favorits.map(favorite => favorite.id);
    return (
      <>
        <img
          src={favoritsIdArr.includes(item.id) ? starTrue : starFalse}
          alt="star"
          onClick={this.onClickStar}
        />
      </>
    );
  }
}

export default AppContextHOC(Favorite);
