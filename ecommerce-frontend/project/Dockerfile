# Stage 1: Build the React app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Accept the backend URL as a build argument
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Build the React app with the backend URL
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:latest

# Copy built app to nginx public folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
