const d = document;

export function OpenSidebar() {
    d.getElementById("sidebar").style.maxWidth = "50%";
    d.getElementById("sidebar").style.width = "350px";
}

export function CloseSidebar() {
    d.getElementById("sidebar").style.width = "0";
}