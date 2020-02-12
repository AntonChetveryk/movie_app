import React from "react";
import CallApi from "../../../api/api";

export default class Credits extends React.Component {
  state = {
    avatars: []
  };
  componentDidMount() {
    const { item } = this.props;
    CallApi.get(`/movie/${item.id}/credits`).then(res =>
      this.setState({ avatars: res.cast })
    );
  }

  render() {
    const { avatars } = this.state;
    return (
      <div className="avatars-container">
        {avatars.map(avatar => {
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
        })}
      </div>
    );
  }
}
