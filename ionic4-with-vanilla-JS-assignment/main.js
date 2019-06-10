const course_name = document.getElementById("course-name");
const course_rate = document.getElementById("course-rate");
const add_btn = document.getElementById("add-btn");
const course_list = document.getElementById("courses-list");
const alert_controller = document.querySelector("ion-alert-controller");

add_btn.addEventListener("click", () => {
    if(course_name.value.trim().length === 0 ||
        course_rate.value.trim().length === 0 || 
        course_rate.value.trim() < 1 ||
        course_rate.value.trim() > 5) {
            alert_controller.create({
                message: "Please input the correct course name and course rate!",
                header: "Invalidated Data",
                buttons: ["OK"]
            }).then(altertElement => {
                altertElement.present();
            })
            return;
    }

    const new_course_ele = document.createElement("ion-item");
    new_course_ele.innerHTML = `<strong>${course_name.value.trim()}'s rate is: &nbsp; </strong> ${course_rate.value.trim()}/5.`;
    course_list.appendChild(new_course_ele);

    course_name.value='';
    course_rate.value='';
})
