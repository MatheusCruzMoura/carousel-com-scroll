
carousel = document.querySelector("#items")

carousel
    .addEventListener("wheel", event => {
        if (event.deltaY > 0) {
            carousel.scrollBy(400, 0);
        } else {
            carousel.scrollBy(-400, 0);
        }
    })