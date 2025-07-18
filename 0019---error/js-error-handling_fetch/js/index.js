console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  try {
    const header = { "x-api-key": "reqres-free-v1" };

    const response = await fetch(url, {
      headers: header,
    });
    const contentType = response.headers.get("content-type");
    if (!contentType.includes("application/json")) {
      throw new Error(`I only work with Jason but I got ${contentType}`);
    }
    if (!response.ok) {
      throw new Error(
        `Oh no 🙀 Response is not ok! 
        Status is ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    return {
      error: `Oh damn! 😿 ${error.message}`,
    };
  }
}

const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/12" },
  { name: "User 2", url: "https://reqres.in/api/users/9" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    const result = await fetchUserData(endpoint.url);

    if (result.error) {
      errorElement.textContent = result.error;
      userElement.innerHTML = "No user data available.";
    } else {
      const user = result.data;
      userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
      errorElement.textContent = "";
    }
  });
});
