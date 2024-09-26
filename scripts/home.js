
const courses = [
    {
        type: 'CSE',
        number: 110,
        name: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        type: 'WDD',
        number: 130,
        name: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        type: 'CSE',
        number: 111,
        name: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        type: 'CSE',
        number: 210,
        name: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        type: 'WDD',
        number: 131,
        name: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        typet: 'WDD',
        number: 231,
        name: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Function to display courses dynamically based on filter
function displayCourses(filter = 'All') {
  const courseList = document.getElementById("course-list");
  courseList.innerHTML = ''; // Clear existing content

  const filteredCourses = filter === 'All' ? courses : courses.filter(course => course.type === filter);

  filteredCourses.forEach(course => {
    const courseDiv = document.createElement('div');
    courseDiv.textContent = `${course.name} - ${course.credits} credits`;
    courseDiv.style.backgroundColor = course.completed ? '#c19a6b' : '#ccc'; // Mark completed courses
    courseDiv.style.padding = '10px';
    courseDiv.style.margin = '5px 0';
    courseDiv.style.borderRadius = '5px';
    courseList.appendChild(courseDiv);
  });
}


// Hamburger menu toggle for mobile
document.getElementById('menu-toggle').addEventListener('click', () => {
  const navList = document.getElementById('nav-list');
  navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
});
displayCourses();