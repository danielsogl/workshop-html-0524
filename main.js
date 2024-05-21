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

  showAlert(`Search from ${from} to ${to}`);
}
