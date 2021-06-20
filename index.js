// document.getElementById("ham").addEventListener("click",function(){console.log("hello")})
document.getElementById("ham").addEventListener("click",openNav)
document.getElementById("btn").addEventListener("click",closeNav)
// let x = document.getElementsByTagName("body")
// console.log(x)
if(window.screen.width <= 500)
{
    let y = document.getElementsByClassName("item")
    
    console.log(y)
y[0].addEventListener("click",closeNav)
y[1].addEventListener("click",closeNav)
y[2].addEventListener("click",closeNav)
y[3].addEventListener("click",closeNav)
    // let i
    // for(i in y){
    //     console.log(y[i])
    //     y[i].addEventListener("click",closeNav)
    
}

function openNav()
{
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
}