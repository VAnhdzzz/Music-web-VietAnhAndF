const url_channel = 'https://www.googleapis.com/youtube/v3/channels'




search = 'chang nhạc việt indie';

fetchData(url_search, 'search', parts_search);

const run = (dataAfterGet) => {
    console.log('cai nay la',dataAfterGet);
    
       var indie = document.getElementById("indie");   
       console.log(indie);
       
       for (var i=0;i < dataAfterGet.items.length;i++){
        var id = dataAfterGet.items[i].id.videoId;  
        var iframe = `
        <div class="iframe" data-aos="fade-right">
            <iframe class="small-mv-vid" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
        `    
            indie.insertAdjacentHTML("beforeend",iframe); 

        }
    }


    