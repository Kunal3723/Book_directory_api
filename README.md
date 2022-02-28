# Books Directory
It is a basic REST Api to add, update, and delete books.

# How to run this api locally
1. Download the code.
2. Open it in your IDE
3. In terminal, type "npm init -y" and press ENTER
4. Again , type "npm i express nodemon body-parser cors" and press ENTER
5. Type "npm start" to run the api on "http://localhost:5000"
6. To use all the CRUD operations i.e 
      a) Get all books.
      b) Get only one book by id.
      c) Create new book.
      d) Update existing book.
      e) delete existing book.                          
open Thunderclient or PostMan and send get request on "http://localhost:5000/books" to get all books.       
send get request on "http://localhost:5000/books/101" to get book with id "101".               
send post request on "http://localhost:5000/books" along with data in json format to add new book.               
send put request on "http://localhost:5000/books/108" along with data in json format to update existing book with id "108".              
send delete request on "http://localhost:5000/books/101"  to delete book with "101".                
         
These all are the things that this API can do.         

# Note   
If you want to run API directly then this the link of hosted API "https://book-fetch.herokuapp.com/" on heroku
