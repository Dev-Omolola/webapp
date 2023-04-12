const modal = document.getElementById('modal');
const screen = document.getElementById('screen');
const con = document.getElementById('staticBackdrop');
const id = 'u71uT5FEhEFPkcor9k4N';
const theLikes = document.getElementById('thelikes');
const theComments = document.getElementById('theComments');
let kkk;
// const commenet_array = [];
const reservation_array = [];
screen.style.backgroundColor = "rgb(255,225,204)";
const url = 'https://api.tvmaze.com/search/shows?q=girls';

async function showcomment(movie_id) {
  const id = 'u71uT5FEhEFPkcor9k4N';
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const comments = await fetch(`${url}${id}/comments?item_id=${movie_id}`);
  const commentsData = await comments.json();
  console.log(commentsData);

let commentsHTML = '';

  for (let index = 0; index < commentsData.length; index++) {
    const { username } = commentsData[index];
    const { comment } = commentsData[index];
    commentsHTML += `<p>${username}: ${comment}</p>`;
  }

  document.getElementById(`theComments${movie_id}`).innerHTML = commentsHTML;
}

async function showreservation(movie_id) {
  const id = 'u71uT5FEhEFPkcor9k4N';
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const reservations = await fetch(`${url}${id}/reservations?item_id=${movie_id}`);
  const reservationsData = await reservations.json();
  console.log(reservationsData);

  let reservationHTML = '';
  for (let index = 0; index < reservationsData.length; index++) {
    const reservation = reservationsData[index];
    reservationHTML += `<p>${reservation.username} reserved from ${reservation.date_start} to ${reservation.date_end}</p>`;
  }

  document.getElementById(`theReservations${movie_id}`).innerHTML = reservationHTML;
}

async function project(kkk) {
  const hello = await fetch(url);
  const data = await hello.json();
  console.log(data);
  data.forEach((element, index) => {
    kkk = element.show.id;
    showNumOfLikes(kkk, theLikes);
    screen.innerHTML += `
   <figure>
        <img class="img" src="${element.show.image.original}" alt="">
        <figcaption>
            ${element.show.name}
        </figcaption>
        <figcaption>${element.show.genres}</figcaption>
           <span><span id="thelikes${kkk}"></span> Likes</span>
           <button class="like" onclick='like(${element.show.id})'>
              <i class="fa-sharp fa-regular fa-heart"></i>
            </button>
      <div>
        <div>
          
          <button onclick='showcomment(${element.show.id})' type="button" class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop${index}">
            Comment
          </button>
        
          <div class="modal fade" id="staticBackdrop${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content text-white">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">${element.show.name}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <figure>
                    <div class="img-div">
                      <img src="${element.show.image.original}" alt="">
                    </div>
                    <figcaption>
                       ${element.show.name}
                    </figcaption>
                    
                    
                    <div class="comment">
                      
                      <fieldset>
                        <input type="text" name="" id="comment-name${kkk}" placeholder="Name">
                        <textarea name="" placeholder="Your insights" id="comment-text${kkk}" cols="30" rows="10" class="my-4"></textarea>
                      </fieldset>
                      <button type="button" class="comment-btn" onclick="comment_btn(${element.show.id}, ${index})">
                        Comment
                      </button>
                    </div>
                  </figure>
                  <div id="comment-screen${kkk}">
                        <p>Comments</p>
                        <span id="theComments${kkk}"></span>
                      </div>
                </div>
                
              </div>
            </div>
          </div
        </div>
      </div>
        <!-- Button trigger modal -->
        <button onclick='showReservation(${element.show.id})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop22${index}">
        Reservation
        </button>

      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop22${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content bg bg-dark text-white">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel22">${element.show.name}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <figure>
                <div class="img-div">
                  <img src="${element.show.image.original}" alt="">
                </div>
                <figcaption>${element.show.name}</figcaption>
          
                <div>
                  
                   <fieldset>
                     <div class="my-2 div-input"><label for="">Name: </label><input type="text" name="" id="Reserve-name${kkk}" placeholder="Name"></div>
                     <div class="my-2 div-input"><label for="">Start-Date: </label><input type="date" name="" id="Reserve-date${kkk}"></div>
                     <div class="my-2 div-input"><label for="">End-Date: </label><input type="date" name="" id="Reserve-end${kkk}"></div>
                  
                   </fieldset>
                   <button type="button" onclick="Reservation_btn(${element.show.id}, ${index})" class="reserve_btn">
                     Reserve
                   </button>
                 </div>
              </figure>
              <div id="reservation-screen">
              <h4>Reservations</h4>
              <h5 id="theReservations${kkk}"></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
  
   </figure>`;
  });
  console.log(kkk);
}
// showNumOfLikes(element.show.id, document.getElementById(`thelikes${index}`));
project();

const screen1 = document.getElementById('comment-screen');



async function like(movie_id) {
  const id = 'u71uT5FEhEFPkcor9k4N';
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response = await fetch(`${url}${id}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: movie_id,
    }),
  });
  console.log(movie_id);
  const data = await response.text();
  console.log(data);
  showNumOfLikes(movie_id);
}
async function showNumOfLikes(movie_id) {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const liked = await fetch(`${url}${id}/likes`);
  const myLikes = await liked.json();
  console.log(myLikes, 'response here!!!');

  const foundLikes = myLikes.find((el) => el.item_id == movie_id);
  console.log(foundLikes);
  console.log(foundLikes.likes);
  document.getElementById(`thelikes${movie_id}`).innerHTML = foundLikes.likes;
}

async function comment_btn(movie_id) {
  const inp = document.getElementById(`comment-name${movie_id}`);
  const txt = document.getElementById(`comment-text${movie_id}`);
  const id = 'u71uT5FEhEFPkcor9k4N';
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response = await fetch(`${url}${id}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: movie_id,
      username: inp.value,
      comment: txt.value,
    }),
  });
  console.log(movie_id);
  const data = await response.text();
  console.log(data);
  showcomment(movie_id);
}

async function Reservation_btn(movie_id) {
  const reserver = document.getElementById(`Reservation-name${movie_id}`);
  const reservationstartdate = document.getElementById(`Reservation-date${movie_id}`);
  const reservationenddate = document.getElementById(`Reservation-end${movie_id}`);

  const id = 'u71uT5FEhEFPkcor9k4N';
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response = await fetch(`${url}${id}/reservations/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: movie_id,
      username: reserver.value,
      date_start: Number(reservationstartdate.value),
      date_end: Number(reservationenddate.value),

    }),
  });
  console.log(movie_id);
  const data = await response.text();
  console.log(data);
  showreservation(movie_id);
}

