// const url = 'http://localhost:2000/greetings';
// console.log(typeof(url));

// const url1 = 'http://dummy.restapiexample.com/api/v1/employees'
// console.log(typeof(url1));

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

function addGreeting() {
    // post.preventDefault();
    let name = document.querySelector(".firstName").value;
    let message = document.querySelector(".lastName").value;

    //add greeting

    fetch('http://localhost:2000/greetings', {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                message: message,
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