var clicked = document.querySelector('.newBox');
var booked = 0;
var nBooked = 36;
const fn = () => {

    for (var i = 0; i < 36; i++) {
        let newBoxDiv = document.createElement("div");
        document.querySelector(".boxBackground").appendChild(newBoxDiv);

        newBoxDiv.classList.add("newBox");
        newBoxDiv.style.height = "120px";
        newBoxDiv.style.width = "120px";
        newBoxDiv.style.backgroundColor = "black";
        // if ((document.querySelector('.newBox').addEventListener('click', () => { return true; })))
        // // if (document.querySelector('.newBox').addEventListener('click')) {
        // //     document.querySelector('.seatbooked').value++;
        // //     newBoxDiv.style.backgroundColor = "grey";

        // // }
        newBoxDiv.style.border = "1px solid red";

        // clicked.addEventListener('click', () => {
        //         if (newBoxDiv.classList.contains(random.class)) {
        //             booked += 1;

        //         }) console.log(booked);


    }

}
fn();