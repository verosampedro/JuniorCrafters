package hackaton3.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import hackaton3.backend.models.Course;
import hackaton3.backend.repository.CourseRepository;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> findAll() {
        return courseRepository.findAll();
    }
}
