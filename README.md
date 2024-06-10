# rockPaperScissors

## Abstract
- Classic and "difficult mode" rock, paper, scissors! Players select their desired game item by clicking the svg button of their choosing, at which point the computer will randomly generate an item to face off against the player. After the result of the game, player and computer scores are incremeted up depending on the winning side.

## Contributors
- This project was written entirely by Robert Phillips.

## Preview of App
![Rock Paper Scissors Screenshot](<Screenshot 2024-06-10 at 4.34.59 PM.png>)

## Live link to app below

## Learning Goals
- Above all, continuing to explore the ways in which I can create dynamic content through the manipulation of DOM elements using JavaScript. Every project presents new challenges, and I feel a bit stronger in my foundations each time I finish one.

## Wins + Challenges
- Wins : Having new solutions for new problems! Smaller new things like looping through all my button types, figuring out how to use style.pointerEvents in order to get my setTimeout function to behave correctly, and DEFINITELY (lines 134 - 137 in main.js) using string interpolation to create a dom element and manipulate my data in ways that I haven't yet to get my desired result. It felt like I took a bunch of new concepts and mixed them all up in a bowl, somehow producing something effective. Pretty sweet.

- Challenges : The concept of data-model first is still tricky for me, and definitely was very much so as I began the project. Writing my first initial decideWinner function to simply reflect the winner of each game (and increment wins up on the character objects within my data model) for whatever reason felt disjointed. However, as I started to piece more and more things together, it became clear to me why we want to handle it in that order. The data model very much if our only source of truth, and as long as the logic works there, everything in the DOM will replicate it once we tie them together.

