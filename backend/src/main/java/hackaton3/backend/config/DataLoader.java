package hackaton3.backend.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import hackaton3.backend.models.Course;
import hackaton3.backend.repository.CourseRepository;

@SpringBootApplication
public class DataLoader {

    public static void main(String[] args) {
        SpringApplication.run(DataLoader.class, args);
    }

    @Bean
    public CommandLineRunner initData(CourseRepository courseRepository) {
        return args -> {
            
            loadCourses(courseRepository);
        };
    }

    private void loadCourses(CourseRepository courseRepository) {
        Course course1 = new Course("Introducción a la Programación con Python", "John Smith",
                "Aprende los fundamentos de la programación utilizando Python, uno de los lenguajes más populares y versátiles del mundo.", 4, "https://images.unsplash.com/photo-1550399105-1b87f6103df1?q=80&w=1080&fit=max");
        Course savedCourse = courseRepository.save(course1);
        System.out.println("ID del curso guardado: " + savedCourse.getId());
    }
}
