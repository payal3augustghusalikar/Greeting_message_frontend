// // const url = 'http://localhost:2000/greetings';
// // console.log(typeof(url));

// // const url1 = 'http://dummy.restapiexample.com/api/v1/employees'
// // console.log(typeof(url1));
// const URL = "http://localhost:2000/greetings";

// //let regexValidation = new RegExp(/^[A-Za-z]{3,}$/);

// getData = () => {
//     fetch("http://localhost:2000/greetings")
//         .then((response) => {
//             if (!response.ok) {
//                 throw Error("ERROR");
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data.data);
//             const html = data.data
//                 .map((greeting) => {
//                     return `
//           <div class="user">
//           <pre> ${greeting._id}</pre>
//           <pre>${greeting.name}</pre>
//           <pre>${greeting.message}</pre>
//          <pre>${(greeting.createdAt).substring(0, 10)}</pre>
//          <pre> ${post.createdAt.split("T")[0]}</pre>;
//           <div class='editOnCards'><img src="./assets/edit_icon3.png" onclick="editPopup('${greeting._id},'${greeting.name}','${greeting.message}')"></div>
//         <div class='deleteOnCards'><img src="./assets/delete_icon3.png" onclick="deletePopup('${greeting._id}')"></div>
//           </div>`;
//                 })
//                 .join("");
//             console.log(html);
//             document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };

// addEventListener("click", getData());

// function addGreeting(greeting) {
//     greeting.preventDefault();
//     let firstName = document.querySelector(".firstName").value;
//     let lastName = document.querySelector(".lastName").value;
//     let form = document.querySelector(".formPopup");
//     let firstNameError = document.querySelector(".firstNameError");
//     let lastNameError = document.querySelector(".lastNameError");
//     if (!validFormInputs(firstName) || !validFormInputs(lastName)) {
//         form.addEventListener("submit", (e) => {
//             firstNameError.innerHTML = " ";
//             lastNameError.innerHTML = " ";
//             e.preventDefault();
//             let firstNameMessage = [];
//             let lastNameMessage = [];
//             if (firstName.length < 3) {
//                 firstNameMessage.push("first name should be greater than 3 char");
//             }
//             if (!validFormInputs(firstName)) {
//                 firstNameMessage.push("first name should not contain number");
//             }
//             if (lastName.length < 3) {
//                 lastNameMessage.push("last name should be greater than 3 char");
//             }
//             if (!validFormInputs(lastName)) {
//                 lastNameMessage.push("last name should not contain number");
//             }
//             if (firstNameMessage.length > 0)
//                 firstNameError.innerHTML = firstNameMessage.join(", ");
//             if (lastNameMessage.length > 0)
//                 lastNameError.innerHTML = lastNameMessage.join(", ");
//         });
//     } else {
//         fetch(URL, {
//                 method: "POST",
//                 headers: {
//                     Accept: "application/json, text/plain, */*",
//                     "Content-type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     name: firstName,
//                     message: lastName,
//                 }),
//             })
//             .then((response) => {
//                 response.json();
//                 alert("Greeting successfully added");
//             })
//             .catch((err) => {
//                 return err;
//             });
//         closeForm();
//     }
// }

// //use to display the add form
// function openForm() {
//     document.querySelector(".formPopup").style.display = "block";
// }

// //use to hide the add form
// function closeForm() {
//     document.querySelector(".formPopup").style.display = "none";
// }

// //use to add the data on submit
// document.getElementById("addpost").addEventListener("submit", addGreeting);

// function validFormInputs(name) {
//     return /^[a-zA-Z]{3,}$/.test(name);
// }

// deleteGreeting = (id) => {
//     if (id == "undefined") {
//         alert("Id cant be undefined");
//         closeDeletePopup();
//         getData();
//     } else {
//         let parameters = {
//             method: "DELETE",
//         };
//         fetch(`${url}${id}`, parameters)
//             .then(() => {
//                 alert("Greeting deleted Successfully");
//                 closeDeletePopup();
//                 getData();
//             })
//             .catch(() =>
//                 alert("Error occcured while updating greeting try again..!!")
//             );
//         document.querySelector(".deleteBoxConformation").style.display = "none";
//     }
// };

// // deletePopup = (id) => {
// //     document.getElementById("editOnCards").addEventListener("delete", deleteGreeting(id));

// //     // document.querySelector(".deleteBoxConformation").style.display = "block";
// //     document.querySelector(".deleteBoxConformation").style.display = "block";
// //     document
// //         .getElementById("delete")
// //         .addEventListener("delete", deleteGreeting(id));
// // };

// closeDeletePopup = () => {
//     document.querySelector(".deleteBoxConformation").style.display = "none";
// };

// deletePopup = (id) => {
//     output = `
//     <div class="deleteBoxConformation">
//     <p> Do you want to delete this greeting? </p>
//     <button type="button" class="delete-button1"onclick="deleteGreeting('${id}')">Delete</button>
//     <button type="button" class="delete-button2" onclick="closeDeletePopup()">Cancle</button>
//     </div>`;
//     document.querySelector(".modal-content").innerHTML = output;
//     document.getElementById("deletePost").addEventListener("delete", deleteGreeting(id));
// };

// // closeDeletePopup = () => {
// //     document.querySelector(".deleteBoxConformation").style.display = "none";
// // };





// const url = 'http://localhost:2000/greetings';
// console.log(typeof(url));

// const url1 = 'http://dummy.restapiexample.com/api/v1/employees'
// console.log(typeof(url1));
const URL = "http://localhost:2000/greetings";

let regexValidation = new RegExp(/^[A-Za-z]{3,}$/);

getData = () => {
    fetch(URL)
        .then((response) => {
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data.data);
            const html = data.data
                .map((greeting) => {
                    return `
          <div class="user">
          <p> ${greeting._id}</p>
          <p>${greeting.name}</p>
          <p>${greeting.message}</p>
          <pre>${(greeting.createdAt).substring(0, 10)}</pre>
          <div class='editOnCards'><img src="./assets/edit_icon3.png" onclick="openFormToEdit('${greeting._id},'${greeting.name}','${greeting.message}')"></div>
          <div class='deleteOnCards'><img src="./assets/delete_icon3.png" onclick="deletePopup('${greeting._id}')"></div>
          </div>`;
                })
                .join("");
            console.log(html);
            document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
        })
        .catch((error) => {
            console.log(error);
        });
};

addEventListener("click", getData());



function addGreeting(greeting) {
    greeting.preventDefault();
    let firstName = document.querySelector(".firstName").value;
    let lastName = document.querySelector(".lastName").value;
    let form = document.querySelector(".formPopup");
    let firstNameError = document.querySelector(".firstNameError");
    let lastNameError = document.querySelector(".lastNameError");
    if (!validFormInputs.test(firstName) || !validFormInputs.test(lastName)) {
        form.addEventListener("submit", (e) => {
            firstNameError.innerHTML = " ";
            lastNameError.innerHTML = " ";
            e.preventDefault();
            let firstNameMessage = [];
            let lastNameMessage = [];
            if (firstName.length < 3) {
                document.querySelector(".firstNameError").style.cssText +=
                    "color: #d02525";
                firstNameMessage.push("first name should be greater than 3 char");
            }
            if (!validFormInputs.test(firstName)) {
                document.querySelector(".firstNameError").style.cssText +=
                    "color: #d02525";
                firstNameMessage.push("first name should not contain number");
            }
            if (lastName.length < 3) {
                lastNameMessage.push("last name should be greater than 3 char");
            }
            if (!validFormInputs.test(lastName)) {
                lastNameMessage.push("last name should not contain number");
            }
            if (firstNameMessage.length > 0)
                firstNameError.innerHTML = firstNameMessage.join(", ");
            if (lastNameMessage.length > 0)
                lastNameError.innerHTML = lastNameMessage.join(", ");
        });
    } else {
        fetch(URL, {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    name: firstName,
                    message: lastName,
                }),
            })
            .then((response) => {
                response.json();
                alert("Greeting successfully added");
                getData()
            })
            .catch((err) => {
                return err;
            });
        closeForm();

    }
}



// function addGreeting(greeting) {
//     greeting.preventDefault();
//     let firstName = document.querySelector(".firstName").value;
//     let lastName = document.querySelector(".lastName").value;
//     let form = document.querySelector(".formPopup");
//     let firstNameError = document.querySelector(".firstNameError");
//     let lastNameError = document.querySelector(".lastNameError");
//     if (!validFormInputs(firstName) || !validFormInputs(lastName)) {
//         form.addEventListener("submit", (e) => {
//             firstNameError.innerHTML = " ";
//             lastNameError.innerHTML = " ";
//             e.preventDefault();
//             let firstNameMessage = [];
//             let lastNameMessage = [];
//             if (firstName.length < 3) {
//                 firstNameMessage.push("first name should be greater than 3 char");
//             }
//             if (!validFormInputs(firstName)) {
//                 firstNameMessage.push("first name should not contain number");
//             }
//             if (lastName.length < 3) {
//                 lastNameMessage.push("last name should be greater than 3 char");
//             }
//             if (!validFormInputs(lastName)) {
//                 lastNameMessage.push("last name should not contain number");
//             }
//             if (firstNameMessage.length > 0)
//                 firstNameError.innerHTML = firstNameMessage.join(", ");
//             if (lastNameMessage.length > 0)
//                 lastNameError.innerHTML = lastNameMessage.join(", ");
//         });
//     } else {
//         fetch(URL, {
//                 method: "POST",
//                 headers: {
//                     Accept: "application/json, text/plain, */*",
//                     "Content-type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     name: firstName,
//                     message: lastName,
//                 }),
//             })
//             .then((response) => {
//                 response.json();
//                 alert("Greeting successfully added");
//             })
//             .catch((err) => {
//                 return err;
//             });
//         closeForm();
//         getData()
//     }
// }


//use to display the add form
function openForm() {
    document.querySelector(".formPopup").style.display = "block";
}

// function openEditForm(id, name, message) {
//     document.querySelector(".editFormPopup").style.display = "block";
//     document.getElementById("editPost").addEventListener("submit", editGreeting(id, name, message));
// }


//use to hide the add form
function closeForm() {
    document.querySelector(".formPopup").style.display = "none";
}

//use to add the data on submit
document.getElementById("addpost").addEventListener("submit", addGreeting);


// function validFormInputs(name) {
//     return /^[a-zA-Z]{3,}$/.test(name);
// }

let validFormInputs = new RegExp(/^[A-Za-z]{3,}$/);


// working codeof delete greting withoout shoeing popup

deleteGreeting = (id) => {
    if (id == "undefined") {
        alert("Id cant be undefined");
        closeDeletePopup();
        getData();
    } else {
        fetch(`${URL}/${id}`, { method: "DELETE" })
            .then(() => {
                alert("Greeting deleted Successfully");
                // closeDeletePopup();
                getData();
            })
            .catch(() =>
                alert("Error occcured while updating greeting try again..!!")
            );
        document.querySelector(".deleteBoxConformation").style.display = "none";
    }
};

deletePopup = (id) => {
    document.querySelector(".deleteBoxConformation").style.display = "block";
    document.getElementById("deleteOne").addEventListener("click", deleteGreeting(id));
    // document.querySelector("delete").addEventListener("delete", deleteGreeting(id))
};

closeDeletePopup = () => {
    document.querySelector(".deleteBoxConformation").style.display = "none";
};
//document.getElementById("deletepost").addEventListener("delete", deleteGreeting(id));
//document.getElementById("deletepost").addEventListener("delete", deleteGreeting(id));
//document.getElementById(".delete-button1").addEventListener("delete", deleteGreeting(id));



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



// editGreetings = (id, name, message) => {
//     if (greeting._id == "undefined") {
//         alert("Id cant be undefined");
//     } else
//     // var greeting = json.parse(data);
//         greeting.preventDefault();
//     let firstName = document.querySelector(".firstNameEdit").value;
//     let lastName = document.querySelector(".lastNameEdit").value;
//     let ids = document.getElementById("idCollect").innerHTML;
//     let form = document.querySelector(".formPopups");
//     let firstNameError = document.querySelector(".firstNameEror");
//     let lastNameError = document.querySelector(".lastNameEror");

//     if (!validFormInputs(firstName) || !validFormInputs(lastName)) {
//         form.addEventListener("submit", (e) => {
//             firstNameError.innerHTML = " ";
//             lastNameError.innerHTML = " ";
//             e.preventDefault();
//             let firstNameMessage = [];
//             let lastNameMessage = [];
//             if (firstName.length < 3) {
//                 firstNameMessage.push("first name should be greater than 3 char");
//             }
//             if (!validFormInputs(firstName)) {
//                 firstNameMessage.push("first name should not contain number");
//             }
//             if (lastName.length < 3) {
//                 lastNameMessage.push("last name should be greater than 3 char");
//             }
//             if (!validFormInputs(lastName)) {
//                 lastNameMessage.push("last name should not contain number");
//             }
//             if (firstNameMessage.length > 0)
//                 firstNameError.innerHTML = firstNameMessage.join(", ");
//             if (lastNameMessage.length > 0)
//                 lastNameError.innerHTML = lastNameMessage.join(", ");
//         });
//     } else {
//         fetch(`${URL}/${id}`, {
//                 method: "POST",
//                 headers: {
//                     Accept: "application/json, text/plain, */*",
//                     "Content-type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     name: firstName,
//                     message: lastName,
//                 }),
//             })
//             .then((response) => {
//                 response.json();
//                 alert("Greeting successfully updated");
//             })
//             .catch((err) => {
//                 return err;
//             });
//         closeForm();
//         getData()
//     }
// }






// function editGreetings(id) {
//     greeting.preventDefault();
//     let firstName = document.querySelector(".firstName").value;
//     let lastName = document.querySelector(".lastName").value;
//     let form = document.querySelector(".formPopup");
//     let firstNameError = document.querySelector(".firstNameError");
//     let lastNameError = document.querySelector(".lastNameError");
//     if (!validFormInputs.test(firstName) || !validFormInputs.test(lastName)) {
//         form.addEventListener("submit", (e) => {
//             firstNameError.innerHTML = " ";
//             lastNameError.innerHTML = " ";
//             e.preventDefault();
//             let firstNameMessage = [];
//             let lastNameMessage = [];
//             if (firstName.length < 3) {
//                 document.querySelector(".firstNameError").style.cssText +=
//                     "color: #d02525";
//                 firstNameMessage.push("first name should be greater than 3 char");
//             }
//             if (!validFormInputs.test(firstName)) {
//                 document.querySelector(".firstNameError").style.cssText +=
//                     "color: #d02525";
//                 firstNameMessage.push("first name should not contain number");
//             }
//             if (lastName.length < 3) {
//                 lastNameMessage.push("last name should be greater than 3 char");
//             }
//             if (!validFormInputs.test(lastName)) {
//                 lastNameMessage.push("last name should not contain number");
//             }
//             if (firstNameMessage.length > 0)
//                 firstNameError.innerHTML = firstNameMessage.join(", ");
//             if (lastNameMessage.length > 0)
//                 lastNameError.innerHTML = lastNameMessage.join(", ");
//         });
//     } else {
//         fetch(`${URL}/${id}`, {
//                 method: "POST",
//                 headers: {
//                     Accept: "application/json, text/plain, */*",
//                     "Content-type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     name: firstName,
//                     message: lastName,
//                 }),
//             })
//             .then((response) => {
//                 response.json();
//                 alert("Greeting successfully updated");
//             })
//             .catch((err) => {
//                 return err;
//             });
//         closeForm();
//         getData()
//     }
// }



// /**
//  * @description: use to display the edit form
//  * @param:{object}element
//  */
// function openFormToEdit() {
//     document.querySelector(".formPopups").style.display = "block";
//     document.getElementById("idCollect").innerHTML = greeting.id;
//     // loadGreetingById(greeting.id);

//     document.getElementById("editPost").addEventListener("submit", editGreetings());
// }

// //use to hide the edit form
// function closeEditForm() {
//     document.querySelector(".formPopups").style.display = "none";
// }



// //use to display the add form
// function openFormToEdit() {
//     document.querySelector(".formPopups").style.display = "block";
// }

// // function openEditForm(id, name, message) {
// //     document.querySelector(".editFormPopup").style.display = "block";
// //     document.getElementById("editPost").addEventListener("submit", editGreeting(id, name, message));
// // }


//use to hide the add form
function closeForm() {
    document.querySelector(".formPopup").style.display = "none";
}

//use to add the data on submit
document.getElementById("addpost").addEventListener("submit", addGreeting);









openFormToEdit = (id, name, greeting) => {

    output = `<div class="popup">
    <h2>Edit Greeting</h2>
        <form>
            <div class="box">
                <input type="text" value="${name}" autocomplete="off" required id="name">
                <label>Name</label>
            </div>
            <div class="error-box" id="invalid-name">
                * Invalid atlest 3 characters
            </div>
            <div class="box">
                <input type="text" value="${greeting}" autocomplete="off" required id="greeting">
                <label>Greeting</label>
            </div>
            <div class="error-box" id="invalid-message">
                * Invalid atlest 3 characters
            </div>
            <button type="button" class="button" onclick="editGreeting('${id}')">Save</button>
            <button type="button" class="cancel" onclick="closePopup()">Close</button>
        </form>
        </div>`
    document.querySelector(".modal-content").innerHTML = output
}

editGreeting = (id) => {
    if (id == 'undefined') {
        alert('Id cant be undefined')
        closePopup()
        getGreetings()
    } else {
        name = document.querySelector("#name").value
        greeting = document.querySelector("#greeting").value

        if (!regexValidation.test(name)) {
            document.querySelector("#invalid-name").style.cssText +=
                "color: #d02525";
        }
        if (!regexValidation.test(greeting)) {
            document.querySelector("#invalid-message").style.cssText +=
                "color: #d02525";
        }
        if (regexValidation.test(name) && regexValidation.test(name)) {
            let parameters = {
                method: 'PUT',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    name: name,
                    message: greeting
                })
            }
            fetch(`${url}${id}`, parameters)
                .then(() => {
                    alert("Greeting updated Successfully")
                    closePopup()
                    getGreetings()
                })
                .catch(() => alert("Error occcured while updating greeting try again..!!"))
            closePopup()
        }
    }
};








// closeDeletePopup = () => {
//     document.querySelector(".deleteBoxConformation").style.display = "none";
// };
// update greeting
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