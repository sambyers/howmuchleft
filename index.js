const bookEmoji = "ðŸ“˜";
const movieEmoji = "ðŸ¿";
const vacationEmoji = "ðŸŒ´";
const lifetime = 79 // Place holder for dynamic data

function printEmojis(count, emoji, id) {
    emojis = emoji.repeat(count);
    document.getElementById(id).innerHTML = emojis;
}

function itemsLeft(years, items) {
    var itemsLeft = years * items;
    return itemsLeft;
}

function vacationsLeft(years, vacations) {
    var vacationsLeft = itemsLeft(years, vacations);
    document.getElementById("vacationanswer").innerHTML = "You have " + vacationsLeft + " vacations left."
    printEmojis(vacationsLeft, vacationEmoji, "vacationsymbols");
}

function booksLeft(years, books) {
    var booksLeft = itemsLeft(years, books);
    document.getElementById("bookanswer").innerHTML = "You have " + booksLeft + " books left."
    printEmojis(booksLeft, bookEmoji, "booksymbols");
}

function moviesLeft(years, movies) {
    var movesLeft = itemsLeft(years, movies);
    document.getElementById("movieanswer").innerHTML = "You have " + movesLeft + " movies left."
    printEmojis(movesLeft, movieEmoji, "movieymbols");
}

function howManyLeft() {
    var age = parseInt(document.getElementById("age").value, 10);
    var lifeExpectancy = lifetime - age;
    document.getElementById("lifeexpectancy").innerHTML = "You may live approximately " + lifeExpectancy + " more years.";
    // Vacations
    var vacationsPerYear = parseInt(document.getElementById("vacationquestion").value, 10);
    vacationsLeft(lifeExpectancy, vacationsPerYear)
    // Books
    var booksPerYear = parseInt(document.getElementById("bookquestion").value, 10);
    booksLeft(lifeExpectancy, booksPerYear);
    // Movies
    var moviesPerYear = parseInt(document.getElementById("moviequestion").value, 10);
    moviesLeft(lifeExpectancy, moviesPerYear)
    // Make answers visible
    document.getElementById("answers").classList.remove('visually-hidden');
  }