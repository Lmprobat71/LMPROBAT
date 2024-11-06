#!/usr/bin/perl
use strict;
use warnings;
use CGI qw(:standard);
use CGI::Carp qw(fatalsToBrowser);

# Fichier pour stocker les commentaires
my $file = "guestbook.txt";

# Obtenez les données du formulaire
my $nom = param('nom');
my $email = param('email');
my $comment = param('comment');
my $action = param('action');

# Ouvrez le fichier en mode lecture/écriture pour modifier les entrées
open my $fh, '+<', $file or die "Impossible d'ouvrir le fichier: $!";

# Parcourez le fichier pour trouver l'entrée à modifier
while (my $ligne = <$fh>) {
    if ($ligne =~ /Nom: $nom/) {
        # Supprimez l'ancienne entrée
        seek $fh, -length($ligne), 1;
        truncate $fh, tell($fh);
        print "Entrée supprimée : $ligne";
        last;
    }
}

# Ajoutez une nouvelle entrée si l'action est 'add'
if ($action eq 'add') {
    print $fh "Nom: $nom\n";
    print $fh "Email: $email\n";
    print $fh "Commentaire: $comment\n";
    print $fh "-------------------------\n";
    print "Nouvelle entrée ajoutée : $nom, $email, $comment";
}

# Fermez le fichier
close $fh;

# Affichez une confirmation à l'utilisateur
print header(),
    start_html('Merci pour votre modification'),
    h1('Merci pour votre modification !'),
    p('Votre modification a été enregistrée.'),
    end_html();