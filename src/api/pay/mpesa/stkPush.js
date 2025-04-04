
import axios from 'axios'

// M-Pesa API credentials
const consumerKey = 'r0lGcm3wWJ3dhKoTeI67MUB80XCMCS5C0zU4l5B0Eru6594H';
const consumerSecret = 'uAdzDRdQSPheRU8kZMVDFeAtdTH1ilp0ERJOba0bktt335sF9d3GjeNMBWihXx0c';
const businessShortCode = '174379';
const passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
const callBackURL = 'https://mydomain.com/path';
const transactionType = 'CustomerPayBillOnline'; // or 'CustomerBuyGoodsOnline'
const phoneNumber = '254769869064'; // Format: 2547XXXXXXXX
const amount = '100'; // Amount to be charged
const accountReference = 'ACCOUNT_REFERENCE'; // e.g., invoice number
const transactionDesc = 'TRANSACTION_DESCRIPTION'; // e.g., 'Payment for X'

// Generate Access Token
const generateAccessToken = async () => {
    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    const auth =new Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

    try {
        const response = await axios.get(url, {
            headers: {
                authorization: `Basic ${auth}`,
            }
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error generating access token:', error.message);
        throw error;
    }
};

// Generate Timestamp
const generateTimestamp = () => {
    const date = new Date();
    const formatedDate =  date.getFullYear() +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    ('0' + date.getDate()).slice(-2) +
    ('0' + date.getHours()).slice(-2) +
    ('0' + date.getMinutes()).slice(-2) +
    ('0' + date.getSeconds()).slice(-2)
    // console.log(formatedDate)
    return formatedDate;
};

// Generate Password
const generatePassword = () => {
    const timestamp = generateTimestamp();
    const password =new Buffer.from(`${businessShortCode}${passkey}${timestamp}`).toString('base64');
    return password;
};

// Initiate STK Push on the subject mobile number
export async function initiateSTKPush  ()  {
    const accessToken = await generateAccessToken();
    const url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
    const timestamp = generateTimestamp();
    const password = generatePassword();
    console.log('ruunn')

    const data = {
        BusinessShortCode: businessShortCode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: transactionType,
        Amount: amount,
        PartyA: phoneNumber,
        PartyB: businessShortCode,
        PhoneNumber: phoneNumber,
        CallBackURL: callBackURL,
        AccountReference: accountReference,
        TransactionDesc: transactionDesc
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type":'application/json'
            }
        });
       
        console.log('STK Push Response:', response.data);
    } catch (error) {
        console.error('Error initiating STK Push:',error.response.data );
    }
};

// call an instance of STKPush
initiateSTKPush();