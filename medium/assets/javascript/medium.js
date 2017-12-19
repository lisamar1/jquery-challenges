/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

$(function () {

  function randomNumber(lowerBound = 0, upperBound = 3) {
    return Math.floor(Math.random() * (upperBound - lowerBound) + lowerBound);
  }

  function incrementCounter(counter) {
    counter.html(parseInt(counterOne.html()) + 1);
  }
  const numResets = $("#num-resets");

  $("button#reset").click(function(){
   teamOneScore.html(0);
   counterOne.html(0);
   teamTwoScore.html(0);
   counterTwo.html(0);
   numResets.html(parseInt(numResets.html()) + 1);
  })  

  const incrementShootButtonTeamOne = $("#teamone-shoot");
  const counterOne = $("#teamone-numshots");
  const teamOneScore = $('#teamone-numhits');

  incrementShootButtonTeamOne.click(function () {
    const pointValueOfShot = randomNumber();

    incrementCounter(counterOne);

    if (pointValueOfShot > 0) { // scored 1-3
      teamOneScore.html(parseInt(teamOneScore.html()) + pointValueOfShot);
      $("body").css("background-color", "blue");  
    } else { // scored 0
      // change color of something
    }

    
  })

  const incrementShootButtonTeamTwo = $("#teamtwo-shoot");
  const counterTwo = $("#teamtwo-numshots");
  const teamTwoScore = $('#teamtwo-numhits');

  incrementShootButtonTeamTwo.click(function () {
    const pointValueOfShot = randomNumber();

    incrementCounter(counterTwo);

    if (pointValueOfShot > 0) { // scored 1-3
      teamTwoScore.html(parseInt(teamTwoScore.html()) + pointValueOfShot);
      $("body").css("background-color", "red");
    } else { // scored 0
      // change color of something
    }
   
  })
  
    
  })