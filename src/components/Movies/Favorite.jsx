import React from "react";
import { withAuth } from "../../hoc/withAuth";
import CallApi from "../../api/api";
import Starborder from "../../img/star_border-24px.svg";
import Star from "../../img/star-24px.svg";

class Favorite extends React.Component {
  state = {
    isLoading: false
  };

  onClick = () => {
    const { auth, movie } = this.props;
    if (auth.user) {
      this.setState({
        isLoading: true
      });
      CallApi.post(`/account/${auth.user.id}/favorite`, {
        params: {
          session_id: auth.session_id
        },
        body: {
          media_type: "movie",
          media_id: movie.id,
          favorite: !this.isFavorite()
        }
      }).then(() =>
        this.setState(
          {
            isLoading: false
          },
          () => this.props.authActions.fetchFavorites(auth)
        )
      );
    } else {
      this.props.authActions.showLoginModal();
    }
  };

  isFavorite = () => {
    const { auth, movie } = this.props;
    return auth.favorits.findIndex(item => item.id === movie.id) !== -1;
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

export default withAuth(Favorite);
