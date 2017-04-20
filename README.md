# openwhisk-apigateway_demo
This repo is a simple demo for how to use OpenWhisk APIGateway on Blumex.

It referenced the existing nodejs modules from openwhisk-cloudant package and openwhisk-demo-cloudant
package.

It will simplely create documents on a cloudant Database, and query the created
doc info by use the doc id in the cloudant database.

## Prerequisites:

Register a Bluemix account.
Have the OpenWhisk cli installed and the corresponding API host and authentications configured.
Provision a cloudant Database instance, start the instance and name the database to cats.

## Create actions.
1. wskcli action create  cloudant_write  write-to-cloudant.js

2. wskcli action  create cloudant_read read-from-cloudant.js


## Create the APIGate way definition.
1. wskcli api-experimental create  /cloudant /read get  cloudant_read

2. wskcli api-experimental create /cloudant_write  /write  post cloudant_write


## Invoke the APIGate way through web browser or curl.

### Query the specific doc by docid.

curl "https://$your_readcloudant_apiurl?CLOUDANT_USERNAME=$your_cloudantusername&CLOUDANT_PASSWORD=$your_cloudantpassword&CLOUDANT_DATABASE=cats&DOCID=IBM_logo1732.png"

### Create a new doc in cloudant DB.

curl -X POST "$your_writecloudant_apiurl?CLOUDANT_USERNAME=$your_cloudantusername&CLOUDANT_PASSWORD=$your_cloudantpassword&CLOUDANT_DATABASE=cats"
