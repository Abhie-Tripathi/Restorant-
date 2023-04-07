let addbtn = document.getElementById("addbtn")
var table = document.getElementById("name")
var dish = document.getElementById("dish")
var price = document.getElementById("price")
var tab1 = document.getElementById("tab1")
var tab2 = document.getElementById("tab2")
addbtn.addEventListener("click", addtolist);
function addtolist() {
    // creating object 
    let object = { Table: table.value, Dish : dish.value, Price : price.value}

    // adding to backend and showing on screen
    axios.post("https://crudcrud.com/api/05a7ef7624f84a888c76d33e78835f92/todo", object)
    .then(()=>location.reload())
    showonscreen(object)
    
}

// On loading dom
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/05a7ef7624f84a888c76d33e78835f92/todo")
        .then((data) => {
            for(i=0;i<data.data.length;i++){
                showonscreen(data.data[i])
            }
        }
        )
});

function showonscreen(obj) {
    // creating list Element
    let list = document.createElement("li")
    list.className = "list-group-item"
    list.setAttribute("flag","false")
    list.appendChild(document.createTextNode(`Table : ${obj.Table}  , Dish : ${obj.Dish} ,Price : ${obj.Price}`));

    // creating and appending done bt in list
    let done = document.createElement("button");
    done.className = "btn btn-warning col-sm-1 float-end"
    done.appendChild(document.createTextNode("Delete"));
    list.appendChild(done)


    // appending list in ul
    if(obj.Table=="Table 1"){ 
        tab1.appendChild(list)}
    else {
        tab2.appendChild(list)}

    // delete btn fuctionality
    done.addEventListener("click",changeflag);
    function changeflag(e){
        axios.delete(`https://crudcrud.com/api/05a7ef7624f84a888c76d33e78835f92/todo/${obj._id}`)
        .then(()=>location.reload())

        }

    

}














