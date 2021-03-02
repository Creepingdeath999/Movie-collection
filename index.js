const empty = document.getElementById("empty");
const Emptybutton = empty.firstElementChild;
const addmovie = document.getElementById("addmovie");
const movies = document.getElementById("movies");
const addmovieBtn = addmovie.querySelector("button");
//input fields
const movieName = document.getElementById("name");
const genre = document.getElementById("genre");
const imgUrl = document.getElementById("imgUrl");
const rating = document.getElementById("rating");
const date = document.getElementById("date");
const director=document.getElementById("director");

const Showinput = () => {
  addmovie.classList.toggle("visible");
  empty.classList.toggle("invisible");
};

function createMovie() {
  const movieElement = document.createElement("div");
  movieElement.className = "movie";
  movieElement.innerHTML = `
  <div>
          <img
            src="${imgUrl.value}"
            alt="${movieName.value}"
          />
        </div>
        <div>
            <h1>Name:</h1>
            <h1>${movieName.value}</h1>
        </div>
        <div>
            <h1>Genre:</h1>
            <h1>${genre.value}</h1>
        </div>
        <div>
            <h1>Rating:</h1>
            <h1>${rating.value}</h1>
        </div>
        <div>
            <h1>Release Date:</h1>
            <h1>${date.value}</h1>
        </div>
        <div>
        <h1>Director:</h1>
        <h1>${director.value}</h1>
    </div>
    <button class="delete">Remove</button>
      </div>
  `;
  movies.append(movieElement);
  renderMovie();
}


function removeMovie(e) {
  let del = e.target;
  if (del.classList[0] === "delete") {
    const todel = del.parentElement;
    todel.remove();
    console.log(del);
  }
}

function renderMovie() {
  addmovie.classList.toggle("invisible");
  movies.classList.toggle("visible");
}
Emptybutton.addEventListener("click", Showinput);
addmovieBtn.addEventListener('click', createMovie);

movies.querySelector('button').addEventListener('click',()=>{
    addmovie.classList.toggle('invisible');
    movies.classList.toggle('visible');
})

addmovieBtn.nextElementSibling.addEventListener("click", ()=>{
    addmovie.classList.toggle("invisible");
    movies.classList.toggle('visible');
})
movies.addEventListener('click',removeMovie);