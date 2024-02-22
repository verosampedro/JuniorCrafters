package hackaton3.backend.controllers;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hackaton3.backend.models.Course;
import hackaton3.backend.services.CourseService;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@RequestMapping ("/course")

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class CourseController {

    @GetMapping
    public List<Course> findAll() {
        return CourseService.findAll();
    }

}
