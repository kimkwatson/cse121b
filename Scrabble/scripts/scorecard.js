// Get elements from the DOM.
const word = document.querySelector('#word');
const word2 = document.querySelector('#word2');
const points = document.querySelector('#points');
const points2 = document.querySelector('#points2');
const button = document.querySelector('#button');
const button2 = document.querySelector('#button2');
const wordList = document.querySelector('#words');
const wordList2 = document.querySelector('#words2');

// Start scores at zero.
let total = 0;
let total2 = 0;

// Call addWord function if button is clicked.
button.addEventListener("click", addWord);
button2.addEventListener("click", addWord);

// Add word and points to a list.
function addWord(event) {
    
    if(event.target.id === 'button') {
        const currentWord = word.value;
        word.value = '';
        const currentPoints = points.value*1;
        points.value = '';
        const li = document.createElement('li');
        li.innerHTML = `${currentWord}  (${currentPoints})`;
        wordList.appendChild(li);
        total += currentPoints;
        document.querySelector('#total').innerHTML = total;
        // Call getDefinition function with inputted word as an argument.
        getDefinition(currentWord);
        // Move cursor to Player2 word input box.
        word2.focus();
    }
    else if(event.target.id === 'button2') {
        const currentWord = word2.value;
        word2.value = '';
        const currentPoints = points2.value*1;
        points2.value = '';
        const li2 = document.createElement('li');
        li2.innerHTML = `${currentWord}  (${currentPoints})`;
        wordList2.appendChild(li2);
        total2 += currentPoints;
        document.querySelector('#total2').innerHTML = total2;
        // Call getDefinition function with inputted word as an argument.
        getDefinition(currentWord);
        // Move cursor to Player1 word input box.
        word.focus();
    }
    
    // Get definition info from API Dictionary for current word
    async function getDefinition(word) {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (response.ok) {
            let dictionary = await response.json();
            outputDefinition(dictionary);
        }
    }

    // Output definition info for current word
    function outputDefinition(dictionary) {
        meaning = dictionary[0].meanings[0].definitions[0];
        h3 = document.createElement('h3');
        const div = document.querySelector('#definition');
        div.innerHTML = `${dictionary[0].word}: ${dictionary[0].phonetic} ${meaning.definition}`;
        div.appendChild(h3);
}
}



