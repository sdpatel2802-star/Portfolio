// Typing Effect
let text = "Shubh Patel";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("name").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}
typing();

// Projects Data
let projects = [
    { name: "Bus Booking System", desc: "Online ticket booking system" },
    { name: "Chat App", desc: "Real-time chat application" },
    { name: "EHR System", desc: "Health record management system" }
];

// Display Projects
let projectList = document.getElementById("project-list");

projects.forEach(project => {
    let div = document.createElement("div");
    div.classList.add("project");
    div.innerHTML = `<h3>${project.name}</h3><p>${project.desc}</p>`;
    projectList.appendChild(div);
});

// Download CV
function downloadCV() {
    alert("CV Download Started!");
}

// Contact Form
function sendMessage(e) {
    e.preventDefault();
    alert("Message Sent Successfully!");
}