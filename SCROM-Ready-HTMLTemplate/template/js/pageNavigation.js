/*<!--SCORM-Compatible Learning Module Template.

written by Ellen Meiselman � 2006, 2007

http://thedesignspace.net



    This file is part of the SCORM-Compatible Learning Module Template.



    The SCORM-Compatible Learning Module Template is free software; you can redistribute it and/or modify

    it under the terms of the GNU General Public License as published by

    the Free Software Foundation; either version 3 of the License, or

    (at your option) any later version.



    The SCORM-Compatible Learning Module Template  is distributed in the hope that it will be useful,

    but WITHOUT ANY WARRANTY; without even the implied warranty of

    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the

    GNU General Public License for more details.



    You should have received a copy of the GNU General Public License

    along with this program.  If not, see <http://www.gnu.org/licenses/>.
-->
*/


/*v 1.11 10-4-07*/

var pageNo;  //new 10-4-07
var currentPage;
var thispage = document.location.href; 
//alert('pageNavigation'+thispage);
var znPages= parent.data.PageArray.length;

function getCurrentPage(){ //matches current url to item# in pageArray and sets persistent var znThisPage to that #
 for(var i=0; i< parent.data.PageArray.length; i++) { 
    if (thispage.indexOf( parent.data.PageArray[i].url) !=-1 ) {  
  window.parent.data.znThisPage=(i+1); 
	  return parent.data.PageArray[i];
      }  }
  return {};  }


function printContactInfo(){
    document.getElementById('navbarBottom').innerHTML+=("<div class=\"navContact\" title=\"contactinfo@yourSite.com 000-000-0000\"><b>Contact Us</b><br>contactinfo@yourSite.com<br>000-000-0000<br>Fax: 000-000-0000<br>Address Line 1<br>Address Line 2<br>Generated on pageNavigation.js</div>");
 }

function printHelpBtn() {
document.getElementById('NavBar').innerHTML+=('<a href=\"#\"  onClick=\"MM_openBrWindow(\'includes/help.htm\',\'\',\'scrollbars=yes,resizable=yes,width=908,height=625\')"  id=\"helpButton\" alt=\"How to use this module\"  title=\"How to use this module\">INSTRUCTIONS<\/a>');
}
function printExpander(){
document.getElementById('NavBar').innerHTML+=('<a href=\"#\" onmousedown=\"toggleByChapter();\" id=\"expander\">expand all<\/a>');	
}
function printNavBar() {
	var urls='';
	var urlStr='';
	 getCurrentPage();
	 pageNo=window.parent.data.znThisPage;//just storing this in the myStage frame in case needed
	 printExpander();
	  if(document.getElementById('pdfForm')){
         urls = ('<input name="uPath" type="hidden" value="'+document.location.href+'" />');
	     urls+=('<input name="uUrl" type="hidden" value="');//new 8-12-07
	 //var zeropad = function (num) { return ((num < 10) ? '0' : '') + num;}
	 }
	 
	 
    for(var i=0; i< parent.data.PageArray.length; i++) {	
        var x=window.parent.data.znThisPage-1;
		
	     var currentPage=parent.data.PageArray[x];		 
         var p = parent.data.PageArray[i];
		 var j = (i+1);
		 var k = (i-1);
		 var nextItem = parent.data.PageArray[j];
		 var prevItem = parent.data.PageArray[k];
		 var level =   p.level;
	     var chapter =  p.chapter;
		 var isParent=p.isParent;
		 var branch=p.branch; 
		 var url =     p.url;
		 var buttonTitle =   p.buttonTitle;
		 var pageTitle =     p.pageTitle;
		 var expand = 'closed';
		 var current = ' ';  
	  if (i==x){ current = 'current';expand='open'; }
	  if (level==1){expand='open';}
	  else if (currentPage.level>level&&currentPage.chapter==chapter &&currentPage.branch==branch){expand='open'} 	  //if currentPage is a direct child of i
	  else if (currentPage.branch==branch && (currentPage.level==level||level==currentPage.level+1)){expand='open'} 	  //current page on same level And in same branch
	  else if (currentPage.chapter==chapter && level==2){expand='open'} 
	  else {expand='closed';}
	 document.getElementById('NavBar').innerHTML+=('<a href="' + url +  '" class= "' +current + ' ' + 'navlevel' + level +   ' chapter' + chapter + ' ' + expand  +' ' + isParent  + '">' + buttonTitle + '</a>');
	  if(!p.quiz){ urlStr += (url+ ';'); }
		} //end of loop
	
	
	
		urls +=( urlStr+'" />');//new 8-12-07
		if(document.getElementById('pdfForm')){ document.getElementById('pdfForm').innerHTML+=urls;	 }
	   	setHdrBtns();//new 8-8-07
	    printExpander();
	    printContactInfo();
	    writeNewPageNo();  
	    writePageTitle();
	    writeHeaderTitle();
	    parent.SCOBookmark(); //new 8-12-07
} //end printNavBar()


 function setHdrBtns(){//new 8-8-07
	if (window.parent.data.znThisPage==1){
     //  document.getElementById('prevBtn').src = 'images/header/up/Prev_btnBlank.jpg';
	    document.getElementById('prevBtn').src = 'images/header/hdr_Middle.jpg';
	   //document.getElementById('ftrPrevBtn').src = 'images/footer/up/footer_Prev_btnBlank.jpg';
	    document.getElementById('ftrPrevBtn').src = 'images/footer/footer_Middle.jpg';
	   document.getElementById('headerPrev').onmouseover= function(){ };
	   document.getElementById('footerPrev').onmouseover=function(){ };
	 }
	 else if (window.parent.data.znThisPage==znPages){
	 document.getElementById('nextBtn').src = 'images/header/up/Next_btnBlank.jpg';
	   document.getElementById('ftrNextBtn').src = 'images/footer/up/footer_Next_btnBlank.jpg';
	   	   document.getElementById('headerNext').onmouseover= function(){ };
	   document.getElementById('footerNext').onmouseover=function(){ };
	 } 
  } 
  

function wipeNavBar(){ document.getElementById('NavBar').innerHTML = ('');  }

function NavigateObject(){
  	this.NextPage = NextPage
  	this.PreviousPage = PreviousPage
  	this.FirstPage = FirstPage }
  
   function NextPage() {
	   if(!window.parent.data.znThisPage){window.parent.data.znThisPage=pageNo;}
    if ((window.parent.data.znThisPage + 1)<= znPages){
      window.parent.data.znThisPage++;
     document.location.href =  parent.data.PageArray[window.parent.data.znThisPage-1].url; }
	else alert('End of Module');
  }
   
   function PreviousPage() {
	if(!window.parent.data.znThisPage){window.parent.data.znThisPage=pageNo;}
    if ((window.parent.data.znThisPage) > 1 ){
     window.parent.data.znThisPage--;
     document.location.href =  parent.data.PageArray[window.parent.data.znThisPage-1].url; }
	else{alert("This is the first page of the module"); }    
    } 
  function writeNewPageNo(){
	  	var chapter =  parent.data.PageArray[window.parent.data.znThisPage-1].chapter;
		var realChapterNo = (chapter + 1);
		var   percentOfPagesBrowsed =  window.parent.data.znThisPage / znPages;
		var zWidth = Math.round(percentOfPagesBrowsed * 75);
		if (document.getElementById('pageNumberHolder')){
	document.getElementById('pageNumberHolder').innerHTML += ('<table width="75" ><tr><td align=\"left\" id="progressBarCell"><img src=\"images/progressBarBG.jpg\" width=\"' + zWidth + '\" height=\"13\" /> </td></tr><tr><td class="pageNoHolder">PAGE ' +  window.parent.data.znThisPage + ' of ' + znPages +'</td></tr></table>');											
	} 
	else { };
  }
	
   function wipePageNo(){document.getElementById('pageNumberHolder').innerHTML=(""); }
   function writePageTitle(){
		 var chapter =  parent.data.PageArray[window.parent.data.znThisPage-1].chapter;
		 var realChapterNo = (chapter + 1);
		var   percentOfPagesBrowsed =  window.parent.data.znThisPage / znPages;
		var zWidth = (percentOfPagesBrowsed * 75);
		if (document.getElementById('pageTitle')){
		document.getElementById('pageTitle').innerHTML = ('<span class="chapterTitle">' +parent.data.chapterArray[chapter].chapterTitle + '</span> ' + window.parent.data.PageArray[window.parent.data.znThisPage-1].title);
		}
		else { };
	}
	
	function writeHeaderTitle(){
	var headerTitle=parent.data.headerTitle;
    document.getElementById('title').innerHTML = headerTitle;	
	}
	
function bookmarkAlert() {
	//if this is the first page, and there is a stored bookmark
    if( ((window.parent.data.znThisPage) == 1 ) && (parent.SCOGetValue('cmi.core.lesson_location')!='')){	
	    var answer = confirm('You have a saved bookmark. Would you like to return to that location now?')
	      if (answer){
	        document.location.href=parent.SCOGetValue('cmi.core.lesson_location');
	                }
	     else{}
    }
}