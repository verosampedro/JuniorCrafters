// cypress/integration/search_bar_spec.js

describe('SearchBar Component', () => {
    beforeEach(() => {
      // Antes de cada prueba, visita la página que contiene el componente SearchBar
      cy.visit('/');
    });
  
    it('should expand and collapse on focus and blur', () => {
      // Verifica que el componente no esté expandido inicialmente
      cy.get('.search-bar').should('not.have.class', 'expanded');
  
      // Simula el enfoque en la barra de búsqueda
      cy.get('.search-bar').find('input').focus();
  
      // Verifica que el componente ahora esté expandido
      cy.get('.search-bar').should('have.class', 'expanded');
  
      // Simula la pérdida de foco en la barra de búsqueda
      cy.get('.search-bar').find('input').blur();
  
      // Verifica que el componente ahora esté colapsado
      cy.get('.search-bar').should('not.have.class', 'expanded');
    });
  
    it('should fetch and display search results', () => {
      // Espía la llamada a la API para devolver datos de prueba
      cy.intercept('GET', '/api.json?searchTerm=*', { fixture: 'searchResults.json' }).as('getSearchResults');
  
      // Simula el enfoque en la barra de búsqueda
      cy.get('.search-bar').find('input').focus();
  
      // Simula la entrada de texto en la barra de búsqueda
      cy.get('.search-bar').find('input').type('example');
  
      // Espera a que la llamada a la API se complete
      cy.wait('@getSearchResults');
  
      // Verifica que los resultados de la búsqueda se muestren correctamente
      cy.get('.search-results').should('be.visible');
      cy.get('.search-results .result-item').should('have.length', 3); // Ajusta según tus datos de prueba
    });
  
    // Puedes agregar más pruebas según sea necesario
  });
  