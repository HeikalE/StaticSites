let _galleryImages = galleryData;

function drawGallery() {

    _galleryImages.forEach(imagePath => {
        imagePath = `assets/img/gallery/${imagePath}`;
        let menuItem = drawGalleryItem(imagePath);
        document.getElementById("gallery-section-items").appendChild(menuItem);
    });

}

function drawGalleryItem(imagePath) {
    let divElement = document.createElement("div");
    divElement.className = `swiper-slide`;

    let imgAElement = document.createElement("a");
    imgAElement.className = `glightbox`;
    imgAElement.href = imagePath;
    imgAElement.setAttribute("data-gallery", "images-gallery");

    let imgElement = document.createElement("img");
    imgElement.className = "img-fluid";
    imgElement.src = imagePath;
    imgAElement.appendChild(imgElement);

    divElement.appendChild(imgAElement);

    return divElement;
}