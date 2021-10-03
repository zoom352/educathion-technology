import axios from "axios";


const instance = axios.create({
    // Credentials: 'include'
    baseURL: `https://api.countrylayer.com/v2/`,
    headers: {
    'API_KEY': '46f5848ab336f85579bdcc37bb6d3d0b'
    }
})



// access_key

// http://api.countrylayer.com/v2/all?access_key=46f5848ab336f85579bdcc37bb6d3d0b
// http://api.countrylayer.com/v2/name/{Afghanistan}?access_key=46f5848ab336f85579bdcc37bb6d3d0b&FullText=true

// https://api.countrylayer.com/v2/name/{name}&FullText=Afghanistan
