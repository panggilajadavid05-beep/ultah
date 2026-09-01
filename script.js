const opening = document.getElementById("opening");
const website = document.getElementById("website");
const musik = document.getElementById("musik");


// MEMBUKA WEBSITE

function mulaiWebsite() {

    opening.style.opacity = "0";

    setTimeout(() => {

        opening.style.display = "none";

        website.classList.remove("hidden");

        musik.play();

    }, 800);

}


// KEJUTAN

function kejutan() {

    const message =
        document.getElementById("surpriseMessage");

    message.classList.remove("hidden");

    message.scrollIntoView({
        behavior: "smooth"
    });

}


// COUNTDOWN

const tanggalUlangTahun =
    new Date("September 15, 2026 00:00:00").getTime();


setInterval(() => {

    const sekarang =
        new Date().getTime();

    const jarak =
        tanggalUlangTahun - sekarang;


    const hari =
        Math.floor(
            jarak / (1000 * 60 * 60 * 24)
        );


    const jam =
        Math.floor(
            (jarak %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const menit =
        Math.floor(
            (jarak %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const detik =
        Math.floor(
            (jarak %
                (1000 * 60))
            /
            1000
        );


    document.getElementById("days")
        .innerText = String(hari)
        .padStart(2, "0");


    document.getElementById("hours")
        .innerText = String(jam)
        .padStart(2, "0");


    document.getElementById("minutes")
        .innerText = String(menit)
        .padStart(2, "0");


    document.getElementById("seconds")
        .innerText = String(detik)
        .padStart(2, "0");


}, 1000);