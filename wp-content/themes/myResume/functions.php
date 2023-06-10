<?php 

function myResume_theme_support() {
    // Adds dynamic title tag support
    add_theme_support('title-tag');
}

add_action('after_setup_theme', 'myResume_theme_support');

function enqueue_react_scripts() {
    wp_enqueue_script(
        'react-app-js',
        get_template_directory_uri() . '/assets/build/index.js',
        array(),
        '1.0',
        true
    );

    var_dump("I'm running in enqueue react scripts!");

    wp_enqueue_style(
        'react-app-css',
        get_template_directory_uri() . "/assets/build/index.css",
        array(),
        '1.0'
    );
}


add_action('wp_enqueue_scripts', 'enqueue_react_scripts');

define( 'WP_DEBUG', true );
define( 'WP_DEBUG_DISPLAY', true );
define( 'WP_DEBUG_LOG', true );

var_dump("I'm running in functions.php");

?>