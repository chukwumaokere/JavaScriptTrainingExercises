# READ. EVERYTHING. CAREFULLY.

# How to use this project
There will be a bunch of folders that have various tests categories. In them will be an `index.js` file that has some horribly written JavaScript.  

Your job is to fix them so that they run per the specification  within the JavaScript file without modifying the areas that say `DO NOT TOUCH THESE`  

Run the files like: `node AsyncAwait/index.js` to ensure the JavaScript is valid. Then make it so that the tests pass.   

This project runs better in [VSCode](https://code.visualstudio.com/) so I highly recommend you use that IDE for working on this project.  

`node_modules` is hidden to ignore distractions, but if you ran `npm install` you can rest assured that it will install the necessary files.

## Setup
1) Run `npm install` to install all necessary items.  
2) Run the file to see the outcome. i.e: `node AsyncAwait/index.js`  
3) Start coding and fixing.

## How to run tests
- You can either run `npm test TestName` to run a specific test once.
- - Example: `npm test SomePassingTest`
- You can run it indefinitely so it can watch for your updates with `npm run test:watch TestName`. 
- - Example: `npm run test:watch SomePassingTest`
- You can run all tests by running `npm test`. Only use this after you've finished all the instructions otherwise you'll see too many errors.

## Solutions
If you give up, every file has a `solution/index.js` file that has the working code.

## Warning
**DO NOT TOUCH ANY OF THE FILES** IN `__lib__` or `__tests__`. These are designed to make this project work.  

If you break it, you will need to re-`clone` this project or do `git reset --hard HEAD __lib__` and `git reset --hard HEAD __tests__` and start over again.  

You should NOT need to `import` or `require` any other files or `npm install` anything other that what is currently in the project.

## Updates

This project may occasionally update. To pull the latest, just do `git pull`. If you have uncommitted changes locally, you could commit them and then do `git pull --rebase` to keep your code changes to the `index.js` files


## Hints
There are no hints. If you want to challenge yourself, do NOT google this or reference other code or notes. Try to use just what is given to you.   
  
The code has everything you need if you're inquisitive enough. Try using the Intellisense to make sense of what you have at your disposal.

The only "hint" I'll give you is try to fix any of the runtime errors first, so that when you run the file, no fatal errors get thrown. That'll give you a good enough starting point to start coding.

# Happy Coding

### Disclaimer
I coded these over a weekend for fun to help a friend out. There might be errors in my implementation. These are mocks of things that exist from what I remember of them so there might not be every possible implementation or configuration option for things like Express. The goal is to help people learn how to write things and feel comfortable fixing syntax issues and writing code. Not to be a perfect sandbox for writing every possible type of endpoint or variation of some implementation.   

If there are issues, please open an Issue here in github and I'll try to take care of it. No promises.  

Things are subject to change
