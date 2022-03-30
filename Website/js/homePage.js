const profileSection = document.getElementById("profilepage");
const projectSection = document.getElementById("projectpage");
const contactPart = document.getElementById("contact");
const homePart = document.getElementById("about");

slide = (context) => {

    switch(context){
        case "home":
            profileSection.classList.remove('active');
            projectSection.classList.remove('active');
            contactPart.classList.remove('active');
            homePart.classList.remove('active');
        break;
        case "contact":
            profileSection.classList.remove('active');
            projectSection.classList.remove('active');
            contactPart.classList.toggle('active');
            homePart.classList.toggle('active');
        break;
        case "project":
            profileSection.classList.toggle('active');
            projectSection.classList.toggle('active');
            contactPart.classList.remove('active');
            homePart.classList.remove('active');
        break;
    }

}