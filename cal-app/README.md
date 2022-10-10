# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./cal-app/public/Screenshot%202022-10-10%20at%2014-46-08%20Calculator%20App.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/stephanniegb/calculator-app-main)
- Live Site URL: [Add live site URL here](https://stephaniegb-calc-app-1ff339.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom variables
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned
I learnt how to use the useReducer hook from react to manage simliar states in my application, this made my work cleaner and more organised

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```js
const [{currentOperand = 0, prevOperand, operation}, dispatch] = useReducer(reducer, {})

```
And everthing around the useReducer hook
**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I will focuse on building better and more user friendly websites and app with ReactJS amd other technologies
**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [A blog post by Jima Victor](https://webcodespace.com/how-to-create-a-three-state-toggle-switch-using-html-css-and-javascript) - This helped me figure out how to handle the toggle switch. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@stephanniegb](https://www.frontendmentor.io/stephanniegb)
- Twitter - [@stephanniegb](https://www.twitter.com/stephanniegb)




