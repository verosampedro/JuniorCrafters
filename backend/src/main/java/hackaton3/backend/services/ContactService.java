package hackaton3.backend.services;

import org.springframework.stereotype.Service;

import hackaton3.backend.models.Contact;
import hackaton3.backend.repository.ContactRepository;

@Service
public class ContactService {
    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }
}
