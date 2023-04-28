// async function like(movie_id) {
//     const id = '1rGCCjB4JowsoaXXmt5T';
//     const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
//     const response = await fetch(`${url}${id}/likes`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         item_id: movie_id,
//       }),
//     });
//     console.log(movie_id);
//     const data = await response.text();
//     console.log(data);
//     showNumOfLikes(movie_id);
//   }
//   async function showNumOfLikes(movie_id) {
//     const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
//     const liked = await fetch(`${url}${id}/likes`);
//     const myLikes = await liked.json();
//     console.log(myLikes, 'response here!!!');
  
//     const foundLikes = myLikes.find((el) => el.item_id == movie_id);
//     console.log(foundLikes);
//     console.log(foundLikes.likes);
//     document.getElementById(`thelikes${movie_id}`).innerHTML = foundLikes.likes;
//   }
