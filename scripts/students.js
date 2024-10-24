import developers from "./database.js";

const root = document.getElementById("root");

developers.map((developer) => {
  const { name, role } = developer;

  root.innerHTML += `
    <article>
      <div>
        <div>
          <img src="https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png" alt="user">
        </div>
      </div>
      <div>
        <p>${name}</p>
        <p>${role}</p>
      </div>
    </article>
  `;
});
