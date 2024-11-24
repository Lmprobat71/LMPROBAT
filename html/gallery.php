<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$directory = $_SERVER['DOCUMENT_ROOT'] . '/images/Galery/'; // Chemin absolu vers le dossier des images
$images = glob($directory . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);

// Vérifiez si des images ont été trouvées
if ($images === false) {
    echo json_encode(['error' => 'Erreur lors de la lecture du dossier']);
    exit;
}

// Convertir le chemin absolu en chemin relatif pour le client
$images = array_map(function($image) {
    return str_replace($_SERVER['DOCUMENT_ROOT'], '', $image);
}, $images);

header('Content-Type: application/json');
echo json_encode($images);
?>
