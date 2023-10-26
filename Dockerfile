# Utilisez une image Node.js comme base
FROM node:18.18.0 as base

RUN mkdir -p /src
COPY . /src
WORKDIR /src

# Copiez les fichiers de package.json et package-lock.json pour installer les dépendances
COPY front-jukebox/package.json ./package.json
COPY front-jukebox/package-lock.json ./package-lock.json

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . . 

# Build le projet
RUN npm run build 

#---------------------------------------------------------------------------------------------------------------------------

FROM node:18.18.0-alpine3.18

WORKDIR /app

# COPY --from=base /src/.output /app/.output
# COPY --from=base /src/nuxt.config.ts /app/
# COPY --from=base /src/public /app/
# COPY --from=base /src/config /app/
# COPY --from=base /src/.env /app/
COPY --from=base /src/* /app/

#---------------------------------------------------------------------------------------------------------------------------

FROM node:18.18.0-alpine3.18 as final

WORKDIR /app/dist

COPY --from=base /src/* /app/dist/

# Exposez le port sur lequel votre application Nuxt écoute (par défaut 3000)
EXPOSE 3000

# Commande pour exécuter l'application
# CMD ["npm", "run", "start"]
CMD ["tail", "-f", "/dev/null"]