# Use Maven to build the Spring Boot application
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Use OpenJDK to run the application (Optimized for smaller size)
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy compiled JAR file
COPY --from=build /app/target/*.jar app.jar

# Expose backend port
EXPOSE 8081

# Start the application
ENTRYPOINT ["java", "-jar", "app.jar"]
