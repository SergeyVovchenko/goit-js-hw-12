export function addToImgBox(arr) {
    return arr
        .map(
            ({
                largeImageURL,
                webformatURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) => {
                return `<li class='images-list'>
            <a class='link-img' href='${largeImageURL}' download onclick="return false">
            <img class='images' src='${webformatURL}' alt='${tags}' width='360' height='152'/>
            <ul class='info-wrap'>
            <li class='info-container'> <p class='info-title'>Likes</p> <p class='info-value'>${likes}</p> </li>
            <li class='info-container'> <p class='info-title'>Views</p> <p class='info-value'>${views}</p> </li>
            <li class='info-container'> <p class='info-title'>Comments</p> <p class='info-value'>${comments}</p> </li>
            <li class='info-container'> <p class='info-title'>Downloads</p> <p class='info-value'>${downloads}</p> </li>
            </ul>
            </a>
            </li>`;
            }
        )
        .join('');
}
