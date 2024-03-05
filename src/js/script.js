
      const navLinks = document.querySelectorAll(".nav-link");
      const activeLink = document.querySelector(".nav-link.active");

      navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();

          // Hapus kelas active dari semua nav-link
          navLinks.forEach((link) => link.classList.remove("active"));

          // Tambahkan kelas active ke nav-link yang diklik
          link.classList.add("active");

          // Scroll ke section yang sesuai
          const targetId = link.getAttribute("href").slice(1); // Ambil id dari href
          const target = document.getElementById(targetId); // Dapatkan elemen dengan id yang sesuai
          target.scrollIntoView({
            behavior: "smooth",
          });
        });
      });

// skills

      document.addEventListener("DOMContentLoaded", function () {
        const skillsContainer = document.getElementById("skills");

        skillItems.forEach((item) => {
          const wrapperDiv = document.createElement("div");
          wrapperDiv.className = "transform hover:scale-105 transition duration-500 w-1/2 lg:w-1/3 md:w-1/2 mx-auto";

          const div = document.createElement("div");
          div.className = "max-w-sm p-4 bg-" + item.color + "-500 rounded-xl h-44 m-2 lg:m-0 lg:mx-auto";

          const iconDiv = document.createElement("div");
          iconDiv.className = "icon inline-block text-center w-full";

          const icon = document.createElement("img");
          icon.src = item.icon;
          icon.className = "h-14 mx-auto bg-white p-2 rounded-xl";

          iconDiv.appendChild(icon);
          div.appendChild(iconDiv);

          const titleLink = document.createElement("a");
          titleLink.href = "#";

          const title = document.createElement("h5");
          title.className = "mb-1 text-xs lg:text-xl font-bold text-white text-center ";
          title.textContent = item.title;

          titleLink.appendChild(title);
          div.appendChild(titleLink);

          const description = document.createElement("p");
          description.className = "font-light text-xs lg:text-md mb-2 text-white text-center";
          description.textContent = item.description;

          div.appendChild(description);

          wrapperDiv.appendChild(div); // Tambahkan div keterampilan ke dalam pembungkus
          skillsContainer.appendChild(wrapperDiv); // Tambahkan pembungkus ke dalam kontainer keterampilan
        });
      });


// portfolio
      const categoryButtons = document.querySelectorAll(".category-btn");
      const portfolioItemsContainer = document.getElementById("portfolio");

      // Function to filter portfolio items by category
      function filterPortfolioItems(category) {
        const filteredItems =
          category === "all"
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === category);
        displayPortfolioItems(filteredItems);
      }

      // Function to display portfolio items
      function displayPortfolioItems(items) {
        portfolioItemsContainer.innerHTML = "";
        items.forEach((item) => {
          const portfolioItem = document.createElement("div");
          portfolioItem.classList.add("w-full", "px-4", "lg:w-1/3", "xl:w-1/4", "m-1", "lg:m-0");
          portfolioItem.innerHTML = `
            <div class="bg-white px-4 pt-4 pb-2 rounded-xl transform hover:scale-105 transition duration-500">
              <div class="relative">
                <img class="w-full object-cover h-40 rounded-xl" src="${item.imageUrl}" alt="Portfolio Item" />
                <p class="absolute text-xs top-1 right-1 bg-gray-950/50 text-white font-light py-1 px-3 rounded-xl">${item.category}</p>
              </div>
              <h1 class="my-3 text-xs text-sky-600 text-md font-bold cursor-pointer inline-block p-1 rounded-md bg-sky-100/80">${item.title}</h1>
              <p class="font-light text-sm mb-2 text-slate-500">${item.description}</p>
              <div class="w-full flex justify-end">
                <a href="${item.url}" class="my-3 text-sm w-auto font-semibold lg:w-auto text-blue-500 bg-blue-100 font-md py-2 px-4 hover:bg-blue-200 hover:text-blue-600 rounded-full">Read more</a>
              </div>
            </div>
          `;
          portfolioItemsContainer.appendChild(portfolioItem);
        });
      }

      function setActiveBackground() {
        categoryButtons.forEach((btn) => {
          if (btn.classList.contains("active")) {
            btn.classList.add("bg-gray-800", "text-white"); // Apply Tailwind CSS background color for active button
            btn.classList.remove("bg-white"); // Remove Tailwind CSS background color for inactive buttons
          } else {
            btn.classList.remove("bg-gray-800", "text-white"); // Remove Tailwind CSS background color for inactive buttons
            btn.classList.add("bg-white"); // Apply Tailwind CSS background color for inactive buttons
          }
        });
      }

      // Event listener for category buttons
      categoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active class from all buttons
          categoryButtons.forEach((btn) => btn.classList.remove("active"));

          // Add active class to the clicked button
          button.classList.add("active");

          // Set active background for category buttons
          setActiveBackground();

          const category = button.getAttribute("data-category");
          filterPortfolioItems(category);
        });
      });

      // Initially set active background for the first button
      setActiveBackground();

      // Display all portfolio items initially
      displayPortfolioItems(portfolioItems);
