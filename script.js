// Toggle Hamburger Menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

// Normal Calculator
function Solve(val) {
  document.getElementById("res").value += val;
}
function Clear() {
  document.getElementById("res").value = "";
}
function Back() {
  let exp = document.getElementById("res").value;
  document.getElementById("res").value = exp.slice(0, -1);
}
function Result() {
  try {
    document.getElementById("res").value = eval(document.getElementById("res").value);
  } catch {
    document.getElementById("res").value = "Error";
  }
}

// Age Calculator
function calculateAge() {
  const dobValue = document.getElementById("dob").value;
  if (!dobValue) {
    alert("Please enter your date of birth");
    return;
  }
  const dob = new Date(dobValue);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  document.getElementById("ageResult").textContent = `Your age is ${age} years`;
}

// EMI Calculator
function calculateEMI() {
  const amount = parseFloat(document.getElementById("amount").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const months = parseFloat(document.getElementById("months").value);

  if (!amount || !rate || !months) {
    alert("Please enter valid loan details");
    return;
  }
  const monthlyRate = rate / 12 / 100;
  const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1);
  document.getElementById("emiResult").textContent = `Monthly EMI: ₹${emi.toFixed(2)}`;
}
