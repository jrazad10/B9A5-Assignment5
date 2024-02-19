
//Buy Ticket buttom
document.addEventListener('DOMContentLoaded', function () {
    const bannerBtn = document.getElementById('banner-btn');
    const phPoribahan = document.getElementById('ph-poribahan');

    bannerBtn.addEventListener('click', function () {
        phPoribahan.scrollIntoView();
    });
});



function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
/*---------------------------------------------------------------*/








/*-----------------------------------------------------*/
const cards = document.querySelectorAll(".card");

let count = 0;
let totalPrice = 0;

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    card.addEventListener("click", function () {
        count = count + 1;

        /*get the seat Number*/
        const title = card.querySelector("h3").innerText;

        const titleContainer = document.getElementById("title-container");

        const economy = document.getElementById("class-eco").innerText;

        const TicketTag = parseFloat(document.getElementById("ticket-price").innerText.split(" ")[0]);

        const p = document.createElement("p");
        p.innerText = title;

        const p2 = document.createElement("p");
        p2.innerText = economy;

        const p3 = document.createElement("p");
        p3.innerText = TicketTag;

        titleContainer.appendChild(p);
        titleContainer.appendChild(p2);
        titleContainer.appendChild(p3);

        const countLeft = document.getElementById("negative").innerText;

        const convertNumber = parseInt(countLeft);
        if (convertNumber - 1 < 0) {
            alert("Not Selected any seat")
            return;
        }
        document.getElementById("negative").innerText = convertNumber - 1;



        const TicketPrice = parseFloat(document.getElementById("ticket-price").innerText.split(" ")[0]);



        /* Calculate price */
        totalPrice += TicketPrice;


        document.getElementById("totalPrice").innerText = totalPrice;


        setInnerText("count", count)
    })
}






const btn = document.getElementById("apply-btn");

btn.addEventListener("click", function () {


    /*get the value from input*/
    const couponElement = document.getElementById("input-field").value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    if (totalPrice >= 2200) {
        if (couponCode === "NEW15" || couponCode === "Couple20") {

            document.getElementById("apply-div").classList.add("hidden");
            btn.classList.add("hidden");


            /* Discount Calculate*/
            const discountElement = document.getElementById("discountPrice");
            const discountAmount = totalPrice * 0.15;
            discountElement.innerText = discountAmount;

            /*Total Calculate*/
            const grandTotal = document.getElementById("total");
            grandTotal.innerText = totalPrice - discountAmount;

            /*Clear input field*/
            document.getElementById("input-field").value = " ";
        }
        else {
            alert("Invalid Coupon Code");
            document.getElementById("input-field").value = " ";
        }
    }
    else {
        alert("Please at least buy 4 tickets");
        document.getElementById("input-field").value = " ";
    }

})




/* Button background color set*/
for (let i = 1; i <= 40; i++) {
    const btn = document.getElementById(`btn${i}`);

    btn.addEventListener('click', function () {
        btn.classList.toggle('bg-green-500');
    });
}










document.addEventListener('DOMContentLoaded', function () {

    const seatCardBtn = document.querySelectorAll('.card');
    const selectedText = document.getElementById('section-id"');



    seatCardBtn.addEventListener('click', function () {

        selectedText.classList.add('bg-green-500', 'text-white');
    });
});





















































































