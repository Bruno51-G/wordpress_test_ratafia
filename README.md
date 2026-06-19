# wordpress_test_ratafia : projet en local
## connexion au site : http://localhost:8098/
## connexsion à la console wordpress : http://localhost:8098/wp-admin



# wordpress_test_ratafia : projet sur hébergeur always data
## connexion au site : https://bgodbillot.alwaysdata.net/
## connexion à la console wordpress : https://bgodbillot.alwaysdata.net/wp-admin


# procédure de migration du projet local vers l'hébergeur alwaysdata

## Exporter la base de données
### * se connecter sur HeidiSQL à sa base de données, clique droit "exporter à la base de données SQL"
### * dans la petite fenêtre à gauche vérifier que la base de données est bien coché
### * à droite de la même petite fenêtre cocher la case créer dans Base(s) de donn et aussi dans table.
### * Destination : fichier .sql unique
###  *Choisir la destination où sera enregistré la BDD, lui donner un nom et enfin exporter.


# Importer la base de données :

### * Sur alwaysdata accéder au site phpMyAdmin et ce connecter à sa base de donnée.

### * Cliquer sur l'onglet import ensuite sélectionner la BDD exporter avec HeiSQL et cliquer sur import.
### * Il faut ensuite mettre à jour l'URL du projet local et la remplacer par l'URL du serveur. Pour sa aller dans l'onglet SQL et taper les 3 requêtes suivantes :

####  - update wp_postmeta SET meta_value = REPLACE(meta_value, 'http://localhost:8098', 'https://bgodbillot.alwaysdata.net/');

#### - update wp_options SET option_value = REPLACE(option_value, 'http://localhost:8098', 'https://bgodbillot.alwaysdata.net/');

#### - update wp_posts SET post_content = REPLACE(post_content, 'http://localhost:8098', 'https://bgodbillot.alwaysdata.net/');

### * Pour lancer les requêtes, cliquer sur "GO"


# Transfert de fichier du projet local vers le projet serveur.

### * Ouvrir FileZilla puis ce connecter
### * à gauche le projet en local et à droite le projet sur le serveur.
### * clic droit sur le répertoire qu'on veut tranférer et cliquer sur "Téléverser".

## Quand on ce connecte sur le site coté serveur et si il manque des éléments...
### * Ouvrir les DevTools (clique droit puis "inspecter" ou F12)
### * Onglet network, puis rafraichir la page avec Ctrl F5.
### * trier le résultat sur l'onglet status et vérifier les erreur 404.
### * Cliquer sur le nom de l'erreur 404, puis vérifier la Request url le chemin du fichier.
### * Il manque certainement un répertoire ou un fichier coté serveur, il suffit de le transférer du coté local vers le coté serveur grace à FileZilla.


# Sauvegarder sa base de données :

## Dans PhpMyadmin, sélectionner sa base de données, puis cliquer sur l'onglet export, mettre format SQL et enfin cliquer sur Export. La base de données est enregistrée dans le répertoire choisi en local.


