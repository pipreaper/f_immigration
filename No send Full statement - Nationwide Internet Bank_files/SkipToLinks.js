function processSkipToLink(skipToLinkId,searchElement){var skipToLinkLi=$(skipToLinkId).closest("li");if($(searchElement).length<=0)skipToLinkLi.remove();else return skipToLinkLi;return null}function processSkipToLinkForMyOffers(){var skipToLink=$("a#skiptoNavOffers"),skipToLinkLi=skipToLink.closest("li");return $("a#skipNavMyOffers1").length>0?skipToLink.attr("href","#skipNavMyOffers1"):$("a#skipNavMyOffers2").length>0?skipToLink.attr("href","#skipNavMyOffers2"):$("a#skipNavMyOffers3").length>0?skipToLink.attr("href","#skipNavMyOffers3"):(skipToLinkLi.remove(),skipToLinkLi=null),skipToLinkLi}$(document).on("click","#skiptoNavSearch",function(e){e.preventDefault();$("#txtSrch").focus().animate()});$(function(){var firstLi,lastLi,skipToLinkLi;firstLi=processSkipToLink("a#skiptoNavPrimaryNav","a#skipNavPrimaryNav");lastLi=firstLi;skipToLinkLi=processSkipToLink("a#skiptoNavSecondaryNav","div.secondary-nav");skipToLinkLi!=null&&(firstLi=firstLi===null?skipToLinkLi:firstLi,lastLi=skipToLinkLi);skipToLinkLi=processSkipToLink("a#skiptoNavMainContent","a#skipNavMainContent");skipToLinkLi!=null&&(firstLi=firstLi===null?skipToLinkLi:firstLi,lastLi=skipToLinkLi);skipToLinkLi=processSkipToLink("a#skiptoNavSearch","div#search");skipToLinkLi!=null&&(firstLi=firstLi===null?skipToLinkLi:firstLi,lastLi=skipToLinkLi);skipToLinkLi=processSkipToLinkForMyOffers();skipToLinkLi!=null&&(firstLi=firstLi===null?skipToLinkLi:firstLi,lastLi=skipToLinkLi);skipToLinkLi=processSkipToLink("a#skiptoNavFooter","a#skipNavFooter");skipToLinkLi!=null&&(firstLi=firstLi===null?skipToLinkLi:firstLi,lastLi=skipToLinkLi);firstLi!=null&&firstLi.addClass("first");lastLi!=null&&lastLi.addClass("last")})