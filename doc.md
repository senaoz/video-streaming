# Frontend Case Study: State-of-the-Art Video Streaming Platform

--------------------------------------------------------------

### Objective

My goal was to create a base of a user-centric video streaming service that offers a seamless, engaging, and personalized viewing experience, similar to Netflix. I aimed to provide users with innovative features and a smooth interface that works well across various devices. Also, I used the trailers of the most memorable movies as sample video data.

<hr />

### Methodology

#### Research & Planning

I began by reviewing competitors such as Blu TV, and Disney Plus. Understanding user expectations was crucial, so I focused on identifying features that enhance user engagement and satisfaction.

#### Design

My design emphasized ease of navigation, accessibility, and responsiveness. I wanted the platform to be intuitive, catering to all users, and working flawlessly on mobile, tablet, and desktop screens.

#### Development

For development, I chose React for its component-based architecture and Bootstrap CSS for consistent and responsive styling. I also used Firebase Hosting for deployment, ensuring the platform is scalable and reliable.

<hr />

### Requirements

#### Libraries

- **ReactJS**: Used for building the component-based structure of the application.

- **Bootstrap CSS**: Provided a consistent and responsive design.

- **Optional Video Player Library**: I selected a library that met the requirements for robust video playback.

#### Implementation Musts

- **Styling**: Bootstrap CSS for styling, ensuring a clean and responsive design.

- **Component Logic**: Focused on developing a well-structured player component with clear logic.

#### Video Requirements

1. **Controller**:

- Play speed options (0.5x, 1x, 1.5x, etc.).

- Fullscreen mode.

- Sound slider.

- Rewind and forward buttons.

- Play & Pause buttons.

- Current time / Full Duration display.

2. **Screen**:

- Play & Pause buttons visible on mouse enter, hidden on mouse leave.

- Play or pause icon animation on play/stop.

- Replay button at video end.

- Controller and buttons hidden in fullscreen mode, visible on mouse move.

- Video opacity changes on mouse enter.

3. **Streaming**:

- Buffering during forward and rewind to prevent freezing.

- Sound state preservation (sound level remains the same after toggling sound off/on).

<hr />

### Deployment

I used Firebase Hosting to deploy the project, creating a Firebase project and deploying the application there. This ensured scalability and reliability.

<hr />

### File Structure
```
.github
build
public
src
  ├── assets
  ├── components
  ├── pages
  └── scss
firebase.jsx
main.jsx
.eslintrc.cjs
.firebaserc
.gitignore
README.md
firebase.json
index.html
package-lock.json
package.json
vite.config.js
```

<hr />

### Project Breakdown

#### .github

- Configuration files for GitHub, such as workflows and actions.

#### build

- Output directory for the production build of the application.

#### public

- Static assets that will be served directly.

#### src

- **assets**: Images, fonts, and other static resources.

- **components**: Reusable React components.

- **pages**: Different pages of the application.

- **scss**: SCSS files for styling.

#### firebase.jsx & .firebaserc & firebase.json

- Firebase project + hosting configuration and initialization.

#### main.jsx

- Main entry point for the React application.

#### .eslintrc.cjs

- ESLint configuration file for code linting.

#### .gitignore

- Specifies files and directories to be ignored by Git.

#### README.md

- Project documentation.

#### index.html

- Main HTML file for the application.

#### package-lock.json & package.json

- Manage project dependencies.

#### vite.config.js

- Vite configuration for building the project.

<hr />

### Challenges and Solutions

1. **Responsive Design**:

- **Challenge**: Ensuring consistent user experience across devices.

- **Solution**: Leveraged Bootstrap's grid system and responsive utilities to maintain a seamless experience on all screen sizes.

2. **Video Player Functionality**:

- **Challenge**: Implementing complex controls like play speed, fullscreen, and buffering.

- **Solution**: Selected a robust video player library and customized it to meet the specific requirements, ensuring smooth functionality and user interaction.

3. **State Management**:

- **Challenge**: Preserving sound state and ensuring smooth playback.

- **Solution**: Used React's state management to maintain and update the sound level state, ensuring that user preferences were preserved across sessions.

4. **Deployment**:

- **Challenge**: Ensuring a smooth and scalable deployment process.

- **Solution**: Deployed the application on Firebase Hosting, leveraging its scalability and reliability features to handle the expected user load.

<hr />

### Conclusion

Developing this video streaming platform was a fulfilling journey, allowing me to create a sophisticated and user-friendly service akin to Netflix. By integrating React, Bootstrap CSS, and Firebase Hosting, I ensured that the application is responsive, robust, and scalable. Overcoming the various challenges along the way helped me refine my skills and deliver a high-quality product that meets user expectations.