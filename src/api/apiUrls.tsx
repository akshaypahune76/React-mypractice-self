import axios from "axios";





const getinitialized = (contetType: any , responseType:any ) => {
    let api = axios.create({
        headers : {
            'Content-Type':'application/json',
            'Access-Control-Allow-origin': '*',
            'Beare-token':'22358jffuy'
        },
     });
     return api;
};

export const getRequest = (url:any , headers:any ) => {
    return getinitialized('application/json',headers).get(url, headers).catch((error:any) => {console.log(error)})
};

// this method will be use the post data in database.
export const postRequest =(url:any, headers:any) => {
    return getinitialized('application/json',headers).post(url, headers).catch((error:any) => {console.log(error)})
}