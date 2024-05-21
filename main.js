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

  getFlightsFromApi(from, to).then((flights) => {
    flights.forEach((flight) => {
      addFlightToTable(flight);
    });
  });

  // showAlert(`Search from ${from} to ${to}`);
  // addFlightToTable({ from, to, id: "123", date: new Date() });
}

/**
 * @function getFlightsFromApi
 * @param {string} from - The departure location
 * @param {string} to - The destination location
 * @returns {Promise<Flight[]>}
 */
function getFlightsFromApi(from, to) {
  // build url with query params
  const url = new URL("https://demo.angulararchitects.io/api/flight");
  url.searchParams.append("from", from);
  url.searchParams.append("to", to);

  return (
    fetch(url.href)
      // returns another promise
      .then((response) => response.json())
      .catch((error) => {
        // handle response errors and return an empty array of flights
        return [];
      })
  );
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
  const newRow = tableBody.insertRow();
  const idCell = newRow.insertCell(0);
  const fromCell = newRow.insertCell(1);
  const toCell = newRow.insertCell(2);
  const dateCell = newRow.insertCell(3);

  // set cell values
  idCell.innerText = flight.id;
  fromCell.innerText = flight.from;
  toCell.innerText = flight.to;
  dateCell.innerText = new Date(flight.date).toLocaleDateString();
}
