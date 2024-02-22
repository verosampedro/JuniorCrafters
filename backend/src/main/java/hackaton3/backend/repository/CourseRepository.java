package hackaton3.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hackaton3.backend.models.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
   
}
