var axios = require("axios");
var summonerName = "halmakin";
var summonerArray = []
// Then run a request with axios to the OMDB API with the movie specified
axios.get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=RGAPI-1db7b32e-7747-40de-9b70-547790c12ca1").then(
    function (response) {
        console.log(response.data);
        summonerArray.push(summonerName);
        var summonerLevel = response.data.summonerLevel;
        summonerArray.push(summonerLevel);
        console.log(summonerArray);
        var accountID = (response.data.accountId);
        axios.get("https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/" + accountID + "?api_key=RGAPI-1db7b32e-7747-40de-9b70-547790c12ca1").then(function (response) {
            for (var i = 0; i < 1; i++) {
                console.log(response.data.matches[i]);
                console.log(response.data.matches[i].gameId + "---" + response.data.matches[i].champion);
                var role = response.data.matches[i].role;
                var lane = response.data.matches[i].lane
                summonerArray.push(role);
                summonerArray.push(lane);
                console.log(summonerArray);
                console.log(summonerArray[0]);
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

    // axios.get("http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json").then(function (response) {
    //         console.log(response.data[0]);

    // }).catch(function (error) {
    //             if (error.response) {
    //                 // The request was made and the server responded with a status code
    //                 // that falls out of the range of 2xx
    //                 console.log("---------------Data---------------");
    //                 console.log(error.response.data);
    //                 console.log("---------------Status---------------");
    //                 console.log(error.response.status);
    //                 console.log("---------------Status---------------");
    //                 console.log(error.response.headers);
    //             } else if (error.request) {
    //                 // The request was made but no response was received
    //                 // `error.request` is an object that comes back with details pertaining to the error that occurred.
    //                 console.log(error.request);
    //             } else {
    //                 // Something happened in setting up the request that triggered an Error
    //                 console.log("Error", error.message);
    //             }
    //             console.log(error.config);
    //         });