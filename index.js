function scrollToFooter() {
  let footer = document.getElementById("footer"); //Gir en smooth "scroll" til ønsket del av nettsiden
  footer.scrollIntoView({ behavior: "smooth" });
}

function scrollToProjects() {
  let projects = document.getElementById("projects");
  projects.scrollIntoView({ behavior: "smooth" });
}

function scrollToHobbies() {
  let Hobbies = document.getElementById("Hobbies");
  Hobbies.scrollIntoView({ behavior: "smooth" });
}
