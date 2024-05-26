//API Docs: https://dummyjson.com/docs/users 
// Fix these 3 functions so that the 2 function calls at the bottom of the file run and log appropriately

async function getAndLogUserFromUserInput(userInput) {
    const user = await fetchUser(userInput);
    console.log(user);
}

async function fetchUser(userInput) { 
    const response = await fetch(`http://dummyjson.com/users/${userInput}`);
    const res = await response.json();
    return res;
}

async function fetchTopXUsers(amount) {
    const response = await fetch(`http://dummyjson.com/users?limit=${amount}&order=asc`);
    const res = await response.json();
    console.log(res);
}

module.exports = {
    getAndLogUserFromUserInput,
    fetchUser,
    fetchTopXUsers
};