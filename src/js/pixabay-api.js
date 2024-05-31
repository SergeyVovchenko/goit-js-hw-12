import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const hiddenLoadBtn = document.querySelector('.load-btn');
const loader = document.querySelector('.js-loader');

let queryValue = '';
let per_page = 15;
let page = 1;

export async function queryImg(text) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';

    if (queryValue !== text) {
        queryValue = text;
        page = 1;
    }

    const params = new URLSearchParams({
        key: '43954842-86e0551d49d52b31999082e7b',
        q: text,
        page: `${page}`,
        per_page: `${per_page}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    const url = `${BASE_URL}${END_POINT}?${params}`;
    const response = await axios(url);

    return response.data;
}

export async function addNewImg() {
    page += 1;
    hiddenLoadBtn.classList.add('is-hidden');
    loader.classList.add('loader');

    const newUrl = await queryImg(queryValue);
    const pages = Math.round(newUrl.totalHits / per_page);

    if (pages <= page) {
        iziToast.show({
            message:
                'We are sorry, but you have reached the end of search results.',
            backgroundColor: '#be25f6',
            messageColor: '#FFF',
            messageSize: '16px',
            position: 'topRight',
            maxWidth: '432px',
        });
        loader.classList.remove('loader');
        hiddenLoadBtn.classList.add('is-hidden');
        page = 1;
        return newUrl;
    }
    loader.classList.remove('loader');
    hiddenLoadBtn.classList.remove('is-hidden');
    return newUrl;
}
