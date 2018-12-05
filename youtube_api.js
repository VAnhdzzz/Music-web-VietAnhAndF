const API_YOUTUBE_KEY = 'AIzaSyDOAhAGXfu1UA33SYVPpcheJO9D7DXtCy8';
const PARTS = 'snippet,topicDetails,player,status,statistics,recordingDetails';  
const url_search = 'https://www.googleapis.com/youtube/v3/search'


let search = 'Vu'
const parts_search = 'snippet'

const fetchData = (Choose_Url, chooseMethod=undefined, parts=undefined) => {
    if (chooseMethod === 'search') {
        fetch(`${Choose_Url}?q=${search}&key=${API_YOUTUBE_KEY}&part=${parts_search}`)
            .then(
                function(response){
                    response.json().then(function(data){
                        run(data);
                    });
                }
            )    
    } else if (chooseMethod === 'channels') {
        fetch(`${Choose_Url}?id=u0x4bp6tWXs&key=${API_YOUTUBE_KEY}&part=${PARTS}`)
            .then(
                function(response){
                    response.json().then(function(data){
                        run(data);
                    });
                }
        )
    }
    if (chooseMethod === false) {
        console.log('Thieu Par');
    }
}

// fetchData(url_search, 'search')
// fetchData(url_channel, 'channels')
// fetch(`${url}?q=${search}&key=${API_YOUTUBE_KEY}&part=${search}`)
//     .then(
//         function(response){
//             response.json().then(function(data){
//                 run(data);
//             });
//         }
//     )

