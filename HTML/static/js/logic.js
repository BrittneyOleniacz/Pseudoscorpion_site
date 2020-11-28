// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//Get the button
var topButton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

d3.csv("oneauthor_references.csv").then(function(citedData) {
  console.log(citedData)

  citedData.forEach(function(data) {
    // data.author1first = data.author1first;
    data.author1last = data.author1last;
    data.pubyr = +data.pubyr;
    data.reftitle = data.reftitle.toString();
  });

  console.log(citedData.reftitle)
  var cited = d3.select("#works_cited")
  var works = d3.select("ul");

  var table = cited.selectAll("ul")
    .data(citedData)
    .enter()
    .append("ol")
    .text(d => `${d.author1last}` + " " + `${d.pubyr},` + " " + `${d.reftitle}, ${d.pubtitle}, vol. ${d.pubvol}, no. ${d.pubno},` + " " +`pp. ${d.firstpage}-${d.lastpage}`)

})