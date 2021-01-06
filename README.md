# Dice Game: frontend project 

This was a CodeNation project to practise using HTML, CSS and javascript methods to manipulate the DOM.  Students were given six .png images, each representing the six sides of a die.

## Project Brief

The project brief had two parts.

### Part one: one player game

The first part of the project brief was to create webpage with a dice game for one player:

* a webpage displaying a die with a 'roll' button to for the player to click:
  - if the player rolls a one, they lose
  - the play wins if they score 20 or more
  - the player can press the replay button after a game to start a new game

### Part two: two player game

The second part of the project brief was to create webpage with a dice game for two players:
    
* a webpage displaying a die with an explanation of the game and the two players' scores.  
    - Each player takes it in turns to roll the die.
    - The number on the die is added to the player's score.
    - If a player rolls a 1, they lose the game and the other player wins.
    -  If a player wishes, they can choose to miss their go by clicking the 'hold' button.
    - The winner is the first player to reach a score of 20.
    - The winner of the previous game starts the next game.

## Issues, solutions and learning points

Some issues I had and the solutions I came up with were:

* **Issue**: I wanted the die to spin whilst waiting for a player to start the game by clicking the 'play' button.  
* **Solution**: I chose one of the die png files as the rotationg die and used CSS animation and keyframes to make the die rotate continuously.

* **Issue** The webpage needed to display a different png file corresponding to the random nunmber between 1 and 6 'rolled' by each player.      
* **Solution** I made I made a function to generate a random number between 1 and 6.  I then created an eventListener for the click event on the 'roll' button.  In the eventListener, the random number function is called and set to the value of a variable. I then used template literals to subsitute the number of the dice png file in as the source of the html image tag.

* **Issue** I wanted the die to change color and display at a different rotation angle each time it was rolled.   
* **Solution**  I then used two switch statements for the numbers 1-6.  The first switch statement sets the filter style property of the html die element to a different colour.  The second switch statement changes the rotation of the die face displayed.

## Styling and responsiveness

Once the functionality was working, I worked on styling the website and making it responsive to different screen sizes, using media queries where required.