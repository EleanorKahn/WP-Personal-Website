# WP-Custom-Resume

My overall intention with this project was to have a place to become more familiar with WordPress integration with other frameworks, and well as custom themes. 

## Goals 
- set up a container to host the project using Docker
- create a custom Wordpress theme
- connect a frontend built using a JavaScript framework to a Wordpress site using the WP REST API
- explore Wordpress, including custom post types and themes
- familiarize myself with a SQL database
- gain experience with php

## What I used 
- Wordpress CMS version 6.2.2
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

## Project setup/Cloning info

### Setting up Docker
After downloading docker and putting together the docker-compose.yaml file (or cloning this one), run "docker compose up -d" to build the container associated with this project. 

For more detail, see: https://gist.github.com/bradtraversy/faa8de544c62eef3f31de406982f1d42

### Setting up React frontend
cd into the frontend, and then run 'npm i,' which will install dependancies required to run the project. I have two start scripts - one that will run the frontend in the browser on a localhost via react-scripts, and one which runs the wordpress scripts. 


### Troubleshooting Wordpress

#### From HTTP to HTTPS
If, upon changing the url of your website, specifically from http to https, you find that you're locked out of your site, you can update your htaccess file to allow for/reflect those changes (see https://www.freecodecamp.org/news/how-to-redirect-http-to-https-using-htaccess/). If that doesn't work, and you are still locked out, you can revert your site url on phpmyadmin, under wp_options --> siteurl --> edit. While this will not address the http/https issue, it will return access to your site in the event that you have other things to configure before moving to a secure protocol. 

#### Activation of Custom Theme leads to "White Screen of Death"
If, upon activating your custom theme, you find that you're faced with a blank white screen every time you attempt to access your site (often accompanied by the "there is a critical error..." message), you can go to phpmyadmin --> wp_options --> current theme, and reset this to the (correctly working) theme of your choice. While this does not address the errors in your custom theme, it will allow you to get back into your site.

#### Notes
There were some additional files that I included that I might otherwise have left out if I were more experieced with either custom themes or the WP/React integration. 

