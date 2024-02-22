package hackaton3.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

 
@Entity
@Table(name= "courses")
    
    public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    
    String name;
    String author;
    String description;
    Integer valoration;
    String images;

    
    public String getImages() {
        return images;
    }
    public void setImages(String images) {
        this.images = images;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Integer getValoration() {
        return valoration;
    }
    public void setValoration(Integer valoration) {
        this.valoration = valoration;
    }
}
