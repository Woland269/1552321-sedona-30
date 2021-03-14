const  searchHotelButton = document.querySelector(".finding-hotels");
const  modalWindow = document.querySelector(".interested-form");
const  searchHotelClicked = document.querySelector(".search-hotel-clicked");

searchHotelButton.addEventListener ("click", function () {

    modalWindow.classList.toggle ("animation-modal");

    modalWindow.classList.toggle ("search-hotel-clicked");

});