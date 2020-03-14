import React from "react";
import CallApi from "../../../../api/api";
import Iframe from "react-iframe";
import Loader from "../../../UI/Loader";

export default class Videos extends React.Component {
  state = {
    videos: [],
    isLoading: false
  };
  componentDidMount() {
    const { match } = this.props;
    this.setState({
      isLoading: true
    });
    CallApi.get(`/movie/${match.params.id}/videos`, {
      params: { language: "ru-RU" }
    }).then(res => this.setState({ videos: res.results, isLoading: false }));
  }

  render() {
    const { videos, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          videos.map(video => {
            return (
              <div className="card" key={video.id}>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <b>{video.name}</b>
                      <Iframe
                        url="http://www.youtube.com/embed/xDMP3i36naA"
                        title={video.name}
                        width="100%"
                        height="400px"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
