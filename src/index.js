document.addEventListener("DOMContentLoaded", init)

function init() {
    fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(data => {
        getImages(data)
        getFirstRamen(data);
    })
}

function getImages (data) {
    let ramenMenu = document.querySelector("#ramen-menu");

    data.forEach((element) => {
        const img = document.createElement("img");
        img.src = element.image
        img.className = element.name;
        img.title = element.restaurant;
        img.alt = element.rating;
        img.innerText = element.comment;
        ramenMenu.append(img);
    })
}

function getFirstRamen(data) {
    //Set first image to default on page load
    let detailImage = document.querySelector(".detail-image")
    let ramenDetailH2 = document.querySelector("#ramen-detail h2");
    let ramenDetailH3 = document.querySelector("#ramen-detail h3");
    let ramenRating = document.querySelector("#rating-display");
    let ramenComment = document.querySelector("#comment-display");

    detailImage.src = data[0].image
    ramenDetailH2.innerText = data[0].name
    ramenDetailH3.innerText = data[0].restaurant
    ramenRating.innerText = data[0].rating;
    ramenComment.innerText = data[0].comment

}

const ramenMenu = document.querySelector("#ramen-menu")

ramenMenu.addEventListener("click", handleClick);

function handleClick (e) {
    let detailImage = document.querySelector(".detail-image");
    let ramenDetailH2 = document.querySelector("#ramen-detail h2");
    let ramenDetailH3 = document.querySelector("#ramen-detail h3");
    let ramenRating = document.querySelector("#rating-display");
    let ramenComment = document.querySelector("#comment-display");

    detailImage.src = e.target.src;
    console.log(e.target)
    ramenDetailH2.innerText = e.target.className;
    ramenDetailH3.innerText = e.target.title;
    ramenComment.innerText = e.target.textContent
    ramenRating.innerText = e.target.alt
}

const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    let name = document.querySelector("#new-name").value;
    let restaurant = document.querySelector("#new-restaurant").value;
    let img = document.querySelector("#new-image").value;
    let comment = document.querySelector("#new-comment").value;
    let rating = document.querySelector("#new-rating").value;

    let ramenMenu = document.querySelector("#ramen-menu");
    const ramen = document.createElement("img");

    ramen.className = name;
    ramen.src = img;
    ramen.alt = rating;
    ramen.title = restaurant
    ramen.innerText = comment;
    ramenMenu.append(ramen);
}