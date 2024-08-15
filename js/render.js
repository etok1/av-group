function priviliges() {
  const container = document.querySelector(".main__priviliges-list");
  list.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("main__priviliges-why");
    element.innerHTML = `
            <div class="main__priviliges-why-heading">
              <img src="./src/images/icons/privilige.svg" alt="arrow" />
              <h3>${item.title}</h3>
            </div>
            <p>
            ${item.text}
            </p>
          `;

    container.append(element);
  });
}

function appsLinks() {
  const containerContact = document.querySelector(".footer__info");
  const containerAddress = document.querySelector(".footer__media");
  footer.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("footer__contacts");
    element.innerHTML = `
             <p>${item.numbers.office[0]}</p>
             <p>${item.numbers.office[1]}</p>
             <p>${item.email.office}</p>
             <p>${item.numbers.director}</p>
             <p>${item.email.director}</p>
             
          `;

    containerContact.append(element);
  });

  mediaLinks.forEach((item) => {
    const element = document.createElement("button");
    element.classList.add("media-btn");
    element.innerHTML = `
              <a href="${item.mediaLink}" target="_blank">
                <img src="${item.mediaIcon}" alt="${item.mediaName}"/>
              </a>
          `;

    containerAddress.append(element);
  });
}

appsLinks();
priviliges();
