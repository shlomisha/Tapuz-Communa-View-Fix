// ==UserScript==
// @id             Tapuz_Communa_View_Fix
// @name           Tapuz Communa View Fix
// @version        1.2.0
// @namespace      shlomisha
// @author         shlomisha
// @description    Hides the left and the right panels in Tapuz cummonas, so more space is available for posts
// @include        http://www.tapuz.co.il/communa/userCommunaMsges.asp?*
// @run-at         document-end
// @updateURL      https://raw.githubusercontent.com/shlomisha/Tapuz-Communa-View-Fix/master/Tapuz_Communa_View_Fix.meta.js
// @downloadURL    https://raw.githubusercontent.com/shlomisha/Tapuz-Communa-View-Fix/master/Tapuz_Communa_View_Fix.user.js
// ==/UserScript==

var tables = document.getElementsByTagName("table");

var content = document.getElementById("contentBlock");
var surveyLink = tables[7].childNodes[1].childNodes[20].childNodes[3];
surveyLink.childNodes[1].style.color = "black";
content.innerHTML = surveyLink.innerHTML + "<br />" + content.innerHTML;

document.getElementsByClassName("communaPagePartners")[0].parentNode.style.display = "none";
tables[6].childNodes[1].childNodes[2].childNodes[3].style.display = "none";

addOnMouseOver(document.getElementsByClassName("vColor"));
addOnMouseOver(document.getElementsByClassName("rColor"));
