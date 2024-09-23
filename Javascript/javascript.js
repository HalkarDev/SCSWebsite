const mode = document.getElementById("mode");
const dropdown = document.getElementById("dropdown");
const elements = document.getElementsByTagName("p");
const elements2 = document.getElementsByTagName("h1");
const elements3 = document.getElementsByTagName("h3");
const elements4 = document.getElementsByTagName("h4");
const modeIcon = document.getElementById("modeicon");
const build1 = document.getElementById("build1");
const build2 = document.getElementById("build2");
const build3 = document.getElementById("build3");
const build4 = document.getElementById("build4");
const build5 = document.getElementById("build5");
const skylarIcons = document.getElementsByClassName("skylaricon");
const topbuttons = document.getElementById("topbuttons");
const buttons = document.getElementsByClassName("navbutton");
let darkMode = true;
if (dropdown != null) dropdown.value = "Build 1";



mode.onclick = () => {
    if (darkMode) {
        darkMode = false;
        document.body.style.backgroundColor = "white";
        let elements = document.getElementsByTagName("p");
        for (let i of elements) {
            i.style.color = "black";
        }
        for (let i of elements2) {
            i.style.color = "black";
        }   
        for (let i of elements3) {
            i.style.color = "black";
        }   
        for (let i of elements4) {
            i.style.color = "black";
        }   
        // heading.style.color = "black";
        modeIcon.src = "/../Images/sun.png";
        for (let i of skylarIcons) {
            i.src = "/../Images/skylarsun.jpg";
        }
        if (dropdown != null) {
            dropdown.style.border = "1px solid black";
            dropdown.style.backgroundColor = "white";
            dropdown.style.color = "black";
        }
        topbuttons.style.borderBottom = "black solid 1px";
        topbuttons.style.backgroundColor = "lightgray";
        for (let i of buttons) {
            i.style.border = "solid 1px black";
            i.style.backgroundColor = "white";
            i.style.color = "black";
        }
    }
    else {
        darkMode = true;
        document.body.style.backgroundColor = "black";
        for (let i of elements) {
            i.style.color = "white";
        }    
        for (let i of elements2) {
            i.style.color = "white";
        }    
        for (let i of elements3) {
            i.style.color = "white";
        }   
        for (let i of elements4) {
            i.style.color = "white";
        }   
        modeIcon.src = "/../Images/moon.png";
        for (let i of skylarIcons) {
            i.src = "/../Images/skylarmoon.jpg";
        }
        if (dropdown != null) {
        dropdown.style.border = "1px solid white";
        dropdown.style.backgroundColor = "black";
        dropdown.style.color = "white";
        }
        topbuttons.style.borderBottom = "white solid 1px";
        topbuttons.style.backgroundColor = "black";
        for (let i of buttons) {
            i.style.border = "solid 1px white";
            i.style.backgroundColor = "black";
            i.style.color = "white";
        }
    }
}

if (dropdown != null) {
dropdown.onchange = () => {
        if (dropdown.value == "Build 1") {
            build1.style.display = "block";
            build2.style.display = "none";
            build3.style.display = "none";
            build4.style.display = "none";
            build5.style.display = "none";
        }
        else if (dropdown.value == "Build 2") {
            build1.style.display = "none";
            build2.style.display = "block";
            build3.style.display = "none";
            build4.style.display = "none";
            build5.style.display = "none";
        }
        else if (dropdown.value == "Build 3") {
            build1.style.display = "none";
            build2.style.display = "none";
            build3.style.display = "block";
            build4.style.display = "none";
            build5.style.display = "none";
        }
        else if (dropdown.value == "Build 4") {
            build1.style.display = "none";
            build2.style.display = "none";
            build3.style.display = "none";
            build4.style.display = "block";
            build5.style.display = "none";
        }
        else if (dropdown.value == "Build 5") {
            build1.style.display = "none";
            build2.style.display = "none";
            build3.style.display = "none";
            build4.style.display = "none";
            build5.style.display = "block";
        }
    }
}
