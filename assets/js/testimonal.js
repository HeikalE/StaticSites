let _testimonals = testimonalData;

function drawTestimonal() {
    _testimonals.forEach(item => {
        let testimonialItem = drawTestimonalItem(item.name, item.description);
        document.getElementById("testimonials-section-items").appendChild(testimonialItem);
    });
}

function drawTestimonalItem(name, description) {
    let divElement = document.createElement("div");
    divElement.className = `swiper-slide`;

    let testimonialElement = document.createElement("div");
    testimonialElement.className = `testimonial-item`;

    let rowElement = document.createElement("div");
    rowElement.className = `row gy-4 justify-content-center`;

    let colElement = document.createElement("div");
    colElement.className = `col-lg-6`;

    let contentElement = document.createElement("div");
    contentElement.className = `testimonial-content`;

    let descElement = document.createElement("p");
    let rightQuoteElement = document.createElement("i");
    rightQuoteElement.className = 'bi bi-quote quote-icon-right';
    let leftQuoteElement = document.createElement("i");
    leftQuoteElement.className = 'bi bi-quote quote-icon-left';

    let valueElement = document.createElement("span");
    valueElement.textContent = description;

    descElement.appendChild(rightQuoteElement);
    descElement.appendChild(valueElement);
    descElement.appendChild(leftQuoteElement);

    let nameElement = document.createElement("h4");
    nameElement.textContent = name;

    contentElement.appendChild(descElement);
    contentElement.appendChild(nameElement);

    colElement.appendChild(contentElement);
    rowElement.appendChild(colElement);
    testimonialElement.appendChild(rowElement);
    divElement.appendChild(testimonialElement);

    return divElement;
}