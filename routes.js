var appRouter = function(app) {

var headerZuora = {
    "apiAccessKeyId": process.env.apiAccessKeyId, //"apiuser@1worldsync.com",
    "apiSecretAccessKey": process.env.apiSecretAccessKey, //"Zuora000",
    "Accept": "application/json",
    "Content-Type" : "application/json"
};

var ACHPageid = process.env.ACHPageid; //"2c92c0f8576a2dc5015772ef64c5631c";
var CreditPageID = process.env.CreditPageID; //"2c92c0f95753fa8e0157585f417917ae";
var ZuoraHostedPage = process.env.ZuoraHostedPage; //"https://apisandbox.zuora.com/apps/PublicHostedPageLite.do";
var pricelimit = process.env.pricelimit; //2000;
var ExcludeGDSNpricing = process.env.ExcludeGDSNpricing; //true;
var GDSNPricingChargeName = process.env.GDSNPricingChargeName; //"GDSN Pricing";

var format = require('date-format');

/*****************Create new subscription using Soap********/
app.post("/NewSoapSubscription", function(req, res) {

    const path = require('path');
    var soap = require('soap');
    var parseString = require('xml2js').parseString;
    var url = path.resolve('./zuora.wsdl');

    var credentialElement =   {
  "username": headerZuora.apiAccessKeyId,
  "password": headerZuora.apiSecretAccessKey
  
};



   
  /*
var SubscribeRequest = 

{
    "subscribes" : [
        {

        "Account" : {
                            
                            "BillCycleDay" : 0,
                           
                            "AutoPay" : false,
                           
                            "Currency" : "USD",
                           
                            "Name" : req.body.Account.Name,
                            "BcdSettingOption" : "AutoSet",
                            "Batch" : "Batch1",
                            "PaymentTerm" : "Due Upon Receipt"
                           
                        
                    }
                    
                    ,
        "PaymentMethod" : {

            "Type" : req.body.PaymentMethod.Type,
            "id" : req.body.PaymentMethod.id
        },
        "BillToContact" : {
                            "Address1": req.body.BillToContact.Address1,
                            "City": req.body.BillToContact.City,
                            "Country": req.body.BillToContact.Country,
                            "FirstName": req.body.BillToContact.FirstName,
                            "LastName": req.body.BillToContact.LastName,
                            "ZipCode": req.body.BillToContact.ZipCode,
                            "State": req.body.BillToContact.State
                            
                    },
        "SubscriptionData" : {

                "Subscription" : {

                               
                                "InitialTerm" : 12,
                                "RenewalTerm" : 12,
                                "TermStartDate" : format.asString('yyyy-MM-dd', new Date()),

                                "TermType" : "TERMED",
                                 "contractEffectiveDate": format.asString('yyyy-MM-dd', new Date())
                                
                },
                "RatePlanData" : req.body.SubscriptionData.RatePlanData
                


        }       
                 

} 
    ]


}; 

*/
/*************Working rate plans */
/*
var SubscribeRequest = 

{
    "subscribes" : [
        {

        "Account" : {
                            
                            "BillCycleDay" : 0,
                           
                            "AutoPay" : false,
                           
                            "Currency" : "USD",
                           
                            "Name" : "testAccountName1",
                            "BcdSettingOption" : "AutoSet",
                            "Batch" : "Batch1",
                            "PaymentTerm" : "Due Upon Receipt"
                           
                        
                    }
                    
                    ,
        "PaymentMethod" : {

            "Type" : "Credit Card",
            "id" : "2c92c0f858aa39000158c06e43e51dd7"
        },
        "BillToContact" : {
                            "Address1": "1051 E Hillsdale Blvd",
                            "City": "Foster City",
                            "Country": "United States",
                            "FirstName": "John",
                            "LastName": "Smith",
                            "ZipCode": "94404",
                            "State": "CA"
                            
                    },
        "SubscriptionData" : {

                "Subscription" : {

                               
                                "InitialTerm" : 12,
                                "RenewalTerm" : 12,
                                "TermStartDate" : format.asString('yyyy-MM-dd', new Date()),

                                "TermType" : "TERMED",
                                 "contractEffectiveDate": format.asString('yyyy-MM-dd', new Date())
                                
                },
                "RatePlanData" : [
                    {
                     "RatePlan" : {
                         "ProductRatePlanId" : "2c92c0f95789a68b01578c334b631217"

                     },
                     "RatePlanChargeData" : [
                         {
                             "RatePlanCharge" : {
                                 "ProductRatePlanChargeId" : "2c92c0f95789a68b01578c334b751219", "Quantity" : 1
                                 

                             }

                         }


                     ]


                    }, {

                     "RatePlan" : {
                         "ProductRatePlanId" : "2c92c0f857899db401578c2a952c0a1b"

                     },
                     "RatePlanChargeData" : [
                         {
                             "RatePlanCharge" : {
                                 "ProductRatePlanChargeId" : "2c92c0f857899db401578c2a953b0a1d", "Quantity" : 1
                                 

                             }

                         }


                     ]


                    },
                    {

                     "RatePlan" : {
                         "ProductRatePlanId" : "2c92c0f95789a68b01578c26b9207505"

                     },
                     "RatePlanChargeData" : [
                         {
                             "RatePlanCharge" : {
                                 "ProductRatePlanChargeId" : "2c92c0f95789a68b01578c26b9357507", "Quantity" : 1
                                 

                             }

                         }


                     ]


                    },
                    {

                     "RatePlan" : {
                         "ProductRatePlanId" : "2c92c0f857899db801578c28220751b0"

                     },
                     "RatePlanChargeData" : [
                         {
                             "RatePlanCharge" : {
                                 "ProductRatePlanChargeId" : "2c92c0f857899db801578c28221951b2", "Quantity" : 1
                                 

                             }

                         }


                     ]


                    }

                    ,
                    {

                     "RatePlan" : {
                         "ProductRatePlanId" : "2c92c0f957220b5d015729d21566320c"

                     },
                     "RatePlanChargeData" : [
                         {
                             "RatePlanCharge" : {
                                 "ProductRatePlanChargeId" : "2c92c0f9578d5b37015796f14b051f9c", "Quantity" : 1
                                 

                             }

                         }


                     ]


                    },
                    {

                     "RatePlan" : {
                         "ProductRatePlanId" : "2c92c0f9578d5b3c015796f1f5482e67"

                     },
                     "RatePlanChargeData" : [
                         {
                             "RatePlanCharge" : {
                                 "ProductRatePlanChargeId" : "2c92c0f9578d5b3c015796f1f5592e69", "Quantity" : 1
                                 

                             }

                         }


                     ]


                    },
                    {

                     "RatePlan" : {
                         "ProductRatePlanId" : "2c92c0f9587b0aca01588ba4df045722"

                     },
                     "RatePlanChargeData" : [
                         {
                             "RatePlanCharge" : {
                                 "ProductRatePlanChargeId" : "2c92c0f9587b0aca01588ba4df115724", "Quantity" : 1
                                 

                             }

                         }


                     ]


                    },
                    {

                     "RatePlan" : {
                         "ProductRatePlanId" : "2c92c0f857899e1701578c3f87cd50dd"

                     },
                     "RatePlanChargeData" : [
                         {
                             "RatePlanCharge" : {
                                 "ProductRatePlanChargeId" : "2c92c0f857899e1701578c3f87dd50df", "Quantity" : 1
                                 

                             }

                         }


                     ]


                    },
                    {

                     "RatePlan" : {
                         "ProductRatePlanId" : "2c92c0f9587b0aca01588b960e510f47"

                     },
                     "RatePlanChargeData" : [
                         {
                             "RatePlanCharge" : {
                                 "ProductRatePlanChargeId" : "2c92c0f9587b0ace01588b97ad480f90", "Quantity" : 1
                                 

                             }

                         }


                     ]


                    },
                    {

                     "RatePlan" : {
                         "ProductRatePlanId" : "2c92c0f95789a68601578c3ab8555079"

                     },
                     "RatePlanChargeData" : [
                         {
                             "RatePlanCharge" : {
                                 "ProductRatePlanChargeId" : "2c92c0f95789a68601578c3ab866507b", "Quantity" : 1
                                 

                             }

                         }


                     ]


                    }




                ]
                


        }       
                 

} 
    ]


}; 
*/

var SubscribeRequest = 

{
    "subscribes" : [
        {

        "Account" : {
                            
                            "BillCycleDay" : 0,
                           
                            "AutoPay" : false,
                           
                            "Currency" : "USD",
                           
                            "Name" : "testAccountName1",
                            "BcdSettingOption" : "AutoSet",
                            "Batch" : "Batch1",
                            "PaymentTerm" : "Due Upon Receipt"
                           
                        
                    }
                    
                    ,
        "PaymentMethod" : {

            "Type" : "Credit Card",
            "id" : "2c92c0f858aa39000158c0e1ae336d47"
        },
        "BillToContact" : {
                            "Address1": "1051 E Hillsdale Blvd",
                            "City": "Foster City",
                            "Country": "United States",
                            "FirstName": "John",
                            "LastName": "Smith",
                            "ZipCode": "94404",
                            "State": "CA"
                            
                    },
        "SubscriptionData" : {

                "Subscription" : {

                               
                                "InitialTerm" : 12,
                                "RenewalTerm" : 12,
                                "TermStartDate" : format.asString('yyyy-MM-dd', new Date()),

                                "TermType" : "TERMED",
                                 "contractEffectiveDate": format.asString('yyyy-MM-dd', new Date())
                                
                },
                "RatePlanData" : [
                    {
                     "RatePlan" : {
                         "ProductRatePlanId" : "2c92c0f957220b8c015729b5fb2026d8"

                     },
                     "RatePlanChargeData" : [
                         {
                             "RatePlanCharge" : {
                                 "ProductRatePlanChargeId" : "2c92c0f85721ff7c015729bf53032103"
                                 

                             }

                         }


                     ]


                    }, {

                     "RatePlan" : {
                         "ProductRatePlanId" : "2c92c0f95789a68601578c2defd31f5b"

                     },
                     "RatePlanChargeData" : [
                         {
                             "RatePlanCharge" : {
                                 "ProductRatePlanChargeId" : "2c92c0f95789a68601578c2defe91f5d"
                                 

                             }

                         }


                     ]


                    }




                ]
                


        }       
                 

} 
    ]


}; 
/*

var SubscribeRequest = 

{
    "subscribes" : [
        {

        "Account" : {
                            
                            "BillCycleDay" : 0,
                           
                            "AutoPay" : false,
                           
                            "Currency" : "USD",
                           
                            "Name" : "testAccountName1",
                            "BcdSettingOption" : "AutoSet",
                            "Batch" : "Batch1",
                            "PaymentTerm" : "Due Upon Receipt"
                           
                        
                    }
                    
                    ,
        "PaymentMethod" : {

            "Type" : "CreditCard",
            "id" : "2c92c0f95753fa8e0157585f417917ae"
        },
        "BillToContact" : {
                            "Address1": "1051 E Hillsdale Blvd",
                            "City": "Foster City",
                            "Country": "United States",
                            "FirstName": "John",
                            "LastName": "Smith",
                            "ZipCode": "94404",
                            "State": "CA"
                            
                    },
        "SubscriptionData" : {

                "Subscription" : {

                               
                                "InitialTerm" : 12,
                                "RenewalTerm" : 12,
                                "TermStartDate" : "2016-12-01",

                                "TermType" : "Termed",
                                 "contractEffectiveDate": "2016-12-01"
                                
                },
                "RatePlanData" : [
                    {
                    "RatePlan":{  
               "ProductRatePlanId":"2c92c0f95789a68601578c2defd31f5b"
            },
            "RatePlanChargeData":[  
               {  
                  "RatePlanCharge":{  
                     "ProductRatePlanChargeId":"2c92c0f95789a68601578c2defe91f5d"
                  }
               }
            ]
         }



                ]
                


        }       
                 

} 
    ]


}; 
*/

// Give the createClient Method the WSDL as the first argument   
soap.createClient(url, function(err, client){
  // The Client now has all the methods of the WSDL. Use it to create a new order by feeding it the JSON Payload
  client.login(credentialElement, function(err, result, body) {
    parseString(body, function(err, result){
        if (err)
        {
            var result = {
                error : err,
                success : false,
                statuscode : null,
                ZuoraResponseBody : null

            };

            res.send(result);


        }
       
    var messageLoginResult = result['soapenv:Envelope']['soapenv:Body'][0]['soapenv:Fault'] ? result['soapenv:Envelope']['soapenv:Body'][0]['soapenv:Fault'][0]['faultstring'][0] : 'Pass';
   
   if (messageLoginResult === 'Pass')
    {
        var sessionid = result['soapenv:Envelope']['soapenv:Body'][0]['ns1:loginResponse'][0]['ns1:result'][0]['ns1:Session'][0];
      

        var soapHeader = {
            "SessionHeader" : {
                "session" : sessionid


            }

        };

       client.addSoapHeader(soapHeader);
       client.subscribe(SubscribeRequest, function(errsubs, resultsubs, bodysubs) {
           if (errsubs)
            {
                var result = {
                    error : errsubs,
                    success : false,
                    statuscode : null,
                    ZuoraResponseBody : null

                };

                res.send(result);


            }
            else
            {
                console.log(client.lastRequest);
                var result = {
                    error : null,
                    success : true,
                    statuscode : null,
                    ZuoraResponseBody : resultsubs

                };
                res.send(result);

            }

       });


    }
    else
    {
         var result = {
                    error : null,
                    success : false,
                    statuscode : null,
                    ZuoraResponseBody : result

                };
                res.send(result);

    } 
   })
  });
});









});

/****************************************************/


/****************get products***********/

app.get("/getProducts", function(req, res) {

var request = require('request');	

var producttype = req.query.producttype;
var revenue = req.query.revenue;

var url='https://apisandbox-api.zuora.com/rest/v1/catalog/products';

var options = {
    url: url,
    method: 'GET',
    headers: headerZuora
    
 };



request.get(options, function (error, response, body) {

 var jp = require('jsonpath');
var resproducts = [];

var bodyjson = JSON.parse(body);
var products = [];
if (producttype == "Supplier")
    products = jp.query(bodyjson, "$.products[?(@.name == 'Supplier')].productRatePlans[*]");

if (producttype == "Recipient")
    products = jp.query(bodyjson, "$.products[?(@.name == 'Recipient')].productRatePlans[*]");



products.forEach(function(element) {
    var productname = element.name;
    var productid = element.id;
    var productdesc = element.description;
   
    var quantity = false;
    var rateplancharge = jp.query(element, "$.productRatePlanCharges[*]");
    var product = {};
    var chargearr = [];
    var volumeModelFlag = "false";
    var flatModelFlag = "false";
     for (charge in rateplancharge) {
                
                

                 var chargevar = rateplancharge[charge];

                 if (chargevar.model == "Volume" )
                    volumeModelFlag = "true";
               
/**********If revuenue is null and charge model is volume then ignore */
                if (revenue == null & chargevar.model == "Volume")
                    continue;
/***********************************/

/**********Catalog1 component created by shruti in sandbox ***********/
                 if (chargevar.id == "2c92c0f858199d2301582613c24a5991") // catalog1 charge id created by shruti in sandbox
                 continue;
/************************************************* */

/************Exclude GDSN pricing component***************/
                 if (chargevar.name == GDSNPricingChargeName && ExcludeGDSNpricing)
                 continue;
/******************************************* */

/*********************Volume pricing is good for revenue UOM */
                 if (chargevar.model == "Volume" && chargevar.uom != "Revenue")
                    continue;
/********************************************* */                    


                 var price = null;

                 var pricing = jp.query(chargevar, "$.pricing[?(@.currency == 'USD')]")[0];

/***************Tier pricing*********************/
                 if (pricing.price == null && pricing.tiers !=  null )
                 {
                    
                    for (tier in pricing.tiers)
                    {
                        var tiervar = pricing.tiers[tier];
                        

                        if (tiervar.endingUnit == null)
                            {
                            if (revenue >= tiervar.startingUnit)
                            {
                                    price = tiervar.price;
                                    break;

                            }

                            }
                        else
                            {
                                if (tiervar.startingUnit <= revenue && tiervar.endingUnit >= revenue )
                                {
                                    price = tiervar.price;
                                    break;
                                }
                            }
                       
                       


                    }

                 }
/****************************************************/

/************Non Tier pricing*****************/
                 if (pricing.price != null && pricing.tiers ==  null)
                        price = pricing.price;
/***********************************************/               
                
                if (price <= pricelimit )
                {

                var chargeobj = {
                                            rateplanchargeid : chargevar.id,
                                            rateplanchargesModel : chargevar.model,
                                            billingperiod : chargevar.billingPeriod,
                                            type : chargevar.type,
                                            Price : price,
                                            InputRevenue : revenue
                   
                };
                
               chargearr.push(chargeobj);
            
                }

     };
                
                var product = {
                                            
                                           
                                            name : productname,
                                            description : productdesc,
                                            rateplanid :  productid,
                                            
                                            charge : chargearr
                                           
                                             };
              if (chargearr.length > 0 && chargearr.length == 1)
              {
// Rate plan with volume pricing model cannot allow to select flat fee model for Zuora's business policy
                if (!(chargearr[0].rateplanchargesModel == "FlatFee" && volumeModelFlag == "true"))
                        resproducts.push(product);
              }
                

            
   

  
});


   
      res.send(resproducts);


      

    // res.send(body);
        








    
});



});

/**************************************/




/*************Create Account, contact, community user subscription, playlist share */
app.post("/registerSalesforce", function(req, res) {

var request = require('request');	
var crypto = require('crypto');

var rdate = new Date().toISOString();
var userid='123';
var token = crypto.createHmac('SHA256', '123').update(userid+rdate).digest('base64');

var url='https://salesforce-1ws-api.herokuapp.com/api/register';
var headers = {
    'x-as2-userid': userid,
    'x-as2-timestamp': rdate,
    'x-as2-auth-token': token,
    "Accept": "application/json",
    "Content-Type" : "application/json"
};
var jsonBody = JSON.stringify({
    "productRatePlanId": ["2c92c0f95789a68601578c3ab8555079","2c92c0f957220b8c015729b5fb2026d8","2c92c0f95789a68b01578c334b631217"],
    "lastName": req.body.lastName,
    "firstName": req.body.firstName,
    "email": req.body.email,
    "companyName": req.body.companyName,
    "GLN" : req.body.GLN,    
});


var options = {
    url: url,
    method: 'POST',
    headers: headers,
    body: jsonBody
 };



request.post(options, function (error, response, body) {
    res.send(responseHandler(error,response, body));
});

});

/***************************************/
/********************Get Signature************************/
app.get("/getSignature", function(req, res) {

var request = require('request');	

var pagetype = req.query.pagetype;

var url='https://apisandbox-api.zuora.com/rest/v1/rsa-signatures';

var pageid = '';

if (pagetype == "Credit" )
    pageid = CreditPageID;

if (pagetype == "Ach" )
    pageid = ACHPageid;

var jsonBody = JSON.stringify({
	"method":"POST",
	"uri": ZuoraHostedPage,
	"pageId": pageid
});


var options = {
    url: url,
    method: 'POST',
    headers: headerZuora,
    body: jsonBody
 };



request.post(options, function (error, response, body) {


//var bodyjson = JSON.parse(body);
//res.send(bodyjson);
 if (!error && response.statusCode == 200)
    {
        var bodyjson = JSON.parse(body);
        var reswithPageid = {

                            "signature": bodyjson.signature,
                            "token": bodyjson.token,
                            "tenantId": bodyjson.tenantId,
                            "key": bodyjson.key,
                            "id" : pageid,
                            "success": true


        };
        res.send(reswithPageid);

    }
    else
    res.send(responseHandler(error,response, body));

    
});



});
/***************************************/

/*****************New Subscription********************/
app.post("/NewSubscription", function(req, res) {

   var request = require('request');

   
   var url='https://apisandbox-api.zuora.com/rest/v1/accounts';

  
/*
  var jsonBody = JSON.stringify({
  "name": "Zuora Test Account Shruti API",
  "currency": "USD",
  
  "billCycleDay": 0,
  "autoPay": false,
  
  "billToContact": {
    "address1": "1051 E Hillsdale Blvd",
    "city": "Foster City",
    "country": "United States",
    "firstName": "John",
    "lastName": "Smith",
    "zipCode": "94404",
    "state": "CA",
    "workEmail": "john.smith@test.com"
  },
  "hpmCreditCardPaymentMethodId": "2c92c0f957ffb6f4015811feaabb12f4",
  "subscription": {
  
  "contractEffectiveDate": "2016-10-28",
  "termType":"EVERGREEN",
  
  
"subscribeToRatePlans":[
    {
      "productRatePlanId": "2c92c0f857899e1701578c3bd338458e",
      "chargeOverrides":[
        {"productRatePlanChargeId":"2c92c0f95789a68b01578c3e1934414f",  "Quantity":100}
      ]
    }
  ]
 
}
});

*/


 var jsonBody = JSON.stringify({
  "name": req.body.name,
  "currency": "USD",
  
  "billCycleDay": 0,
  "autoPay": false,
  
  "billToContact": {
    "address1": req.body.billToContact.address1,
    "city": req.body.billToContact.city,
    "country": req.body.billToContact.country,
    "firstName": req.body.billToContact.firstname,
    "lastName": req.body.billToContact.lastname,
    "zipCode": req.body.billToContact.zipcode,
    "state":req.body.billToContact.state,
    "workEmail": req.body.billToContact.workEmail
  },
  "hpmCreditCardPaymentMethodId": req.body.hpmCreditCardPaymentMethodId,
  "subscription": {
  
  "contractEffectiveDate": format.asString('yyyy-MM-dd', new Date()),
  "termType":"EVERGREEN",
 
  
/*"subscribeToRatePlans":[
    {
      "productRatePlanId": "2c92c0f857899db401578c2a952c0a1b",
      "chargeOverrides":[
        {"productRatePlanChargeId":"2c92c0f857899db401578c2a953b0a1d",  "price":100}
      ]
    }
  ] */

  "subscribeToRatePlans" : req.body.subscribeToRatePlans
 
}
}); 


var options = {
    url: url,
    method: 'POST',
    headers: headerZuora,
    body: jsonBody
 };



request.post(options, function (error, response, body) {

res.send(responseHandler(error,response, body));

});

 
});

/****************************************************/


/********************Preview Subscription******************/

app.post("/preview", function(req, res) {

   var request = require('request');

   
   var url='https://apisandbox-api.zuora.com/rest/v1/subscriptions/preview';

   
/*
   var jsonBody = JSON.stringify({
  "termType": "EVERGREEN",
 "contractEffectiveDate": "2016-10-31",
  "previewAccountInfo":
    {"currency": "USD",
     "billToContact":
      {"zipCode": "94549",
       "country": "United States",
       "city": "Walnut Creek",
       "county": "Contra Consta",
       "state": "California"},
     "billCycleDay": 0},
  "subscribeToRatePlans":
    [{"chargeOverrides":
       [{"productRatePlanChargeId": "2c92c0f95789a68601578c2defe91f5d"}],
      "productRatePlanId": "2c92c0f95789a68601578c2defd31f5b"}],
  
  "initialTermPeriodType": "Year"
}
);
*/




 var jsonBody = JSON.stringify({
  "termType": "Termed",
 "contractEffectiveDate": format.asString('yyyy-MM-dd', new Date()),
  "previewAccountInfo":
    {"currency": "USD",
     "billToContact":
      {"zipCode": req.body.billToContact.zipcode,
       "country": req.body.billToContact.country,
       "city": req.body.billToContact.city,
       "county": req.body.billToContact.county,
       "state": req.body.billToContact.state},
     "billCycleDay": 0}, 
     "subscribeToRatePlans" : req.body.subscribeToRatePlans, 
// "subscribeToRatePlans":
  //  [{"chargeOverrides":
    //   [{"productRatePlanChargeId": "2c92c0f9578d5b3c015796f1f5592e69"}],
      //"productRatePlanId": "2c92c0f9578d5b3c015796f1f5482e67"}], 
  
 "initialTermPeriodType": "Year"
}
); 


var options = {
    url: url,
    method: 'POST',
    headers: headerZuora,
    body: jsonBody
 };



request.post(options, function (error, response, body) {

res.send(responseHandler(error,response, body));

});

 
});



/******************************************************/

}
 


function responseHandler(error, response, body)
{
var result = {};

  

 if (error)
{
    

        result.error = error;
        result.success = false;
        result.statuscode = null;
        result.ZuoraResponseBody = null;

}
else{
    if (!(response.statusCode) == 200) {

        result.error = null;
        result.success = false;
        result.statuscode = response.statusCode;
        result.ZuoraResponseBody = null;
    }
    else
    
    {
        result.error = null;
        result.success = true;
        result.statuscode = response.statusCode;
        result.ZuoraResponseBody = JSON.parse(body);

    }
        

}

return result;

}
module.exports = appRouter;