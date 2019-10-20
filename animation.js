var d = document.getElementById("d");
var r = document.getElementById("r");
var o = document.getElementById("o");
var oc = document.getElementById("o-cir");
var pl = document.getElementById("p-left");

d.addEventListener("mouseover", RotateD);
d.addEventListener("mouseout", RemoveD);
d.addEventListener("click", DropD);
r.addEventListener("mouseover", RemoveR);
r.addEventListener("mouseout", TopR);
r.addEventListener("mousedown", HoldR);
o.addEventListener("click", DropO);
oc.addEventListener("mouseover", BorderO);
oc.addEventListener("mouseout", RemoveO);
pl.addEventListener("mousedown", ExtendP);
pl.addEventListener("mouseup", DeExtendP);

function DropD() {
    d.classList.add("dropD");
}
function RotateD() {
    d.classList.add("rotate-d");
}
function RemoveD() {
    d.classList.remove("rotate-d");
}
function RemoveR() {
    r.classList.add("TopR");
}
function TopR() {
    r.classList.remove("TopR");
}
function HoldR() {
    r.classList.add("holdR");
}
function DropO() {
    o.classList.add("dropR");
}
function BorderO() {
    oc.classList.add("borderO");
}
function RemoveO() {
    oc.classList.remove("borderO");
}
function ExtendP() {
    pl.classList.add("ExtendP");
}
function DeExtendP() {
    pl.classList.remove("ExtendP")
}
