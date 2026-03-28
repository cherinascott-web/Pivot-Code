// We create the character object using curly braces {}
const character = {
    // String: text inside quotes
    name: "Hero", 
    
    // Integers: whole numbers without quotes
    hp: 100,
    attack: 25,
    defense: 15,

    // This is the function (method) that uses the object's data
    greet: function() {
        // 'this' refers to the object we are currently inside
        console.log("My name is " + this.name + " and i have " + this.hp + " health");
    }
};

// To actually see the result, we call the function like this:
character.greet();