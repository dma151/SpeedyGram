# Project Overview

## Project Description

Social Media application similar to the very popular, Instagram.
This app allows users to edit and post images for themselves and others to see.

## Diagrams

- [WireFrame](image-editor.jpg)
- [Project Front UML](Macro-UML.jpg)

## MVP/Post MVP

#### MVP

- Create Users
- Users are able to input images and edit them
- Users are able to like and comment on other images not created by them
- Users have CRUD functionality on their images

#### PostMVP

- Create communication between users
- Query images based on key words/tags

## Models and Controllers

| Models(MVP) |                              Description                              |
| ----------- | :-------------------------------------------------------------------: |
| User        |       User model that also includes a sub-array of liked images       |
| Image       |      User's input of image Data attached with CRUD functionality      |
| Comment     | Sub-document for the Image model where other Users can leave comments |

| Controllers        |                            Description                            |
| ------------------ | :---------------------------------------------------------------: |
| User Controller    | Controls user's CRUD functionality as well as profile information |
| Image Controller   |       Controls query of images and their CRUD functionality       |
| Comment Controller |     Controls CRUD functionality over comments that users post     |

#### Time Table

| Component      | Priority | Estimated Time | Time Invested |
| -------------- | :------: | :------------: | :-----------: |
| Landing        |    H     |      4hr       |               |
| Home Page      |    H     |      8hr       |               |
| Image Editor   |    H     |      8hr       |               |
| Liked Images   |    H     |      8hr       |               |
| Backend server |    H     |      4hr       |               |
| Css styling    |    L     |      8hr       |               |
| Total          |    H     |      40hr      |               |

## Technology Used

- Node js
- React Native
- MongoDB
- Mongoose
- Heroku

## Additional Libraries

- [React Native](https://reactnative.dev/)

## Future Changes

Create communication between Users

## Code Snippet

```

```
