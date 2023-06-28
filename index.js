
/* creating an array named myCollection 
The array will store the input from the user
*/

let myCollection = [];

// constructor for my C.D object 

function CD(title, author, genre, numberOfsongs, datePublished){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.numberOfsongs = numberOfsongs;
    this.datePublished = datePublished;

}

// creating a function that will display user input on the page

function renderCollection(){
    let collectionItems = document.getElementById("collectionItems");
    collectionItems.innerHTML = " "; // to avoid duplication


    
    for (let i = 0; i < myCollection.length; i++){
        let disc = myCollection[i];
        let discDisplay = document.createElement("div");
        discDisplay.setAttribute("class", "cdCollection-card")
        discDisplay.innerHTML = `
        <div class="card-header">
        <h1>${disc.title}</h1>
        </div>
        <div class="card-body">
        <p>${disc.author}</p>
        <p>${disc.genre}</p>
        <p>${disc.numberOfsongs}</p>
        <p>${disc.datePublished}</p>
        <button class="remove" onclick = "removeCD (${i})">Remove</button>
        </div>
        `;
        
        collectionItems.appendChild(discDisplay);
    }
}

// function to remove individual objects 
function removeCD(index){
    myCollection.splice(index, 1);
    renderCollection();

}



/* creating a function addCollection that will 
store create a new object based on the user input 
and store the objects into the myCollection array 
*/

function addCollection(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    let numberOfsongs = document.getElementById("songs").value;
    let datePublished = document.getElementById("date").value;
    

    let cd = new CD(title, author, genre, numberOfsongs, datePublished); // creating a new object based on user imput
    
    myCollection.push(cd);
    renderCollection();
}


// creating an event listener to the new CD btn
let newCD = document.getElementById("newCD");
newCD.addEventListener("click", function(){
    let newForm = document.getElementById("newForm");
    newForm.style.display = "block";
})

// making sure to save the inputs when user clicks on submit
document.getElementById("newForm").addEventListener("submit", function(){
    event.preventDefault();
    addCollection();
})
