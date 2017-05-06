
// The Model
var cats = [{name:'Max', image:'cat.jpg', clickings: 1},{name:'Tom', image:'cat2.jpg', clickings: 1}, {name:'Meow-Meow', image:'cat3.jpg', clickings: 1}, {name:'Tiger', image:'cat4.jpg', clickings: 1}, {name:'Kitty', image:'cat5.jpg', clickings: 1}];

//The Octopus
for (var i=0; i < cats.length; i++) {
var theCat = cats[i];
var elCat =document.createElement('li');
    
// The View 1 List of Cat Names rendered    
elCat.textContent = theCat.name;
elCat.className = 'list_name';



// The View 2 Display area created
elCat.addEventListener('click', (function(copyCat) {
	return function() {
var catPic = copyCat.image;
var catName = copyCat.name;
var catCount = copyCat.clickings;
var myCatPic = document.getElementById('cat');
myCatPic.setAttribute('src', catPic);
var billboard = document.getElementById('headname');
billboard.innerHTML = 'This is ' + catName; 
  
// Counting the clicks        
var counter = document.getElementById('count');
counter.innerHTML = '';
        
myCatPic.addEventListener('click', (function(copyCatName,copyCatCount) {	

	return function() {

var billboard = document.getElementById('headname');
billboard.innerHTML = 'This is ' + copyCatName; 
var counter = document.getElementById('count');
counter.innerHTML = copyCatName + ' has ' + copyCatCount + ' <b>Click(s)</b>';
copyCatCount++ ;
	};

})(catName,catCount));
        
	}; 
})(theCat));

    
document.getElementById("menu").appendChild(elCat);
};

