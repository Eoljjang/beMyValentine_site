const yes_btn = document.querySelector("#yes-btn");
const no_btn = document.querySelector("#no-btn");
const yes_dialog = document.querySelector(".yes-dialog");
const no_dialog = document.querySelector(".no-dialog");
const close_btn_no = document.querySelector(".close-btn-no");
const close_btn_yes = document.querySelector(".close-btn-yes");
var happy_song = document.querySelector("#happy-song");

no_btn.addEventListener("click", () =>{ // On click => Show the dramatic cat meme.
    no_dialog.style.display = 'flex';
})

yes_btn.addEventListener("click", () => { // On click => Show the happy happy cat meme.
    yes_dialog.style.display = 'flex';
    happy_song.play();
})

close_btn_no.addEventListener("click", () => {
    no_dialog.style.display = 'none';
})

close_btn_yes.addEventListener("click", () => {
    yes_dialog.style.display = 'none';
    happy_song.pause();
})