var myLinkcollection = document.getElementsByTagName("p");


var myLinkCollection = document.getElementsByTagName("abc");

for (i = 0; i < myLinkCollection.length; i++) {
    if (myLinkCollection[i].className == "std_class") {
        myLinkCollection[i].onclick = function() {
            this.style.backgroundColor = "#f00";
        }
    }
}