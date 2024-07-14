# Stage 1: Build the React application
FROM node:14 AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output from Stage 1 into the Nginx server's static content directory
COPY --from=builder /app/build /usr/share/nginx/html

# Nginx configuration (optional)
# If you have custom Nginx configurations, copy them into the container at this point
# COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to allow outside access to the web application
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
