// У файлі main.js напиши всю логіку роботи додатка.

import { queryImg } from './js/pixabay-api';
import { addToImgBox } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
let imagesBox = document.querySelector('.images-box');
const loader = document.querySelector('.js-loader');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();

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

    loader.classList.add('loader');

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
