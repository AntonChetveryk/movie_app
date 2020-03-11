import React from "react";
import CallApi from "../../../../api/api";

export default class Videos extends React.Component {
  state = {
    videos: []
  };
  componentDidMount() {
    const { match } = this.props;
    CallApi.get(`/movie/${match.params.id}/videos`, {
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
                    <iframe
                      title={video.name}
                      width="718"
                      height="388"
                      src="https://www.youtube.com/embed/tKNK-dbe0Wg"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
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
