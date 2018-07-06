"use scrict";

let theUrl='https://api.github.com/orgs/HackYourFuture/repos'
let xmlHttp = new XMLHttpRequest();

function onLoad() {
  httpGetAsync(theUrl,setInfo);
}

// Getting user info from git
function httpGetAsync(theUrl, callback)
{
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
        else{
            console.error('Something went wrong', xmlHttp.readyState);
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

// Display data on HTML Page for My GITHUB account
function setInfo(){
    xmlHttp.onload = function(responseText){
        let userInfo = JSON.parse(this.responseText);

        let article = document.getElementById("fooCafe");
        article.innerHTML = "";
        article.innerHTML = '<h2>'+ 'Data from HackYourFuture FooCafe API' + '</h2>';
        let userTable = document.createElement('table');
        
        for(let key in userInfo) {
            let tableRow = document.createElement('tr');
        
         let tableColumn = document.createElement('td');
         
         tableColumn.innerHTML += "Name: " + userInfo[key].name + " "+ "ID:" + userInfo[key].id;
                tableRow.appendChild(tableColumn);
                userTable.appendChild(tableRow);
        }; 
        article.appendChild(userTable); 
        
    }

}   
