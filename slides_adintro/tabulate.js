txt=""
function tabulate(fsource, fdest){
 var name, chkd
 for(i=0; i<document.forms[fsource].length;i++){
  name = document.forms[fsource].elements[i].name
  chkd = document.forms[fsource].elements[i].checked
 if(name=="obs"){
  txt=txt+document.forms[fsource].elements[i].value+";"
  document.forms[fsource].elements[i].value++
 }
 if(name=="marq_pref" && chkd)
  txt=txt+document.forms[fsource].elements[i].value+";"
 if(name=="info_pub"){
   if(chkd){
     txt=txt+document.forms[fsource].elements[i].value+";"
    }else{
     txt=txt+"0;" 
    }
 }
 if(name=="info_presse"){
   if(chkd){
     txt=txt+document.forms[fsource].elements[i].value+";"
    }else{
     txt=txt+"0;" 
    }
 }
 if(name=="info_amis"){
   if(chkd){
     txt=txt+document.forms[fsource].elements[i].value+";"
    }else{
     txt=txt+"0;" 
    }
 }
 if(name=="info_autres"){
   if(chkd){
     txt=txt+document.forms[fsource].elements[i].value+";"
    }else{
     txt=txt+"0;" 
    }
 }
 if (name=="A_pas_cher"&&chkd)
     txt=txt+document.forms[fsource].elements[i].value+";"
 if (name=="A_qualite"&&chkd)
     txt=txt+document.forms[fsource].elements[i].value+";"
 if (name=="A_innovant"&&chkd)
     txt=txt+document.forms[fsource].elements[i].value+";"
 if (name=="A_confort"&&chkd)
     txt=txt+document.forms[fsource].elements[i].value+";"
 if (name=="B_pas_cher"&&chkd)
     txt=txt+document.forms[fsource].elements[i].value+";"
 if (name=="B_qualite"&&chkd)
     txt=txt+document.forms[fsource].elements[i].value+";"
 if (name=="B_innovant"&&chkd)
     txt=txt+document.forms[fsource].elements[i].value+";"
 if (name=="B_confort"&&chkd)
     txt=txt+document.forms[fsource].elements[i].value+";"
 if (name=="C_pas_cher"&&chkd)
     txt=txt+document.forms[fsource].elements[i].value+";"
 if (name=="C_qualite"&&chkd)
     txt=txt+document.forms[fsource].elements[i].value+";"
 if (name=="C_innovant"&&chkd)
     txt=txt+document.forms[fsource].elements[i].value+";"
 if (name=="C_confort"&&chkd)
     txt=txt+document.forms[fsource].elements[i].value+";"
 if (name=="sex"&&chkd)
     txt=txt+document.forms[fsource].elements[i].value+";"
 if (name=="age")
     txt=txt+document.forms[fsource].elements[i].value+";"
}
 txt=txt+"\n"
 //alert(txt);
 //top.table.document.forms[fsource].elements[0].value=txt
 document.forms[fdest].elements[0].value=txt
}


function writeEvent(e){
   var time = new Date();
   var hour = time.getHours();
   var minute = time.getMinutes();
   var second = time.getSeconds();
alert("time = "+hour+":"+minute+":"+second+";  target = " +  e.target + "; "
+ " type  = " +  e.type  + "; "
+ " data = " +  e.data + "; "
+ " height = " +  e.height + "; "
+ " layerX = " +  e.layerX + "; "
+ " layerY = " +  e.layerY + "; "
+ " modifiers = " +  e.modifiers + "; "
+ " pageX = " +  e.pageX + "; "
+ " pageY = " +  e.pageY + "; "
+ " screenX = " +  e.screenX + "; "
+ " screenY = " +  e.screenY + "; "
+ " which = " +  e.which + "; "
+ " width = " +  e.width + "; ")
}


function tabEvent(e){
   var time = new Date();
   var hour = time.getHours();
   var minute = time.getMinutes();
   var second = time.getSeconds();
 //top.table.document.forms[fsource].elements[0].value+="\n"+hour+":"+minute+":"+second+";" 
 document.forms[fsource].elements[0].value+="\n"+hour+":"+minute+":"+second+";" 
+  e.target + "; "
+  e.type  + "; "
+  e.data + "; "
+  e.height + "; "
+  e.layerX + "; "
+  e.layerY + "; "
+  e.modifiers + "; "
+  e.pageX + "; "
 +  e.pageY + "; "
 +  e.screenX + "; "
 +  e.screenY + "; "
 +  e.which + "; "
 +  e.width + "; "
}

function fun1(e) {
   alert("The window got an event of type: " + e.type + " targeted for " +e.target+
      " and will call routeEvent.");
   window.routeEvent(e);
   alert("The window returned from routeEvent.");
   return true;
}

function fun2(e) {
   alert ("The document got an event of type: " + e.type);
   return false;
}

function setWindowCapture() {
   alert("Winow Capture enabled")
   window.captureEvents(Event.CLICK);
}

function releaseWindowCapture() {
   window.releaseEvents(Event.CLICK);
}

function setDocCapture() {
   alert("Document Capture enabled")
   document.captureEvents(Event.CLICK);
}

function releaseDocCapture() {
   document.releaseEvents(Event.CLICK);
}

function showLocation(){
  alert("you are in frame "+this.location);
}

