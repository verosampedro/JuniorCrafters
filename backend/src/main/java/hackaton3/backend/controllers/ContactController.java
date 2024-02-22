package hackaton3.backend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import hackaton3.backend.models.Contact;
import hackaton3.backend.services.ContactService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RequestMapping("/contact")
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<String> saveContact(@RequestBody Contact contact) {
        Contact savedContact = contactService.saveContact(contact);
        if (savedContact != null) {
            return new ResponseEntity<>("Contact saved successfully", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Failed to save contact", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
    

