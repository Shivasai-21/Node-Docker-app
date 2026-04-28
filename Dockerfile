# Stage 1: Build dependencies
FROM node:18-alpine AS build

WORKDIR /home/node/app

# Install dependencies
COPY package.json ./
RUN npm install --production

# Copy source
COPY . .

# Stage 2: Run lightweight container
FROM build

# Copy only built app + node_modules
COPY . .
run npm install --production
EXPOSE 3000
CMD ["npm", "start"]
