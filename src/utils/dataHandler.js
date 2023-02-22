const data = require('../data/data.json')

// The function to create the list of roles of town, mafia or neutral
function getRoles(type) {
    const roles = data['roles'][type]
    return roles
}

// The function to check which card should be shown
function getCards(name, type) { // e.g. (citizen, town)
    const card = []
    const cardName = name
    const checkedCard = getRoles(type).filter((role) => role.name === cardName)[0]
    card.push(checkedCard)
    return card
}

// The function to create the list of alignments
function getAlignments(type) {
    const alignments = []
    const newAlignment = []
    for ( var i = 0 ; i < getRoles(type).length ; i++ ) {
        const exists = newAlignment.includes(getRoles(type)[i].alignment)
        // To remove repeated alignments
        if (!exists) {
            newAlignment.push(getRoles(type)[i].alignment)
        }        
    }
    alignments.push(newAlignment)
    return alignments[0]
}

// The function to create the list of classifications
function getClassifications() {
    const classifications = data['classifications']
    return classifications
}

module.exports = { 
    getRoles, 
    getCards,
    getAlignments,
    getClassifications
}