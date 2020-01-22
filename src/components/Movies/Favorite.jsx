import React from "react";
import AppContextHOC from "../HOC/AppContextHOC";

import starFalse from "../../img/star_border-24px.svg";
//import starTrue from "../../img/star-24px.svg";

class Favorite extends React.Component {
  onClickStar = () => {
    // const API_KEY_3 = "b3ff350532467eb0b07cf18d16f4a254";
    // const session_id = this.props.session_id;
    // const link = `https://api.themoviedb.org/3/account?api_key=${API_KEY_3}&session_id=${session_id}`;
    // this.setState(prevState => ({
    //   favorite: !prevState.favorite
    // }));
    // console.log(this.props.movie_id);
    // fetch(link)
    //   .then(response => response.json())
    //   .then(account => account.id)
    //   .then(accountId =>
    //     CallApi.post(`/account/${accountId}/favorite`, {
    //       params: {
    //         session_id: this.props.session_id
    //       },
    //       body: {
    //         media_type: "movie",
    //         media_id: this.props.movie_id,
    //         favorite: true
    //       }
    //     })
    //   );
  };
  render() {
    return (
      <>
        <img src={starFalse} alt="star" onClick={this.onClickStar} />
      </>
    );
  }
}

export default AppContextHOC(Favorite);
