const modal = document.getElementById('modal');
const screen = document.getElementById('screen');
const con = document.getElementById("staticBackdrop");
const url = 'https://api.tvmaze.com/search/shows?q=girls';
async function project() {
  const hello = await fetch(url);
  const data = await hello.json();
  console.log(data);
  data.forEach((element, index) => {
    screen.innerHTML += `<figure><img src="${element.show.image.original}" alt=""><figcaption>${element.show.name}</figcaption>
       <span>Likes</span>
       <button class="like" onclick=like('${element.show.name}')>
       <i class="fa-sharp fa-regular fa-heart"></i></button>
        <div>
        
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${index}">
          Comment
        </button>
        
        
        <div class="modal fade" id="staticBackdrop${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">${element.show.name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div
        </div> 
     <div>
     <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
     Reservation
   </button>
   </div>
   </figure>`;
  });
}

project();
function comment() {
  document.getElementById('modal').style.visibility = 'inherit';
  project()
  data.forEach((element) => {
    con.innerHTML += `<div><figure><img src="${element.show.image.original}" alt="">
    <figcaption>${element.show.name}</figcaption>
    <span>Likes</span>
    <button class="like" onclick=like()>
    <i class="fa-sharp fa-regular fa-heart"></i></button>
    <div><button type="button" onclick=comment() class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Comment
  </button>
  <div><button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Reservation
  </button></div></figure></div>`;
  });
}

let app_id;
async function createId(){
  const helli = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
    method: 'POST',
  });
  let resp = await helli.text();
  console.log(resp);
  app_id = resp
}
createId()
async function like(id) {
  const dat = await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/"+app_id+"/likes", {
    method: 'POST',
    body: {
      item_id : id
    }
  });
  console.log(dat);
}
