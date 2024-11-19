var bookMarkName= document.getElementById("bookmarkName");
var bookMarkSite= document.getElementById("bookmarkSite");


var informationlist =[]

if (localStorage.getItem("productContainer") !== null) {
    informationlist = JSON.parse(localStorage.getItem("productContainer")); 
    display(); 
  }


function addinfo() {
  var information ={
    Name :bookMarkName.value,
    Url:bookMarkSite.value,


  }
  informationlist.push(information)
  localStorage.setItem("productContainer", JSON.stringify(informationlist));
  clear()
  display()
  console.log(informationlist)
  
  
};

function clear() {
    bookMarkName.value=null
bookMarkSite.value=null
}



function display(){
    var container=``
     for (var i = 0; i< informationlist.length; i++) {
        const safeUrl = informationlist[i].Url.replace(/'/g, "\\'");
        
        container +=
        `
        <tr >
            <th scope="row">${i}</th>
            <td>${informationlist[i].Name}</td>
            <td>
                <a href="${informationlist[i].Url}"  target="_blank" class="btn btn-visit ps-3 pe-3">
                  <i class=" fa-solid fa-eye pe-1">

                  </i>
                  Visit
                </a>


            </td>
            <td>
                <button  onclick="deleteItem(${i})" class="btn btn-delete">
                    <i class=" fa-solid fa-trash pe-1">
                        

                    </i>
                    Delete


                </button>
            </td>
          </tr>
        `
     }
    
    document.getElementById('Tbody').innerHTML =container
    
    
    
}



function deleteItem(index) {
    informationlist.splice(index, 1); 
  

    localStorage.setItem("productContainer", JSON.stringify(informationlist));
  
    display(); 
  }


 