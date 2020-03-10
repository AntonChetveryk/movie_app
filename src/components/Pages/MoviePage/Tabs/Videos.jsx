import React from "react";
import CallApi from "../../../../api/api";

export default class Videos extends React.Component {
  state = {
    videos: []
  };
  componentDidMount() {
    const { movie } = this.props;
    CallApi.get(`/movie/${movie.id}/videos`, {
      params: { language: "ru-RU" }
    }).then(res => this.setState({ videos: res.results }));
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        {videos.map(video => {
          return (
            <div className="card" key={video.id}>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <b>{video.name}</b>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
