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
    var supImg = document.getElementById("supImg"); 
    supImg.style.opacity = 0;
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

function displaySuperheroes(superhero,search)
{
    var search = document.getElementById("result");
    var supImg = document.getElementById("supImg"); 
    supImg.style.opacity = 1
    if (superhero.includes("Ironman"))
    {
        supImg.src="ironman.png";
        
    }
    else if(superhero.includes("Despite super spy Natasha Romanoff’s checkered past,"))
    {
        supImg.src="blackwidow.png";
    }
    else if(superhero.includes("Captain America"))
    {
        supImg.src="capAmerica.png";
    }
    else if(superhero.includes("Captain Marvel"))
    {
        supImg.src="capmarvel.png";
    }
    else if(superhero.includes("Hulk"))
    {
        supImg.src="hulk.png";
    }
    else if(superhero.includes("Black Panther"))
    {
        supImg.src="panther.png";
    }
    else if(superhero.includes("Spiderman"))
    {
        supImg.src="spiderman.png";
    }
    else if(superhero.includes("A master marksman and longtime friend"))
    {
        supImg.src="hawk.png";
    }
    else if(superhero.includes("The son of Odin"))
    {
        supImg.src="thor.png";
    }
    else if(superhero.includes("Notably powerful, Wanda Maximoff has fought"))
    {
        supImg.src="witch.png";
    }
    else
    {
        supImg.src="avengers.png";
    }
    search.innerHTML = superhero
}