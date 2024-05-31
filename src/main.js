import { queryImg } from './js/pixabay-api';
import { addNewImg } from './js/pixabay-api';
import { addToImgBox } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
let imagesBox = document.querySelector('.images-box');
const loadBtn = document.querySelector('.load-btn');

form.addEventListener('submit', handleSubmit);
loadBtn.addEventListener('click', handleClickLoadBtn);

function handleSubmit(event) {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();

    loadBtn.classList.add('is-hidden');

    if (!query) {
        iziToast.show({
            message: 'Please enter a search query!',
            backgroundColor: '#EF4040',
            messageColor: '#FFF',
            messageSize: '16px',
            position: 'topRight',
            maxWidth: '432px',
        });
        imagesBox.innerHTML = '';
        return;
    }

    queryImg(query)
        .then(params => {
            if (params.hits.length === 0) {
                iziToast.show({
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                    backgroundColor: '#EF4040',
                    messageColor: '#FFF',
                    messageSize: '16px',
                    position: 'topRight',
                    maxWidth: '432px',
                });
                imagesBox.innerHTML = '';
                return;
            } else {
                const markup = addToImgBox(params.hits);
                imagesBox.innerHTML = markup;
                loadBtn.classList.remove('is-hidden');
                simpleLightBox.refresh();
            }
        })
        .catch(error => {
            console.log(error);
        });
    event.target.elements.query.value = '';
}

let simpleLightBox = new SimpleLightbox('.images-box a', {
    captionDelay: 250,
    captionsData: 'alt',
    captionClass: 'text-center',
});

async function handleClickLoadBtn() {
    const images = await addNewImg();
    const markup = addToImgBox(images.hits);
    imagesBox.insertAdjacentHTML('beforeend', markup);
    simpleLightBox.refresh();

    const cardElements = document.querySelector('.images-list');
    let cardElementsHeight = cardElements.getBoundingClientRect().height;
    window.scrollBy({
        left: 0,
        top: cardElementsHeight * 2,
        behavior: 'smooth',
    });
}
