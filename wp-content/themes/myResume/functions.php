<?php 

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
        get_template_diractory_uri() . './assets/build/index.js',
        array(),
        '1.0',
        true
    );

    wp_enqueue_style(
        'react-app-css',
        get_template_directory_uri() . './assets/build/index.css',
        array(),
        '1.0'
    );
}

add_action('wp_enqueue_scripts', 'enqueue_react_app_scripts');
?>