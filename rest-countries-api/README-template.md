# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](https://github.com/mesfint/frontend-challenges/blob/main/rest-countries-api/responsive-homepage.png)

### Links

- Solution URL: [Solution URL ](https://github.com/mesfint/frontend-challenges/tree/main/rest-countries-api)
- Live Site URL: [Live site URL](https://responsive-countries-rest-api.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Vanila CSS with custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [React Icons](https://react-icons.github.io/react-icons/) - Free React Icons
- [ReactRouter](https://reactrouter.com/en/main) - For navigation and routing
- [ViteJs](https://vitejs.dev/guide/) -  "Build tool that aims to provide a faster and leaner development experience for modern web projects"


### What I learned

In this project, I gained a comprehensive understanding of responsive web design and the importance of adaptability across different screen sizes. I learned how to implement context in a React application, effectively managing global states such as dark mode and regional data filtering. This involved using hooks like useState, useContext, and useEffect to handle dynamic data and user interactions seamlessly.

I also refreash my CSS skills, particularly in creating responsive layouts with flexbox and media queries, ensuring a smooth user experience on both large and small screens. Furthermore, I explored how to style components conditionally based on context, such as applying dark mode styles and dynamically showing or hiding elements like dropdown menus.

Overall, this project enhanced my ability to build user-friendly and accessible web applications, focusing on both functionality and aesthetic design.

```jsx
 <div className="border-countries">
           <p>Border Countries: </p>
           {country.borders?.length ? (
             country.borders.map((border) => {
               const borderCountry = countries.find((c) => c.alpha3Code === border);
               return borderCountry ? (
                 <button className='borders' onClick={()=>handleClick(borderCountry.name)} key={borderCountry.alpha3Code}>{borderCountry.name}</button>
               ) : null;
             })
           ) : (
             <p>No border countries</p>
           )}
          
        </div>
      </div>
```
```css
/* Responsive Styles */
@media (max-width: 375px) {
  .container {
    padding: 0 1rem;
  }

  .header {
    padding: 1rem;
  }

  .search {
    flex-direction: column;
    gap: 1rem;
  }

  .details {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .details img {
    max-width: 100%;
  }
}
}
```
```js
 useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
```


### Continued development

-  Cross-Browser Functionality:

Ensuring that web applications function consistently across all major browsers is often challenging due to differences in rendering engines and supported features. I want to dig deeper into cross-browser compatibility issues and learn best practices for handling them. This includes becoming more proficient in using tools like ```BrowserStack``` for testing and understanding browser-specific CSS prefixes and polyfills.

-  Performance Optimization:

Improving the performance of web applications is crucial for user experience. I plan to focus on techniques for optimizing load times and responsiveness, such as code splitting, lazy loading, and optimizing images and assets.


### How to run this Project in your machine

-  Clone the Repository: If you haven't already, clone the project repository to your local machine.

  ```js
  git clone https://github.com/mesfint/frontend-challenges/tree/main/rest-countries-api
 cd rest-countries-api


  ```

#### Makefile Instructions

To streamline the setup and running of this project, I have created a Makefile. This file simplifies the process of installing dependencies and starting the development server. You can use it to run the project either all at once or step by step. Here's how you can use it:

-  Running All at Once

  You can execute all necessary steps with a single command. This is the easiest way to get started:

-  Run the Makefile: Navigate to the project directory and use the Makefile to install dependencies and start the development server all at once.

  ```js
  make all

 
  ```
-  NB. The makefile is already available in the root directory for reference.


## Author

- Linkedin - [@mesfin](https://www.linkedin.com/in/mesfin/)
- Frontend Mentor - [@mesfint](https://www.frontendmentor.io/profile/mesfint)
- Twitter - [@MesfinTe](https://x.com/MesfinTe)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

I like to appreciate everyone who were supportive in the Discord community!


