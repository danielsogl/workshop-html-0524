const defaultMessage = "Default Alert!";

/**
 * @function showAlert
 * @param {string} message - The message to show in the alert
 * @returns {void}
 */
const showAlert = (message) => {
  let alertMessage = "";

  if (message) {
    alertMessage = message;
  } else {
    alertMessage = defaultMessage;
  }

  alert(alertMessage);
};

// listen to element events
document.querySelector("#search-btn").addEventListener("click", () => {
  console.log("Search clicked");
});

/**
 * @function search
 * @returns {void}
 */
function search() {
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;

  // showAlert(`Search from ${from} to ${to}`);
  addFlightToTable({ from, to, id: "123", date: new Date() });
}

/**
 * @function addFlight
 * @returns {void}
 */
function addFlightToTable(flight) {
  // select table body
  const table = document.getElementById("flight-table");
  const tableBody = table.getElementsByTagName("tbody")[0];

  // create table row with cols
  const newRow = tableBody.insertRow(2);
  const idCell = newRow.insertCell(0);
  const fromCell = newRow.insertCell(1);
  const toCell = newRow.insertCell(2);
  const dateCell = newRow.insertCell(3);

  // set cell values
  idCell.innerText = "1";
  fromCell.innerText = "Bla";
  toCell.innerText = "Bla";
  dateCell.innerText = new Date().toLocaleDateString();
}
