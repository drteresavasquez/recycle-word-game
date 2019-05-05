let words = [
    "plastic",
    "sludge",
    "landfill",
    "pollution",
    "bin",
    "glass",
    "paper",
    "waste",
    "ecosystem",
    "reuse"
];

let clue = [
    "A recycable container used to hold food and drink",
    "Mixture of disgust",
    "Largest sources of pollution",
    "Toxic air and water",
    "Insert plastic, cans and paper",
    "Breakable and recycable",
    "Comes from trees and recycable",
    "Unwanted junk",
    "Living space",
    "Old thing, new way"
];

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

let word = words[Math.floor(Math.random() * words.length)];
console.log(word);

let remainingLetters = word.length;

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

/********** LOGIC...DO NOT ALTER BELOW THIS LINE ***********/

/* INDEX PAGE */

$(".message").html(`Clue: ${clue[words.indexOf(word)]}`)
$("#progress").html(`${answerArray.join(" ")}`);

$("#input").append(`
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div id="alpha">
        <div class="btn-group mr-2 btn-group-lg first" role="group" aria-label="First group">
        </div>
        <div class="btn-group mr-2 btn-group-lg second" role="group" aria-label="Second group">
        </div>
    </div>
</div>
`);

alphabet.forEach((letter, index) => {
    if (index + 1 < 14) {
        $(".first").append(`
    <button type="button" class="btn btn-secondary indLetter" id="${letter}">${letter}</button>`);
    } else {
        $(".second").append(`
    <button type="button" class="btn btn-secondary indLetter" id="${letter}">${letter}</button>`);
    }

});

$("#alpha").on("click", (e) => {
    console.log(e.target.id);
    let guess = e.target.id;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            $(`#${guess}`).addClass("taken");
            answerArray[j] = guess;
            remainingLetters--;
            $("#progress").html(`${answerArray.join(" ")}`);
        } else {
            $(`#${guess}`).addClass("notHere");
        }

        if (remainingLetters <= 0) {
            $("#progress").html(`${answerArray.join(" ")}`);
            console.log(remainingLetters);
            $(".modal-body").html(`Congrats! Your word was <strong>${answerArray.join("")}</strong>! You got it right!`);
            $('#winnersModal').modal('show');
        }
    }

})

/* ADD WORD PAGE */
// function showAllWords(){
//     $(".showWords").html(`<ul id="wordList"></ul>`);

//     words.forEach((word)=>{
//         $("#wordList").append(`<li>${word}</li>`)
//     })
// }

// showAllWords();

// $("#addWordBtn").on("click",(e)=>{
//     e.preventDefault();
//     if(!words.includes($("#addWordInput").val())){
//         words.push($("#addWordInput").val());
//     }

//     showAllWords();
//     $("#addWordInput").val("");
// })
