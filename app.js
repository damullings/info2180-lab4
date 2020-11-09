window.onload = function()
{
    var searchBtn = document.getElementById("search");
    searchBtn.addEventListener("click",searchFunction);
    
}

function searchFunction()
{    
    var url = "superheroes.php";
    //Get value entered
    searchVal = document.getElementById("hero").value 
    AjaxRequest(url,displaySuperheroes,searchVal)

    var supImg = document.getElementById("supImg"); 
    supImg.style.opacity = 0;

}

function AjaxRequest(url,func,search)
{
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function(Event){
        if (httpRequest.readyState === XMLHttpRequest.DONE)
    {
        if (httpRequest.status === 200)
        {
            
            func(httpRequest.responseText,search)
        }
        else 
        {
            alert("There was a problem with the request")
        }
    }
    };
    mess = url+"?query=" + search
    httpRequest.requestType = "json"
    httpRequest.open("GET", mess);
    httpRequest.send();
}

function displayResponse(message)
{
    alert(message);
}

function displaySuperheroes(superhero,search)
{
    var search = document.getElementById("result");
    var supImg = document.getElementById("supImg"); 
    supImg.style.opacity = 1
    if (superhero.includes("Ironman"))
    {
        supImg.src="ironman.png";
        
    }
    else if(superhero.includes("Carol"))
    {
        supImg.src="avengers.png";
    }
    search.innerHTML = superhero
}