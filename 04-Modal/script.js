'use strict';

const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const btnCloseModel = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const closeModel = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModel = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModel);
}
btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
