// cypress/e2e/AnimatedCard.cy.js

describe('SearchBar component', () => {
    // Configuración que se ejecuta antes de cada prueba
    beforeEach(() => {
      // Visita el servidor de desarrollo del front-end (reemplaza con la URL correcta)
      cy.visit('http://localhost:5173/', { timeout: 100000 }); // 10 segundos es el tiempo de espera predeterminado
  
      // Espera 2 segundos (ajusta según sea necesario)
      cy.wait(8000); 
      // Alias para el elemento Header
    });
  
    it('should navigate to gallery when "VISITA NUESTRA GALERÍA" link is clicked', () => {
      // hover sobre el componente AnimatedCard
      cy.get('.main-cta .card').trigger('mouseover');
         //  clic en el enlace "VISITA NUESTRA GALERÍA"
    cy.get('.main-cta .card-content a.link-banner').click();
  
      cy.wait(2000);

      // Verifica que la URL se ha redirigido a la página de la galería
      cy.location().should((loc) => {
        expect(loc.href).to.include('/gallery');});
    });
  
    // Puedes agregar más pruebas según la lógica específica del componente AnimatedCard
  });
  