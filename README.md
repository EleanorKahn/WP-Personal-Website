# WP-Custom-Resume

## Goals 
- set up a container to host the project using Docker
- mimic a more professional deployment process
- create a custom Wordpress theme
- use SCSS/SASS to compile my stylesheets
- gain experience with the useToggle() hook
- connect a frontend built using a JavaScript framework to a Wordpress site using the WP REST API

## What I used 
- Wordpress CMS
- MySQL
- phpmyadmin
- React.js with create-react-app
- Docker
- CSS
- SASS 

### Troubleshooting Wordpress

#### From HTTP to HTTPS
If, upon changing the url of your website, specifically from http to https, you find that you're locked out of your site, you can update your htaccess file to allow for/reflect those changes (see https://www.freecodecamp.org/news/how-to-redirect-http-to-https-using-htaccess/). If that doesn't work, and you are still locked out, you can revert your site url on phpmyadmin, under wp_options --> siteurl --> edit. While this will not address the http/https issue, it will return access to your site in the event that you have other things to configure before moving to a secure protocol. 

#### Activation of Custom Theme leads to "White Screen of Death"
If, upon activating your custom theme, you find that you're faced with a blank white screen every time you attempt to access your site (often accompanied by the "there is a critical error..." message), you can go to phpmyadmin --> wp_options --> current theme, and reset this to the (correctly working) theme of your choice. While this does not address the errors in your custom theme, it will allow you to get back into your site.



