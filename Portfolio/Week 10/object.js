const character = {
    name: "Your Name Here", // This is your String
    hp: 100,                // This is your Integer
    attack: 15,             // This is your Integer
    // ... add defense and your function here
};
const character = {
    name: "Astra",
    hp: 100,
    // ... other stats ...

    // This is your function (method)
    greet: function() {
        console.log(`My name is ${this.name} and i have ${this.hp} health`);
    }
};
character.greet();