let fullName = "Brenda Kaye Wyatt"

function parseAndDisplayName(fullName) {
    let names = fullName.split(" ")
    if (names.size == 1) {
        console.log(`Only Name: ${names}`);
    }
    
    let spaceIndex = fullName.indexOf(" ")
    let firstName = fullName.substring(0, spaceIndex)
    let secondName = fullName.substring(spaceIndex)

    console.log(`Name: ${fullName}`)
    console.log(`First name: ${firstName}`)
    console.log(`Last name: ${secondName}`)
}

parseAndDisplayName(fullName);