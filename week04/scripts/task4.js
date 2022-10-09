/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let kimInformation = {

// Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: "Kim Watson",

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: "images/profile-picture.jpeg",
    
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: ['pizza', 'salad', 'berries', 'cashews', 'chocolate', 'french toast', 'rice', 'carnitas'],

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: ['cooking', 'playing the piano', 'hiking', 'camping', 'walking', 'podcasts', 'programming'],

// Step 6: Add another property named placesLived with a value of an empty array
    placesLived: []
    }
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
kimInformation.placesLived = [
    {
        place: 'Singapore',
        length: '2 years',
    },
    {
        place: 'Hong Kong',
        length: '3 years',
    },
    {
        place: 'North Kingstown, RI',
        length: '5 years',
    },
    {
        place: 'Chandler, AZ',
        length: '10 years',
    },
    {
        place: 'Tucson, AZ',
        length: '5 years',
    },
    {
        place: 'West Jordan, UT',
        length: '3 years',
    },
    {
        place: 'Queen Creek, AZ',
        length: '13 years',
    }
];
// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').innerHTML = kimInformation.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').src = kimInformation.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').alt = kimInformation.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let foodList = document.querySelector('#favorite-foods');
kimInformation.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.innerHTML = food;
    foodList.append(li);
});

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbyList = document.querySelector('#hobbies');
kimInformation.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.innerHTML = hobby;
    hobbyList.append(li);
});
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let placesList = document.querySelector('#places-lived');
kimInformation.placesLived.forEach(x => {
    let dt = document.createElement('dt');
    dt.innerHTML = x.place;
    let dd = document.createElement('dd');
    dd.innerHTML = x.length;
    placesList.append(dt, dd);
});

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
