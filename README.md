# Callback App
This app stores and allows retrieval for your callback. You can use it for development and localhost testing purposes.

## Endpoints
- ### [POST] /callback
Uploads and stores the callback message. Connect this with your callback source 

- ### [GET] /callback/fetch
Retrieves and returns the callback message. Connect this with your callback consumer

## Live App
The live app is deployed on OnRender: [here](https://callback-app.onrender.com)

If the app doesn't start immediately after hitting it, it means that the app had been put into dormant state by the OnRender web services provider and it needs time to start. Please give it upto 5 minutes to boot.

## How To Use It
### Posting the callback
Connect this [POST] endpoint to your callback provider:
https://callback-app.onrender.com/callback

### Retrieving the Callback
Consume this GET endpoint in your local app:
https://callback-app.onrender.com/callback/fetch

