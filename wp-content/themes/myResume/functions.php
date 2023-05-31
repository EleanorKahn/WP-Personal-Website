<?php 

function myResume_theme_support() {
    // Adds dynamic title tag support
    add_theme_support('title-tag');
}

add_action('after_setup_theme', 'myResume_theme_support');

function myResume_register_styles() {
    wp_enqueue_style(
        'myResume-bootstrap', 
        get_template_directory_uri() . "/style.css",
        array(), 
        '1.0', 
        'all'
    );
}

function enqueue_react_scripts() {
    wp_enqueue_script(
        'react-app-js',
        get_template_diractory_uri() . '/index.js',
        array(),
        '1.0',
        true
    );

    wp_enqueue_style(
        'react-app-css',
        get_template_directory_uri() . '/index.css',
        array(),
        '1.0'
    );
}

function myResumeTheme_menus(){
    // key value pairs - key is menu location name, value is title
    $locations = array(
        'primary' => "Desktop Primary Left Sidebar",
        'footer' => "Footer Menu Items"
    );

    register_nav_menus($locations);
}

add_action('init', 'sunsetTheme_menus');

add_action('wp_enqueue_scripts', 'enqueue_react_app_scripts');
add_action('wp_enqueue_scripts', 'myResume_register_styles');
?>