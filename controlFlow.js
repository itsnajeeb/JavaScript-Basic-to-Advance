function getGrade(grade) {
    if (grade >= 90 && grade <= 100) return "A+"
    if (grade >= 80 && grade <= 89) return "A"
    if (grade >= 70 && grade <= 79) return "B"
    if (grade >= 60 && grade <= 69) return "C"
    if (grade >= 33 && grade <= 59) return "D"
    if (grade >= 0 && grade <= 32) return "Fail"
    else return "Invalid Marks"
}
console.log(getGrade(89));
