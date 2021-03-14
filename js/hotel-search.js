const searchHotelButton = document.querySelector('.finding-hotels');
const modalWindow = document.querySelector('.interested-form');
const modalWindowWrapper = document.querySelector('.interested-form-wrapper');

const checkInputsValue = (inputs) => {
  let flag = true;
  inputs.forEach((input) => {
    if (!input.value) {
      flag = false;
    }
  });
  return flag;
};

if (modalWindowWrapper) {
  const inputs = modalWindow.querySelectorAll('input');

  modalWindowWrapper.classList.remove('active');

  modalWindow.addEventListener('submit', (e) => {
    if (!checkInputsValue(inputs)) {
      e.preventDefault();
      modalWindow.classList.add('has-error');

      setTimeout(() => {
        modalWindow.classList.remove('has-error');
      }, 500);
    }
  });

  searchHotelButton.addEventListener('click', function (e) {
    e.preventDefault();
    modalWindowWrapper.classList.toggle('active');
  });
}