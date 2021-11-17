import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryItemMarkup = galleryItems.map((item) => 
`<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>`).join('');

galleryList.insertAdjacentHTML('beforeend', galleryItemMarkup);

galleryList.addEventListener('click', (clickEvent) => {
    clickEvent.preventDefault();

    if (clickEvent.target.className !== "gallery__image") {
        return;
    };

    let src = clickEvent.target.getAttribute("data-source");
    const instance = basicLightbox.create(
        `<img src="${src}" width="800" height="600">`
    );
    instance.show();

    window.addEventListener("keydown", (keyEvent) => {
        if (keyEvent.key === "Escape") {
            instance.close();
        };
    });
});





 
