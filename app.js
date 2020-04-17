// -------------------------------------------------------------------------------------------------------------
// single page fuctionality
// gets the appropriate content for a given fragment identifier
const getContent = (fragmentId) => {
  fetch(`${fragmentId}.html`)
    .then((res) => res.text())
    .then((data) => {
      const contentDiv = document.querySelector("#content");
      contentDiv.innerHTML = data;
    })
    .catch((err) => console.log("Error: ", err));
};

// set the 'active' class on the active navigation link
const setActiveLink = (fragmentId) => {
  const navbarLinks = document.querySelectorAll("#navbar a");
  navbarLinks.forEach((link) => {
    if (fragmentId === link.getAttribute("href").substr(1)) {
      link.setAttribute("class", "active");
    } else {
      link.removeAttribute("class");
    }
  });
};

// updates dynamic content based on the fragment identifier
const navigate = () => {
  const fragmentId = location.hash.substr(1);
  getContent(fragmentId);

  // toggle the 'active' class on the currently navigated link
  setActiveLink(fragmentId);
};
// ----------------------------------------------------------------------------------------------------------------

const startNavigating = () => {
  // if no fragment identifier is provide
  if (!location.hash) location.hash = "#home";

  navigate();

  addEventListener("hashchange", navigate);
};

startNavigating();
