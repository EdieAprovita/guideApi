# Utilizamos una imagen base de Node.js
FROM node:14-alpine

# Establecemos el directorio de trabajo en "/usr/src/app"
WORKDIR /usr/src/app

# Copiamos el archivo "package.json" y "package-lock.json" a la imagen
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos todo el contenido del directorio actual a la imagen
COPY . .

# Compilamos el proyecto utilizando el comando "npm run build"
RUN npm run build

# Establecemos el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Definimos el comando que se ejecutará cuando el contenedor se inicie
CMD ["npm", "run", "start:prod"]
