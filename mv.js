const url_channel = 'https://www.googleapis.com/youtube/v3/channels'

search = 'thebao';

fetchData(url_search, 'search', parts_search);

const run = (dataAfterGet) => {
    console.log('cai nay la',dataAfterGet);
        var Indie = document.getElementsByClassName("indie");
        Indie.textContent = ''; 
        for (var i=0;i<dataAfterGet.items.length;i++){
        var id = dataAfterGet.items[i].id.videoId;
        console.log (id);
        var iframe = `

            <iframe src="https://www.youtube.com/watch?v=${id}" frameborder="0"></iframe>
        `
        var HTML = `
        <div class="big-mv">big-mv</div>
                <div class="column">

                    <div class="small-mv indie">${iframe}</div>
                    <div class="small-mv indie">${iframe}</div>
                    <div class="small-mv none-bot indie">${iframe}</div>    
            `
        // Indie.insertAdjacentHTML("beforeend",HTML);
        }

    }
