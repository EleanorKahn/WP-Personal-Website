# WP-Personal-Website

## Overall Purpose
- To build and publish a portfolio site on WordPress using my own custom theme built using React, Reactstrap, and vanilla CSS. 

- To build and publish a portfolio React site utilizing WordPress as a headless CMS, fetching custom post types with the WP REST API and displaying them on the React frontend. 

## Goals 
- set up a container to host the project using Docker
- explore the process of creating custom WordPress themes with Andrew Wilson https://www.youtube.com/watch?v=-h7gOJbIpmo
- create a custom WordPress theme based on an original design
- connect a frontend built using a JavaScript framework to a WordPress site using the WP REST API
- explore WordPress, including custom post types and themes
- familiarize myself with a SQL database
- gain experience with php

## What I used 
- WordPress CMS version 6.2.2
- MySQL
- phpmyadmin
- React.js version ^18.2.0 with create-react-app
- ReactDOM version ^18.2.0
- React-router-dom version ^6.11.1
- Docker
- CSS
- Bootstrap version 5.2.3
- Reactstrap version ^9.1.10
- Web vitals version ^2.1.4
- NPM package manager 
- dotenv
- Postman for endpoint testing

## Design Intentions
The color palatte and design were inspired by the photo that ended up becoming the background image. I was going for something natural and minimalist. Once published, I plan to run the React site through the WAVE accessibility tool, and then make any necessary adjustments to the design and theme.

## Project setup/Cloning info

### Setting up Docker
After downloading docker and putting together the docker-compose.yaml file (or cloning this one), run "docker compose up -d" to build the container associated with this project. 

For more detail, see: https://gist.github.com/bradtraversy/faa8de544c62eef3f31de406982f1d42

### Setting up React frontend
cd into the frontend, and then run 'npm i,' which will install dependancies required to run the project. I have two start scripts - one that will run the frontend in the browser on a localhost via react-scripts, and one which runs the WordPress scripts. 

## Troubleshooting WordPress

#### From HTTP to HTTPS
If, upon changing the url of your website, specifically from http to https, you find that you're locked out of your site, you can update your htaccess file to allow for/reflect those changes (see https://www.freecodecamp.org/news/how-to-redirect-http-to-https-using-htaccess/). If that doesn't work, and you are still locked out, you can revert your site url on phpmyadmin, under wp_options --> siteurl --> edit. While this will not address the http/https issue, it will return access to your site in the event that you have other things to configure before moving to a secure protocol. 

#### Activation of Custom Theme leads to "White Screen of Death"
If, upon activating your custom theme, you find that you're faced with a blank white screen every time you attempt to access your site (often accompanied by the "there is a critical error..." message), you can go to phpmyadmin --> wp_options --> current theme, and reset this to the (correctly working) theme of your choice. While this does not address the errors in your custom theme, it will allow you to get back into your site.

## Current 

### I'm currently working on...
- Fetching and displaying project posts in a Projects List component rendered to the My Work page
- Validating form data 
- Doing screen reader testing on the Contact Form to ensure accessibility 

### I'm currently stuck on... and next action
- widget support on my WP sunsetTheme. I am looking at the "widgetizing themes" section of the WP theme docs to find my code mistake: https://codex.wordpress.org/Widgetizing_Themes. I will then reach out to ask for help if I find I am still stuck.

- The integration between the React frontend and WP custom themes using the process outlined here: https://github.com/LearnWebCode/brads-boilerplate-WordPress/tree/main/brads-boilerplate-theme. 

I am hoping to connect with devs familiar with the WP/React integration on the 'Developing With WP' forum. If it appears that the WP/React integration as outlined in the link above isn't possible, I will explore utilizing Frontity. 

## Images

### React frontend serving WP custom posts through the WP REST API

Landing Page, Desktop and Tablet view
![alt text](https://github.com/EleanorKahn/WP-Personal-Website/blob/development/project-screenshots/458FFEF3-8327-4107-B58A-A09C6A0EC439_1_201_a.jpeg)

![alt text](https://github.com/EleanorKahn/WP-Personal-Website/blob/development/project-screenshots/FD54ACF7-AF82-4325-ACA6-69B9B4665DD0_1_201_a.jpeg)

About Page, Desktop and Tablet view
![alt text](https://github.com/EleanorKahn/WP-Personal-Website/blob/development/project-screenshots/AB975E84-E557-4A20-9618-44B0D917C89E_1_201_a.jpeg)

![alt text](https://github.com/EleanorKahn/WP-Personal-Website/blob/development/project-screenshots/6D46E329-CE58-431B-93E1-AF4225A1C699_1_201_a.jpeg)

404 Not Found
![alt text](https://github.com/EleanorKahn/WP-Personal-Website/blob/development/project-screenshots/2C22C73B-AEAE-4E5E-A43F-9F90FFA7A66A_1_201_a.jpeg)

Contact Me - PRELIMINARY 
![alt text](https://github.com/EleanorKahn/WP-Personal-Website/blob/development/project-screenshots/6DABFDA9-1C4F-46EF-9104-26AFB0B3421C_1_201_a.jpeg)

### Custom WP Theme with jQuery, Popper, and Bootstrap
My intro to custom WP themes! It has theme support for post thumbnails, custom logos, title tags, and custom sidebars. Widget support is in the works. See wp-content/themes/sunsetTheme.

Please note that all text is sample text. 

Home Page
![alt text](https://github.com/EleanorKahn/WP-Personal-Website/blob/development/project-screenshots/51AD3376-860A-4E84-B41F-F51B9E86FB43_1_201_a.jpeg)

Page Not Found
![alt text](https://github.com/EleanorKahn/WP-Personal-Website/blob/development/project-screenshots/159B91F4-3411-41BD-92A4-2EE295FF02FA_1_201_a.jpeg)

Sample Page
![alt text](https://github.com/EleanorKahn/WP-Personal-Website/blob/development/project-screenshots/C6D303B9-21CC-4E20-8310-7B372E762174_1_201_a.jpeg)

About Me
![alt text](https://github.com/EleanorKahn/WP-Personal-Website/blob/development/project-screenshots/F74A96D2-7974-4842-AA39-4D4656578A74_1_201_a.jpeg)

Blog with pagination
![alt text](https://github.com/EleanorKahn/WP-Personal-Website/blob/development/project-screenshots/FF2FC2B1-84F0-4061-8986-808826237910_1_201_a.jpeg)

![alt text](https://github.com/EleanorKahn/WP-Personal-Website/blob/development/project-screenshots/454075AB-7AFC-4DF8-B113-B5272640B236_1_201_a.jpeg)

Individual post with comments, nested comments
![alt text](https://github.com/EleanorKahn/WP-Personal-Website/blob/development/project-screenshots/3D41E67B-D5CC-4A97-A88F-F994E07A6AB3_1_201_a.jpeg)

#### Notes

#### Extra Files
There were some additional files that I included that I might otherwise have left out if I were more experieced with either custom themes or the WP/React integration. This enabled me to troubleshoot with others more effectively. 

#### Forms
I decided to utilize Reactstrap components for my form (even though it's an extremely simple form) specifically because I wanted to gain additional experience inspecting the cascade to override some of the Reactstrap/Bootstrap components' built in styles with vanilla CSS. This method has given me a better understanding of both Bootstrap under the hood and the CSS cascade. 

My favorite article on forms in React: https://daveceddia.com/react-forms/



