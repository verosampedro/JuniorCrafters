

describe('BurguerButton Component', () => {
    beforeEach(() => {
      // Antes de cada prueba, visita la página que contiene el componente BurguerButton
      cy.visit('/');
    });
  
    it('should toggle the "open" class on click', () => {
      // Monta el componente BurguerButton
      cy.get('#root').invoke('append', `
        <BurguerButton />
      `);
  
      // Verifica que el componente no tenga la clase "open" inicialmente
      cy.get('.nav-icon-5').should('not.have.class', 'open');
  
      // Simula un clic en el botón
      cy.get('.nav-icon-5').click();
  
      // Verifica que el componente ahora tenga la clase "open" después del clic
      cy.get('.nav-icon-5').should('have.class', 'open');
  
      // Simula otro clic en el botón
      cy.get('.nav-icon-5').click();
  
      // Verifica que el componente ya no tenga la clase "open" después del segundo clic
      cy.get('.nav-icon-5').should('not.have.class', 'open');
    });
  
    // Puedes agregar más pruebas según sea necesario
  });
  