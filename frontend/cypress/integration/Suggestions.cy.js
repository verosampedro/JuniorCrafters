// cypress/integration/suggestions_spec.js

describe('Suggestions Component', () => {
    beforeEach(() => {
      // Antes de cada prueba, visita la página que contiene el componente Suggestions
      cy.visit('/');
    });
  
    it('should open and close suggestions based on results and clicks', () => {
      // Espía la llamada a la función onClickOutside
      cy.window().then((win) => {
        cy.spy(win, 'onClickOutside').as('onClickOutside');
      });
  
      // Monta el componente con resultados
      cy.get('#root').invoke('append', `
        <Suggestions results={[{ id: 1, title: 'Example 1' }]} onClickOutside={onClickOutside} />
      `);
  
      // Verifica que las sugerencias estén cerradas inicialmente
      cy.get('.suggestions').should('not.be.visible');
  
      // Realiza clic fuera del componente Suggestions
      cy.get('body').click();
  
      // Verifica que la función onClickOutside se haya llamado
      cy.get('@onClickOutside').should('have.been.calledOnce');
  
      // Verifica que las sugerencias estén cerradas después del clic
      cy.get('.suggestions').should('not.be.visible');
  
      // Monta el componente con resultados nuevamente
      cy.get('#root').invoke('append', `
        <Suggestions results={[{ id: 1, title: 'Example 1' }]} onClickOutside={onClickOutside} />
      `);
  
      // Verifica que las sugerencias estén cerradas inicialmente
      cy.get('.suggestions').should('not.be.visible');
  
      // Realiza clic dentro del componente Suggestions
      cy.get('.suggestions').click();
  
      // Verifica que la función onClickOutside no se haya llamado
      cy.get('@onClickOutside').should('not.have.been.called');
  
      // Verifica que las sugerencias estén abiertas después del clic
      cy.get('.suggestions').should('be.visible');
    });
  
    // Puedes agregar más pruebas según sea necesario
  });
  