window.onload = function()
{
    var search = document.getElementById("search");
    search.addEventListener("click",searchFunction);
}

function searchFunction()
{    
    var url = "superheroes.php";
    AjaxRequest(url,displaySuperheroes)

}

function AjaxRequest(url,func)
{
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function(Event){
        if (httpRequest.readyState === XMLHttpRequest.DONE)
    {
        if (httpRequest.status === 200)
        {
            
            func(httpRequest.responseText)
        }
        else 
        {
            alert("There was a problem with the request")
        }
    }
    };
    httpRequest.requestType = "json"
    httpRequest.open("GET", "superheroes.php?");
    httpRequest.send();
}

function displayResponse(message)
{
    alert(message);
}

function displaySuperheroes(superheroes)
{
    alert(superheroes)
}