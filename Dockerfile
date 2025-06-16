FROM node:18-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy all files 
COPY . .

# Build the Vite project
RUN npm run build

# Install serve
RUN npm install -g serve

# Expose the port
EXPOSE 8082

# Command to run the server
CMD ["serve", "-s", "dist", "-l", "8082"]