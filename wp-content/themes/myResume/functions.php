<?php 

function myResume_register_styles() {
    wp_enqueue_style('myResume-bootstrap', get_template_directory_uri() . "/style.css", array(), '1.0', 'all');
}

add_action( 'wp_enqueue_scripts', myResume_register_styles);

?>