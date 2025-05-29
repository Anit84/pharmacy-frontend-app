# Step 1: Build the React app
FROM node:20.14.0 as build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the full app and build
COPY . .
RUN npm run build

# Step 2: Serve using Nginx
FROM nginx:alpine

# Copy built files to Nginx's html folder
COPY --from=build /app/build /usr/share/nginx/html

# ✅ Copy custom Nginx config to handle client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]