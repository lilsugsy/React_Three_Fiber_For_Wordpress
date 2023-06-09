![R3F Wordpress Tutorial](https://github.com/lilsugsy/React_Three_Fiber_For_Wordpress/assets/49952277/2fd01087-f1d9-48fc-8203-2aea815529f4)[(R3F Wordpress Tutorial)](https://youtu.be/1Mx-IzU4sW4)

# How to use React Three Fiber For Wordpress Tutorial
Watch the tutorial here: https://youtu.be/1Mx-IzU4sW4


# React Three Fiber/Three.js For Wordpress
A Vite config made to help compile your react three fiber code in a way that can be used in your wordpress website!

## But Why?
React Three Fiber is a great tool built on three.js to make awesome interactive websites. Alot of clients still love Wordpress and so we rarely get the chance to put our skills on show! Therefore, I put this together to help tie the knot, meaning we can do things we love, within the websites we build in Wordpress.

## The theory
React can be scary for someone new learning, but just know that it is just a framework that compiles down into plain old javascript. We can then use the build files (plain old javascript) and load them into our Wordpress site. Here's how... 

To render our react app, we define where we attach the javascript (normally a div with an id #root). This isn't set in stone and can be changed to any ID we like (given there is an element on your web page that has a matching ID). So given that, we should be able to target a div on our wordpress site and load our app. This is good, until you run into errors such as broken asset files etc...

## How it works
The magic happens in the vite.config.js setup. This is a custom config that has been set up to compile the code into a theme structure to match that of your wordpress website.
```javascript
// change this to match your wordpress theme path
const wp_theme_route = 'wp-content/themes/our-theme';
```

## How to use
- Set up your react three fiber project as you would normally do using Vite.js (get started here: https://vitejs.dev/guide/)
- Copy the settings over to the vite.config.js file
- Make adjustments to the path url (as per above)
- When building the files, your asset paths will replicate the same paths as your wordpress project
- You can then drag the asset folder over to your wordpress theme, and link up the javascript files accordinly
- FULL BREAKDOWN TUTORIAL on youtube for any that wish to understand more about the workflow / solution: https://youtu.be/1Mx-IzU4sW4


