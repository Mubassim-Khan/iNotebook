# iNotebook

This repository contains the code of a cloud notebook app using MERN stack, Bootstrap, Animate CSS & Materials Icon etc. The project creates the visual designs, animations, different sections, databases & all other parts which are required and necessary for building a notebook application.

## Preview

![Preview 1 Image](https://github.com/Mubassim-Khan/iNotebook/blob/master/src/Assets/Preview%201.png)

![Preview 2 Image](https://github.com/Mubassim-Khan/iNotebook/blob/master/src/Assets/Preview_2.png)

## Features

- Responsive design: The web page adapts to different screen sizes, ensuring a consistent user experience on desktop & mobile devices.
- Interactive components: The page includes interactive elements such as buttons, cards, animations & other hover effects on buttons.
- CSS styling: The stylesheets provide a sleek and modern look.
- Animations: Very smart & simple animations appears when switching into different sections.
- UI Tracking: By using Trackvisiblity, the current position of user on the page can be tracked down in order to improve UI experience.
- Backend Database: The backend of iNotebook is linked with MongoDB Atlas to store & fetch data, fast and secure.
- Hashing: By means of hashing, your passwords are end-to-end encrypted and cannot be viewed, hacked or shared. 
- Authenticator - By the use of JSON Web Token, chances of phishing are minimized & user info is limited to that specific user only.

## Tech used 🛠️

- [React](https://reactjs.org/) - UI Library
- [MongoDB Atlas](https://www.mongodb.com/atlas) - Database program
- [Node.Js](https://nodejs.org/en) - JavaScript runtime environment
- [Express.Js](http://expressjs.com/) - JavaScript Framework
- [Bootstrap 5](https://getbootstrap.com/) - CSS Framework
- [Prettier](https://prettier.io/) - Code Formatter
- [Material Icons](https://mui.com/material-ui/material-icons/) - Material UI Icons
- [Animate.css](https://animate.style/) - Animations
- [JSON Web Token](https://jwt.io/) - Authenticator
- [Express Validator](https://express-validator.github.io) - Validator

## Getting Started (Backend)

[Link to iNotebook Backend](https://github.com/Mubassim-Khan/iNotebook-Backend) - Backend 

* Note: Follow these steps incase you are running Backend and Front-End seperately

To get started with Backend project, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/Mubassim-Khan/iNotebook-Backend.git
```
2. Create a .env file in your project root directory

3. Initialize 3 env variables, named as:
- MONGODB_USERNAME - Your MongoDB Atlas username.
- MONGODB_PASSWORD - Your MongoDB Atlas password.
- JWT_SECRET_SIGN - Your custom JWT Secret Signature. (Use combination of both Upper & Lowercase alphabets, numbers & symbols).
- REACT_APP_HOST_URL - Your Host server URL (where your backend is running).

4. Run this command in terminal:
```bash
nodemon index.js
```

5. Open [http://localhost:8000](http://localhost:8000) to view it in your browser.

## Getting Started (Complete App)

To get started with this project, follow these steps:

* Note: Follow these steps incase you are running Backend and Front-end concurrently

1. Clone these repositories:
```bash
git clone https://github.com/Mubassim-Khan/iNotebook/git
```

```bash
git clone https://github.com/Mubassim-Khan/iNotebook-Backend.git
```

2. Place Backend in root of your project directory. 

3. Create a .env file in your project root directory

4. Initialize 3 env variables, named as:
- MONGODB_USERNAME - Your MongoDB Atlas username.
- MONGODB_PASSWORD - Your MongoDB Atlas password.
- JWT_SECRET_SIGN - Your custom JWT Secret Signature. (Use combination of both Upper & Lowercase alphabets, numbers & symbols).
- REACT_APP_HOST_URL - Your Host server URL (where your backend is running).

5. Open the project in your preferred code editor.

6. Run this command in terminal:
```bash
npm run both
```

7. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Contact

If you have any questions, suggestions, or feedback, you can reach out to the project maintainer:

- LinkedIn : [Mubassim Ahmed Khan](https://www.linkedin.com/in/mubassim-ahmed-khan/)
- Email: [mubassimkhan@gmail.com](mailto:mubassimkhan@gmail.com)

---

<!----->

# Getting Started with Create React App (Front-End Only)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
