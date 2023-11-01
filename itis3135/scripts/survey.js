// Function to validate that all the fields are not empty.
function formValidation() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const imageCaption = document.getElementById("imageCaption").value;
    const personalBackground = document.getElementById("personalBackground").value;
    const proBackground = document.getElementById("proBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const classBackground = document.getElementById("classBackground").value;
    const primaryComputer = document.getElementById("primaryComputer").value;
    const funny = document.getElementById("funny").value;
    const more = document.getElementById("more").value;
    const termsAndConditions = document.getElementById("termsAndConditions");

    if (
        name === "" || mascot === "" || imageCaption === "" || personalBackground === "" || proBackground === "" || academicBackground === "" || classBackground === "" || primaryComputer === "" || funny === "" || more === "" || termsAndConditions === "" || !termsAndConditions.checked
    ) {
        alert("Fill out all fields and check the box please.");
    }
    else {
        submit();
    }
}

// Function that adds a course option
function newClass() {
    const userCourses = document.getElementById("newCourses");
    const input = document.createElement("input");
    input.type = "text";
    input.name = "newCourse"
    input.placeholder = "Name of course";
    const deleteCourse = document.createElement("button");
    deleteCourse.type = "button";
    deleteCourse.textContent = "Delete course"

    deleteCourse.addEventListener("click", () => {
        userCourses.removeChild(input);
        userCourses.removeChild(deleteCourse);
    });

    userCourses.appendChild(input);
    userCourses.appendChild(deleteCourse);
}

// Function that submits and shows the user input.
function submitAndShow() {

}