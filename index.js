const URL = "http://localhost:2000/greetings";

/**
 *  function to fetch all greetings 
 */
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
          <pre>${greeting.createdAt.substring(0, 10)}</pre>   
          <div class='editOnCards'><img src="./assets/edit_icon3.png" onclick="openFormToEdit('${greeting}')"></div>
          <div class='deleteOnCards'><img src="./assets/delete_icon3.png" onclick="deletePopup('${
            greeting._id
          }')"></div>
          </div>`;
                })
                .join("");
            document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
        })
        .catch((error) => {
            console.log(error);
        });
}; {}

//to load the all grettings
addEventListener("click", getData());

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
//                 document.querySelector(".firstNameError").style.cssText +=
//                     "color: #d02525";
//                 firstNameMessage.push("first name should be greater than 3 char");
//             }
//             if (!validFormInputs(firstName)) {
//                 document.querySelector(".firstNameError").style.cssText +=
//                     "color: #d02525";
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
//         })

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
//                 getData()
//             })
//             .catch((err) => {
//                 return err;
//             });
//         closeForm();

//     }
// }

/**
 * vallidate the user input and calls add function
 * @param {*} greeting
 */
function addGreeting(greeting) {
    greeting.preventDefault();
    let firstName = document.querySelector(".firstName").value;
    let lastName = document.querySelector(".lastName").value;
    let form = document.querySelector(".formPopup");
    let firstNameError = document.querySelector(".firstNameError");
    let lastNameError = document.querySelector(".lastNameError");

    if (!validFormInputs(firstName) || !validFormInputs(lastName)) {
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
            if (!validFormInputs(firstName)) {
                document.querySelector(".firstNameError").style.cssText +=
                    "color: #d02525";
                firstNameMessage.push("first name should not contain number");
            }
            if (lastName.length < 3) {
                lastNameMessage.push("last name should be greater than 3 char");
            }
            if (!validFormInputs(lastName)) {
                lastNameMessage.push("last name should not contain number");
            }
            if (firstNameMessage.length > 0)
                firstNameError.innerHTML = firstNameMessage.join(", ");
            if (lastNameMessage.length > 0)
                lastNameError.innerHTML = lastNameMessage.join(", ");
        });
        getData();
    } else
        add(firstName, lastName);
}

/**
 * add the greetings
 * @param{firstName, lastName}
 */
add = (firstName, lastName) => {
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
        })
        .catch((err) => {
            return err;
        });
    closeForm();
};

//use to display the add form
function openForm() {
    document.querySelector(".formPopup").style.display = "block";
}

//use to hide the add form
function closeForm() {
    document.querySelector(".formPopup").style.display = "none";
}

//use to add the data on submit
document.getElementById("addpost").addEventListener("submit", addGreeting);

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
                closeDeletePopup();
                getData();
            })
            .catch(() =>
                alert("Error occcured while updating greeting try again..!!")
            );
        document.querySelector(".deleteBoxConformation").style.display = "none";
    }
};

/**
 * delete the popup
 * @param{id}
 */
deletePopup = (id) => {
    document.querySelector(".deleteBoxConformation").style.display = "block";
    document
        .getElementById("deletePost")
        .addEventListener("submit", deleteGreeting(id));
    document
        .querySelector("delete")
        .addEventListener("delete", deleteGreeting(id));
};

//use to close the popup
closeDeletePopup = () => {
    document.querySelector(".deleteBoxConformation").style.display = "none";
};

/**
 * @description: edit the existing greeting in the api using id
 * @param{id}
 */
function editGreetings(id) {
    let firstName = document.querySelector(".firstNameEdit").value;
    let lastName = document.querySelector(".lastNameEdit").value;
    let form = document.querySelector(".formPopups");
    let firstNameError = document.querySelector(".firstNameEror");
    let lastNameError = document.querySelector(".lastNameEror");
    if (!validFormInputs(firstName) || !validFormInputs(lastName)) {
        form.addEventListener("submit", (e) => {
            firstNameError.innerHTML = " ";
            lastNameError.innerHTML = " ";
            e.preventDefault();
            let firstNameMessage = [];
            let lastNameMessage = [];
            if (firstName.length < 3) {
                firstNameMessage.push("first name should be greater than 3 char");
            }
            if (!validFormInputs(firstName)) {
                firstNameMessage.push("first name should not contain number");
            }
            if (lastName.length < 3) {
                lastNameMessage.push("last name should be greater than 3 char");
            }
            if (!validFormInputs(lastName)) {
                lastNameMessage.push("last name should not contain number");
            }
            if (firstNameMessage.length > 0)
                firstNameError.innerHTML = firstNameMessage.join(", ");
            if (lastNameMessage.length > 0)
                lastNameError.innerHTML = lastNameMessage.join(", ");
        });
    } else {
        edit(firstName, lastName, id);
    }
}

/**
 * edit the greeting
 * @param{firstName, lastName, id} takes from editGreetings
 */
edit = (firstName, lastName, id) => {
    fetch(`${URL}/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name: firstName,
                message: lastName,
            }),
        })
        .then((response) => {
            response.json();
            if (response.ok) {
                alert("successfully edited");
            }
        })
        .catch((err) => {
            return err;
        });
    closeEditForm();
};

/**
 * @description: validate the name from form
 * @returns: true or false
 * @param:{string}name
 */
function validFormInputs(name) {
    return /^[a-zA-Z]{3,}$/.test(name);
}

/**
 * @description: use to display the edit form
 * @param:{object}element
 */
function openFormToEdit(element) {
    document.querySelector(".formPopups").style.display = "block";
    document
        .getElementById("editpost")
        .addEventListener("click", editGreetings(element.id));
}

//use to hide the edit form
function closeEditForm() {
    document.querySelector(".formPopups").style.display = "none";
}