
const course ={
    name : "JS in Hindi",
    price : 2000,
    courseInstructor : "Hitesh Choudhry "
}

// console.log(course.courseInstructor);

// destructing 
const {courseInstructor : Instructor}=course
console.log(Instructor);

