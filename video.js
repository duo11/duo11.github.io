function show(){
    document.getElementById('search-area').style.display = "flex";
}
function hide(){
    document.getElementById('search-area').style.display = "none";
}

function show2(){
    if(document.getElementById('setting-area').style.display == "flex"){
    document.getElementById('setting-area').style.display = "none";
}
    else{
        document.getElementById('setting-area').style.display = "flex";
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
function expandNotiArea(){
    const isExpanded = document.getElementById("noti-area").style.display;
    if(isExpanded == "block"){
        document.getElementById("noti-area").style.display = "none";

    }
    else{
        document.getElementById("noti-area").style.display = "block";

    }
}
adjustSearchBar();
adjustMainNavDisplay();
window.addEventListener('resize', adjustMainNavDisplay);
window.addEventListener('resize', adjustSearchBar);

const footer = document.getElementById('main-nav-footer');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    // console.log(scroll);
    
    if(scroll > lastScroll){
        const currentMarginBottom = parseInt(footer.style.marginBottom || 0,0);
        if(currentMarginBottom > -50){
            footer.style.marginBottom = `${currentMarginBottom - 5}px`;
            
        }
    }
    else if(scroll < lastScroll ){ 
        const currentMarginBottom = parseInt(footer.style.marginBottom || 0,0);
        footer.style.marginBottom = `${currentMarginBottom + 5}px`;
        if(currentMarginBottom == 0){
            footer.style.marginBottom = 0;
        }
    }
    
    lastScroll = scroll;    
});















let scrollBar = document.getElementById('scrollbararea');
const curorPosition = document.getElementById('test');
curorPosition.addEventListener('mouseenter',(event) =>{
    scrollBar.style.display = "none";
});
curorPosition.addEventListener('mouseleave',(event) =>{
    scrollBar.style.display = "block";
});

