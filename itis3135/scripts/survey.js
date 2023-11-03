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

// Function that takes the first image that the user uploads.
function loadImage() { 
    const imageUpload = document.getElementById("userImage").files[0];
    if (!imageUpload) {
        alert("No image selected!");
    }
    const imageUrl = URL.createObjectURL(imageUpload);
    console.log(imageUrl);
    return imageUrl;
}

// Function that shows the courses the user submits.
function showCourses() {
    const courseList = document.createElement("ul");
    const newCourses = document.getElementById("newCourses");

    for (let i = 0; i < newCourses.children.length; i++) {
        const after = newCourses.children[i];

        if (next.nodeName === "INPUT" && next.value.trim() !== "") {
            const addCourse = document.createElement("li");
            addCourse.innerText = after.value;
            courseList.appendChild(addCourse);
        }
    }
    return addCourse;
}


// Function that shows the user input.
function submitAndShow() {
    //const name = document.getElementById("name").value;
    //const mascot = document.getElementById("mascot").value;
    //const imageCaption = document.getElementById("imageCaption").value;
    //const personalBackground = document.getElementById("personalBackground").value;
    //const proBackground = document.getElementById("proBackground").value;
    //const academicBackground = document.getElementById("academicBackground").value;
    //const classBackground = document.getElementById("classBackground").value;
    //const primaryComputer = document.getElementById("primaryComputer").value;
    //const funny = document.getElementById("funny").value;
    //const more = document.getElementById("more").value;
    //const defaultForm = document.getElementById("introForm").innerHTML;
    //const image = loadImage();
    //let courses = showCourses();

    // Get the TA to help you with this!
}