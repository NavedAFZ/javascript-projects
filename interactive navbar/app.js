// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const button=document.querySelector(".nav-toggle")
const link=document.querySelector(".links")
button.addEventListener("click",function(e){
/*if(link.classList.contains("show-links"))
{
    link.classList.remove("show-links");
}
else
{
    link.classList.add("show-links");
}*/
link.classList.toggle("show-links")
})