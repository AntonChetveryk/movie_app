import React from "react";
import AppContextHOC from "../HOC/AppContextHOC";
import CallApi from "../../api/api";
import starFalse from "../../img/star_border-24px.svg";
import starTrue from "../../img/star-24px.svg";

class Favorite extends React.Component {
  onClickStar = () => {
    const { user, session_id, item } = this.props;
    CallApi.post(`/account/${user.id}/favorite`, {
      params: {
        session_id: session_id
      },
      body: {
        media_type: "movie",
        media_id: item.id,
        favorite: true
      }
    });
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
