class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videolist: searchYouTube('') 
    };


  }

  onVideoClick(event) {

    this.setState({
      currentVideo: event
    });
  }

  searchyt(query, max) {
    this.props.searchFn({key: window.YOUTUBE_API_KEY, q: query, maxResults: max});
  }

  // var OnVideoClick = onVideoClick.bind(this);

  render() {
    return (<div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer video={this.state.currentVideo}/>
    </div>
    <div className="col-md-5">
      <VideoList videos={this.state.videolist} steven={this.onVideoClick.bind(this)}/>
    </div>
    </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// ReactDOM.render(<App />, document.getElementById("app"));