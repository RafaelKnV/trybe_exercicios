const submitButton = document.querySelector("#submit-button");
function cancelEvent(event) {
event.preventDefault();

}
submitButton.addEventListener('click', cancelEvent);
