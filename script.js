// function to create a DOM elements
function element(tag, classname, id, text) {
  let tags = document.createElement(tag);
  tags.classList = classname;
  tags.id = id;
  tags.innerHTML = text;
  return tags;
}

//creating a container,heading and row

let container = element("div", "container", "", "");
const h1 = element("h1", "text-center", "title", "Game Of Thrones");
const row = element("div", "row", "", "");

//fecting the restcounties api
const response = fetch("https://thronesapi.com/api/v2/Characters");
response
  .then((data) => data.json())
  .then((result) => {
    //for loop for allocating the countries details to card
    for (let i = 0; i < result.length; i++) {
      const col = document.createElement("div");
      col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
      col.innerHTML = `
      <div class="card h-100">
      <div class="card-header">
      <h5 class="card-title text-center">${result[i].fullName} </h5>
      </div>
      <div class="img-box">
      <img src="${result[i].imageUrl}" class="card-img-top" alt="Game of throne character image" />
      </div>
      <div class="card-body">
      <div class="card-text">Family Name: ${result[i].family}</div>
      <div class="card-text">Title: ${result[i].title}</div>
      </div>
      </div>
  
      `;
      row.append(col);
    }
  });

// Appending to view in webpage
document.body.append(h1, container);
container.append(row);
