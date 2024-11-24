<?php
$directory = $_SERVER['DOCUMENT_ROOT'] . '/images/Galery/'; // Chemin absolu
$images = glob($directory . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);

// Convertir le chemin absolu en chemin relatif pour le client
$images = array_map(function($image) {
    return str_replace($_SERVER['DOCUMENT_ROOT'], '', $image);
}, $images);

header('Content-Type: application/json');
echo json_encode($images);
?>
