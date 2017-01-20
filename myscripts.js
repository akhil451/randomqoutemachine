$("body").css("height",$(window).height());
var url="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

var qoute = function (json)
{

  $(".qoutes").text(json.quoteText);
    var quotetweet = 'https://twitter.com/intent/tweet?text=' + json.quoteText + ' Author ' + json.quoteAuthor+'@akhil451' ;
  if(json.qouteAuthor===" "||json.qouteAuthor===undefined){

   $(".author").text("--"+"Unknown");
  }
  $(".author").text("--"+json.quoteAuthor);
console.log(json.qoutAuthor);
  $("#tweet").attr("href", quotetweet);

}




$(document).ready(function() {
  $.getJSON(url, qoute, 'jsonp');
});

$(".next").click(function() {
  $.getJSON(url, qoute, 'jsonp');


});