let modal = document.getElementById("modal")
let screen = document.getElementById("screen")
let url = "https://api.tvmaze.com/search/shows?q=girls"
async function project(){
    let hello = await fetch(url);
    let data = await hello.json();
    console.log(data);
     data.forEach(element => {
    screen.innerHTML += `<figure><img src="${element.show.image.original}" alt=""><figcaption>${element.show.name}</figcaption><span>Likes</span><button class="like" onclick=like()><i class="fa-sharp fa-regular fa-heart"></i></button><p><button onclick="comment()">Comment</button></p> <p><button>Reservation</button></p></figure>`
     });

    //  for (let index = 0; index < data.length; index++) {
    //     const element = data[index];
    //     screen.innerHTML += `<p>${element}</p>`
        
    //  }
}
project()
async function comment(index,element){
    document.getElementById("modal").style.display = "block"
    let hi = await fetch(url);
    let dat = await hi.json();
     console.log(dat);
     dat.forEach(element => {
    modal.innerHTML = `<figure><img src="${element.show.image.original}" alt=""><figcaption>${element.show.name}</figcaption><span>Likes</span><button><i class="fa-sharp fa-regular fa-heart"></i></button><p><button onclick="comment()">Comment</button></p> <p><button>Reservation</button></p></figure>`
     });
     
}

// async function like(){
//     let hi = await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/")
//     console.log(dat)

// }