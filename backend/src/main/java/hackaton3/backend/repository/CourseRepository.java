package hackaton3.backend.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hackaton3.backend.models.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long>{

    List<Course> findAll(String name);
}
