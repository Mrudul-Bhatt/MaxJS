const addEmpModal = document.getElementById("add-modal");
const startAddEmpButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddEmpButton = addEmpModal.querySelector(".btn--passive");
const confirmAddEmpButton = cancelAddEmpButton.nextElementSibling;
// const userInputs = addEmpModal.querySelectorAll("input");
const userInputs = document
  .getElementById("user-inputs")
  .querySelectorAll("input");

const entryTextSection = document.getElementById("entry-text");

const employees = [];

const updateUI = () => {
  if (employees.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const renderNewEmployeeList = (name, email) => {
  const newEmpEle = document.createElement("li");
  newEmpEle.className = "movie-element";

  newEmpEle.innerHTML = `
    <div>
      ${name}
    </div>
    <div>
    ${email}
    </div>
  `;

  const listRoot = document.getElementById("movie-list");
  listRoot.append(newEmpEle);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleEmpModal = () => {
  addEmpModal.classList.toggle("visible");
  toggleBackdrop();
};

const backDropClickHandler = () => {
  toggleEmpModal();
};

const clearEmpInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const addEmpHandler = () => {
  const name = userInputs[0].value;
  const email = userInputs[1].value;
  const dob = userInputs[2].value;
  const salary = userInputs[3].value;
  const it = userInputs[4].value;
  const hr = userInputs[5].value;

  var mail_format = /^\S+@\S+\.\S+$/;

  var name_format = /^[A-Za-z]+$/;

  if (name.trim() === "") {
    alert("Name is empty!");
  } else if (!name.match(name_format)) {
    alert("Please enter valid name!");
  } else if (email.trim() === "") {
    alert("Email is empty!");
  } else if (!email.match(mail_format)) {
    alert("Please enter valid email!");
  } else if (dob.trim() === "") {
    alert("Date of birth is empty!");
  } else if (
    salary.trim() === "" ||
    salary.includes("+") ||
    salary.includes("-") ||
    salary.includes(".") ||
    salary.includes("e") ||
    salary.includes("E")
  ) {
    alert("Please enter valid salary!");
  } else {
    // alert("Valid values");
    const newEmployee = {
      name,
      email,
      dob,
      salary: +salary,
      department: it ? it : hr,
    };

    employees.push(newEmployee);
    console.log(employees);
    toggleEmpModal();
    clearEmpInput();
    renderNewEmployeeList(name, email);
    updateUI();
  }
};

const cancelAddEmpHandler = () => {
  toggleEmpModal();
  clearEmpInput();
};

startAddEmpButton.addEventListener("click", toggleEmpModal);
backdrop.addEventListener("click", backDropClickHandler);
cancelAddEmpButton.addEventListener("click", cancelAddEmpHandler);
confirmAddEmpButton.addEventListener("click", addEmpHandler);
