(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
        clearElements();
        event.preventDefault();
        document.querySelector(".container").classList.add("success");
        document.querySelector(".alert").style.visibility = "visible";
      },
      false
    );
  });
})();

function forceCheck(el) {
  document.querySelector("#" + el).click();
}

function clearElements() {
  document.querySelectorAll("form").forEach((el) => {
    el.reset();
    el.classList.remove("was-validated");
  });
}
