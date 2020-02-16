import React from "react";
import CallApi from "../../../../api/api";
import Spinner from "../../../../img/spinner.gif";

export default class Credits extends React.Component {
  state = {
    avatars: [],
    isLoading: false
  };
  componentDidMount() {
    const { item } = this.props;
    this.setState({
      isLoading: true
    });
    CallApi.get(`/movie/${item.id}/credits`).then(res =>
      this.setState({ avatars: res.cast, isLoading: false })
    );
  }

  render() {
    const { avatars, isLoading } = this.state;
    return (
      <div className="avatars-container">
        {isLoading ? (
          <img src={Spinner} alt="loading" className="loading" />
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
