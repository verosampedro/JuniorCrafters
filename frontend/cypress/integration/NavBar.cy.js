// cypress/integration/navbar.cy.js

describe('Navbar Component', () => {
    beforeEach(() => {
      // Antes de cada prueba, visita la página que contiene el componente Navbar
      cy.visit('/');
    });
  
    it('should toggle navigation menu on button click', () => {
      // Verifica que el menú de navegación no esté visible inicialmente
      cy.get('.nav-bar').should('not.be.visible');
  
      // Simula el clic en el botón de la hamburguesa
      cy.get('.burguer-nav').click();
  
      // Verifica que el menú de navegación ahora esté visible
      cy.get('.nav-bar').should('be.visible');
  
      // Vuelve a hacer clic en el botón de la hamburguesa
      cy.get('.burguer-nav').click();
  
      // Verifica que el menú de navegación se haya ocultado nuevamente
      cy.get('.nav-bar').should('not.be.visible');
    });
  
    it('should navigate to different pages when links are clicked', () => {
      // Simula el clic en el enlace "Conócenos!"
      cy.get('nav a[href="/about"]').click();
  
      // Verifica que la URL haya cambiado a /about
      cy.url().should('include', '/about');
  
      // Simula el clic en el enlace "Cursos"
      cy.get('nav a[href="/gallery"]').click();
  
      // Verifica que la URL haya cambiado a /gallery
      cy.url().should('include', '/gallery');
  
      // Simula el clic en el enlace "Contacto"
      cy.get('nav a[href="/access"]').click();
  
      // Verifica que la URL haya cambiado a /access
      cy.url().should('include', '/access');
    });
  
    // Puedes agregar más pruebas según sea necesario
  });
  