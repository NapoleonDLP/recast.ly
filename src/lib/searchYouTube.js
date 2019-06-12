import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (query) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {part: 'snippet',
      key: YOUTUBE_API_KEY,
      videoEmbeddle: 'true',
      q: query,
      maxResults: 5
    },
    success: (data) => console.log(data)
  });
};
//options {query}
export default searchYouTube;
