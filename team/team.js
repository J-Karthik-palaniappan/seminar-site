const basePath = window.location.pathname.endsWith("/")
  ? window.location.pathname + "../"
  : window.location.pathname + "/../";

async function loadTeam() {
  try {
    const response = await fetch(basePath + "data/team.json");
    const team = await response.json();

    const container = document.getElementById("teamContainer");

    team.forEach(member => {
      const card = document.createElement("div");
      card.className = "team-card";

      card.innerHTML = `
        <div class="team-image-wrapper">
          <img src="${basePath + member.image}" alt="${member.name}">
          <div class="team-overlay">
            <h4>${member.name}</h4>
            <p>${member.title}</p>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    console.error("Error loading team:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadTeam);
