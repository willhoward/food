# Food in London

View it online [here](https://food.willhoward.co.uk).

It's pretty simple - this is an epic repo for the consuming, appreciating and sharing of food locations in London. The project runs using a simple [Express](https://expressjs.com/) server, which is located in the ```server.js``` file. The server simply returns the location of the HTML front-end files, which are in the ```/frontend``` directory, making a request along the way for the data, which is located in the ```data.json``` file.

### Running Locally

To run the project locally clone it, make sure you have [Node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed, run ```npm i``` in the project root folder and then run ```node server.js``` to start the server. Once it's running, you'll be able to view the app at ```localhost:3000``` in your browser.

### Adding Eateries

Feel free to open a pull request to the ```data.json``` file with any new eateries you might want to add. Please make sure they're utterly scrumptious and delectable. New categories of eatery are also fine, provided you don't do anything bonkers.

---

Made in good taste by Will Howard, inspired by Rey Dhuny, moral support in the form of an excellent beard from Nick Ramsbottom.
