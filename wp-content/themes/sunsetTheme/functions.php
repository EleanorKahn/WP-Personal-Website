<?php

    function sunsetTheme_theme_support() {
        // Adds dynamic title tag support
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        add_theme_support('custom-logo');
    }

    add_action('after_setup_theme', 'sunsetTheme_theme_support');

    function sunsetTheme_menus(){
        // key value pairs - key is menu location name, value is title
        $locations = array(
            'primary' => "Desktop Primary Left Sidebar",
            'footer' => "Footer Menu Items"
        );

        register_nav_menus($locations);
    }

    add_action('init', 'sunsetTheme_menus');



    function sunsetTheme_register_styles(){

        $version = wp_get_theme()->get( 'Version ');

        wp_enqueue_style(
            'sunsettheme-style',
            get_template_directory_uri() . "/style.css",
            array('sunsettheme-bootstrap'),
            $version,
        );

        wp_enqueue_style(
            'sunsettheme-bootstrap',
            "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
            array(),
            '4.4.1'
        );

        wp_enqueue_style(
            'sunsettheme-fontawesome',
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css",
            array(),
            '5.13.0'
        );
    }

    add_action(
        'wp_enqueue_scripts',
        'sunsettheme_register_styles'
    );

    function sunsetTheme_register_scripts(){
        wp_enqueue_script(
            'sunsettheme-jquery',
            "https://code.jquery.com/jquery-3.4.1.slim.min.js",
            array(),
            '3.4.1',
            true,
        );

        wp_enqueue_script(
            'sunsettheme-popper',
            "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
            array(),
            '1.16.0',
            true,
        );

        wp_enqueue_script(
            'sunsettheme-bootstrap',
            "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
            array(),
            '4.4.1',
            true,
        );

        wp_enqueue_script(
            'sunsettheme-main',
            get_template_directory_uri() . "/assets/javascript/main.js",
            array(),
            '1.0',
            true,
        );
    }

    add_action(
        'wp_enqueue_scripts',
        'sunsettheme_register_scripts'
    );

    // function sunsetTheme_widget_areas(){
    //     register_sidebar(
    //         array(
    //             'before_title' => '<ul>',
    //             'after_title' => '</ul>',
    //             'before_widget' => '<ul class="social-list list-inline py-3 mx-auto">',
    //             'after_widget' => '</ul>',
    //             'name' => 'Sidebar Area',
    //             'id' => 'sidebar-1',
    //             'description' => 'Sidebar Widget Area'
    //         )
    //     );

    //     register_sidebar(
    //         array(
    //             'before_title' => '<ul>',
    //             'after_title' => '</ul>',
    //             'before_widget' => '<ul class="social-list list-inline py-3 mx-auto">',
    //             'after_widget' => '</ul>',
    //             'name' => 'Footer Area',
    //             'id' => 'footer-1',
    //             'description' => 'Footer Widget Area'
    //         )
    //     );
    // }
    
    // add_action('widgets_init', 'sunsetTheme_widget_areas');
?>