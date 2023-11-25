let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
]

// Part A \\
let member187 = academyMembers.find(mem => mem.id == 187);
if (member187 != undefined) {
    console.log(`Academy Member #187's name is ${member187.name}`);
} else {
    console.log("No such member exists. Shall we recruit more?")
}

// Part B \\
let membersCastThrice = academyMembers.filter( (mem) => mem.films.length >= 3);
console.table(membersCastThrice)

// Part C \\ 
function isThereABob(currentMember) {
    let memberName = currentMember.name;
    let filter = "Bob"

    
}

let namesStartingWithBob = academyMembers.filter(mem => "Bob" in mem.name

})