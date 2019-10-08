// Empty array of sports teams
var sportsTeam = [];

// Function for displaying sports team data
function renderButtons() {
    // Deleting the buttons if any prior to addind new ones
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of teams
    for (var i = 0; i < sportsTeam.length; i++) {
        // Then dynamicaly generating buttons for each movie in the array
        var a = $("<button>");
        // Adding a class
        a.addClass("team");
        // Added a data-attribute
        a.attr("data-name", sportsTeam[i]);
        // Provided the initial button text
        a.text(sportsTeam[i]);
        // Added the button to the HTML
        $("#buttons-view").append(a);
    }
}

// This function handles events where one button is clicked
$("#submit").on("click", function(event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var team = $("#sport-input")
        .val()
        .trim();

    // The movie from the textbox is then added to our array
    sportsTeam.push(team);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});

renderButtons();

$(document).on("click", ".team", function() {
    var sportsteam = $(this).attr("data-name");
    var queryURL =
        "https://api.giphy.com/v1/gifs/search?q=" +
        sportsteam +
        "&api_key=3QGN2O8Bws9dO6cv6z5FmzS3twWYL4ZZ&limit=10&offset=0&rating=PG-13&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var results = response.data;
        console.log(response);

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var staticImage = results[i].images.fixed_height_still.url;
            var animateImage = results[i].images.fixed_height.url;
            var teamImage = $("<img>");

            teamImage.attr("src", staticImage);
            teamImage.addClass("image");
            teamImage.attr("data-state", "still");
            teamImage.attr("data-still", staticImage);
            teamImage.attr("data-animate", animateImage);

            gifDiv.prepend(p);
            gifDiv.prepend(teamImage);

            $("#gifs-appear-here").prepend(gifDiv);
        }
    });
});
