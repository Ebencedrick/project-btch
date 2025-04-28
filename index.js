const viewAllButton = document.querySelector(".view-all-button");
const hiddenContent = document.querySelector(".hidden-content");

viewAllButton.addEventListener("click", function () {
  if (hiddenContent.style.display === "none") {
    hiddenContent.style.display = "block"; 
    viewAllButton.textContent = "View Less";
    viewAllButton.classList.add("expanded"); 
  } else {
    hiddenContent.style.display = "none";
    viewAllButton.textContent = "View All"; 
    viewAllButton.classList.remove("expanded");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const items = [
    {
      id: 1,
      title: "Modern 3 Bedroom Apartment",
      price: "1,200,000 Cfa",
      location: "Douala, Cameroon",
      description: "Spacious apartment with constant water flow and road access.",
      image: "img/item1.jpg"
    },
    {
      id: 2,
      title: "2 Bedroom Cozy Flat",
      price: "950,000 Cfa",
      location: "Yaoundé, Cameroon",
      description: "Affordable and comfortable, close to market and schools.",
      image: "img/item2.jpg"
    },
    // ...add more items up to 16...
    {
      id: 16,
      title: "Luxury Condo",
      price: "3,000,000 Cfa",
      location: "Kribi, Cameroon",
      description: "High-end condo with modern finishes and amenities.",
      image: "img/item16.jpg"
    }
  ];

  const container = document.getElementById("item-container");
  const viewMoreBtn = document.getElementById("view-more-btn");
  const viewLessBtn = document.getElementById("view-less-btn");

  // Function to render items
  const renderItems = (count) => {
    container.innerHTML = "";
    items.slice(0, count).forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("item");
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="item-image" />
        <div class="like-button"><i class="fa-regular fa-heart"></i></div>
        <h2>${item.title}</h2>
        <p class="price">${item.price}</p>
        <p class="location">${item.location}</p>
        <p class="description">${item.description}</p>
        <button onclick="location.href='item${item.id}.html'">See Inside</button>
      `;
      container.appendChild(itemElement);
    });
  };

  // Initial render with 8 items
  renderItems(8);

  // View More button functionality
  viewMoreBtn.addEventListener("click", () => {
    renderItems(16);
    viewMoreBtn.style.display = "none";
    viewLessBtn.style.display = "inline-block";
  });

  // // View Less button functionality
  // viewLessBtn.addEventListener("click", () => {
  //   renderItems(8);
  //   viewMoreBtn.style.display = "inline-block";
  //   viewLessBtn.style.display = "none";
  });

  // Add functionality to like buttons
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-heart")) {
      e.target.classList.toggle("liked");
    }
  });
});
