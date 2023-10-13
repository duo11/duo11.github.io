//*****************   Make search window appear/disappear ************************
function show(){
    document.getElementById('search-area').style.display = "flex";
}
function hide(){
    document.getElementById('search-area').style.display = "none";
}
//*****************   Make setting window appear/disappear ************************
function show2(){
    if(document.getElementById('setting-area').style.display == "flex"){
    document.getElementById('setting-area').style.display = "none";
}
    else{
        document.getElementById('setting-area').style.display = "flex";
    }
}

var body = document.body;
var html = document.documentElement;
function show3(){
    if(document.getElementById('writeArea').style.display == "flex"){
        document.getElementById('writeArea').style.display = "none";
        body.style.overflow = "auto";
        html.style.overflowY = "auto";
    }
    else{
        document.getElementById('writeArea').style.display = "flex";
        body.style.overflow = "hidden";
        html.style.overflowY = "hidden";
    }
}

function adjustMainNavDisplay(){
    if(window.innerWidth < 800 ) {
        document.getElementById('main-nav-footer').style.display = "flex";
        document.getElementById('main-nav').style.display = "none";
    }
    else{
        document.getElementById('main-nav-footer').style.display = "none";
        document.getElementById('main-nav').style.display = "flex";
    }
    
}
function adjustSearchBar(){
    if(window.innerWidth < 500 ) {
        document.getElementById('searchtext').style.display = "none";
        document.getElementById('searchbar').style.width = '40px';
        

    }
    else{
        document.getElementById('searchtext').style.display = "block";
        document.getElementById('searchbar').style.width = '200px';
        

    }

    }
function adjustWaText(){
    if(window.innerWidth < 250){
        var waText = document.getElementsByClassName('waText');
        for(var i=0; i<waText.length;i++){
            waText[i].style.display ='none';
        }
    }
    else{
        var waText = document.getElementsByClassName('waText');
        for(var i=0; i<waText.length;i++){
            waText[i].style.display ='block';
        }
    }
}
adjustWaText();
adjustMainNavDisplay();

adjustSearchBar();

window.addEventListener('resize', adjustMainNavDisplay);
window.addEventListener('resize', adjustSearchBar);
window.addEventListener('resize', adjustWaText);


const footer = document.getElementById('main-nav-footer');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    // console.log(scroll);
    
    if(scroll > lastScroll){
        const currentMarginBottom = parseInt(footer.style.marginBottom || 0,0);
        if(currentMarginBottom > -50){
            footer.style.marginBottom = `${currentMarginBottom - 2}px`;
            
        }
    }
    else if(scroll < lastScroll -10){ 
        const currentMarginBottom = parseInt(footer.style.marginBottom || 0,0);
        footer.style.marginBottom = `${currentMarginBottom + 2}px`;
        if(currentMarginBottom == 0){
            footer.style.marginBottom = 0;
        }
    }
    
    lastScroll = scroll;    
});





// *****************   Make cursor move to search bar  ************************
document.getElementById("searchbar").addEventListener("click", function() {
document.getElementById("input-box").focus(); // Sử dụng phương thức focus() để di chuyển con trỏ chuột
});
// *****************   Make cursor move to write post area  ************************

document.getElementById("tk").addEventListener("click", function() {
document.getElementById("textarea").focus(); // Sử dụng phương thức focus() để di chuyển con trỏ chuột
});

// Expand text caption 
const toggleButtons = document.querySelectorAll('.toggleButton');
const caption = document.querySelectorAll('.caption');
        // Add a click event listener to each button
        toggleButtons.forEach(button => {

            button.addEventListener('mousedown', function(event) {
                
                const toggleId = event.target.getAttribute('id');
                const captionId = "caption" + toggleId;
                const dotId = "dot" + toggleId;
                let maxheight = document.getElementById(captionId).style.maxHeight;
                caption.forEach(p => {
                    if(maxheight == "none"){
                        document.getElementById(captionId).style.maxHeight = "3em";
                        document.getElementById(toggleId).innerText = "See more"
                        document.getElementById(dotId).style.display ="block";

                    }
                    else{
                        document.getElementById(captionId).style.maxHeight = "none";
                        document.getElementById(toggleId).innerText = "Collapse"
                        document.getElementById(dotId).style.display ="none";

                    }
                });
                
            });
        });
//check text in textarea 
var textarea = document.getElementById("textarea");
textarea.addEventListener("input",function(){
    if (textarea.value.trim() === "") {
        document.getElementById("fa3").style.cursor = "not-allowed";
        document.getElementById("fa3").style.backgroundColor = "#E4E6E9";
        document.getElementById("fa3").style.color = "black";
    }
      
    
    else{
        document.getElementById("fa3").style.cursor = "pointer";
        document.getElementById("fa3").style.backgroundColor = "#1770E6";
        document.getElementById("fa3").style.color = "white";

    }

});

function handleKeyPress(event) {
    if (event.key === "Enter") {
        show();
    }
}