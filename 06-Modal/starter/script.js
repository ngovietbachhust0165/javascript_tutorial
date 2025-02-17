'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelector('.show-modal'); // just select first element
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const clossModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', clossModal);
overlay.addEventListener('click', clossModal);
document.addEventListener('keydown', function (e) {
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');

  if (e.key === 'Escape' && !btnCloseModal.classList.contains('hidden')) {
    clossModal();
  }
});
