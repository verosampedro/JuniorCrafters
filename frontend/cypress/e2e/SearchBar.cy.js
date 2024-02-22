

// Descripción del conjunto de pruebas
describe('SearchBar component', () => {
    // Configuración que se ejecuta antes de cada prueba
    beforeEach(() => {
      // Visita el servidor de desarrollo del front-end (reemplaza con la URL correcta)
      cy.visit('http://localhost:5173/', { timeout: 100000 }); // 10 segundos es el tiempo de espera predeterminado

      // Espera 2 segundos (ajusta según sea necesario)
      cy.wait(8000); 
      // Alias para el elemento Header
      cy.get('.header-test').as('header'); 
    });
  
    // Primera prueba: Expandir y contraer en el enfoque y desenfoque
    it('should expand and collapse on focus and blur', function () {
      // Verifica que el componente de búsqueda no esté expandido
      cy.get('@header').find('.search-bar').should('not.have.class', 'expanded');
  
      // Haz clic en el ícono de búsqueda para expandir el componente
      cy.get('@header').find('.icon-container').click();
      // Verifica que el componente de búsqueda esté expandido
      cy.get('@header').find('.search-bar').should('have.class', 'expanded');
  
     
    });
  
    // Segunda prueba: Obtener resultados basados en la entrada
    it('should fetch results based on input', function () {
      // Haz clic en el ícono de búsqueda para expandir el componente
      cy.get('@header').find('.icon-container').click();
  
      // Escribe en el campo de búsqueda y verifica que se actualice correctamente
      const searchTerm = 'example';
      cy.get('@header').find('.search-input').type(searchTerm).should('have.value', searchTerm);
  
     // futuros test 
    });
  });
  