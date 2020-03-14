import React from "react";
import CallApi from "../../../../api/api";
import Loader from "../../../UI/Loader";

export default class Credits extends React.Component {
  state = {
    avatars: [],
    isLoading: false
  };
  componentDidMount() {
    const { match } = this.props;
    this.setState({
      isLoading: true
    });
    CallApi.get(`/movie/${match.params.id}/credits`).then(res =>
      this.setState({ avatars: res.cast, isLoading: false })
    );
  }

  render() {
    const { avatars, isLoading } = this.state;
    return (
      <div className="avatars-container">
        {isLoading ? (
          <Loader />
        ) : (
          avatars.map(avatar => {
            return (
              <div key={avatar.cast_id}>
                {avatar.profile_path ? (
                  <div className="avatar-container">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${avatar.profile_path ||
                        ""}`}
                      alt=""
                    />
                  </div>
                ) : null}
              </div>
            );
          })
        )}
      </div>
    );
  }
}
