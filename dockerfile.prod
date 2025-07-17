# Step 1: Install dependencies

# Use Alpine Linux as base image
FROM node:18-alpine AS dependencies

# Set the working directory
WORKDIR /app

# Copy dependency lists
# asterisk prevents failure if package-lock is missing
COPY package.json ./
COPY package-lock.json* ./

# Install dependencies
RUN npm install



# Step 2: Build the application

# Use Alpine Linux as base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy dependencies from the previous stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build



# Step 3: Create runtime container

# Use Alpine Linux as base image
FROM node:18-alpine AS runner

# Set the working directory
WORKDIR /app

# Set environment variable
ENV NODE_ENV=production

# Copy only what's needed to run the app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Application port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]