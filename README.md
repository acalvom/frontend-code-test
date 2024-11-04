# 🟥 🟦 🟩 🛝 Canvas Playground - Genially 🎢 🟨 🟪 🟫

> Code challenge proposed by Genially - Developer: Andrea Calvo Moreno

This repository contains the code challenge proposed by Genially and it is forked from their repository. 
The application consists on a canvas where the user can interact with boxes and perform events on them 

**The code can be found on [this](https://github.com/acalvom/frontend-code-test) following private repository, nevertheless only those users allowed can access to it.**

## 🎯 Development Requirements

- Add and remove boxes.
- Select a box, which should visually indicate that is selected
- Drag the boxes around using interact.js and using React refs.
- Changing a box's color.
- Display a counter indicating how many boxes are selected.
- Support selection, dragging and color changing for multiple boxes.
- Save the state of the app locally and restore it when it loads.
- Undo / Redo capabilities


## Technical Requirements

### 🌳 [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree) (MST for short)

This is the app state manager we use at our React apps. It's meant to be used with mobx, and unlike it, is very opinionated as how you should define your stores, models etc.

### 🖱️ [interact.js](https://interactjs.io/)

Genially is a very interactivity-heavy application. Almost everything you use on the app can be moved around with your mouse, selected, scaled, rotated, etc. This library does most of the heavy lifting for us.



## 👣 A Little Further On:

- Custom favicon
- Responsive design
- Dockerize app & deploy on Vercel
- Use case tests & unit tests included.
- Incorporate linters and guards like `husky`, `commitlint` and `prettier`.

## 🧭 Potential Improvements:

1. Enhance the undo/redo functionality to allow for undoing and redoing box color changes as well as box movements.
2. Add a `Reset` button that lets the user clear all boxes from the canvas.
3. Introduce `Save` and `Clear` buttons to enable users to manually save or clear the current box state in local storage.
4. Add end-to-end tests with Cypress to ensure reliable application behavior.

## 🫀 Application Flow

#### Accessing the Application: 
- The user opens the application via the base URL. Upon loading, a canvas appears where they can interact with objects placed on it.

#### Initial State:
- If this is the user’s first visit, a single box `Box 1` appears on the canvas.
- If the user has previously visited, boxes saved in local storage from the last session are loaded onto the canvas.

#### Adding Boxes:
- Users can add boxes to the canvas by clicking the `Add Box` button.
- If no specific location is selected with the cursor, the new box will be placed on top of the most recently added box.
- Boxes are named sequentially based on the order they are added to the canvas.

#### Selecting and Removing Boxes:
- Users can select one or multiple boxes by double-clicking on them. When a box is selected, users have the option to remove it.
- If no box is selected and `Remove Box` is clicked, a message will inform the user that no boxes are available to delete. 
- A message also appears if there are no boxes on the canvas. 

#### Multiple Box Selection:
- Users can select multiple boxes by double-clicking on each one. 
  -  A counter displays the total number of selected boxes.
- Users can change the color of selected boxes using the color picker at the top of the screen. 
  - If multiple boxes are selected, all will change to the selected color.

#### Moving Boxes:
- Users can drag selected boxes across the canvas.
- A single box can be moved individually, and multiple selected boxes can be moved simultaneously in an independent manner.
- Boxes do not need to be selected to be movable.

#### Undo and Redo Actions:
- Users can undo or redo the last action by clicking the `Undo` or `Redo` buttons.
- The application does not support undoing or redoing color changes made via the color picker, nor does it support undoing or redoing box movements (as box movement updates coordinates individually for each drag action).

#### State Persistence:
- The application state is saved to the browser’s local storage. 
- If the page is reloaded, the canvas and box states are restored to their last saved positions and settings from the previous visit.


## ⚙️ Tech Stack

▪️ `React` `Javascript` `CSS` `Local-Storage`  
▪️ `React Testing Library` `Jest`  
▪️ `Git` `GitHub` `Docker` `Vite` `Vercel`      
▪️ `mobx-state-tree` `interact.js`

## 🏁 **Getting Started**

### 🛠 **System Requirements**

- `node: v18.20.1`
- `npm: v10.0.0`

### 🏗 **Project Installation**

```bash
# Clone this repository
$ git clone https://github.com/acalvom/frontend-code-test

# Navigate to the folder with the code
$ cd frontend-code-test
```

➡️ **_Option A: Run in local environment_**

```bash
# Install dependencies
$ frontend-code-test > npm install

# Run the app
$ npm run start
```

➡️ **_Option B: Run in Docker_**

⚠️ Note: Docker must be installed on your machine.

```bash
# Build the Docker image with the name `frontend-code-test`. This might take some time.
$ docker build -t frontend-code-test .

# Check the created image
$ docker image ls

# Run the image `frontend-code-test` in the container `frontend-code-test-container`, exposing port 3000
$ docker run --name frontend-code-test-container -p 3000:3000 -d frontend-code-test

# Open `http://localhost:3000/` to access the app running in the Docker container
```


➡️ **_Option C: Run in Vercel_**  

#### **[☁ Vercel deployment](https://genially-canvas-playground.vercel.app/)**

### 🧾 Highlighted scripts in `package.json`

```bash
# Run the app in localhost (PORT: 3000)
$ npm run start

# Run tests
$ npm run test
```

### 🫂 **You can reach me at:**

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/acalvom"><img src="https://avatars.githubusercontent.com/u/34605171?s=88&v=4" width="100px;" alt="acalvom"/><br /><sub><b>acalvom
      </b></sub></a><br /></td>
    </tr>
  </tbody>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<br>
