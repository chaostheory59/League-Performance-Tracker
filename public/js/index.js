// Get references to page elements
var $submitBtn = $("#submit");
var axios = require("axios");
var summonerName = $("summonerName");
var summonerArray = [];

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(summoner) {
    return $.ajax({
      headers: { 
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/summoners",
      data: JSON.stringify(summoner)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/summoners",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/summoners" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var hbsObject = {
      summoners: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject)
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  axios.get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=").then(
    function (response) {
        console.log(response.data);
        summonerArray.push(summonerName);
        var summonerLevel = response.data.summonerLevel;
        summonerArray.push(summonerLevel);
        console.log(summonerArray);
        var accountID = (response.data.accountId);
        axios.get("https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/" + accountID + "?api_key=").then(function (response) {
            for (var i = 0; i < 1; i++) {
                console.log(response.data.matches[i]);
                console.log(response.data.matches[i].gameId + "---" + response.data.matches[i].champion);
                var role = response.data.matches[i].role;
                var lane = response.data.matches[i].lane
                summonerArray.push(role);
                summonerArray.push(lane);
                console.log(summonerArray);

                var summoner = {
                  summonerName: summonerArray[0],
                  summonerLevel: summonerArray[1],
                  role: summonerArray[2],
                  lane: summonerArray[3]
                };
              
                API.saveExample(summoner).then(function() {
                  refreshExamples();
                });
            };

        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
    })
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this).attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$("#delete").on("click", handleDeleteBtnClick);
