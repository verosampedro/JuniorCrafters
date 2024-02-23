package hackaton3.backend.controllers;

import java.io.FileWriter;
import java.io.IOException;
import java.util.List;  // Agregada la importación de List

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import hackaton3.backend.models.Course;
import hackaton3.backend.services.CourseService;

import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/course")
@CrossOrigin(origins = "http://localhost:5173", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    public List<Course> findAll() {
        return courseService.findAll();
    }

    @PostMapping("/write-to-json")
    public void writeToJson() {
        try {
            List<Course> courses = courseService.findAll();
            ObjectMapper mapper = new ObjectMapper();
            String json = mapper.writeValueAsString(courses);

            // Ruta donde se encuentra tu proyecto Spring Boot
            String projectPath = System.getProperty("user.dir");

            // Ruta completa hasta el archivo api.json
            String jsonFilePath = projectPath + "/src/main/resources/public/api.json";

            // Escribir el JSON en el archivo
            try (FileWriter writer = new FileWriter(jsonFilePath)) {
                writer.write(json);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
