/*
* Function that returns promise then response is recieved from QUANDL
*
*/

export const fetchData = url => fetch(url).then(response => response.json())
