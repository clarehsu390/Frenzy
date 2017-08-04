## Word Frenzy

 ### Background

 Word Frenzy is a spin of and interactive version of the traditional word search. Users will get points based off of length and difficulty of words.

 Unlike traditional word search, users will be able to:
 1) Select letters that are adjacent on a multidirectional mouse gesture.
 2) Find words that
 3) Every time a word is selected, new letters will replace those selected.y

 More features will be outlined in detail in the **Functionality & MVP** and **Bonus Features** sections.

 ### Functionality & MVP  

 With Word Frenzy, users will be able to:

 - [ ] Start, pause timer, and reset the letters grid (if no words are left)
 - [ ] Select adjacent letters to form words checked against a dictionary.
 - [ ] Have users select words based on a certain theme.
 - [ ] New letters will replace the words that were selected.

 In addition, this project will include:

 - [ ] A demo to show how to play the game (valid moves)
 - [ ] A production Readme

 ### Wireframes

 This app will consist of a single screen with a randomly generated word grid, a timer, a demo modal to show valid moves, and links to my Github and LinkedIn. There will also be a pause button to pause the timer as well as a reset button to rearrange the grid. Users will be able to click on the squares and drag to form a word. Once the mouse is let go, the word will be submitted and points added accordingly. New letters will then represent the letters selected. On the left side, points will be accumulated based on word length. Bonus Features: There will also be an option to choose Themes.

 ![wireframes](images/js_wireframe.jpeg)

 ### Architecture and Technologies

 This project will be implemented with the following technologies:

 - Vanilla JavaScript and `jquery` for overall structure and game logic,
 - `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
 - Webpack to bundle and serve up the various scripts.

 In addition to the webpack entry file, there will be three scripts involved in this project:

 `board.js`: this script will handle the logic for creating and updating the necessary `Easel.js` elements and rendering them to the DOM.
