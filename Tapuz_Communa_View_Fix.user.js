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

document.getElementsByClassName("communaPagePartners")[0].parentNode.style.display = "none";
tables[6].childNodes[1].childNodes[2].childNodes[3].style.display = "none";
