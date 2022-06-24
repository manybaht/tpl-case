var axios = require('axios');
var data = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:ns0="http://abstract.co.th" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Header><ns0:Authentication><ns0:Username>Infrab</ns0:Username><ns0:Password>ZxH35oCeXnA</ns0:Password></ns0:Authentication></soap:Header><soap:Body><ns0:CreateApikey><ns0:Action>get_moph_access_token</ns0:Action><ns0:user>Abstract</ns0:user><ns0:password_hash>4E87A402B2E15294A6C7184F8F41800376CB44FC41C3760B1D2F1E6921EFED54</ns0:password_hash><ns0:hospital_code>25039</ns0:hospital_code><ns0:FLAGCALL>P</ns0:FLAGCALL></ns0:CreateApikey></soap:Body></soap:Envelope>';

var config = {
    method: 'post',
    url: 'https://mophvc.moph.go.th/ws_moph/Service.asmx',
    headers: {
        'Content-Type': 'text/xml;charset=utf-8',
        'X-Titanium-Id': '718c92ca-24b0-4704-9333-c1fdb7373ff5',
        'User-Agent': 'Appcelerator Titanium/10.1.0 (M2101K6G; Android API Level: 30; th-TH;)',
        'SOAPAction': 'http://abstract.co.th/CreateApikey',
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });