/**
 * @module        app
 * @file          index.js
 * @description   functions to fetch the data from backend 
 * @author        Payal Ghusalikar <payal.ghusalikar9@gmail.com>
 * @since         12/01/2021
 *------------------------------------------------------------------------------------------------------------------*/


const URL = "http://localhost:2000/greetings";


/**
 * @description: validate the name from form
 * @returns: true or false
 * @param:{string}name
 */
function validFormInputs(name) {
    return /^[A-Z]{1}[A-za-z]{2,}$/.test(name);
}

/**
 *  @description function to fetch all greetings
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
          <pre> ${greeting._id}</pre>
          <pre>${greeting.name} (name)</pre>
          <pre>${greeting.message} (Greeting)</pre>
          <pre>${greeting.createdAt.substring(0, 10)}</pre>   
          <div class='editOnCards'><img src="./assets/edit_icon3.png" onclick="editGreetingPopup('${greeting._id}')"></div>
          <br>
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
 * @description vallidate the user input and calls add function
 * @param {*} greeting
 */
function addGreeting() {
    greeting.preventDefault();
    let firstName = document.querySelector(".firstName").value;
    let lastName = document.querySelector(".lastName").value;
    let form = document.querySelector(".formPopUp");
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
    } else add(firstName, lastName);
}

/**
 * @description add the greetings
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
    location.reload();
};

//use to display the add form
function openForm() {
    document.querySelector(".formPopUp").style.display = "block";
}

//use to hide the add form
function closeForm() {
    document.querySelector(".formPopUp").style.display = "none";
}

//use to add the data on submit
document.getElementById("addPost").addEventListener("submit", addGreeting);


/**
 * @description opens a delete greeting popup
 * @param {id} takes id 
 * calls the deleteGreeting function
 */
deleteGreetingPopup = (id) => {
    document.querySelector(".delete-form-popup").style.display = "flex";
    document.getElementById("deleteRecord").addEventListener("click", () => {
        deleteGreeting(id);
    });
};

//close the delete greeting popup
document.getElementById("closeDeleteGreetingForm").addEventListener('click', () => {
    document.querySelector('.delete-form-popup').style.display = 'none';
})


/**
 * @description delete the greeting 
 * @param {*} takes greetingId 
 */
deleteGreeting = (greetingId) => {
    let id = greetingId;
    url = `${URL}/${id}`;
    fetch(url, { method: "DELETE" })
        .then(() => {
            location.reload();
            alert("Greeting deleted Successfully");
        }).catch((err) => {
            console.log(err);
            alert("Error occcured while deleting greeting try again..!!");
        })
}


//close the update greeting popup
document.getElementById("closeUpdateGreetingForm").addEventListener('click', () => {
    document.querySelector('.update-form-popup').style.display = 'none';
})


/**
 * @description opens a edit greeting popup
 * @param {id} takes id 
 * calls the deleteGreeting function
 */
editGreetingPopup = (greetingId) => {
    document.querySelector('.update-form-popup').style.display = 'flex';

    document.getElementById("updateRecord").addEventListener('click', () => {
        editGreeting(greetingId);
    });
}


/**
 * @description edit the greeting 
 * @param {*} takes greetingId 
 */
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
                body: JSON.stringify({
                    name: name,
                    message: message,
                }),
            })
            .then((response) => {
                response.json();
                alert("Greeting successfully updated");
                location.reload();
            })
            .catch((err) => {
                return err;
            });
    })
}