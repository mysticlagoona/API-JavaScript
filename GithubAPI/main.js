"use scrict";

let theUrl='https://api.github.com/users/mysticlagoona'
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
        article.innerHTML = '<h2>'+ 'Data from API' + '</h2>';
        let userTable = document.createElement('table');
        for(let key in userInfo){
            let section = document.createElement('section');
            if ( key === 'name') {
                let title = document.createElement('h2');   
                title.innerHTML = userInfo.name;
                section.appendChild(title);
            }
        article.appendChild(section);
        };

        for(let key in userInfo) {
            let tableRow = document.createElement('tr');
            let tableHead = document.createElement('th');
            let headText = document.createTextNode(key);
            tableHead.appendChild(headText);
            tableRow.appendChild(tableHead);
            let tempValue = "";
            for(value in userInfo[key]) {
                tempValue +=  userInfo[key][value];
            }
            console.log(tempValue);
            let tableColumn = document.createElement('td');
                if( key == "avatar_url") {
                    var insideColumn = document.createElement('img');
                    insideColumn.setAttribute("src", tempValue);
                    insideColumn.setAttribute("width", 100);
                    insideColumn.setAttribute("height", 150);
                    
                } else {
                    insideColumn = document.createTextNode(tempValue);

                }
                tableColumn.appendChild(insideColumn);
                tableRow.appendChild(tableColumn);
                userTable.appendChild(tableRow);
            article.appendChild(userTable);
        };  
        
    }

}   
