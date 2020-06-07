# Program demonstrates connecting to Bob Storage, SQL Server and Sales Force 


You need a .env file with key values. Here are some configuration variables that is required.
<BR>
SF_USERNAME=<Sales Force User ID><BR>
SF_PASSWORD=<Sales Force password><BR>
AZURE_STORAGE_CONNECTION_STRING=<KEY FROM YOUR BLOB STORAGE>
    
    

To test locally:
    
    npm install
    npm start OR node server.js

To deploy to Azure, create a App Service Plan, crank up a blank Web App using nodejs. Make sure it works.
Go to the App Settings  and add these 6 variables and then deploy the code using push from Visual Studio Code or pull using Deployment Center
