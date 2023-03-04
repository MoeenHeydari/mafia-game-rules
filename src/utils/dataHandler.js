const data = require('../data/data.json');

// The function to create the list of roles of town, mafia or neutral
function getRoles(type) {
    const roles = data['roles'][type];
    return roles
}

// The function to check which card should be shown
function getCards(name, type) { // e.g. (citizen, town)
    const card = [];
    const cardName = name;
    const roleId = getRoles(type).find(role => role.name === cardName).id;
    const checkedCard = getRoles(type).filter((role)=> role.name === cardName)[0];
    card.push(checkedCard)
    return {card, roleId}
}

// The function to create the list of alignments
function getAlignments(type) {
    const alignments = [];
    const newAlignment = [];
    for ( var i = 0 ; i < getRoles(type).length ; i++ ) {
        const exists = newAlignment.includes(getRoles(type)[i].alignment);
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
    const classifications = data['classifications'];
    return classifications
}

// The function to go to the upper page
function goUpperPage(classification) {
    window.location.pathname = 'roles/' + classification + 'Roles'
}

// The function for navigation through roles pages
function shiftRolesPage(index, x){
    
    const newIndex = index + x;
    if (newIndex === 0 || newIndex === 3){
        window.location = 'townRoles'
    }
    
    if (newIndex === 1) {
        window.location = 'mafiaRoles'
    }
    
    if (newIndex === 2 || newIndex === -1) {
        window.location = 'neutralRoles'
    }
} 

// The function for navigation through card pages
function changeCardPage(id, x, type) {
    const newId = id + x;
    const newRole = getRoles(type).find(role => role.id === newId).name;
    window.location = newRole
}

module.exports = { 
    getRoles, 
    getCards,
    getAlignments,
    getClassifications,
    goUpperPage,
    shiftRolesPage,
    changeCardPage,
}