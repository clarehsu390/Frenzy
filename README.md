# Word Frenzy

[LiveSite][Word Frenzy]

[Word Frenzy]: https://clarehsu390.github.io/Frenzy/

Word Frenzy is a game inspired by Boggle, created using vanilla Javascript and jQuery.

jQuery handles any interaction the user has with the game.

![Game](https://user-images.githubusercontent.com/26496447/28978042-53d17cf8-78f9-11e7-8a7c-be7065f89f78.png)

## Features
  * Users can connect letters using a click and drag motion.
  * Users can reset the board if they can't finding any more words.
  * The game will keep track of what words the user has already submitted.
  * Selected squares will be replaced by new letters.

## Project Design
[dev-readme]: docs/README.md
[wireframes]: docs/wireframes

[Development README][dev-readme]

[Wireframes][wireframes]


#### jQuery click functions

This game relies on jQuery click functions in order to play. When the user's mouse is down, the square is selected and the letter is appended to the word they are forming. Once the user releases the mouse, the word is checked against a dictionary.

```javascript
$(".square").mouseup(function(){
  $(".square").removeClass("highlight");
  clicking = false;
  display = "";
  $("#potential").text(display);
  if (trie.contains(word) && word.length === 3 && !wordArr.includes(word)) {
    wordArr.push(word);
    score += 5;
    $(".score").text(`${score}`);
    $("#feedback").append('<li>Great!</li>');
    $(".submitted").append(`<li>${word}</li>`);
    board.replace();
  }
});

```


![Click](https://user-images.githubusercontent.com/26496447/28978148-b7e3c53e-78f9-11e7-9472-747bfc89d65c.gif)

#### Trie Data Structure

The dictionary used in the game was built on a trie data structure, allowing for efficient search. The structure starts with a root node which is an empty string. Every other node represents a word or prefix of one or more words. Each node represents a character, and each node's descendants have a common prefix.

```javascript
contains(word) {
  let currentNode = this.root;
  //check to see if character node exists in children
  for(let i = 0; i < word.length; i++) {
    let char = word[i];
    if (currentNode.children[char]){
      //next depth of the trie
      currentNode = currentNode.children[char];
    }
    else {
      //not a valid word
      return false;
    }
  }
  return currentNode.isWord;
}
```



#### Replacement

After a word is selected and verified, those squares will be replaced by new letters. Users can also click the 'reset' button to reset the board.

```javascript
replace() {

    const $selected = $(".selected");
    $selected.each(function(index) {
      const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      let newLetter = $($selected[index]);
      newLetter.text(letter);
    });
    $(".selected").addClass("animated fadeInUp");
    $(".square").removeClass("selected");

}
```


## Future features

#### Adding Levels
Allow users to choose different levels of difficulty.

#### Bonuses
Depending on the difficulty of the word, certain words will receive extra points.
