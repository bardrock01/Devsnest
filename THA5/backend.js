console.log("hello");
window.onload = function calculator() {
    var FirstOp = document.querySelector("FirstOp").value;
    document.querySelector(".btn-container").addEventListener("click", add)

    function add() {
        alert(FirstOp);
    }

}