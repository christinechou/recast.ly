var searchYouTube = (options, callback) => {
  
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search', 
    data: {
      key: options.key,
      q: options.query,
      type: 'video',
      maxResults: options.max,
      part: 'snippet'
    }, 
    success: function(data) {
      callback(data.items);
    }
  });

};

window.searchYouTube = searchYouTube;
