

function showResults(results) {
    $.each(results, function(index, value){
      var vidTitle = value.snippet.title,
          vidId = value.id.videoId,
          vidDescription = value.snippet.description,
          vidImage = value.snippet.thumbnails.medium.url;
      appendResults(vidTitle, vidId, vidDescription, vidImage, index);
      index++;
    })
  };
  
  function appendResults(title, ID, description, image, index) {
      
      
        $('<div class = "container"><div class = "card"><div class="card-image"><figure class="image is-4by3"><img src="' + image + '" alt=""></figure><div class="card-content"><div class="media"><div class="media-left"></figure></div><a href="https://www.youtube.com/watch?v=' + ID + '" target="_blank"><img class="media-object" </a></div><div class="media-body"><h4 class="title is-4"> ' + title + '</h4><div class="content">'+ description +'</a><a href="https://www.youtube.com/watch?v=' + ID + '" class="btn btn-default" target="_blank">Watch Video</a></div></div></div></div><br><br><br>').appendTo(".item-"+index);
      

  };
  
  
  function getRequest(searchTerm) {
    var params = {
      part: "snippet",
      key: 'AIzaSyDjHPGg86SCEajlV-SiSzojRiU7u-reoAI',
      q: searchTerm,
      maxResults: 10
    };
    endPoint = 'https://www.googleapis.com/youtube/v3/search/';
    $.getJSON(endPoint, params, function(data){
      showResults(data.items);
      console.log(data.items);
    });
  };
  
 
    $('form').submit(function(event){
      event.preventDefault();
      var getUserInput = $('.video-search').val();
      getRequest(getUserInput);
      console.log(getUserInput);
   
  });
  
  function clearResults() {
    $(".carousel .media").fadeOut();
    $('.video-search').val("").focus();
    
  };
  
  $('.search-clear').on("click", delete(clearResults));
  
  
  
  