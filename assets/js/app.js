document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // The code for activating the current link goes here
    document.addEventListener("DOMContentLoaded", () => {
      // Get the current page name from the URL
      const currentPage = window.location.pathname.split("/").pop();

      // Select all navbar links
      const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

      // Debugging: Log the current page
      console.log("Current Page:", currentPage);

      // Loop through each link to check if it matches the current page
      navLinks.forEach((link) => {
        const linkPage = link.getAttribute("href").split("/").pop();

        console.log(`Current Page: ${currentPage}, Link Page: ${linkPage}`); // Debugging

        // Match the href with the current page
        if (linkPage === currentPage) {
          link.classList.add("active");
          console.log(`Added active class to: ${linkPage}`); // Debugging
        } else {
          link.classList.remove("active");
        }
      });
    });
  }, 500);
});
