document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const item = {
    id: params.get("id"),
    title: params.get("title"),
    price: params.get("price"),
    location: params.get("location"),
    description: params.get("description"),
    images: params.get("images").split(","),
    related: params.get("related").split(",")
  };

  const itemDetailsContainer = document.getElementById("item-details-container");
  const relatedItemsContainer = document.getElementById("related-items-container");

  // Display item details
  itemDetailsContainer.innerHTML = `
    <h1>${item.title}</h1>
    <p class="price">${item.price}</p>
    <p class="location">${item.location}</p>
    <p class="description">${item.description}</p>
    <div class="item-images">
      ${item.images.map((img) => `<img src="${img}" alt="${item.title}" />`).join("")}
    </div>
  `;

  // Display related items
  const allItems = [
    {
      id: 1,
      title: "Modern 3 Bedroom Apartment",
      price: "1,200,000 Cfa",
      location: "Douala, Cameroon",
      description: "Spacious apartment with constant water flow and road access.",
      images: ["img/item1-1.jpg", "img/item1-2.jpg", "img/item1-3.jpg"]
    },
    {
      id: 2,
      title: "2 Bedroom Cozy Flat",
      price: "950,000 Cfa",
      location: "Yaoundé, Cameroon",
      description: "Affordable and comfortable, close to market and schools.",
      images: ["img/item2-1.jpg", "img/item2-2.jpg", "img/item2-3.jpg"]
    },
    {
      id: 3,
      title: "Luxury Villa",
      price: "3,500,000 Cfa",
      location: "Kribi, Cameroon",
      description: "Beachfront villa with stunning views and modern amenities.",
      images: ["img/item3-1.jpg", "img/item3-2.jpg", "img/item3-3.jpg"]
    }
    // Add more items as needed
  ];

  const relatedItems = allItems.filter((relatedItem) =>
    item.related.includes(relatedItem.id.toString())
  );

  relatedItems.forEach((relatedItem) => {
    const relatedElement = document.createElement("div");
    relatedElement.classList.add("item");

    relatedElement.innerHTML = `
      <a href="item.html?id=${relatedItem.id}&title=${relatedItem.title}&price=${relatedItem.price}&location=${relatedItem.location}&description=${relatedItem.description}&images=${relatedItem.images.join(",")}&related=${relatedItem.related.join(",")}">
        <img src="${relatedItem.images[0]}" alt="${relatedItem.title}" class="item-image" />
      </a>
      <h3>${relatedItem.title}</h3>
      <p class="price">${relatedItem.price}</p>
      <p class="location">${relatedItem.location}</p>
    `;

    relatedItemsContainer.appendChild(relatedElement);
  });
});
