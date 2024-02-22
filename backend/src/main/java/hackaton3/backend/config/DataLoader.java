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

        // Curso 1
        Course course1 = new Course("Introducción a la Programación con Python", "John Smith",
        "Aprende los fundamentos de la programación utilizando Python, uno de los lenguajes más populares y versátiles del mundo.", 4, "https://images.unsplash.com/photo-1550399105-1b87f6103df1?q=80&w=1080&fit=max");
        Course savedCourse1 = courseRepository.save(course1);
        System.out.println("ID del curso guardado: " + savedCourse1.getId());

        // Curso 2
        Course course2 = new Course("Desarrollo de Aplicaciones Web con React", "Emily Johnson",
        "Domina el desarrollo de aplicaciones web modernas utilizando React, una biblioteca JavaScript de código abierto mantenida por Facebook.", 5, "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1080&fit=max");
        Course savedCourse2 = courseRepository.save(course2);
        System.out.println("ID del curso guardado: " + savedCourse2.getId());

        // Curso 3
        Course course3 = new Course("Fundamentos de Ciencia de Datos", "David García",
        "Explora los fundamentos de la ciencia de datos y descubre cómo puedes utilizar los datos para tomar decisiones informadas y resolver problemas del mundo real.", 4, "https://images.unsplash.com/photo-1550399105-1b87f6103df1?q=80&w=1080&fit=max");
        Course savedCourse3 = courseRepository.save(course3);
        System.out.println("ID del curso guardado: " + savedCourse3.getId());

        // Curso 4
        Course course4 = new Course("Machine Learning con Python", "Sophia Martinez",
        "Sumérgete en el emocionante campo del aprendizaje automático y descubre cómo utilizar Python para construir y entrenar modelos de machine learning.", 4, "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1080&fit=max");
        Course savedCourse4 = courseRepository.save(course4);
        System.out.println("ID del curso guardado: " + savedCourse4.getId());

        // Curso 5
        Course course5 = new Course("Diseño de Interfaces de Usuario", "Emma Davis",
        "Aprende los principios fundamentales del diseño de interfaces de usuario y descubre cómo crear interfaces atractivas y funcionales para aplicaciones web y móviles.", 5, "https://images.unsplash.com/photo-1515378960531-9200262188bc?q=80&w=1080&fit=max");
        Course savedCourse5 = courseRepository.save(course5);
        System.out.println("ID del curso guardado: " + savedCourse5.getId());

        // Curso 6
        Course course6 = new Course("Desarrollo de Aplicaciones Móviles con Flutter", "Lucas Rodriguez",
        "Crea aplicaciones móviles nativas y hermosas para iOS y Android utilizando Flutter, un framework de desarrollo de aplicaciones móviles de código abierto creado por Google.", 4, "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1080&fit=max");
        Course savedCourse6 = courseRepository.save(course6);
        System.out.println("ID del curso guardado: " + savedCourse6.getId());

        // Curso 7
        Course course7 = new Course("Desarrollo de Aplicaciones Web con Angular", "Isabella García",
        "Aprende a construir aplicaciones web modernas y escalables utilizando Angular, un framework de desarrollo de aplicaciones web desarrollado y mantenido por Google.", 5, "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1080&fit=max");
        Course savedCourse7 = courseRepository.save(course7);
        System.out.println("ID del curso guardado: " + savedCourse7.getId());

        // Curso 8
        Course course8 = new Course("Desarrollo de Aplicaciones Móviles con React Native", "Mateo Rodríguez",
        "Crea aplicaciones móviles nativas para iOS y Android utilizando React Native, un framework de desarrollo de aplicaciones móviles basado en React y JavaScript.", 4, "https://images.unsplash.com/photo-1556740734-90de374c12ad?q=80&w=1080&fit=max");
        Course savedCourse8 = courseRepository.save(course8);
        System.out.println("ID del curso guardado: " + savedCourse8.getId());

        // Curso 9
        Course course9 = new Course("Desarrollo de Aplicaciones Web con Vue.js", "Valentina Martinez",
        "Aprende a construir interfaces de usuario interactivas y dinámicas para aplicaciones web utilizando Vue.js, un framework progresivo de JavaScript.", 4, "https://images.unsplash.com/photo-1534126516187-99f397a91f9e?q=80&w=1080&fit=max");
        Course savedCourse9 = courseRepository.save(course9);
        System.out.println("ID del curso guardado: " + savedCourse9.getId());

        // Curso 10
        Course course10 = new Course("Introducción a la Inteligencia Artificial", "Daniel López",
        "Explora los conceptos básicos de la inteligencia artificial y descubre cómo se puede aplicar esta emocionante tecnología para resolver problemas del mundo real.", 5, "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1080&fit=max");
        Course savedCourse10 = courseRepository.save(course10);
        System.out.println("ID del curso guardado: " + savedCourse10.getId());

        // Curso 11
        Course course11 = new Course("Desarrollo de Aplicaciones Móviles con Kotlin", "Sofía Fernández",
        "Aprende a construir aplicaciones móviles para Android utilizando Kotlin, un lenguaje de programación moderno y conciso respaldado oficialmente por Google para el desarrollo de aplicaciones Android.", 4, "https://images.unsplash.com/photo-1550399105-1b87f6103df1?q=80&w=1080&fit=max");
        Course savedCourse11 = courseRepository.save(course11);
        System.out.println("ID del curso guardado: " + savedCourse11.getId());

        // Curso 12
        Course course12 = new Course("Desarrollo de Aplicaciones Web con Django", "David García",
        "Crea aplicaciones web seguras y escalables utilizando Django, un framework de desarrollo web de alto nivel y de código abierto basado en Python.", 4, "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1080&fit=max");
        Course savedCourse12 = courseRepository.save(course12);
        System.out.println("ID del curso guardado: " + savedCourse12.getId());

        // Curso 13
        Course course13 = new Course("Desarrollo de Aplicaciones Móviles con Swift", "Matías Fernández",
        "Aprende a construir aplicaciones móviles para iOS utilizando Swift, un lenguaje de programación potente y fácil de usar desarrollado por Apple.", 5, "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1080&fit=max");
        Course savedCourse13 = courseRepository.save(course13);
        System.out.println("ID del curso guardado: " + savedCourse13.getId());

        // Curso 14
        Course course14 = new Course("Desarrollo de Aplicaciones Web con Ruby on Rails", "Emma Johnson",
        "Construye aplicaciones web modernas y robustas utilizando Ruby on Rails, un framework de desarrollo web de código abierto que está optimizado para la felicidad del programador.", 4, "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1080&fit=max");
        Course savedCourse14 = courseRepository.save(course14);
        System.out.println("ID del curso guardado: " + savedCourse14.getId());

        // Curso 15
        Course course15 = new Course("Desarrollo de Aplicaciones Móviles con Java", "Lucas Rodriguez",
        "Aprende a crear aplicaciones móviles para Android utilizando Java, uno de los lenguajes de programación más populares y ampliamente utilizados en el mundo.", 5, "https://images.unsplash.com/photo-1556740734-90de374c12ad?q=80&w=1080&fit=max");
        Course savedCourse15 = courseRepository.save(course15);
        System.out.println("ID del curso guardado: " + savedCourse15.getId());

        // Curso 16
        Course course16 = new Course("Desarrollo de Aplicaciones Web con Flask", "Isabella García",
        "Crea aplicaciones web ligeras y flexibles utilizando Flask, un microframework de Python que proporciona las herramientas necesarias para construir aplicaciones web rápidamente y con un mínimo de código.", 4, "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1080&fit=max");
        Course savedCourse16 = courseRepository.save(course16);
        System.out.println("ID del curso guardado: " + savedCourse16.getId());

        // Curso 17
        Course course17 = new Course("Desarrollo de Aplicaciones Móviles con Xamarin", "Mateo Rodríguez",
        "Crea aplicaciones móviles multiplataforma para iOS y Android utilizando Xamarin, una plataforma de desarrollo de aplicaciones móviles de Microsoft.", 5, "https://images.unsplash.com/photo-1556740734-90de374c12ad?q=80&w=1080&fit=max");
        Course savedCourse17 = courseRepository.save(course17);
        System.out.println("ID del curso guardado: " + savedCourse17.getId());

        // Curso 18
        Course course18 = new Course("Desarrollo de Aplicaciones Web con Express.js", "Valentina Martinez",
        "Aprende a construir aplicaciones web rápidas y escalables utilizando Express.js, un framework de Node.js que facilita la creación de servidores web y API.", 4, "https://images.unsplash.com/photo-1534126516187-99f397a91f9e?q=80&w=1080&fit=max");
        Course savedCourse18 = courseRepository.save(course18);
        System.out.println("ID del curso guardado: " + savedCourse18.getId());

        // Curso 19
        Course course19 = new Course("Desarrollo de Aplicaciones Móviles con Ionic", "Daniel López",
        "Crea aplicaciones móviles multiplataforma utilizando Ionic, un framework de desarrollo de aplicaciones móviles híbridas que utiliza tecnologías web estándar como HTML, CSS y JavaScript.", 5, "https://images.unsplash.com/photo-1556740734-90de374c12ad?q=80&w=1080&fit=max");
        Course savedCourse19 = courseRepository.save(course19);
        System.out.println("ID del curso guardado: " + savedCourse19.getId());

        // Curso 20
        Course course20 = new Course("Introducción a la Ciberseguridad", "Sofía Fernández",
        "Descubre los conceptos básicos de la ciberseguridad y aprende cómo proteger tu información personal y profesional en línea.", 4, "https://images.unsplash.com/photo-1550399105-1b87f6103df1?q=80&w=1080&fit=max");
        Course savedCourse20 = courseRepository.save(course20);
        System.out.println("ID del curso guardado: " + savedCourse20.getId());

        // Curso 21
        Course course21 = new Course("Desarrollo de Aplicaciones Web Progresivas", "Matías Fernández",
        "Aprende a crear aplicaciones web progresivas (PWAs) que ofrecen una experiencia de usuario similar a la de una aplicación nativa, pero que se pueden ejecutar en cualquier navegador web.", 5, "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1080&fit=max");
        Course savedCourse21 = courseRepository.save(course21);
        System.out.println("ID del curso guardado: " + savedCourse21.getId());

        // Curso 22
        Course course22 = new Course("Desarrollo de Aplicaciones Móviles con PhoneGap", "Emma Johnson",
        "Crea aplicaciones móviles multiplataforma utilizando PhoneGap, un framework de desarrollo de aplicaciones móviles híbridas que te permite utilizar tecnologías web estándar como HTML, CSS y JavaScript.", 4, "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1080&fit=max");
        Course savedCourse22 = courseRepository.save(course22);
        System.out.println("ID del curso guardado: " + savedCourse22.getId());

        // Curso 23
        Course course23 = new Course("Desarrollo de Aplicaciones Web con ASP.NET Core", "Lucas Rodriguez",
        "Aprende a construir aplicaciones web modernas y escalables utilizando ASP.NET Core, un framework de desarrollo web de código abierto desarrollado por Microsoft.", 5, "https://images.unsplash.com/photo-1556740734-90de374c12ad?q=80&w=1080&fit=max");
        Course savedCourse23 = courseRepository.save(course23);
        System.out.println("ID del curso guardado: " + savedCourse23.getId());

        // Curso 24
        Course course24 = new Course("Desarrollo de Aplicaciones Móviles con Flutter", "Isabella García",
        "Crea aplicaciones móviles nativas y hermosas para iOS y Android utilizando Flutter, un framework de desarrollo de aplicaciones móviles de código abierto creado por Google.", 4, "https://images.unsplash.com/photo-1556740734-90de374c12ad?q=80&w=1080&fit=max");
        Course savedCourse24 = courseRepository.save(course24);
        System.out.println("ID del curso guardado: " + savedCourse24.getId());

        // Curso 25
        Course course25 = new Course("Desarrollo de Aplicaciones Web con Angular", "Mateo Rodríguez",
        "Aprende a construir aplicaciones web modernas y escalables utilizando Angular, un framework de desarrollo de aplicaciones web desarrollado y mantenido por Google.", 5, "https://images.unsplash.com/photo-1556740734-90de374c12ad?q=80&w=1080&fit=max");
        Course savedCourse25 = courseRepository.save(course25);
        System.out.println("ID del curso guardado: " + savedCourse25.getId());

        // Curso 26
        Course course26 = new Course("Desarrollo de Aplicaciones Móviles con React Native", "Valentina Martinez",
        "Crea aplicaciones móviles nativas para iOS y Android utilizando React Native, un framework de desarrollo de aplicaciones móviles basado en React y JavaScript.", 4, "https://images.unsplash.com/photo-1556740734-90de374c12ad?q=80&w=1080&fit=max");
        Course savedCourse26 = courseRepository.save(course26);
        System.out.println("ID del curso guardado: " + savedCourse26.getId());

        // Curso 27
        Course course27 = new Course("Desarrollo de Aplicaciones Web con Vue.js", "Daniel López",
        "Aprende a construir interfaces de usuario interactivas y dinámicas para aplicaciones web utilizando Vue.js, un framework progresivo de JavaScript.", 5, "https://images.unsplash.com/photo-1556740734-90de374c12ad?q=80&w=1080&fit=max");
        Course savedCourse27 = courseRepository.save(course27);
        System.out.println("ID del curso guardado: " + savedCourse27.getId());

        // Curso 28
        Course course28 = new Course("Desarrollo de Aplicaciones Móviles con Kotlin", "Sofía Fernández",
        "Crea aplicaciones móviles para Android utilizando Kotlin, un lenguaje de programación moderno y conciso respaldado oficialmente por Google para el desarrollo de aplicaciones Android.", 4, "https://images.unsplash.com/photo-1556740734-90de374c12ad?q=80&w=1080&fit=max");
        Course savedCourse28 = courseRepository.save(course28);
        System.out.println("ID del curso guardado: " + savedCourse28.getId());

        // Curso 29
        Course course29 = new Course("Desarrollo de Aplicaciones Web con Express.js", "Valentina Martinez",
        "Aprende a construir aplicaciones web rápidas y escalables utilizando Express.js, un framework de Node.js que facilita la creación de servidores web y API.", 4, "https://images.unsplash.com/photo-1534126516187-99f397a91f9e?q=80&w=1080&fit=max");
        Course savedCourse29 = courseRepository.save(course29);
        System.out.println("ID del curso guardado: " + savedCourse29.getId());

        // Curso 30
        Course course30 = new Course("Desarrollo de Aplicaciones Móviles con Ionic", "Daniel López",
        "Crea aplicaciones móviles multiplataforma utilizando Ionic, un framework de desarrollo de aplicaciones móviles híbridas que utiliza tecnologías web estándar como HTML, CSS y JavaScript.", 5, "https://images.unsplash.com/photo-1556740734-90de374c12ad?q=80&w=1080&fit=max");
        Course savedCourse30 = courseRepository.save(course30);
        System.out.println("ID del curso guardado: " + savedCourse30.getId());
            }
}
