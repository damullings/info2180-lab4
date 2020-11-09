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

function displaySuperheroes(msg,search)
{
    var search = document.getElementById("result");
    superhero = msg //JSON.parse(msg)
    console.log(msg)
    search.innerHTML = superhero
}