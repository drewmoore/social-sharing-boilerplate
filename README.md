# Social Sharing Boilerplate

A sample app for enabling a user to interact with a React app and share some part of the state on social media platforms. The URL shared and resulting content when loaded will be relevant to the sharing user's activity.

Deployed to Heroku at https://social-sharing-boilerplate.herokuapp.com/

# Environment Variables
```
export WEBPACK_BUILD_MODE=(development|production)
export PORT=...port-for-express...

export FB_APP_ID=...provided-by-fb-under-app-settings...
```

# External Setup for Social Networks

## Facebook
- create a facebook app.
  - basic setup ok for functionality in this app
- place the app ID in the environment variable `FB_APP_ID`
- in the Basic Settings, provide the URLs for the privacy-policy and terms-of-service
  - these must already be accessible publicly for the form to save
- to App Domains, add:
  - the production domain this app will be served under
  - localhost (or whatever your local URL is for serving the app in development)
