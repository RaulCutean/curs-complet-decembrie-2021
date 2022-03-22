// variables
const signOutButton = document.querySelector("#signOut");
const sponsored = document.querySelector("#SPONS_MESSAGE");
const ads = ["image-1.jpg", "image-2.jpg", "image-3.jpg"];

// load random ad - IIFE
(function () {
  const adToLoad = Math.floor(Math.random() * ads.length);
  sponsored.innerHTML = `
    <a href="img/${ads[adToLoad]}" target="_blank">
        <img src="img/${ads[adToLoad]}" alt="${ads[adToLoad]}" />
    </a>
  `;
})();

// event listeners
signOutButton.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index.html";
});

(async function () {
  const request = await fetch(baseURL + ENDPOINTS.GET_ALL_POSTS, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
  });

  const response = await request.json();

  console.log(request.status, response);
})();
