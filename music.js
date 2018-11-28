let dataGet;
var a = $.getJSON('data.json', (data) => {
    dataGet = data;
})
console.log(dataGet);

console.log(a);


