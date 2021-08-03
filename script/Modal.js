const d = document,
    body = d.querySelector("body");

export function AppearModal(modal) {
    modal.style.display = "block";
    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "";
}

export function DisappearModal(modal) {
    modal.style.display = "none";
    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
}