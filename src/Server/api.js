import axios from "axios"

//convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad
export const api = axios.create({
    baseURL: 'https://free.currencyconverterapi.com/api/v5'
})