const URL = "http://localhost:2000/greetings";


/**
 * @description: validate the name from form
 * @returns: true or false
 * @param:{string}name
 */
function validFormInputs(name) {
    return /^[a-zA-Z]{3,}$/.test(name);
}



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
          <div class='editOnCards'><img src="./assets/edit_icon3.png" onclick="editGreetingPopup('${greeting._id}')"></div>
          <div class='deleteOnCards'><img src="./assets/delete_icon3.png" onclick="deleteGreetingPopup('${
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
};

//to load the all grettings
addEventListener("click", getData());

/**
 * vallidate the user input and calls add function
 * @param {*} greeting
 */
function addGreeting() {
    // greeting.preventDefault();
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
        getData();
    } else add(firstName, lastName);
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
            location.reload();
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

deleteGreetingPopup = (id) => {
    document.querySelector(".delete-form-popup").style.display = "flex";
    document.getElementById("deleteRecord").addEventListener("click", () => {
        deleteGreeting(id);
    });
};


document.getElementById("closeDeleteGreetingForm").addEventListener('click', () => {
    document.querySelector('.delete-form-popup').style.display = 'none';
})

deleteGreeting = (greetingId) => {
    let id = greetingId;
    url = `${URL}/${id}`;
    fetch(url, { method: "DELETE" })
        .then((response) => {
            console.log(response)
            alert("Greeting deleted Successfully");
            location.reload();
            return response.json();
        }).then((greetingData) => {
            console.log(greetingData);

        }).catch((err) => {
            console.log(err);
            alert("Error occcured while deleting greeting try again..!!");
        })
}


// /**
//  * @description: edit the existing greeting in the api using id
//  * @param{id}
//  */
// function editGreetings(id) {
//     let firstName = document.querySelector(".firstNameEdit").value;
//     let lastName = document.querySelector(".lastNameEdit").value;
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
//         edit(firstName, lastName, id);
//     }
// }



// /**
//  * edit the greeting
//  * @param{firstName, lastName, id} takes from editGreetings
//  */
// edit = (firstName, lastName, id) => {
//     fetch(`${URL}/${id}`, {
//         method: "PUT",
//         headers: {
//             Accept: "application/json",
//             "Content-type": "application/json",
//         },
//         body: JSON.stringify({
//             name: firstName,
//             message: lastName,
//         }),

//     }).then((response) => {
//         console.log(response)
//         alert("Greeting updated Successfully");
//         return response.json();
//     }).then((greetingData) => {
//         console.log(greetingData);
//     }).catch((err) => {
//         alert("Error occcured while updating greeting try again..!!");
//         console.log(err);
//     })
//     location.reload();
// }




// /**
//  * @description: use to display the edit form
//  * @param:{object}element
//  */
// function openFormToEdit(id) {
//     document.querySelector(".formPopups").style.display = "flex";
//     document
//         .getElementById("editpost")
//         .addEventListener("click", editGreetings(id));
// }

// //use to hide the edit form
// function closeEditForm() {
//     document.querySelector(".formPopups").style.display = "none";
// }










document.getElementById("closeUpdateGreetingForm").addEventListener('click', () => {
    document.querySelector('.update-form-popup').style.display = 'none';
})

editGreetingPopup = (greetingId) => {
    document.querySelector('.update-form-popup').style.display = 'flex';
    console.log(document.getElementById("updateRecord"));
    document.getElementById("updateRecord").addEventListener('click', () => {
        editGreeting(greetingId);
    });
}

editGreeting = (greetingId) => {
    document.getElementById('updateGreeting').addEventListener('submit', (e) => {
        var name = document.getElementById('updateName').value;
        var message = document.getElementById('updateMsg').value;
        let id = greetingId;
        url = `${URL}/${id}`;
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({ name: name, message: message }),
        }).then((response) => {
            console.log(response)
            return response.json();
        }).then((greetingData) => {
            console.log(greetingData);
        }).catch((err) => {
            console.log(err);
        })
    })
}