# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62).
Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](screenshots/desktop.png)

### Links

- Solution URL: [https://github.com/alkersan/stats-preview-card-component](https://github.com/alkersan/stats-preview-card-component)
- Live Site URL: [https://alkersan.github.io/stats-preview-card-component/](https://alkersan.github.io/stats-preview-card-component/)

## My process

### Built with

- Mobile-first
- Flexbox
- Grid
- [React](https://react.dev) - JS library
- [Styled Components](https://styled-components.com/) - For CSS
- [Vite](https://vitejs.dev) - Build tool

### What I learned

This exercise is my first attempt at laying out HTML/CSS since college, so it was challenging.
- Discovering that centering blocks nowadays is a solved problem was entertaining
- The result is close enough to pixel-perfect, but I'm not happy with the irregular spacing

- Hardcoded the `min-height` of the main container to enable
proper vertical scrolling on height-restricted viewports:
```css
const Main = styled.main`
  ...
  min-height: 780px;
  @media ${QUERIES.laptopAndUp} {
    min-height: 446px;
  }
`
```

- Although the violet tint doesn't match the design, I like the more saturated shade in the result
```css
img {
  background-color: var(--color-soft-violet);
  mix-blend-mode: multiply;
  filter: brightness(110%);
}
```

### Useful resources

Before starting this exercise, I completed the [css-for-js](https://css-for-js.dev) course 

## Author

- Frontend Mentor - [@alkersan](https://www.frontendmentor.io/profile/alkersan)
