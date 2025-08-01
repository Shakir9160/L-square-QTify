<!-- # Getting Started with Create React App

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->

<div align="center">
  <img src="https://github.com/user-attachments/assets/99e89633-aea8-454c-b972-9a5f1ea54bf2" width="100"/>
  <h1 id="title">QTify</h1>
  <p><strong>QTify - A Song Browsing Web App</strong></p>
  <p>
    <a href="https://qtify-shaikh-shakirs-projects.vercel.app/">View QTify</a> •
    <a href="https://www.figma.com/file/tuCV26ozM1R75Ze6ShZxKs/Qtify?type=design&node-id=0-1&mode=design">View Figma Design</a>
  </p>
  <img src="https://github.com/user-attachments/assets/97d4388d-c953-47dc-8579-0d221fef3ea7" width="700"/>
</div>

## Table of Contents

1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
3. [Project Breakdown](#project-breakdown)
4. [Potential Improvements](#potential-improvements)

## Project Overview

<p id="description">QTify is a song browsing web-app developed to provide a smooth music discovery experience. This project focuses on building the frontend of the application using a provided Figma design.</p>

### Tech Stack

- React.js
- Material UI
- Axios
- Vercel (for deployment)

### Features

- Responsive Navbar with Search Bar and Feedback modal.
- Album Grid with dynamic data fetched via REST APIs.
- Song Carousel with genre-based filtering and Likes.
- FAQ Section with Material UI Accordions.
- Music Bar to play songs within the app.
- Search with dropdown listing of albums and navigation to Album Details page.
- Deployed on Vercel for live access.

## Setup Instructions

### Frontend

- #### Installation

  ```bash
  # clone repo
  git clone https://github.com/Shakir9160/L-square-QTify.git
  cd L-square-QTify

  # install dependencies
  npm install
  ```

- #### Running the App
  ```bash
  npm start
  ```

## Project Breakdown

### Components

- **Navbar and Hero Section**:

  - **Scope of Work**:
    - Developed a responsive Navbar that includes reusable components: Logo, Search Bar, and Feedback Button.
    - Designed an engaging Hero Section with a visually striking image and attention-grabbing headline.
  - **Skills Used**: React.js, Component Design, Responsive Design, CSS, Figma Assets.

    <div align="center">
      <img src="readme images/navbar and hero.png" width="70%"/>
      <h5>Navbar and Hero Section</h5>
    </div>

- **Album Grid and Albums Section**:

  - **Scope of Work**:
    - Created a reusable Album Card component using Material UI for a consistent design.
    - Fetched and dynamically populated the grid with data from the API, displaying top albums.
  - **Skills Used**: Material UI, Axios, CSS Grid.

    <div align="center">
      <img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004889_image_12.png" width="15%"/>
      <h5>Album Card Component</h5>
    </div>

- **Songs Filter and Carousel with Genre Tabs**:

  - **Scope of Work**:
    - Developed a genre-filtered song section with a Tab component and a carousel for better navigation.
    - Fetched genre-specific song data from the API, ensuring the content dynamically updates based on the genre selected.
  - **Skills Used**: CSS Styling, Conditional Rendering, Swiper Carousel, Figma Design.

    <div align="center">
      <img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004892_image_19.png" width="80%"/>
      <h5>Songs Section with Genre-based Tabs</h5>
    </div>

- **FAQ Section, Album Details Page, and Music Bar**:

  - **Scope of Work**:
    - Implemented the FAQ section using Material UI's Accordion component for smooth interaction.
    - Designed and integrated a Music Bar for seamless song playback within the app.
    - Built a search functionality with dropdown results and created a detailed album page with pagination.
  - **Skills Used**: Functional Components, React Router, Pagination.

    <div align="center">
      <img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004894_image_22.png" width="70%"/>
      <h5>FAQ Section and Music Bar</h5>
    </div>

    <div align="center">
      <img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004895_image_25.png" width="50%"/>
      <h5>Album Details Page</h5>
    </div>

### Deployment

Deployed the frontend application on Vercel for easy access and continuous deployment.

## Potential Improvements

- [ ] Add user login and authentication.
- [ ] Implement a playlist feature for users.
- [ ] Enable user ratings and reviews for songs and albums.
- [ ] Optimize the website for better performance and loading times.

<p align="center"> 
<img src="https://github.com/user-attachments/assets/01e12f26-2bd5-4ed2-80a5-bcefa74f9f80" width="0" id="image" alt="demo-gif"/>
</p>
