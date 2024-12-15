document.addEventListener("DOMContentLoaded", () => {
  // Get the current page path
  const currentPage = window.location.pathname.split("/").pop();

  // Get all navbar links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Loop through links to apply the active class
  navLinks.forEach((link) => {
    // Extract the href of the link
    const linkPage = link.getAttribute("href");

    // If the href matches the current page, add the active class
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
