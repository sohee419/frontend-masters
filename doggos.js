document.querySelector(".breed").addEventListener("change", (e) => {
  const breed = e.target.value;
  console.log(breed);
})

const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.querySelector(".doggos");
const loading = document.querySelector(".loading-gif");


const addNewDoggo = () => {
  show();
  fetch(DOG_URL)
    .then(response => response.json())
    .then(processedResponse => {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute Doggo";
      doggos.appendChild(img);
    })
    .catch(err => console.log(err))
    .finally(() => hide())
};


const show = () => {
  document.querySelector(".loading").classList.add("show");
}

function hide () {
  document.querySelector(".loading").classList.remove("show");
}



document.querySelector(".button").addEventListener("click", addNewDoggo);