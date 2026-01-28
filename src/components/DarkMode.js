export default function Toggle(showAlert) {
    if (typeof showAlert !== 'function') {
        return;
    }

    document.body.classList.toggle("bg-secondary");
    document.body.classList.toggle("text-white");
    let navbar = document.getElementsByClassName("navbar")[0];
    let title = document.getElementsByClassName("navbar-brand")[0];
    let home = document.getElementsByClassName("nav-link")[0];
    let area = document.getElementsByClassName("form-control")[0];
    let para=document.querySelectorAll("p");
    if (document.body.classList.contains("bg-secondary")) {
        navbar.style.backgroundColor = "rgb(49 62 94)";
        title.style.color = "#fff";
        home.style.color = "#fff";
        para.forEach((e)=>{
                e.style.color="#fff";
            }
        );
        if(area) {
            area.style.backgroundColor = "rgb(49 62 94)";
            area.style.color = "#fff";
        }
        showAlert("Dark mode has been enabled","success");
    }
    else {
        navbar.style.backgroundColor = "#fff";
        title.style.color = "black";
        home.style.color = "black";
        para.forEach((e)=>{
                e.style.color="black";
            }
        );
        if(area) {
            area.style.backgroundColor = "#fff";
            area.style.color = "black";
        }
        showAlert("Light mode has been enabled","success");
    }

}