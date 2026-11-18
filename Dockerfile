FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
EXPOSE 3000
ENV PORT=3000 \
    HOST=0.0.0.0 \
    NODE_ENV=production

USER node

CMD ["npm", "start"]
