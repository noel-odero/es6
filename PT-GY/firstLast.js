// Create a function that takes a first name, last name, and a callback function to format them in different ways.

function formatName(firstName, lastName, callback){
    const formattedName = callback(firstName, lastName);
    console.log(formattedName);
}

formatName("John", "Doe", (first, last) => {
    return `${first} ${last}`;
}   
);
formatName("Jane", "Smith", (first, last) => {
    return `${last}, ${first}`;
}   
);      
formatName("Alice", "Johnson", (first, last) => {
    return `${first.charAt(0).toUpperCase()}. ${last.charAt(0).toUpperCase()}.`;
}   
);