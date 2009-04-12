 /*v 1.1 8-4-2006  */
  //begin chapter expand toggle functions  ********
function getElementsByChapter(chapterNo) {
var classElements = new Array();
var els = document.getElementsByTagName('a'); // use "*" for all elements
var elsLen = els.length;
if (!chapterNo){
  var pattern = new RegExp("(chapter)");}
else {
	var pattern = new RegExp("(chapter"+chapterNo+")");}

var pattern2 = new RegExp("(level1)");
for (i = 0, j = 0; i < elsLen; i++) {

if  ( pattern.test(els[i].className) && !pattern2.test(els[i].className)  ){
    classElements[j] = els[i];
	//alert(els[i].className);
j++;
}
}
return classElements;
}


  function toggleByChapter(chapterNo){
   var div = getElementsByChapter(chapterNo);
  
 for(var i=0; i<div.length; i++){ 
	    if (div[i].style.visibility=='visible'){
         div[i].style.visibility = 'hidden';
		 div[i].style.display = 'none';
		      }
	        else { div[i].style.visibility = 'visible';
		           div[i].style.display = 'block';
		          
                  }  
	}

  }
 //end toggle open/closed functions*******
 
 
function getElementsByClass(node,searchClass,tag) {
var classElements = new Array();
var els = node.getElementsByTagName(tag); // use "*" for all elements
var elsLen = els.length;
var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
for (i = 0, j = 0; i < elsLen; i++) {
if ( pattern.test(els[i].className) ) {
classElements[j] = els[i];
j++;
}
}
return classElements;
}

  function toggle(selectedLayer){
  // Written By: WillyDuitt@hotmail.com || 03-22-2005 \\;
   var div = getElementsByClass(document, 'toggle', '*');
    for(var i=0; i<div.length; i++){ 
         div[i].style.visibility = 'hidden';
		 div[i].style.display = 'none';
      }  

         document.getElementById(selectedLayer).style.visibility = 'visible';
		 document.getElementById(selectedLayer).style.display = "block";

  }
  
