//API Docs: https://dummyjson.com/docs/users 
// Fix these 3 functions so that the 2 function calls at the bottom of the file run and log appropriately

function getAndLogUserFromUserInput() {
    const user = await fetchUser(userInput);
    console.log(user);
}

async function fetchUser(){ 
    const response = fetch('http://dummyjson.com/users/${userInput}');
    const res = await response.json();
}

async function fetchTopXUsers(5) {
    const response = await fetch('http://dummyjson.com/users?limit={amount}%order=asc');
    const res = await response.json();
    console.log(res);
}

// DO NOT TOUCH THESE
getAndLogUserFromUserInput(1)
fetchTopXUsers(5);

module.exports = {
    getAndLogUserFromUserInput,
    fetchUser,
    fetchTopXUsers
};
// DO NOT TOUCH THESE