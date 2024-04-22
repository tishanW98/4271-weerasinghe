# Node.js image as the base image
FROM node:latest  

# Set the working directory
WORKDIR /usr/src/app  

# Copy the local directory to the root directory of the container
COPY nodeapp/* /  

# Run the npm install command to install the dependencies
RUN npm install  

# Expose port 3000 to the outside world
EXPOSE 3000  

# Start the application using the npm start command
CMD [ "npm", "start" ]  
