



// let promise = fetch(url, [options])

// const url = "http://localhost:2000/greetings/"

// get = () => {
//     document.getElement('add').style.display = 'none';

//     fetch(URL)
//         .then(response => response.json())
      
// }


fetch(`http://localhost:2000/greetings/`).then((apidata
) => {
//console.log(apidata);
return apidata.json();
})
.then((actualfdata) => {
console.log(actualfdata);
})
.catch((error) => {
    consol.log(error);
});

