import React from 'react'
import CallApi from '../../../../api/api'
import Iframe from 'react-iframe'
import Loader from '../../../UI/Loader'

export default class Videos extends React.Component {
  state = {
    videos: [],
    isLoading: false,
  }
  componentDidMount() {
    const { match } = this.props
    this.setState({
      isLoading: true,
    })
    CallApi.get(`/movie/${match.params.id}/videos`, {
      params: { language: 'ru-RU' },
    }).then(res => this.setState({ videos: res.results, isLoading: false }))
  }

  render() {
    const { videos, isLoading } = this.state
    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="row mt-2">
            {videos.map(video => {
              return (
                <div className="col-6">
                  <div className="card" key={video.id}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <b>{video.name}</b>
                          <Iframe
                            url={`https://www.youtube.com/embed/${video.key}`}
                            title={video.name}
                            width="100%"
                            height="400px"
                            frameBorder="0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}
