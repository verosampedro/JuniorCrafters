package hackaton3.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import hackaton3.backend.models.Course;
import hackaton3.backend.repository.CourseRepository;

@Service
public class CourseService {

    private static CourseRepository courseRepository;

    public static List<Course> findAll() {
        return courseRepository.findAll();
    }
}
