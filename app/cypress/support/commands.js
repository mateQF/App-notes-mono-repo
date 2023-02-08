Cypress.Commands.add("login", ({ userName, passwordHash }) => {
  cy.request("POST", "http://localhost:3001/api/login", {
    userName,
    passwordHash,
  }).then((res) => {
    localStorage.setItem("loggedNoteAppUser", JSON.stringify(res.body));
    cy.visit("http://localhost:3000");
  });
});

Cypress.Commands.add("createNote", ({ content, important }) => {
  cy.request({
    method: "POST",
    url: "http://localhost:3001/api/notes",
    body: { content, important },
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("loggedNoteAppUser")).token
      }`,
    },
  });
  cy.visit("http://localhost:3000");
});
