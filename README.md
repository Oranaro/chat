# chat

## Installer et lancer le projet

- Installer les dépendances
```bash
npm install
```

- Configurer le port
Créer un fichier .env à partir de l'exemple
```bash
cp example.env .env
```
Modifier la valeur pour le port souhaité (par défaut 3000)

- Lancer le serveur
```bash
npm start
```

### Note
Pour un mode développement (hot reload), lancer la commande
```bash
npm run dev
```
### Pour avoir les ids de l'api google

Aller sur le [dashboard](https://console.cloud.google.com/apis), puis 'identifiants.

Appuyez sur 'Créer des identifiants' > 'Compte de service' > remplissez le formulaire

Lien de la [doc](https://theoephraim.github.io/node-google-spreadsheet/#/) de la librairie.