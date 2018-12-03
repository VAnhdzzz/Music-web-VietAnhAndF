const getDataFromJson = (url) => {
    const data = $.getJSON(url);
    return data
}

//dataMusic la 1 list gom nhieu phan tu

//forEach la duyet tung phan tu 1 trong list
var DOMlistmusic = document.getElementById('listMusic');
dataMusic.forEach(function(music){
    var HTML = `
        <div>
            <p>${music.id}</p>
            <p>${music.name}</p>
            <p>${music.thumbnail}</p>
            <img src=${music.url} /> 
        </div>
    `;

    DOMlistmusic.insertAdjacentHTML('afterbegin', HTML);
});
