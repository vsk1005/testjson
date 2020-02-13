alert('hi');

document.write("<h1>Qualifies for driving</h1>");


var mydata = JSON.parse(data);

document.write("<div>");
for(var i=0; i<= data.length; i++){
    
    document.write("<p>" + mydata[i].name + "</p>");
    document.write("<p>" + mydata[i].age + "</p>");   
    
}
document.write("</div>");