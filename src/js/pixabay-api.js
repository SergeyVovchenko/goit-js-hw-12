// У файлі pixabay-api.js зберігай функції для HTTP-запитів.
export function queryImg(text) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
        key: '43954842-86e0551d49d52b31999082e7b',
        q: text,
        per_page: '21',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });
    const url = `${BASE_URL}${END_POINT}?${params}`;
    return fetch(url).then(result => result.json());
}
