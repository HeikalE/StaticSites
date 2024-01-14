function drawCounter() {
    document.getElementById('clientsCounter').setAttribute('data-purecounter-end', counterData.clients);
    document.getElementById('itemsCounter').setAttribute('data-purecounter-end', counterData.items);
    document.getElementById('staffItems').setAttribute('data-purecounter-end', counterData.staff);
    document.getElementById('experienceCounter').setAttribute('data-purecounter-end', counterData.experience);
}

function drawStaticData() {

    document.getElementById("whatsappBtn").href = `https://wa.me/+2${whatsappNumber}?text=مرحبا`;

    document.getElementById("workingHours").textContent = workingHours;
    document.getElementById("workingHoursFooter").textContent = workingHours;
    document.getElementById("whatsappNumber").textContent = whatsappNumber;

    document.getElementById("mobileNumber").textContent = mobileNumber;
    document.getElementById("lineNumber").textContent = lineNumber;
    document.getElementById("address").textContent = address;

    document.getElementById("mobileNumberFooter").textContent = mobileNumber;
    document.getElementById("lineNumberFooter").textContent = lineNumber;
    document.getElementById("addressFooter").textContent = address;

    document.getElementById("mapLink").setAttribute('src', mapLink);
    document.getElementById("headerImageLink").setAttribute('src', headerImageLink);
    document.getElementById("facebookLink").href = facebookLink;
    document.getElementById("instagramLink").href = instagramLink;
    document.getElementById("headerVideoLink").href = headerVideoLink;
}