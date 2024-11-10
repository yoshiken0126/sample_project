FROM node:20.12.1
RUN mkdir /frontend
WORKDIR /frontend
RUN yarn install -g npm@latest && yarn install create-next-app && yarn install axios
CMD ["yarn", "start"]