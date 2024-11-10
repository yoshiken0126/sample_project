FROM node:20.12.1
RUN mkdir /frontend
COPY ./ /frontend
WORKDIR /frontend
RUN yarn global add npm@latest && yarn add create-next-app && yarn add axios
CMD ["yarn", "start"]