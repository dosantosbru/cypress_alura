describe("Página de login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
  });

  it("Deve preencher os campos do login corretamente e autenticar o usuário na página", () => {
    cy.get('[data-test="input-loginEmail"]').type("dosantosbru@icloud");
    cy.get('[data-test="input-loginPassword"]').type("senha");
    cy.get('[data-test="submit-button"]').click();
    cy.contains("Por favor, verifique o email digitado").should("be.visible");
    cy.contains(
      "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres"
    ).should("be.visible");
  });
});

//A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres
