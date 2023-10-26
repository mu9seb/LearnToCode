let fullName = "Brenda Kaye"

function parseAndDisplayName(fullName) {
    let spaceIndex = fullName.indexOf(" ")
    let firstName = fullName.substring(0, spaceIndex)
    let secondName = fullName.substring(spaceIndex)

    console.log(`Name: ${fullName}`)
    console.log(`First name: ${firstName}`)
    console.log(`Last name: ${secondName}`)
}

parseAndDisplayName(fullName);