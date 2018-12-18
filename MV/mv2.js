

search = "pop";

    fetchData(url_search, 'search', parts_search);
    const run2 = (dataAfterGet) => {
      
        
           var pop = document.getElementById("pop");   
           
           for (var i=0;i < dataAfterGet.items.length;i++){
            var id = dataAfterGet.items[i].id.videoId;  
            var iframe = `
            <div class="iframe" data-aos="fade-right">
                <iframe class="small-mv-vid" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            `    
                pop.insertAdjacentHTML("beforeend",iframe); 
            }
    
        }