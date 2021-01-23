// const url = 'http://localhost:2000/greetings';
// console.log(typeof(url));

// const url1 = 'http://dummy.restapiexample.com/api/v1/employees'
// console.log(typeof(url1));
const URL = "http://localhost:2000/greetings";

let regexValidation = new RegExp(/^[A-Za-z]{3,}$/);

getData = () => {
    // fetch("https://reqres.in/api/users?page=2")

    fetch("http://localhost:2000/greetings")
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
          <p>id: ${greeting._id}</p>
          <p>Name: ${greeting.name}</p>
          <p>Message: ${greeting.message}</p>
          <div class='editOnCards'><img src="./assets/edit_icon3.png" onclick="editPopup('${greeting._id},'${greeting.name}','${greeting.message}')"></div>
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

// function addGreeting() {
//     //greeting.preventDefault();
//     // let name = document.querySelector(".firstName").value;
//     // let message = document.querySelector(".lastName").value
//     let name = document.querySelector(".firstName").value;
//     let message = document.querySelector(".lastName").value;

//     // if (regexValidation.test(name)) {
//     //     document.querySelector("#invalid-name").style.cssText += "color: #d02525";
//     // }
//     // if (!regexValidation.test(message)) {
//     //     document.querySelector("#invalid-message").style.cssText +=
//     //         "color: #d02525";
//     // }
//     if (regexValidation.test(name) && regexValidation.test(name)) {
//         //add greeting

//         let parameters = {
//             method: "POST",
//             headers: { "Content-type": "application/json" },
//             body: JSON({
//                 name: name,
//                 message: message,
//             }),
//         };
//         fetch("http://localhost:2000/greetings", parameters)
//             .then(() => {
//                 closeForm();
//                 alert("Greeting Added Successfully");
//                 getData();
//             })
//             .catch(() => alert("Error occcured while adding greeting try again..!!"));
//         closeForm();
//     }

// }




// function addGreeting() {
//     //         name = document.querySelector("#name").value
//     //         greeting = document.querySelector("#greeting").value
//     let name = document.querySelector(".firstName").value;
//     let message = document.querySelector(".lastName").value

//     if (!regexValidation.test(name)) {
//         document.querySelector("#invalid-name").style.cssText +=
//             "color: #d02525";
//     }
//     if (!regexValidation.test(message)) {
//         document.querySelector("#invalid-message").style.cssText +=
//             "color: #d02525";
//     }
//     if (regexValidation.test(name) && regexValidation.test(name)) {

//         let parameters = {
//             method: 'POST',
//             headers: { "Content-type": "application/json" },
//             body: JSON.stringify({
//                 name: name,
//                 message: message
//             })
//         }
//         fetch("http://localhost:2000/greetings", parameters)
//             .then(() => {
//                 closeForm()
//                 alert("Greeting Added Successfully")
//                 getData()
//             })
//             .catch(() => alert("Error occcured while adding greeting try again..!!"))
//         closeForm()
//     }
// };


function addGreeting() {
    let name = document.querySelector(".firstName").value;
    let message = document.querySelector(".lastName").value;
    let form = document.querySelector(".formPopup");
    let firstNameError = document.querySelector(".firstNameError");
    let lastNameError = document.querySelector(".lastNameError");
    if (!validFormInputs(name) || !validFormInputs(message)) {
        form.addEventListener("submit", (e) => {
            firstNameError.innerHTML = " ";
            lastNameError.innerHTML = " ";
            e.preventDefault();
            let firstNameMessage = [];
            let lastNameMessage = [];
            if (name.length < 3) {
                firstNameMessage.push("first name should be greater than 3 char");
            }
            if (!validFormInputs(name)) {
                firstNameMessage.push("first name should not contain number");
            }
            if (message.length < 3) {
                lastNameMessage.push("last name should be greater than 3 char");
            }
            if (!validFormInputs(message)) {
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
                    Accept: "application/json",
                    "Content-type": "application/json",
                },
                body: JSON({
                    name: name,
                    message: message
                }),
            })
            .then((response) => {
                response.json();
                alert("successfully added");
            })
            .catch((err) => {
                return err;
            });
        closeForm();
        location.reload();
    }
}


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
                alert("successfully added");
            })
            .catch((err) => {
                return err;
            });
        closeForm();
        location.reload();
    }
}










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

function validFormInputs(name) {
    return /^[a-zA-Z]{3,}$/.test(name);
}


deleteGreeting = (id) => {
    if (id == "undefined") {
        alert("Id cant be undefined");
        closeDeletePopup();
        getData();
    } else {
        let parameters = {
            method: "DELETE",
        };
        fetch(`${url}${id}`, parameters)
            .then(() => {
                alert("Greeting deleted Successfully");
                closeDeletePopup();
                getData();
            })
            .catch(() =>
                alert("Error occcured while updating greeting try again..!!")
            );
    }
};


deletePopup = (id) => {
    //handelModal("block")
    output = `
    <div class="deleteBoxConformation">
    <p>Do you want to delete this greeting? </p>
    <button type="button" class="delete-button1"onclick="deleteGreeting('${id}')">Delete</button>
    <button type="button" class="delete-button2" onclick="closeDeletePopup()">Cancle</button>
    </div>`;
    document.querySelector(".modal-content").innerHTML = output;
    document.querySelector(".deleteBoxConformation").style.display = "block";
};

closeDeletePopup = () => {
    //handelModal("none")
    // document.querySelector(".deleteBoxConformation").remove()
    document.querySelector(".deleteBoxConformation").style.display = "none";
};


// //document.getElementById("deletePost").addEventListener("delete", deleteGreeting(id))