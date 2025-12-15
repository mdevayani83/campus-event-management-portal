function createEvent() {
    const name = document.getElementById("eventName").value;
    const date = document.getElementById("eventDate").value;

    if (name === "" || date === "") {
        alert("Please enter all event details");
        return;
    }

    document.getElementById("message").innerText =
        "Event '" + name + "' created successfully!";
}
