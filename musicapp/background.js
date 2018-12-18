var happy  = document.getElementById('happy');
var dontAsk = document.getElementById("don't-ask")
var dontCare = document.getElementById("don't-care")
var sad = document.getElementById("sad")
var inLove = document.getElementById("in-love")
var crazy = document.getElementById("crazy")

var afterClick = document.getElementsByClassName('after-click');
    // document.body.style.backgroundImage = "url('https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"

//happy
happy.addEventListener('click', function(){
   
    
           afterClick[0].style.display = 'block';
})

// dont ask
dontAsk.addEventListener('click', function(){
  
    
           afterClick[1].style.display = 'block';
})

//don't care
dontCare.addEventListener('click', function(){
   
    
    afterClick[2].style.display = 'block';
})

//sad
sad.addEventListener('click', function(){
   
    
    afterClick[3].style.display = 'block';
})

// in love
inLove.addEventListener('click', function(){
   
    
    afterClick[4].style.display = 'block';
})

// crazy
crazy.addEventListener('click', function(){
   
    
    afterClick[5].style.display = 'block';
})




function toggleVideo(i) {
    const iframes = document.getElementsByTagName("iframe")[i].contentWindow;
    var func = 'pauseVideo';
    iframes.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

window.onclick = function(event) {
    for ( var i =0;i<afterClick.length;i++){

     if (event.target == afterClick[i]) {
            console.log(event.target,i )
                afterClick[i].style.display = 'none';
                toggleVideo(i);
            
        }
    }
    

}





