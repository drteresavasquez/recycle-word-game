let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];

let word = words[Math.floor(Math.random() * words.length)];
console.log(word);

let remainingLetters = word.length;

let answerArray = [];
for(let i = 0; i < word.length; i++){
    answerArray[i] = "_";
}

$("#progress").html(`${answerArray.join(" ")}`);

$("#input").append(`
    <form class="form-inline">
        <input type="text" class="form-control" id="letter" placeholder="Your Guess">
        <button type="submit" id="submit" class="btn btn-primary">Submit</button>
    </form>
`);

$("#submit").click((e)=>{
    e.preventDefault();
    let guess = $("#letter").val();
    $(".message").html("");
    if(guess.length !== 1 || guess === " "){
        alert("Please enter ONE letter");
    }else{
        console.log("GUESS 2",guess);
        for(let j = 0; j < word.length; j++){
            if(word[j] === guess){
                answerArray[j] = guess;
                remainingLetters--;
                $("#progress").html(`${answerArray.join(" ")}`);
                $("#letter").val("");
            }else{
                $("#letter").val("");
            }

            if(remainingLetters <= 0){
                $("#progress").html(`${answerArray.join(" ")}`);
                console.log(remainingLetters);
                $(".modal-body").append(`Congrats! Your word was <strong>${answerArray.join("")}</strong>! You got it right!`);
                $('#winnersModal').modal('show');
            }
        }
    }
});
