# RESTful CRUDE Node Server
Live site - https://utah-mls-listings.herokuapp.com/

Testing API endpoints with Postman  

 - GET  
"/" - Gets all listings  
"/city/:city" - Gets all listings within a city  
"/state/:state" - Gets all listings within a state  
example - https://utah-mls-listings.herokuapp.com/city/orem  
city search - orem, vineyard, provo, washington, st-george  
state search - utah  


- POST  
"/create"  
body - body x-www-form-urlencoded  
Required structure -  
`"address": "listing address"` (string)  
`"city": "listing city"` (string)  
`"state": "listing state"` (string)  
example - https://utah-mls-listings.herokuapp.com/create  

- PUT  
"/:id/update"  
body - body x-www-form-urlencoded  
example - https://utah-mls-listings.herokuapp.com/5c74b3ec8c953400042dcb1f/update  

- DELETE  
"/:id/delete"  
example - https://utah-mls-listings.herokuapp.com/5c74b3ec8c953400042dcb1f/delete  
# MLS-REST-API-CRUD-Server
