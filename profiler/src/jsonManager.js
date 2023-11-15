function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './main.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);  
}

loadJSON(function(json) {
  console.log(json); // this will log out the json object

  // let found = json.find((element) => element.email == "luiz@email.com");
  // console.log(json.Account1.email);
});

//=========== GET ALL USERS ===========

// FileSystem.readFile('main.json', (error) => {
//   if (error) throw error;
// });

// let users;

// function jsonGetAllUsers() {

//   loadJSON(function(json) {
//     users = json;
//   });
// }

// jsonGetAllUsers();

// console.log(users);

//=========== GET USER BY EMAIL ===========


//=========== ADD USER ===========




//=========== EDIT USER ===========


//=========== DELETE USER ===========



//=========== SAVE FILE ===========
function jsonSave(data) {
  const FileSystem = require("fs");

  FileSystem.writeFile('main.json', JSON.stringify(data), (error) => {
    if (error) throw error;
  });
}
