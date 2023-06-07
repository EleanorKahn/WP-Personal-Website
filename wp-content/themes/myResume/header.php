<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta name="description" content="Eleanor's Resume Theme">
    <meta name="author" content="Eleanor Kahn">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
  <?php var_dump("I'm running in header.php"); ?>
    <div id="header"></div>