var cat = {
 "name": "Fluffy",
 "activities": ["play", "eat cat food"],
 "catFriends": [
 {
 "name": "bar",
 "activities": ["be grumpy", "eat bread omblet"],
 "weight": 8,
 "furcolor": "white"
 }, 
 {
 "name": "foo",
 "activities": ["sleep", "pre-sleep naps"],
 "weight": 3
 }
 ]
}

console.log(cat);
/*
Basic Tasks to play with JSON:

Add height and weight to Fluffy*/
cat.height = 1;
cat.weight =  6;
console.log("height and weight added:");
console.log(cat);
/*
Fluffy name is spelled wrongly. Update it to Fluffyy*/
cat.name = "Fluffyy";
console.log("name updated");
console.log(cat);
/*List all the activities of Fluffyy catFriends.*/
console.log("all the activities of Fluffyy catFriends");

for(var i =0; i<cat.catFriends.length;i++)
{
	console.log("The cat "+cat["catFriends"][i]["name"]+" have following activities:")
	console.log(cat["catFriends"][i]["activities"])
}
/*Print the catFriends names.*/
console.log("names of all cat friends:")
for(var i =0; i<cat.catFriends.length;i++)
{
	
	console.log(cat["catFriends"][i]["name"])
	
}
/*Print the total weight of catFriends*/
var sum =0;
console.log("the total weight of catFriends")
for(var i =0; i<cat.catFriends.length;i++)
{
	
	sum+=cat["catFriends"][i]["weight"]
	
}
console.log(sum)
/*Print the total activities of all cats */
sum =cat["activities"].length;
console.log("the total activities of all cats:")

for(var i =0; i<cat.catFriends.length;i++)
{
	
	sum+=cat["catFriends"][i]["activities"].length
	
}
console.log(sum)
/*Add 2 more activities to bar & foo cats*/
console.log("Adding 2 more activities to bar & foo cats")
for(var i =0; i<cat.catFriends.length;i++)
{
	
	cat["catFriends"][i]["activities"].push("paly with woolen ball")
	cat["catFriends"][i]["activities"].push("look outside window")
	
}

for(var i =0; i<cat.catFriends.length;i++)
{
	
	console.log(cat["catFriends"][i]["activities"])
	
}
/*Update the fur color of bar
*/
console.log("updating the fur color of bar")
cat.catFriends[0].furcolor = "orange"
console.log(cat["catFriends"][0])
//Problem 0 : Part B

var myCar = {
 make: 'Bugatti',
 model: 'Bugatti La Voiture Noire',
 year: 2019,
 accidents: [
 {
 date: '3/15/2019',
 damage_points: '5000',
 atFaultForAccident: true
 },
 {
 date: '7/4/2022',
 damage_points: '2200',
 atFaultForAccident: true
 },
 {
 date: '6/22/2021',
 damage_points: '7900',
 atFaultForAccident: true
 }
 ]
}
console.log(myCar)
/*1. Loop over the accidents array. Change atFaultForAccident from true to false.
2. Print the dated of my accidents*/
console.log("Changing atFaultForAccident from true to false")
for(var i=0;i<myCar.accidents.length;i++)
{
	myCar.accidents[i].atFaultForAccident = false;
}
console.log(myCar)
console.log("Dates of Accidents:")
for(var i=0;i<myCar.accidents.length;i++)
{
	console.log(myCar.accidents[i].date)
}
/*Problem 1 (5 mins):
Parsing an JSON object’s Values:
Write a function called “printAllValues” which returns an newArray of all the input object’s values.
Input (Object):
var object = {name: “RajiniKanth”, age: 33, hasPets : false};
Output:
[“RajiniKanth”, 33, false]*/

function printAllValues(a) {
	var res =[]
    for(var k in a) {
        if(a[k] instanceof Object) {
            printValues(a[k]);
        } else {
           res.push(a[k]);
        };
    }
	console.log(res)
};
var object = {name: 'RajiniKanth', age: 33, hasPets : false};
console.log(object)
console.log("Parsing an JSON object’s Values:")
printAllValues(object)
/*Problem 2(5 mins) :
Parsing an JSON object’s Keys:
Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
Example Input:
{name : ‘RajiniKanth’, age : 25, hasPets : true}
Example Output:
[‘name’, ‘age’, ‘hasPets’]*/
function printAllKeys(a)
{
	var res =[]
	res = Object.keys(a)
	console.log(res)
	
}
console.log("Parsing an JSON object’s Keys:")
printAllKeys(object)
/*Problem 3( 7–9 mins):
Parsing an JSON object and convert it to a list:
Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
Input (Object):
var object = {name: “ISRO”, age: 35, role: “Scientist”};
Output:
[[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]*/

function convertObjectToList(a){
	var res =[]
	
    for(var k in a) {
		var innerArray =[]
        if(a[k] instanceof Object) {
            convertObjectToList(a[k]);
        } else {
			innerArray.push(k)
           innerArray.push(a[k]);
		   res.push(innerArray)
        };
    }
	console.log(res)
	
}
console.log("Parsing an JSON object and convert it to a list:")
convertObjectToList(object)
/*
Problem 4( 5 mins):
Parsing a list and transform the first and last elements of it:
Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.
Input (Array):
var array = [“GUVI”, “I”, “am”, “Geek”];
Output:
var object = {
GUVI : “Geek”
}*/
var array = ["GUVI", "I", "am", "Geek"];
console.log(array)
console.log("transformFirstAndLast()")
function transformFirstAndLast(a){
	var firstElement = a[0]
	
	var lastElement = a[a.length-1]
	
	var object = {
		[firstElement] : lastElement
		
	}
	console.log(object)
	
	
}
transformFirstAndLast(array)
/*Problem 5 ( 7 -9 mins):
Parsing a list of lists and convert into a JSON object:
Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Input (Array):
var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
Output:
var object = {
make : “Ford”
model : “Mustang”,
year : 1964
}*/
var array1 = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

console.log(array1)
console.log("Parsing a list of lists and convert into a JSON object:")
function fromListToObject(a){
	var ob ={}
	
for(var i=0;i<a.length;i++)
{
	var key = a[i][0]
	
	var value = a[i][1]
	ob[key] = value
}
console.log(ob)
}
fromListToObject(array1)
/*Problem 6 (10 mins):
Parsing a list of lists and convert into a JSON object:
Write a function called “transformGeekData” that transforms some set of data from one format to another.
Input (Array):
var array = [[[“firstName”, “Vasanth”], [“lastName”, “Raja”], [“age”, 24], [“role”, “JSWizard”]], [[“firstName”, “Sri”], [“lastName”, “Devi”], [“age”, 28], [“role”, “Coder”]]];
Output:
[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]*/
var array2 = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

console.log(array2)
console.log("transformGeekData()")
function transformGeekData(a){
	for(var k =0; k<a.length;k++)
	{
		var ob ={}
	
		for(var i=0;i<a[k].length;i++)
		{
			var key = a[k][i][0]
	
			var value = a[k][i][1]
			ob[key] = value
		}
		console.log(ob)
	}
	
}
transformGeekData(array2)
/*Problem 7 (10 — 20 mins):
Parsing two JSON objects and Compare:

Write an “assertObjectsEqual” function from scratch.
Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
It is OK to use JSON.stringify().
Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.
Success Case:
Input:
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
Passed
Failure Case:
Input:var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
FAILED [my test] Expected {“foo”:6,”bar”:5}, but got {“foo”:5,”bar”:6}*/

var expected = {foo: 5, bar: 6};
var actual = {bar: 6,foo: 5}
var testName = "detects that two objects are equal"
function assertObjectsEqual(actual, expected, testName){
	var res1 =[]
	var res2 =[]
	var count = 0
    for(var k in actual) {
		 for(var j in expected) {
		   if(k!==j)
		   {
			   count++;
		   }
        }
		
    }
	if(count>0)
	{
		console.log("FAILED "+testName+" Expected "+JSON.stringify(expected)+" but got "+JSON.stringify(actual))
	}else{
		console.log(Passed)
	}
 
}
assertObjectsEqual(actual, expected, testName)

/*Problem 8(10 mins):
Parsing JSON objects and Compare:
I have a mock data of security Questions and Answers. 
You function should take the object and a pair of strings and 
should return if the quest is present and if its valid answer*/

var securityQuestions = [
 {
 question: "What was your first pet's name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"
 },
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"
 }
]
console.log(securityQuestions)
function chksecurityQuestions(securityQuestions,question,ans) {

for(var i=0;i<securityQuestions.length;i++)
{
	
	if(securityQuestions[i]["question"]==question)
	{
		if(securityQuestions[i]["expectedAnswer"]==ans)
		{
			return true
		}
	}
}
return false
 
 
}

console.log(chksecurityQuestions(securityQuestions,"What was the model year of your first car?","1985") )
/*Problem 9(20 mins):
Parsing JSON objects and Compare:
Write a function to return the list of characters below 20 age*/

var students = [
 {
 name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
 {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
 {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
 {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
 {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
 {name: "Devdas",age: 56} 
 ];
 console.log(students)
function returnMinors(arr)
{
	var res = []
	for(var i=0;i<students.length;i++)
	{
		if(students[i]["age"]<20)
		{
			res.push(students[i]["name"])
		}
	}
	return res
}
console.log(returnMinors(students));