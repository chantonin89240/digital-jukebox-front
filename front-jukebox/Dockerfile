# Étape 1: Utilisez une image Node.js comme base pour construire votre application
FROM node:18 AS build

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json (ou yarn.lock si vous utilisez Yarn)
COPY package*.json ./

# Installez les dépendances de votre projet
RUN npm install

# Copiez le reste des fichiers de votre projet dans le conteneur
COPY . .

# Construisez votre application Nuxt.js
RUN npm run build

FROM node:18 AS production
WORKDIR /app
COPY --from=build /app ./

EXPOSE 3000
CMD ["npm", "start"]