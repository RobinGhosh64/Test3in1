# Cloud Hybrid NODEJS application that demonstrates connectivity to Sales Force, Azure Bob Storage/SQL Server/Oracle Server/PostGres Server


Here are some configuration variables that is required for this program to run. First 3 variables are important. The SQL variables are not mandatory, but would be required if you want to test SQL using **website/run?query=select * from table**
    
<BR>
SF_USERNAME=<Sales Force User ID><BR>
SF_PASSWORD=<Sales Force password><BR>
AZURE_STORAGE_CONNECTION_STRING=<KEY FROM YOUR BLOB STORAGE>
SQL_USERNAME=<your username>
SQL_PASSWORD=<your password>
SQL_DATABASE=<your db>
SQL_SERVER=<your server name>.database.windows.net
    

To test locally, you need the set the above variables in a .env file, then use
    
    npm install
    npm start OR node server.js

To deploy to Azure, create a App Service Plan, crank up a blank Web App using Windows/NodeJS LTS 12 settings of the App Service.
Make sure your website renders with a Microsoft Developer page.
Go to the App Settings and add these 7 variables. Then go to the Deployment Center and pull this repository using the 4 steps of CI/CD. Make sure you go via External option. 
You also have a choice to pull the code to your local machine, build it and then publish from Visual Studio Code OR use Azure CLI to push this application onto the newly created App Service.

If your configurations are good, when you access the website, it should display
 
Salesforce: Connected, Blob Storage: Success, SQL Server: To test SQL use /run?SQL=select * from yourtable

To test SQL, On your browser, Run <website.azurewebsites.net/run?sql=select * from yourtable

**To pull the latest code into your existing web app. Follow these steps** 

Go to **Deployment Center** and then use the **Sync** button on your right to repull the code again.
    This should download the latest code and republish your app.

Give it 30 seconds. Go back to the website. Verify it shows **To test SQL user /run?sql=select * from table** 

I have added connectivity to Postgres Server and Oracle Server

Hope this works!

roghos@microsoft.com  Robin Ghosh

