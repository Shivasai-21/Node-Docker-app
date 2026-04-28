# Use official Node.js Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /home/node/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy application files
COPY . .

# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
