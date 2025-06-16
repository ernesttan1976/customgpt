# Coolify Deployment Guide for CustomGPT Portal

This guide explains how to deploy your CustomGPT Portal using Coolify with Vite.

## Prerequisites

- Home server with Docker installed
- Coolify set up on your server
- Git repository access

## Project Structure

Here's the structure of the Vite project:

```
custom-gpt-portal/
├── index.html
├── style.css
├── main.js
├── vite.config.js
├── package.json
├── Dockerfile
├── nginx.conf
└── docker-compose.yml
```

## Deployment Steps

### 1. Create a Git Repository

1. Create a new repository on GitHub or another Git provider
2. Upload all the project files to the repository
3. Make sure to commit and push all changes

### 2. Setting Up Coolify

1. Access your Coolify dashboard at `http://YOUR_SERVER_IP:8000`
2. Login with your credentials

### 3. Connecting Your Repository

1. In Coolify dashboard, go to "Sources" → "Add new" → "GitHub" (or your Git provider)
2. Follow the authorization process to connect your Git account
3. Select the repository you created for the CustomGPT Portal

### 4. Creating a Deployment Service

1. In Coolify dashboard, navigate to "Resources" → "New Service"
2. Select "Docker" as the service type
3. Choose your repository from the connected sources
4. Configure the build settings:
   - Build Method: Dockerfile
   - Docker Compose: No (unless you want to use the docker-compose.yml file)
   - Port: 8080
   - Publish Port: Choose a port for external access (e.g., 8080)

### 5. Configure Environment Variables (Optional)

If needed, you can add environment variables in the Coolify dashboard:
1. Go to your service settings
2. Find "Environment Variables" section
3. Add any required variables

### 6. Deploy Your Service

1. Click "Deploy" button in your service dashboard
2. Coolify will automatically:
   - Pull your code from the repository
   - Build the Docker image using your Dockerfile
   - Start the container with the specified settings

### 7. Access Your CustomGPT Portal

Once deployment is complete, access your portal at:
- `http://YOUR_SERVER_IP:PUBLISHED_PORT`

## Updating Your Portal

When you want to add new CustomGPTs or make other changes:

1. Update the `main.js` file with new GPT entries
2. Commit and push changes to your repository
3. Trigger a redeployment in Coolify:
   - Either set up automatic deployments on push
   - Or manually click "Redeploy" in the Coolify dashboard

## Setting Up Automatic Deployments (Optional)

1. In Coolify, go to your service settings
2. Enable "Auto Deploy"
3. Configure webhook in your Git repository to notify Coolify of changes

## Transitioning to LibreChat

To replace OpenAI GPTs with LibreChat instances:

1. Deploy LibreChat using Coolify:
   ```yaml
   # Sample docker-compose.yml for LibreChat
   version: '3'
   services:
     librechat:
       image: ghcr.io/danny-avila/librechat:latest
       environment:
         - OPENAI_API_KEY=your_key_here
         # Add other env variables as needed
       ports:
         - "3080:3080"
       restart: unless-stopped
   ```

2. For each CustomGPT you want to replace:
   - Create a custom preset in LibreChat
   - Update the URL in your portal's `main.js` to point to your LibreChat instance
   - Redeploy the portal

## Security Considerations

- Coolify provides built-in HTTPS with Let's Encrypt
- Consider setting up authentication for your portal
- Regularly update your Coolify instance and deployed applications
- Keep your API keys and credentials secure



music.techdad.work
customgpt.techdad.work
photos.techdad.work
blog.techdad.work
n8n.techdad.work
ai.techdad.work
videoai.techdad.work
qr.techdad.work
pdf.techdad.work
affine.techdad.work
pptconvert.techdad.work
