# WP-Personal-Website

## Overall Purpose
- To build and publish a portfolio site on WordPress using my own custom theme built using React, Reactstrap, and vanilla CSS. 

- To build and publish a portfolio React site utilizing WordPress as a headless CMS, fetching custom post types with the WP REST API and displaying them on the React frontend. 

## Goals 
- set up a container to host the project using Docker
- explore the process of creating custom WordPress themes
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
- Creating the Contact form for the React frontend
- Creating the the "projects" custom post types with advanced custom fields.  

### I'm currently stuck on...
- widget support on my WP sunsetTheme

- The integration between the React frontend and WP custom themes using the process outlined here: https://github.com/LearnWebCode/brads-boilerplate-WordPress/tree/main/brads-boilerplate-theme. 

I am hoping to connect with devs familiar with the WP/React integration on the 'Developing With WP' forum. If it appears that it isn't possible, I will explore utilizing Frontity. 

## Images
### React frontend serving WP custom posts through the WP REST API

Landing Page, Desktop and Tablet view

About Page, Desktop and Tablet view

404 Not Found

### Custom WP Theme with jQuery, Popper, and Bootstrap
My intro to custom WP themes! It has theme support for post thumbnails, custom logos, title tags, and custom sidebars. Widget support is in the works. See wp-content/themes/sunsetTheme.

Home Page

Page Not Found

Sample Page

About Me

Blog with pagination

Individual post with comments, nested comments

#### Notes
There were some additional files that I included that I might otherwise have left out if I were more experieced with either custom themes or the WP/React integration. 

