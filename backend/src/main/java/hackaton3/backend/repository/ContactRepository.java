package hackaton3.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import hackaton3.backend.models.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
