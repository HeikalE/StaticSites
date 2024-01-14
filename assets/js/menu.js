let _crebe = crebeItems;
let _pizza = pizzaItems;
let _sandwich = sandwichItems;
let _wagabat = wagabatItems;

let _twagen = twagenItems;
let _taswyat = taswyatItems;
let _swani = swaniItems;
let _shogl = shoglItems;

function drawMenus() {
    _crebe.forEach(item => {
        item.imagePath = `assets/img/menu/crebe/${item.imagePath}`;
        let menuItem = drawMenuItem(item.imagePath, item.name, item.description, item.price);
        document.getElementById("menu-crebe-items").appendChild(menuItem);
        drawDivider("menu-crebe-items");
    });
    _pizza.forEach(item => {
        item.imagePath = `assets/img/menu/pizza/${item.imagePath}`;
        let menuItem = drawMenuItem(item.imagePath, item.name, item.description, item.price);
        document.getElementById("menu-pizza-items").appendChild(menuItem);
        drawDivider("menu-pizza-items");
    });
    _sandwich.forEach(item => {
        item.imagePath = `assets/img/menu/sandwich/${item.imagePath}`;
        let menuItem = drawMenuItem(item.imagePath, item.name, item.description, item.price);
        document.getElementById("menu-sandwich-items").appendChild(menuItem);
        drawDivider("menu-sandwich-items");
    });
    _wagabat.forEach(item => {
        item.imagePath = `assets/img/menu/wagabat/${item.imagePath}`;
        let menuItem = drawMenuItem(item.imagePath, item.name, item.description, item.price);
        document.getElementById("menu-wagabat-items").appendChild(menuItem);
        drawDivider("menu-wagabat-items");
    });

    _twagen.forEach(item => {
        item.imagePath = `assets/img/menu/twagen/${item.imagePath}`;
        let menuItem = drawMenuItem(item.imagePath, item.name, item.description, item.price);
        document.getElementById("menu-twagen-items").appendChild(menuItem);
        drawDivider("menu-twagen-items");
    });
    _taswyat.forEach(item => {
        item.imagePath = `assets/img/menu/taswyat/${item.imagePath}`;
        let menuItem = drawMenuItem(item.imagePath, item.name, item.description, item.price);
        document.getElementById("menu-taswyat-items").appendChild(menuItem);
        drawDivider("menu-taswyat-items");
    });
    _swani.forEach(item => {
        item.imagePath = `assets/img/menu/swani/${item.imagePath}`;
        let menuItem = drawMenuItem(item.imagePath, item.name, item.description, item.price);
        document.getElementById("menu-swani-items").appendChild(menuItem);
        drawDivider("menu-swani-items");
    });
    _shogl.forEach(item => {
        item.imagePath = `assets/img/menu/shogl/${item.imagePath}`;
        let menuItem = drawMenuItem(item.imagePath, item.name, item.description, item.price);
        document.getElementById("menu-shogl-items").appendChild(menuItem);
        drawDivider("menu-shogl-items");
    });
}

function drawMenuItem(imagePath, name, description, price) {
    let divElement = document.createElement("div");
    divElement.className += ` col-lg-3 menu-item`;

    let imgAElement = document.createElement("a");
    imgAElement.className += ` glightbox`;
    imgAElement.href = imagePath;

    let imgElement = document.createElement("img");
    imgElement.className += " menu-img img-fluid";
    imgElement.src = imagePath;
    imgAElement.appendChild(imgElement);

    let nameElement = document.createElement("h4");
    nameElement.textContent = name;

    let descElement = document.createElement("p");
    descElement.className += " ingredients";
    descElement.innerHTML = description;

    let priceElement = document.createElement("p");
    priceElement.className += " price";

    let priceValueElement = document.createElement("span");
    priceValueElement.textContent = `${price} جم`;
    priceElement.appendChild(priceValueElement);

    divElement.appendChild(imgAElement);
    divElement.appendChild(nameElement);
    divElement.appendChild(descElement);
    divElement.appendChild(priceElement);

    return divElement;
}

function drawDivider(sectionId) {
    let dividerElement = document.createElement("hr");
    dividerElement.id = `menu-item-divider`;
    document.getElementById(sectionId).appendChild(dividerElement);
}