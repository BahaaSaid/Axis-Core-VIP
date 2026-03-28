// Elements
const generateBtn = document.getElementById("generateBtn");
const container = document.getElementById("cardContainer");

// Generate Card
generateBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const image = document.getElementById("image").value.trim();
  const membership = document.getElementById("membership").value;

  // Validation
  if (name === "") {
    alert("Please enter a name");
    return;
  }

  const imgSrc = image || "https://via.placeholder.com/150";

  // Create card WITH copy button inside
  container.innerHTML = `
    <div class="card ${membership.toLowerCase()}">
      <img src="${imgSrc}" alt="profile">
      <h2>${name}</h2>
      <p>${membership} Member</p>
      <button class="copy-btn">Copy Code</button>
    </div>
    `
  ;

  // Select the new button AFTER creation
  const copyBtn = document.querySelector(".card .copy-btn");

  // Copy functionality
  copyBtn.addEventListener("click", () => {
    const cardCode = document.querySelector(".card").outerHTML;

    navigator.clipboard.writeText(cardCode)
      .then(() => {
        copyBtn.textContent = "Copied ✅";
        copyBtn.classList.add("copy-success");

        setTimeout(() => {
          copyBtn.textContent = "Copy Code";
          copyBtn.classList.remove("copy-success");
        }, 2000);
      })
      .catch(() => {
        alert("Copy failed");
      });
  });
});