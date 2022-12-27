import fetch from "node-fetch";

async function fetchData(url) {
    const response = await fetch(url, {  headers: {}});
    const data = await response.text();
    return data;
  }
  
  export default fetchData;