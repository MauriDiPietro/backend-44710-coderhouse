FROM node
WORKDIR /app
COPY package*.json ./
# si en la imagen no se incluye el .env
# ENV MONGO_URI=mongodb://localhost:27017/coderhouse
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]