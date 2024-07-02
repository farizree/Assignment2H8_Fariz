function buttonEdit() {
    var x = document.getElementById("form-div");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    let nameView = document.getElementById("name-view").innerHTML;
    let roleView = document.getElementById("role-view").innerHTML;
    let avalabilityView = document.getElementById("avalability-view").innerHTML;
    let usiaView = document.getElementById("usia-view").innerHTML;
    let lokasiView = document.getElementById("lokasi-view").innerHTML;
    let experienceView = document.getElementById("experience-view").innerHTML;
    let emailView = document.getElementById("email-view").innerHTML;
    document.getElementById("nama").value = nameView;
    document.getElementById("role").value = roleView;
    document.getElementById("avalability").value = avalabilityView;
    document.getElementById("usia").value = usiaView;
    document.getElementById("lokasi").value = lokasiView;
    document.getElementById("yearExperience").value = experienceView;
    document.getElementById("email").value = emailView;
  }
  
  function submitForm() {
    document.getElementById("name-view").innerHTML = document.getElementById("nama").value;
    document.getElementById("role-view").innerHTML = document.getElementById("role").value;
    document.getElementById("avalability-view").innerHTML = document.getElementById("avalability").value;
    document.getElementById("usia-view").innerHTML = document.getElementById("usia").value;
    document.getElementById("lokasi-view").innerHTML = document.getElementById("lokasi").value;
    document.getElementById("experience-view").innerHTML = document.getElementById("yearExperience").value;
    document.getElementById("email-view").innerHTML = document.getElementById("email").value;
  }