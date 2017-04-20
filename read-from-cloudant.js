var request = require('request');
var Cloudant = require('cloudant');

/**
 * This action query cloudant database by docid.
 *
 * @param   params.CLOUDANT_USERNAME               Cloudant username
 * @param   params.CLOUDANT_PASSWORD               Cloudant password
 * @param   params.CLOUDANT_DATABASE               Cloudant database to store the file to
 * @param   params.DOCID                           cloudant docid
 * @return  Promise for latest image updates
 */

function main(params) {
    // Configure database connection
    var cloudant = new Cloudant({
        account: params.CLOUDANT_USERNAME,
        password: params.CLOUDANT_PASSWORD
    });
    var database = cloudant.db.use(params.CLOUDANT_DATABASE);
    var docid = params.DOCID;

    return new Promise(function (resolve, reject) {
        database.get(docid, params, function (error, response) {
            if (!error) {
                console.log('success', response);
                resolve(response);
            } else {
                console.error('error', error);
                reject(error);
            }
        });
    });


}