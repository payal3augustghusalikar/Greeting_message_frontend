const url = 'http://localhost:3000/greetings';
console.log(typeof(url));
// async function getData(){
//   const response = await fetch('http://localhost:2000/greetings');
//   const json = await response.json();
//   console.log(json);

const url1='http://dummy.restapiexample.com/api/v1/employees'
console.log(typeof(url1));

// getData = () => {
//   fetch('https://reqres.in/api/users?page=2')
//     .then((response) => {
//       if(!response.ok) {
//         throw Error('ERROR')
//       }
//      return response.json();
//     })
//     .then((data) => {
//       console.log(data.data);
//       const html = data.data
//         .map(greeting => {
//           return `
//           <div class="user">
//           <p>id: ${greeting.id}</p>
//           <p>Name: ${greeting.first_name}</p>
//           <p>Message: ${greeting.last_name}</p>
//           </div>
//           `;
//         })
//         .join("");
//       console.log(html);
//       document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
//     })
//     .catch(error => {
//       console.log(error);
//     })
// }

// addEventListener("click", getData());

// getAllGreetings = () => {
//   url = 'http://localhost:2000/greetings'
//   // fetch(url, { mode: 'no-cors' }).then((response) => {
//     fetch(url).then((response) => {
//       return response.json();
//   }).then((greetingData) => {
//       const html = greetingData.data.map(greeting => {
//           return `<div class="greeting-element">
//           <pre>GreetingId:${greeting._id}</pre>
//           <pre>Name:${greeting.name}</pre>
//           <pre>Message:${greeting.message}</pre>
//           <pre>Created At:${greeting.createdAt}</pre>
//          </div>`
//       })
//       document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
//   }).catch((err) => console.log("Can’t access " + url));
// }

// getAllGreetings();



//       console.log(data);

//       data.forEach((element) => {
//         const columnElement = document.createElement("div");
//         columnElement.classList.add("column");
//         const cardElement = document.createElement("div");
//         cardElement.classList.add("card");
//         columnElement.appendChild(cardElement);
//         const cardGreetingElement = document.createElement("div");
//         cardGreetingElement.classList.add("card-greeting");
//         cardElement.appendChild(cardGreetingElement);
//         const figureElement = document.createElement("figure");
//         //cardGreetingElement.appendChild(figureElement);
//         const greetingElement = document.createElement("img");
//         greetingElement.src = element;
//         figureElement.appendChild(greetingElement);
//         randomElement.appendChild(columnElement);
//       }).catch((error) => {
//         consol.log(error);
//       })
//     })
// }

// addEventListener("click", getData());

// add greeting
// addGreeting = () => {
//   let parameters = {
//     method: "POST",
//     headers: { "Content-type": "application/json" },
//     body: JSON.stringify({
//       name: name,
//       greeting: greeting,
//     }),
//   };
//   fetch(url, parameters).then(() => {
//     console.log("Greeting Added Successfully");
//     getData().catch(() =>
//       console.log("Error occcured while adding greeting try again..!!")
//     );
//   });
// };

// // update greeting
// editGreeting = (id) => {
//   if (id == "undefined") {
//     console.log("Id cant be undefined");
//   } else {
//     let parameters = {
//       method: "PUT",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify({
//         name: name,
//         greeting: greeting,
//       }),
//     };
//     fetch(`${url}${id}`, parameters)
//       .then(() => {
//         consol.log("Greeting updated Successfully");
//       })
//       .catch(() =>
//         console.log("Error occcured while updating greeting try again..!!")
//       );
//   }
// };

// // delete greeting
// deleteGreeting = (id) => {
//   if (id == "undefined") {
//     console.log("Id cant be undefined");
//   } else {
//     let parameters = {
//       method: "DELETE",
//     };
//     fetch(`${url}${id}`, parameters)
//       .then(() => {
//         console.log("Greeting deleted Successfully");
//       })
//       .catch(() =>
//         console.log("Error occcured while updating greeting try again..!!")
//       );
//   }
// };

// url = "http://localhost:3000/greeting/";
// //const buttonAllcard = document.querySelector(".openAllButton");
// const card = document.querySelector(".card");
// card.innerHTML = "<h1>Basic pannel Layout</h1>";
// loadisplayetings();

// /**
//  * @description: loads the greeting data from api and add in div
//  * @returns: error if any
//  */
// function displayGreetings() {
//   fetch('http://localhost:2000/greetingsreetings')
//     .then((response) =>{return  response.json()})
//     .then((data) => {
//       const html = data.data.map(user=>{
//         return `<div class = "greeting-element">
//         <p>GreetingId:${user._id}</p>
//         <p>Name:${user.name}</p>
//         <p>Message:${user.message}</p>
//         <p>Created At:${user.createdAt}</p>
//        </div>`
//     })

// document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
// }).catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
// }
// displayGreetings()

//       let place = 0;
//       data.forEach((element) => {
//         const div = document.createElement("div");
//         div.id = element.id;
//         div.innerHTML = `<div class="card-container">
//         <div>id:${element.id} </div>
//         <div><b>Hello ${element.firstName}
//         </b>(Greeting)</div>
//         <div><b>${element.lastName}
//         </b>(name)</div>
//         <div class="time">15 min ago</div>
//             <div> <span><button id="${place}" class="card-button" onclick="deleteGreeting(this)"><img src="./images/trash-can.png"></button></span>
//           <span> <button id="${place}" class="card-button" onclick="openFormToEdit(this)"><img src="./images/square-edit-outline.png"></button>
//         </span></div></div>`;
//         place += 1;
//         card.appendChild(div);
//       });
//     })
//     .catch((err) => {
//       return err;
//     });
// }

//const url = "http://localhost:2000/greetings/";

//const randomElement = document.querySelector(".modal");

//const get = document.querySelector(".get");

// function getData() {
//   fetch(url)
//     .then((response) => {
//       response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       consol.log(error);
//     });
//   }

// getData()

// getData();
//fetch(`http://localhost:2000/greetings/`).then((apidata
// ) => {
// //console.log(apidata);
// return apidata.json();
// })
// .then((actualdata) => {
// console.log(actualdata);

// })
// .catch((error) => {
//     consol.log(error);
// });

// // let myBtn = document.getElementById("myBtn")
// // let content = document.getElementById("content")
// // function getdata() {
// //     fetch(`http://localhost:2000/greetings/`).then((responce)
// //      => {
// //     //console.log(apidata);
// //     return responce.text();
// //     })
// //     .then((actualdata) => {
// //     console.log(actualdata);
// //     })
// //     .catch((error) => {
// //         consol.log(error);
// //     });
// // }

// // function getdata() {
// //     url="https://api.github.com/users"
// //     fetch(url).then((responce)
// //      => {
// //     //console.log(apidata);
// //     return responce.json();
// //     })
// //     .then((actualdata) => {
// //     console.log(actualdata);
// //     })
// //     .catch((error) => {
// //         consol.log(error);
// //     });
// // }

// // getdata()

// // post method

// let data = {
//   name: 'name',
//   greeting : 'greeting'
// }

// var request = new Request(url, {
//     method: 'POST',
//     body: data,
//     headers: new Headers()
// });

// fetch(request)
// .then(function() {
//     // Handle response we get from the API
// })

// // const data = { username: 'example' };

// // fetch(url, {
// //   method: 'POST', // or 'PUT'
// //   headers: {
// //     'Content-Type': 'application/json',
// //   },
// //   body: JSON.stringify(data),
// // })
// // .then(response => response.json())
// // .then(data => {
// //   console.log('Success:', data);
// // })
// // .catch((error) => {
// //   console.error('Error:', error);
// // });

// addGreeting = () => {

//     let parameters = {
//       method: 'POST',
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify({
//         name: 'name',
//         greeting: 'greeting'
//       })
//     }
//     fetch(url, parameters)
//       .then(() => {
//         getData();
//         console.log("Greeting Added Successfully")
//         getData();
//       })
//       .catch(() => console.log("Error occcured while adding greeting try again..!!"))
//     getData();
//   }

// editGreeting = (id) => {
//   if (id == 'undefined') {
//     console.log('Id cant be undefined')
//     getData();
//     getData();
//   }
//   else {
//       let parameters = {
//         method: 'PUT',
//         headers: { "Content-type": "application/json" },
//         body: JSON.stringify({
//           name: name,
//           greeting: greeting
//         })
//       }
//       fetch(`${url}${id}`, parameters)
//         .then(() => {
//           console.log("Greeting updated Successfully")
//           getData();
//         })
//         .catch(() => console.log("Error occcured while updating greeting try again..!!"))
//       getData();
//     }
//   }

// deleteGreeting = (id) => {
//   if (id == 'undefined') {
//     console.log('Id cant be undefined')
//     getData();
//   }
//   else {
//     let parameters = {
//       method: 'DELETE'
//     }
//     fetch(`${url}${id}`, parameters)
//       .then(() => {
//         console.log("Greeting deleted Successfully")
//         getData();
//       })
//       .catch(() => console.log("Error occcured while updating greeting try again..!!"))
//   }
// };
