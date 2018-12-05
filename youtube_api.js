const API_YOUTUBE_KEY = 'AIzaSyDOAhAGXfu1UA33SYVPpcheJO9D7DXtCy8';
const PARTS = 'snippet,topicDetails,player,status,statistics,recordingDetails';  
const run  = (dataAfterGet) =>{
    console.log(dataAfterGet);
}
const url = 'https://www.googleapis.com/youtube/v3/search'
const search = 'Vu'
const part = 'snippet'
fetch(`https://www.googleapis.com/youtube/v3/videos?id=u0x4bp6tWXs&key=${API_YOUTUBE_KEY}&part=${PARTS}`)
    .then(
        function(response){
            response.json().then(function(data){
                run(data);
            });
        }
    )    
fetch(`${url}?q=${search}&key=${API_YOUTUBE_KEY}&part=${search}`)
    .then(
        function(response){
            response.json().then(function(data){
                run(data);
            });
        }
    )