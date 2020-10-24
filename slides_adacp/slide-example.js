// JavaScript Document
function variableDefined (name) {
    return typeof this[name] !== 'undefined';
}

$("button[data-example]")
	.addClass("btn btn-small btn-danger examplebutton")
	.prepend('<i class="icon-white icon-play"></i>  ')
	.click ( function() {
		var example = $(this).attr("data-example");
		var funname = "example_" + example;
		if(variableDefined(funname)){
			cleanAllParams();
			eval(funname + "()");
		} else {
			alert("Function '" + funname + "' not found!");
		}
	});

$("button[data-example2]")
	.addClass("btn btn-small btn-danger examplebutton")
	.prepend('<i class="icon-white icon-play"></i>  ')
	.click ( function() {
		var example = $(this).attr("data-example2");
		var funname = "example_" + example;
	    var fargs = $(this).attr("args");
		if(variableDefined(funname)){
			cleanAllParams();
			eval(funname + "(ec  = "+fargs+"())");
		} else {
			alert("Function '" + funname + "' not found!");
		}
	});


$("a[data-example]")
.click ( function() {
		var example = $(this).attr("data-example");
		var funname = "example_" + example;
		if(variableDefined(funname)){
			cleanAllParams();
			eval(funname + "()");
		} else {
			alert("Function '" + funname + "' not found!");
		}
	});


function gethashkey(type){
    var hashkey;
	try {
    	saveobject = jQuery.parseJSON($("#outputpre").text());
    	if(type == "undefined" || !type || type=="plot") {
    		hashkey = saveobject.graphs[0];
    	} else if(type=="object"){
    		hashkey = saveobject.object;
    	} else if(type=="file"){
    		var obj = saveobject.files;
    		for (var i in obj) {
    		    if (obj.hasOwnProperty(i) && typeof(i) !== 'function') {
    		    	hashkey = obj[i];
    		        break;
    		    }
    		}    		
    	} else return false;
    } catch (e) {
    	alert("Please first run a call with the /save output to generate some object/graphs/files.");
    	return false;
    }	
	if (hashkey == undefined){
		alert("Please first run a call with the /save output to generate some object/graphs/files.");
		return false;
	}    
	return hashkey;
}

function gethashkeyW(tkwindow,type){
    var hashkey;
	try {
    	saveobject = jQuery.parseJSON($("#outputpre",tkwindow.document).text());
    	if(type == "undefined" || !type || type=="plot") {
    		hashkey = saveobject.graphs[0];
    	} else if(type=="object"){
    		hashkey = saveobject.object;
    	} else if(type=="file"){
    		var obj = saveobject.files;
    		for (var i in obj) {
    		    if (obj.hasOwnProperty(i) && typeof(i) !== 'function') {
    		    	hashkey = obj[i];
    		        break;
    		    }
    		}    		
    	} else return false;
    } catch (e) {
    	alert("Please first run a call with the /save output to generate some object/graphs/files.");
    	return false;
    }	
	if (hashkey == undefined){
		alert("Please first run a call with the /save output to generate some object/graphs/files.");
		return false;
	}    
	return hashkey;
}

// my modif
function gethashkey2() {
	var hashkey;
	try {
		hashkey = $("#outputpre").text().substr(10, 11);
	} catch (e) {
		//alert("Please click again after some object/graphs/files are generated !");
		return false;
	}
   if (hashkey.substr(0,2) != "x0") { //hashkey.text().substr(9,3) != "/x0"// hashkey.length != 9
		// alert("Please click again after some object/graphs/files are generated !");
		return false;
	}
	return hashkey;
}

function gethashkey2W(tkwindow) {
	var hashkey;
	try {
		hashkey = $("#outputpre", tkwindow.document).text().substr(10, 11);
		//alert(hashkey);
	} catch (e) {
		// alert("Please click again after some object/graphs/files are generated !");
		return false;
	}
   if (hashkey.substr(0,2) != "x0") { //hashkey.text().substr(9,3) != "/x0"// hashkey.length != 9
		// alert("Please click again after some object/graphs/files are generated !");
		//alert(hashkey);
		return false;
	}
	return hashkey;
}


function gethashkey2iFrame() {
	var hashkey;
	try {
		hashkey = $("pre",frames[0]).text().substr(10, 11);
	} catch (e) {
		// alert("Please first run to generate some object/graphs/files.");
		return false;
	}
   if (hashkey.length != 11) {
		//alert("Please first run to generate some object/graphs/files.");
		return false;
	}
	return hashkey;
}
// end my modif



var readCamip = 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/camip/camip.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE);'
var readAutos = 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/autos/autos.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE);'

var opencpurl = "http://marketing.iae.univ-lille1.fr";
var endpIdentityJson = "/ocpu/library/base/R/identity/json";
var endpIdentityPrint = "/ocpu/library/base/R/identity/print";
var endpIdentitySave = "/ocpu/library/base/R/identity/save";
var endpIdentityPng = "/ocpu/library/base/R/identity/png";

//var endpIdentityPrint = "/R/pub/base/identity/json";
//var endpIdentitySave = "/R/pub/base/identity/save";

function example_example(){
	alert("A red button indicates an example demo.");
	//window.open("mc_toolkit.html")
}

function example_meanvarsdAutos(){
	    var i =  parseInt(1+Math.random()*6); 
		var cidx = parseInt(1+Math.random()*3);
		var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
		var clabs = new Array("Moyenne", "Variance", "Ecart type");
		var cname = new Array("mean","var", "sd")
	var enonce = "Dans l'étude sur les Voitures, quelle est la "+ clabs[cidx-1] + " de la variable " + varlabs[i-1];
	var command ='X=X[,-1];rownames=c("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");list(Reponse='+cname[cidx-1]+'(X[,' + (i+1) + ']), "Donnees brutes"=X)';
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_meanvarsdAutosW(){
	    var i =  parseInt(1+Math.random()*6); 
		var cidx = parseInt(1+Math.random()*3);
		var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
		var clabs = new Array("Moyenne", "Variance", "Ecart type");
		var cname = new Array("mean","var", "sd")
	var enonce = "Dans l'étude sur les Voitures, quelle est la "+ clabs[cidx-1] + " de la variable " + varlabs[i-1];
	var command =""+cname[cidx-1]+"(X[," + (i+1) + "])";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}


function dbrutesAutos(){
		var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
	var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
       var enonce = "Effectue un plot pour l'etude sur les Voitures qui croise la variable "+varlabs[i-1]+" à la variable "+varlabs[j-1]+ " sur les données brutes";
		var prepare ="X=X[,-1];";
		var what = "X[,c(" + i +","+j+")]";
		return Array(readAutos, enonce, prepare, what);
}


function example_print(ec){
	//var ec=dbrutesAutos();
    setExampleRequest(ec[1],"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", ec[0]+ec[2]+ec[3]);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();	
}


function example_printW(ec){
	//var ec=dbrutesAutos();
		var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
    setExampleRequestW(tkw, ec[1],"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", ec[0]+ec[2]+ec[3]);
	$("#submitajax",tkw.document).click();	
	$("#ajaxoutput",tkw.document).focus();	
	});
}

/*
function example_printAutos(ec){
	//var ec=dbrutesAutos();
    setExampleRequest(ec[1],"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", ec[0]+ec[2]+ec[3]);
	$("#submitajax",tkw.document).click();	
	$("#ajaxoutput",tkw.document).focus();	
}

function example_printAutosW(ec){
	//var ec=dbrutesAutos();
		var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
    setExampleRequestW(tkw, ec[0],"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+ec[1]+ec[2]);
	$("#submitajax",tkw.document).click();	
	$("#ajaxoutput",tkw.document).focus();	
	});
}
*/

//plotdbrutesAutos
// plots 
function example_plot(ec){	
	if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
    setExampleRequest(ec[1],"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", ec[0]+ec[2]+"plot("+ec[3]+")");
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}
}

/*
function example_plotFox(ec){	
    setExampleRequest(ec[1],"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", ec[0]+ec[2]+"plot("+ec[3]+")");
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
   alert("Click on Popup for plot");
	document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	  $("#outputframe").show();
	 // $("#ajaxoutput").focus();
	}
}
*/


// works ok in firefox , partially with other browsers
function example_plotW(ec){
	var tkw=window.open("mc_explorer.html");
 $(tkw).load(function(){
	     setExampleRequestW(tkw,ec[1],"POST", opencpurl + endpIdentityPng);
	addhttpparamW(tkw,"x", ec[0]+ec[2]+"plot("+ec[3]+")");
	$("#submitajax",tkw.document).click();	
	// alert("Please click again to plot !")
	$("#outputframe",tkw.document).focus();
	if (!tkw.document.funhashkey){
		tkw.document.funhashkey = gethashkey2W(tkw);
	}
    if(tkw.document.funhashkey){
     setRequestW(tkw,"GET", opencpurl + "/ocpu/tmp/"+tkw.document.funhashkey+"/graphics/1");
	  $("#submitform", tkw.document).click();	
	  $("#outputframe", tkw.document).focus();
	}		
});
}


function example_meanvarsdCamip(){
	    var i =  parseInt(1+Math.random()*9); 
		var cidx = parseInt(1+Math.random()*3);
		var clabs = new Array("Moyenne", "Variance", "Ecart type");
		var cname = new Array("mean","var", "sd")
	var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la "+ clabs[cidx-1] + " de la variable V" + (20+i) + ". Attention aux données manquantes";
	var command ="v=X[21:29];v[v==0]=NA; v=na.omit(v);list(Reponse="+cname[cidx-1]+"(v[," + i + "]), 'Donnees brutes'=v)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_meanvarsdCamipW(){
	    var i =  parseInt(21+Math.random()*9); 
		var cidx = parseInt(1+Math.random()*3);
		var clabs = new Array("Moyenne", "Variance", "Ecart type");
		var cname = new Array("mean","var", "sd")
	var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la "+ clabs[cidx-1] + " de la variable V" + i + ". Attention aux données manquantes";
	var command ="v=X$V" + i + "; v=v[v != 0];"+cname[cidx-1]+"(v)";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}


function dbrutesCamip(){
		var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); if(i==j) { if(j<9) j++; else j--; };
		var enonce = "Effectue un plot pour l'etude CAMIPqui croise la variable V"+(20+i)+" avec la variable V"+ (20+j)+ " sur les données brutes";
		var prepare ="X=X[,21:29];";
		var what = "X[,c(" + i +","+j+")]";
		return Array(readCamip, enonce, prepare, what);
}


function example_scaleAutos(){
	var i =  parseInt(1+Math.random()*10); 	    var j =  parseInt(1+Math.random()*6); 
	var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
	var obslabs = new Array("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");
    var enonce = "Dans l'étude sur les Voitures, quelle est la valeur centrée de "+obslabs[i-1]+" sur la variable " + varlabs[j-1];
	var command ='M=scale(X, scale=FALSE);rownames(M)=c("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");list(Reponse=M['+i+',' + (j+1) + '], "Donnees centrees"=M);';
  
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_scaleAutosW(){
	var i =  parseInt(1+Math.random()*10); 	    var j =  parseInt(1+Math.random()*6); 
	var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
	var obslabs = new Array("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");
    var enonce = "Dans l'étude sur les Voitures, quelle est la valeur centrée de "+obslabs[i-1]+" sur la variable " + varlabs[j-1];
	var command ="scale(X, scale=FALSE)["+i+"," + (j+1) + "]";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
	}

function example_plotdbrutesAutos(){
		if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
 var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
	var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
	 var enonce = "Effectue un plot pour l'etude sur les Voitures qui croise la variable "+varlabs[i-1]+" à la variable "+ varlabs[j-1]+ " sur les données brutes";
 var command='X=X[,-1];i='+i+';j='+j+';plot(X[,c(i,j)]);lbls=c("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");text( X[,c('+i+','+j+')],lbls)';
        setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	} 
      }
function example_plotdcentresAutos(){
		if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
 var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
	var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
	 var enonce = "Effectue un plot pour l'etude sur les Voitures qui croise la variable "+varlabs[i-1]+" à la variable "+varlabs[j-1]+ " sur les données centrées";
 var command='X=X[,-1];X=scale(X, scale=FALSE);i='+i+';j='+j+';plot(X[,c(i,j)]);lbls=c("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");text( X[,c('+i+','+j+')],lbls);lines(c(0,0), c(min(X[,j]),max(X[,j])),lty=3);lines(c(min(X[,i]),max(X[,i])),c(0,0),lty=3);'
   setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	} 
      }
function example_plotdreduitesAutos(){
		if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
 var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
	var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
	 var enonce = "Effectue un plot pour l'etude sur les Voitures qui croise la variable "+varlabs[i-1]+" à la variable "+ varlabs[j-1]+ " sur les données centrées et réduites";
 var command='X=X[,-1];n=nrow(X); X=scale(X)*sqrt(n/(n-1));i='+i+';j='+j+';plot(X[,c(i,j)]);lbls=c("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");text( X[,c('+i+','+j+')],lbls);lines(c(0,0), c(min(X[,j]),max(X[,j])),lty=3);lines(c(min(X[,i]),max(X[,i])),c(0,0),lty=3);'
   setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	} 
      }


function example_plotcontribAutos(){
		if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
		var i =  parseInt(1+Math.random()*6);
		var enonce = "Effectue un plot pour l'etude sur les Voitures qui presente les contibutions des variables à l'axe "+i;
		var command ="X=X[,-1];.pc=princomp(X);pie(.pc$loading[,"+i+"]^2, names(X))";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}
}


function dcentresAutos(){
		var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
	var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
			var enonce = "Effectue un plot pour l'etude sur les Voitures qui croise la variable "+varlabs[i-1]+" à la variable "+ varlabs[j-1]+ " sur les données centrées";
		var prepare ="X=X[,-1];X=scale(X, scale=FALSE);";
		var what = "X[,c(" + i +","+j+")]";
        return( new Array(readAutos, enonce, prepare, what));
}


function example_scaleCamip(){
	    var j =  parseInt(1+Math.random()*9);  var i =  parseInt(1+Math.random()*20); 
        var enonce = "Dans l'étude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la valeur centrée du repondant "+i+" sur la variable V"+(20+j)+". Attention aux données manquantes";
	var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v);M=scale(v, scale=FALSE);list(Reponse=M["+i+","+j+"], 'Donees centrees'=M)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_scaleCamipW(){
	    var j =  parseInt(1+Math.random()*9);  var i =  parseInt(1+Math.random()*20); 
        var enonce = "Dans l'étude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la valeur centrée du repondant "+i+" sur la variable V"+(20+j)+". Attention aux données manquantes";
	var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v);scale(v, scale=FALSE)["+i+","+j+"]";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}

//plotdcentresCamip
function dcentresCamip(){
		var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); if(i==j) { if(j<9) j++; else j--; };
		var enonce = "Effectue un plot pour l'etude CAMIPqui croise la variable V"+(20+i)+" avec la variable V"+ (20+j)+ " sur les données centrées";
		var prepare ="X=X[,21:29];X=scale(X, scale=FALSE);";
		var what = "X[,c(" + i +","+j+")]";
		return Array(readCamip, enonce, prepare, what);
}


function example_scale2Autos(){
	var i =  parseInt(1+Math.random()*10); 	    var j =  parseInt(1+Math.random()*6); 
	var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
	var obslabs = new Array("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");
    var enonce = "Dans l'étude sur les Voitures, quelle est la valeur centrée et réduite de "+obslabs[i-1]+" sur la variable " + varlabs[j-1];
	var command ='M=scale(X[,-1])*sqrt(n/(n-1));rownames(M)=c("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");list(Reponse=M['+i+',' + (j+1) + '], "Donnees centrees"=M);';
	var command ="n=nrow(X);scale(X)["+i+"," + (j+1) + "]*sqrt(n/(n-1))";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_scale2AutosW(){
	var i =  parseInt(1+Math.random()*10); 	    var j =  parseInt(1+Math.random()*6); 
	var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
	var obslabs = new Array("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");
    var enonce = "Dans l'étude sur les Voitures, quelle est la valeur centrée et réduite de "+obslabs[i-1]+" sur la variable " + varlabs[j-1];
	var command ="n=nrow(X);scale(X)["+i+"," + (j+1) + "]*sqrt(n/(n-1))";
	var tkw=window.open("mc_explorer.html");
    $(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}

function dreduitesAutos(){
		var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
	var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
			var enonce = "Effectue un plot pour l'etude sur les Voitures qui croise la variable "+varlabs[i-1]+" à la variable "+ varlabs[j-1]+ " sur les données centrées et réduites";
		var prepare ="X=X[,-1];n=nrow(X); X=scale(X)*sqrt(n/(n-1));";
		var what = " X[,c(" + i +","+j+")]";
		return Array(readAutos, enonce, prepare, what);

}



function example_scale2Camip(){
	    var j =  parseInt(1+Math.random()*9);  var i =  parseInt(1+Math.random()*20); 
        var enonce = "Dans l'étude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la valeur centrée et réduite du repondant "+i+" sur la variable V"+(20+j)+". Attention aux données manquantes";
	var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v);n=nrow(v);X=scale(v)*sqrt(n/(n-1)); list(Reponse=X["+i+","+j+"], 'Donees centrees et reduites'=X)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


	
	function example_scale2CamipW(){
	    var j =  parseInt(1+Math.random()*9);  var i =  parseInt(1+Math.random()*20); 
        var enonce = "Dans l'étude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la valeur centrée et réduite du repondant "+i+" sur la variable V"+(20+j)+". Attention aux données manquantes";
	var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v);n=nrow(v);scale(v)["+i+","+j+"]*sqrt(n/(n-1))";
	var tkw=window.open("mc_explorer.html");
 $(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}

	
function dreduitesCamip(){
		var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); if(i==j) { if(j<9) j++; else j--; };
		var enonce = "Effectue un plot pour l'etude CAMIP qui croise la variable V"+(20+i)+" à la variable V"+ (20+j)+ " sur les données centrées et réduites";
		var prepare ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v);n=nrow(v); v= scale(v)*sqrt(n/(n-1));"; 
		var what = "v[,c("+i+","+j+")]";
		return Array(readCamip, enonce, prepare, what);	
}


function example_varAutos(){
var i =  parseInt(1+Math.random()*6); 
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'étude sur les Voitures, quelle est la variance de la variable " + varlabs[i-1];
	var command ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n;list(Reponse=diag(V)["+i+"], 'Matrice de variances-covariances'=V)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_varAutosW(){
var i =  parseInt(1+Math.random()*6); 
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'étude sur les Voitures, quelle est la variance de la variable " + varlabs[i-1];
	var command ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n;diag(V)["+i+"]";
	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}


function example_varCamip(){
var i =  parseInt(1+Math.random()*9); 
  var enonce = "Dans l'étude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la variance de la variable V"+(20+i)+". Attention aux données manquantes";
 var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;list(Reponse=diag(V)["+i+"], 'Matrice de variances-covariances'=V)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_varCamipW(){
var i =  parseInt(1+Math.random()*9); 
  var enonce = "Dans l'étude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la variance de la variable V"+(20+i)+". Attention aux données manquantes";
 var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;diag(V)["+i+"]";
	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
	}

function example_covarAutos(){
var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'étude sur les Voitures, quelle est la covariance de la variable " + varlabs[i-1]+" avec la variable " + varlabs[j-1];
	var command ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n;V["+i+","+j+"]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_covarAutosW(){
var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'étude sur les Voitures, quelle est la covariance de la variable " + varlabs[i-1]+" avec la variable " + varlabs[j-1];
	var command ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n;V["+i+","+j+"]";
	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});

}

function varcovarAutos(){
			var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
	var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 	var enonce = "Effectue un plot pour l'etude sur les Voitures qui croise les variances et covariances des variables "+varlabs[i-1]+" et "+ varlabs[j-1]+ " ";
		var prepare ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n;x=c(-1,1,-1,1);dim(x)=c(2,2);colnames(x)=colnames(M)[c("+i+","+j+")];";
	var what = "V[,c("+i+","+j+")]";
	return Array(readAutos, enonce, prepare, what);
}

function example_biplot(ec){
		if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
    setExampleRequest(ec[1],"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", ec[0]+ec[2]+"biplot(x,"+ec[3]+")");
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}
}

/*
function example_biplotFox(ec){	
    setExampleRequest(ec[1],"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", ec[0]+ec[2]+"biplot(x,"+ec[3]+")");
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
   alert("Click on Popup for plot");
	document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}
}
*/

function example_biplotW(ec){
		var tkw=window.open("mc_explorer.html");
 $(tkw).load(function(){
	     setExampleRequestW(tkw,ec[1],"POST", opencpurl + endpIdentityPng);
	addhttpparamW(tkw,"x", ec[0]+ec[2]+"biplot(x,"+ec[3]+")");
    $("#submitajax",tkw.document).click();	
	// alert("Please click again to plot !")
	$("#outputframe",tkw.document).focus();
	if (!tkw.document.funhashkey)
		tkw.document.funhashkey = gethashkey2W(tkw);
    if(tkw.document.funhashkey){
      setRequestW(tkw,"GET", opencpurl + "/ocpu/tmp/"+tkw.document.funhashkey+"/graphics/1");
	  $("#submitform", tkw.document).click();	
	  $("#outputframe", tkw.document).focus();
	}		
});
}


function example_biplot2(ec){
		if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
    setExampleRequest(ec[1],"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", ec[0]+ec[2]+"biplot("+ec[3]+")");
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}
}

/*
function example_biplot2Fox(ec){	
    setExampleRequest(ec[1],"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", ec[0]+ec[2]+"biplot("+ec[3]+")");
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
   alert("Click for plot");
	document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}
}
*/

function example_biplot2W(ec){
		var tkw=window.open("mc_explorer.html");
 $(tkw).load(function(){
	     setExampleRequestW(tkw,ec[1],"POST", opencpurl + endpIdentityPng);
	addhttpparamW(tkw,"x", ec[0]+ec[2]+"biplot("+ec[3]+")");
	$("#submitajax",tkw.document).click();	
	// alert("Please click again to plot !")
	$("#outputframe",tkw.document).focus();
	if (!tkw.document.funhashkey){
		tkw.document.funhashkey = gethashkey2W(tkw);
    }
    if(tkw.document.funhashkey){
      setRequestW(tkw,"GET", opencpurl + "/ocpu/tmp/"+tkw.document.funhashkey+"/graphics/1");
	  $("#submitform", tkw.document).click();	
	  $("#outputframe", tkw.document).focus();
	}		
});
}

function example_covarCamip(){
var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); if(i==j) { if(j<9) j++; else j--; };
  var enonce = "Dans l'étude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la covariance de la variable V"+(20+i)+"avec la Variable V"+(20+j)+". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;V["+i+","+j+"]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();

}


function example_covarCamipW(){
var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); if(i==j) { if(j<9) j++; else j--; };
  var enonce = "Dans l'étude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la covariance de la variable V"+(20+i)+"avec la Variable V"+(20+j)+". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;V["+i+","+j+"]";
	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}
//plotvarcovarCamip
function varcovarCamip(){
    	var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); if(i==j) { if(j<9) j++; else j--; };
		var enonce = "Effectue un plot pour l'etude CAMIP qui croise les variances et covariances des variables "+i+" et "+ j+ " ";
		var prepare ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;x=c(-1,1,-1,1);dim(x)=c(2,2);colnames(x)=colnames(M)[c("+i+","+j+")];";
		var what = "V[,c("+i+","+j+")]";
        return Array(readCamip, enonce, prepare, what);  
}


function example_vectpropAutos(){
var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); 
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'etude sur les Voitures, quel est le vecteur propre normé à l'unité de la variable " + varlabs[i-1]+" avec l'axe " + j;
 var command ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n;F1=eigen(V)$vector; list(Reponse=F1["+i+","+j+"], 'Vecteurs propres'=F1)";
     setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_vectpropAutosW(){
var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); 
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'etude sur les Voitures, quel est le vecteur propre normé à l'unité de la variable " + varlabs[i-1]+" avec l'axe " + j;
 var command ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n;eigen(V)$vector["+i+","+j+"]";
	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
	}

function vectpropAutos(){
		var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
		var enonce = "Effectue un plot pour l'etude sur les Voitures qui presente les vecteurs propres sur les axes "+i+" et "+ j+ " ";
		var prepare ="X=X[,-1];.pc=princomp(X);x=c(-1,1,-1,1);dim(x)=c(2,2);colnames(x)=c('axe"+i+"','axe"+j+"');";
		var what = ".pc$loading[,c("+i+","+j+")]";
		return Array(readAutos, enonce, prepare, what);
}

function example_vectpropCamip(){
var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); 
  var enonce = "Dans l'étude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quel est le vecteur propre normé à l'unite de la variable V"+(20+i)+"avec l'Axe"+j+". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;F1=eigen(V)$vector; list(Reponse=F1["+i+","+j+"], 'Vecteurs propres'=F1)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_vectpropCamipW(){
var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); 
  var enonce = "Dans l'étude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quel est le vecteur propre normé à l'unite de la variable V"+(20+i)+"avec l'Axe"+j+". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;eigen(V)$vector["+i+","+j+"]";
	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
	}


function vectpropCamip(){
	var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); if(i==j) { if(j<9) j++; else j--; };
		var enonce = "Effectue un plot pour l'etude CAMIP qui presente les vecteurs propres sur les axes "+i+" et "+ j+ " ";
		var prepare ="X=X[,21:29];.pc=princomp(X);x=c(-1,1,-1,1);dim(x)=c(2,2);colnames(x)=c('axe"+i+"','axe"+j+"');";
		var what = ".pc$loading[,c("+i+","+j+")]";
		return Array(readCamip, enonce, prepare, what);		
}



function example_scoresAutos(){
var i =  parseInt(1+Math.random()*10); var j =  parseInt(1+Math.random()*6); 
var obslabs = new Array("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");
 var enonce = "Dans l'etude sur les Voitures, quel est le score factoriel de " + obslabs[i-1]+" sur l'axe " + j;
 var command ='X=X[,-1]; rownames(X)=c("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");.pc=princomp(X); Y=.pc$scores; list(Reponse=Y['+i+','+j+'], "Scores factoriels"=Y)';
     setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_scoresAutosW(){
var i =  parseInt(1+Math.random()*10); var j =  parseInt(1+Math.random()*6); 
var obslabs = new Array("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");
 var enonce = "Dans l'etude sur les Voitures, quel est le score factoriel de " + obslabs[i-1]+" sur l'axe " + j;
 var command ="X=X[,-1]; .pc=princomp(X); .pc$scores["+i+","+j+"]";
	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}

function scoresAutos(){
		var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
		var enonce = "Effectue un plot pour l'etude sur les Voitures qui presente les scores factoriels sur les axes "+i+" et "+ j+ " ";
		var prepare ='X=X[,-1];rownames(X)=c("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");.pc=princomp(X);';
        var what = '.pc, choice=c('+i+','+j+')';
		return Array(readAutos, enonce, prepare, what);
}

function example_scoresCamip(){
var i =  parseInt(1+Math.random()*114); var j =  parseInt(1+Math.random()*9); 
 var enonce = "Dans l'etude sur les Voitures,  quel est le score factoriel de l'individu " + i+" sur l'axe " + j;
 var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v); .pc=princomp(v); Y=.pc$scores; list(Reponse=Y["+i+","+j+"], 'Scores factoriels'=Y)";

     setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_scoresCamipW(){
var i =  parseInt(1+Math.random()*114); var j =  parseInt(1+Math.random()*9); 
 var enonce = "Dans l'etude sur les Voitures,  quel est le score factoriel de l'individu " + i+" sur l'axe " + j;
 var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v); .pc=princomp(v); .pc$scores["+i+","+j+"]";
	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}

function scoresCamip(){
		var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); if(i==j) { if(j<9) j++; else j--; };
		var enonce = "Effectue un plot pour l'etude CAMIP qui presente les scores factoriels sur les axes "+i+" et "+ j;
		var prepare ='X=X[,21:29];.pc=princomp(X);';
		var what = '.pc, choice=c('+i+','+j+')';
		return Array(readCamip, enonce, prepare, what);
}


function example_valpropAutos(){
var i =  parseInt(1+Math.random()*6); 
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'étude sur les Voitures, quelle est la valeur propre de l'axe " + i;
 var command ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n;l=eigen(V)$value; list(Reponse=l["+i+"], 'Valeurs propres'=l)";
     setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_valpropAutosW(){
var i =  parseInt(1+Math.random()*6); 
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'étude sur les Voitures, quelle est la valeur propre de l'axe " + i;
 var command ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n;eigen(V)$value["+i+"]";
 	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}

//plotvalpropAutos
function valpropAutos(){
		var i =  parseInt(1+Math.random()*6); 
		var enonce = "Effectue un plot pour l'etude sur les Voitures qui présente les valeurs propres";
		var prepare ="X=X[,-1];.pc=princomp(X);";
		var what = ".pc$sdev^2, type='l'";
		return Array(readAutos, enonce, prepare, what);
}

function valpropRAutos(){
		var i =  parseInt(1+Math.random()*6); 
		var enonce = "Effectue un plot pour l'etude sur les Voitures qui présente les valeurs propres";
		var prepare ="X=X[,-1];.pc=princomp(X, cor=T);";
		var what = ".pc$sdev^2, type='l'";
		return Array(readAutos, enonce, prepare, what);
}

function example_valpropCamip(){
var i =  parseInt(1+Math.random()*9); 
  var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la valeur propre de l'axe "+i+". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;l=eigen(V)$value; list(Reponse=l["+i+"],'Valeurs propres'=l)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_valpropCamipW(){
var i =  parseInt(1+Math.random()*9); 
  var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la valeur propre de l'axe "+i+". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;eigen(V)$value["+i+"]";
 	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});}

//plotvalpropCamip
function valpropCamip(){
		var i =  parseInt(1+Math.random()*9);
		var enonce = "Effectue un plot pour l'etude CAMIP qui présente les valeurs propres";
		var prepare ="X=X[,21:29];.pc=princomp(X);";
        var  what = ".pc$sdev^2, type='l'";
		return Array(readCamip, enonce, prepare, what);
}

function valpropRCamip(){
		var i =  parseInt(1+Math.random()*9);
		var enonce = "Effectue un plot pour l'etude CAMIP qui présente les valeurs propres";
		var prepare ="X=X[,21:29];.pc=princomp(X,cor=T);";
        var  what = ".pc$sdev^2, type='l'";
		return Array(readCamip, enonce, prepare, what);
}



function example_corAutos(){
var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'étude sur les Voitures, quelle est la corélation de la variable " +varlabs[i-1]+" avec la variable " + varlabs[j-1];
	var command ="n=nrow(X);X=scale(X[,-1])*sqrt(n/(n-1)); R = t(X) %*% X/n;list(Reponse=R["+i+","+j+"], 'Matrice des correlations'=R)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_corAutosW(){
var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'étude sur les Voitures, quelle est la corélation de la variable " +varlabs[i-1]+" avec la variable " +varlabs[j-1];
	var command ="n=nrow(X);X=scale(X[,-1])*sqrt(n/(n-1)); R = t(X) %*% X/n;R["+i+","+j+"]";
 	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
	}

//plotcorAutos
function corAutos(){
		var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 		var enonce = "Effectue un plot pour l'etude sur les Voitures et presente les corrélations de toutes les variables avec les variables "+varlabs[i-1]+" et "+ varlabs[j-1];
		var prepare = "n=nrow(X);X=scale(X[,-1])*sqrt(n/(n-1)); R = t(X) %*% X/n;x=c(-1,1,-1,1);dim(x)=c(2,2);colnames(x)=colnames(X)[c("+i+","+j+")];";
		var what = "R[,c("+i+","+j+")]";
		return Array(readAutos, enonce, prepare, what);
}


function example_corCamip(){
var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); if(i==j) { if(j<9) j++; else j--; };
  var enonce = "Dans l'étude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la corélation de la variable V"+(20+i)+"avec la Variable V"+(20+j)+". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);X=scale(v)*sqrt(n/(n-1)); R=t(X) %*% X/n;list(Reponse=R["+i+","+j+"], 'Matrice des correlations'=R)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();

}

function example_corCamipW(){
var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); if(i==j) { if(j<9) j++; else j--; };
  var enonce = "Dans l'étude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la corélation de la variable V"+(20+i)+"avec la Variable V"+(20+j)+". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);X=scale(v)*sqrt(n/(n-1)); R=t(X) %*% X/n;R["+i+","+j+"]";
 	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}


//plotcorCamip
function corCamip(){
		var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); if(i==j) { if(j<9) j++; else j--; };
		var enonce = "Effectue un plot pour l'etude CAMIPs et presente les corrélations de toutes les variables avec les variables V"+(20+i)+" et V"+ (20+j);
		var prepare ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);X=scale(v)*sqrt(n/(n-1)); R=t(X) %*% X/n;x=c(-1,1,-1,1);dim(x)=c(2,2);colnames(x)=colnames(X)[c("+i+","+j+")];";
		var what = "R[,c("+i+","+j+")]";
		return Array(readCamip, enonce, prepare, what);
}



function example_vectpropRAutos(){
var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); 
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'etude sur les Voitures, en utilisant la matrice des corélations (R), quel est le vecteur propre de la variable " + varlabs[i-1]+" avec l'axe " + j;
	var command ="n=nrow(X);X=scale(X[,-1])*sqrt(n/(n-1)); R = t(X) %*% X/n;F1=eigen(R)$vector;list(Reponse=F1["+i+","+j+"], 'Vecteurs propres'=F1)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_vectpropRAutosW(){
var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); 
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'etude sur les Voitures, en utilisant la matrice des corélations (R), quel est le vecteur propre de la variable " + varlabs[i-1]+" avec l'axe " + j;
	var command ="n=nrow(X);X=scale(X[,-1])*sqrt(n/(n-1)); R = t(X) %*% X/n;eigen(R)$vector["+i+","+j+"]";
 	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
	}

//plotvectpropRAutos
function vectpropRAutos(){
	var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
		var enonce = "Effectue un plot pour l'etude sur les Voitures qui presente les vecteurs propres (extraits de la matrice des corrélations R) sur les axes "+i+" et "+ j+ " ";
		var prepare ="X=X[,-1];.pc=princomp(X,cor=T);x=c(-1,1,-1,1);dim(x)=c(2,2);colnames(x)=colnames(X)[c("+i+","+j+")];";
		var what = ".pc$loading[,c("+i+","+j+")]";
		return Array(readAutos, enonce, prepare, what);
 }


function example_vectpropRCamip(){
var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); 
  var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. En utilisant la matrice des corélations (R), quel est le vecteur propre de la variable V"+(20+i)+"avec l'Axe"+j +". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);X=scale(v)*sqrt(n/(n-1)); R=t(X) %*% X/n;F1=eigen(R)$vector; list(Reponse=F1["+i+","+j+"],'Vecteur propre'=F1)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();

}

function example_vectpropRCamipW(){
var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); 
  var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. En utilisant la matrice des corélations (R), quel est le vecteur propre de la variable V"+(20+i)+"avec l'Axe"+j +". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);X=scale(v)*sqrt(n/(n-1)); R=t(X) %*% X/n;eigen(R)$vector["+i+","+j+"]";
  	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}

//plotbiplotRCamip
function vectpropRCamip(){
		var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); if(i==j) { if(j<9) j++; else j--; };
		var enonce = "Effectue un plot pour l'etude CAMIP qui presente les vecteurs propres (extraits de la matrice des corrélations R) sur les axes "+i+" et "+ j+ " ";
		var prepare ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); .pc=princomp(v,cor=T);x=c(-1,1,-1,1);dim(x)=c(2,2);colnames(x)=colnames(v)[c("+i+","+j+")];";
    	var what = ".pc$loading[,c("+i+","+j+")]";
		return Array(readCamip, enonce, prepare, what);
}

function example_valpropRAutos(){
var i =  parseInt(1+Math.random()*6);
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'étude sur les Voitures, en utilisant la matrice des corélations (R), quelle est la valeur propre de l'axe " + i;
	var command ="n=nrow(X);X=scale(X[,-1])*sqrt(n/(n-1)); R = t(X) %*% X/n;l=eigen(R)$value; list(Reponse=l["+i+"], 'Valeurs propres'=l)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_valpropRAutosW(){
var i =  parseInt(1+Math.random()*6);
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'étude sur les Voitures, en utilisant la matrice des corélations (R), quelle est la valeur propre de l'axe " + i;
	var command ="n=nrow(X);X=scale(X[,-1])*sqrt(n/(n-1)); R = t(X) %*% X/n;eigen(R)$value["+i+"]";
 	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
	}



function example_valpropRCamip(){
var i =  parseInt(1+Math.random()*9); 
  var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. En utilisant la matrice des corélations (R),  quelle est la valeur propre de l'Axe"+i +". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);X=scale(v)*sqrt(n/(n-1)); R=t(X) %*% X/n;l=eigen(R)$value; list(Reponse=l["+i+"], 'VAleurs propres'=l)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();

}

function example_valpropRCamipW(){
var i =  parseInt(1+Math.random()*9); 
  var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. En utilisant la matrice des corélations (R),  quelle est la valeur propre de l'Axe"+i +". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);X=scale(v)*sqrt(n/(n-1)); R=t(X) %*% X/n;eigen(R)$value["+i+"]";
 	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}


//plotvalpropRCamip
function valpropRCamip(){
		var i =  parseInt(1+Math.random()*9); 
		var enonce = "Effectue un plot pour l'etude CAMIP qui presente les valeurs propres";
		var prepare ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v);.pc=princomp(v,cor=T);";
    	var what = ".pc$sdev^2, type='l'";
		return Array(readCamip, enonce, prepare, what);
	}



function example_contribAutos(){
var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); 
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'etude sur les Voitures, quelle est la contribution de la variable " + varlabs[i-1]+" à l'axe " + j;
 var command ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n;F1 = eigen(V)$vector;  list(Reponse=(F1*F1)["+i+","+j+"], 'Contributions des variables aux axes'=F1*F1)";
     setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_contribAutosW(){
var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); 
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'etude sur les Voitures, quelle est la contribution de la variable " + varlabs[i-1]+" à l'axe " + j;
 var command ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n;F1 = eigen(V)$vector;  (F1*F1)["+i+","+j+"]";
 	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
	}


//plotcontribAutos
function example_plotcontribAutos(){
		if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
		var i =  parseInt(1+Math.random()*6);
		var enonce = "Effectue un plot pour l'etude sur les Voitures qui presente les contibutions des variables à l'axe "+i;
		var command ="X=X[,-1];.pc=princomp(X);pie(.pc$loading[,"+i+"]^2, names(X))";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}
}


function example_plotcontribAutosW(){
		var i =  parseInt(1+Math.random()*6);
		var enonce = "Effectue un plot pour l'etude sur les Voitures qui presente les contibutions des variables à l'axe "+i;
		var command ="X=X[,-1];.pc=princomp(X);pie(.pc$loading[,"+i+"]^2, names(X))";
		var tkw=window.open("mc_explorer.html");
 $(tkw).load(function(){
	     setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax",tkw.document).click();	
	// alert("Please click again to plot !")
	$("#outputframe",tkw.document).focus();
	if (!tkw.document.funhashkey){
		tkw.document.funhashkey = gethashkey2W(tkw);
		//alert(tkw.document.funhashkey);
	}
    if(tkw.document.funhashkey){
//	    if($("outputpre", tkw.document).text().length > 0){
	  //alert(tkw.document.funhashkey);
	  setRequestW(tkw,"GET", opencpurl + "/ocpu/tmp/"+tkw.document.funhashkey+"/graphics/1");
	  $("#submitform", tkw.document).click();	
	  $("#outputframe", tkw.document).focus();
	}		
});
}

function example_contribCamip(){
var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); 
  var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la contribution de la variable V"+(20+i)+" à l'Axe"+j+". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;F1=eigen(V)$vector; list(Reponse=(F1*F1)["+i+","+j+"], 'Constributions'=F1*F1)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_contribCamipW(){
var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); 
  var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la contribution de la variable V"+(20+i)+" à l'Axe"+j+". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;F1=eigen(V)$vector; (F1*F1)["+i+","+j+"]";
	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}


//plotcontribCamip
function example_plotcontribCamip(){
		if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
		var i =  parseInt(1+Math.random()*9); 
		var enonce = "Effectue un plot pour l'etude CAMIP qui presente les contibutions des variables à l'axe "+i;
		var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); .pc=princomp(v);pie(.pc$loading[,"+i+"]^2, names(v))";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}
}


function example_plotcontribCamipW(){
	var i =  parseInt(1+Math.random()*9); 
		var enonce = "Effectue un plot pour l'etude CAMIP qui presente les contibutions des variables à l'axe "+i;
		var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); .pc=princomp(v);pie(.pc$loading[,"+i+"]^2, names(v))";
		var tkw=window.open("mc_explorer.html");
 $(tkw).load(function(){
	     setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax",tkw.document).click();	
	// alert("Please click again to plot !")
	$("#outputframe",tkw.document).focus();
	if (!tkw.document.funhashkey){
		tkw.document.funhashkey = gethashkey2W(tkw);
		//alert(tkw.document.funhashkey);
	}
    if(tkw.document.funhashkey){
//	    if($("outputpre", tkw.document).text().length > 0){
	  //alert(tkw.document.funhashkey);
	  setRequestW(tkw,"GET", opencpurl + "/ocpu/tmp/"+tkw.document.funhashkey+"/graphics/1");
	  $("#submitform", tkw.document).click();	
	  $("#outputframe", tkw.document).focus();
	}		
});
}


function example_flambdaAutos(){
var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); 
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'étude sur les Voitures, quel est le vecteur propre normé à la valeur propre de la variable " + varlabs[i-1]+" avec l'axe " + j;
 var command ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n; F1=eigen(V)$vector; l=eigen(V)$value; Fl=(F1 %*% diag(sqrt(l))); list(Reponse=Fl["+i+","+j+"], 'Vecteurs prop. normes a la valeur propre'= Fl)";
     setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_flambdaAutosW(){
var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); 
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'étude sur les Voitures, quel est le vecteur propre normé à la valeur propre de la variable " + varlabs[i-1]+" avec l'axe " + j;
 var command ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n; F1=eigen(V)$vector; l=eigen(V)$value; (F1 %*% diag(sqrt(l)))["+i+","+j+"]";
	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}

//plotflambdaAutos
function flambdaAutos(){
		var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; };
		var enonce = "Effectue un plot pour l'etude sur les Voitures qui présente les vecteurs propre normés à la valeur propre sur les axes "+i+" et "+ j;
		var prepare ="X=X[,-1];.pc=princomp(X);x=c(-1,1,-1,1);dim(x)=c(2,2);colnames(x)=colnames(X)[c("+i+","+j+")];Fl = .pc$loading %*% diag(.pc$sdev);";
		var what = "Fl[,c("+i+","+j+")]";
		return Array(readAutos, enonce, prepare, what);
}

function example_flambdaCamip(){
var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); 
  var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quel est le vecteur propre normé à la valeur propre de la variable V"+(20+i)+"avec l'Axe"+j+". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;F1=eigen(V)$vector; l=eigen(V)$value; Fl=(F1 %*% diag(sqrt(l)));list(Reponse=Fl["+i+","+j+"], 'Vecteurs prop. normes a la valeur propre'= Fl)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_flambdaCamipW(){
var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); 
  var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quel est le vecteur propre normé à la valeur propre de la variable V"+(20+i)+"avec l'Axe"+j+". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;F1=eigen(V)$vector; l=eigen(V)$value; (F1 %*% diag(sqrt(l)))["+i+","+j+"]";
	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}

//plotflambdaCamip
function flambdaCamip(){
		var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*9); if(i==j) { if(j<9) j++; else j--; };
		var enonce = "Effectue un plot pour l'etude CAMIP qui présente les vecteurs propre normés à la valeur propre sur les axes "+i+" et "+ j;
		var prepare ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v);.pc=princomp(v);x=c(-1,1,-1,1);dim(x)=c(2,2);colnames(x)=colnames(v)[c("+i+","+j+")]; Fl = .pc$loading %*% diag(.pc$sdev);";
    	var what = "Fl[,c("+i+","+j+")]";
		return Array(readCamip, enonce, prepare, what);
	}

function example_rotationAutos(){
var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*2); var a =  parseInt(Math.random()*37)*10;
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'étude sur les Voitures, quel est le vecteur propre normé à la valeur propre de la variable " + varlabs[i-1]+" avec l'axe " + j+" après rotation avec un angle de "+a+"°";
 var command ="phi="+a+"/180*pi; n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n; F1=eigen(V)$vector;l=eigen(V)$value; Fl=(F1 %*% diag(sqrt(l)));rot=c(cos(phi),sin(phi),-sin(phi),cos(phi));dim(rot)=c(2,2);Flr=Fl[,1:2] %*% rot;list(Reponse=Flr["+i+","+j+"], 'Fl après rotation'=Flr, 'Fl avant rotation'=Fl[,1:2])";
     setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_rotationAutosW(){
var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*2); var a =  parseInt(Math.random()*37)*10;
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'étude sur les Voitures, quel est le vecteur propre normé à la valeur propre de la variable " + varlabs[i-1]+" avec l'axe " + j+" après rotation avec un angle de "+a+"°";
 var command ="phi="+a+"/180*pi; n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n; F1=eigen(V)$vector;l=eigen(V)$value; Fl=(F1 %*% diag(sqrt(l)));rot=c(cos(phi),sin(phi),-sin(phi),cos(phi));dim(rot)=c(2,2);(Fl[,1:2] %*% rot)["+i+","+j+"]";
	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
	}

//plotrotationAutos
function rotationAutos(){
		var i =  parseInt(1+Math.random()*6); var j =  parseInt(1+Math.random()*6); if(i==j) { if(j<6) j++; else j--; }; var a =  parseInt(Math.random()*37)*10;
		var enonce = "Effectue un plot pour l'etude sur les Voitures qui présente le vecteur propre normé à la valeur propre après rotation avec un angle de "+a+" sur les axes "+i+" et "+ j;
		var prepare ="X=X[,-1];.pc=princomp(X);phi="+a+"/180*pi;rot=c(cos(phi),sin(phi),-sin(phi),cos(phi));dim(rot)=c(2,2);x=c(-1,1,-1,1);dim(x)=c(2,2);colnames(x)=colnames(X)[c("+i+","+j+")];Fl=.pc$loading %*% diag(.pc$sdev);";
    	var what = "Fl[,c("+i+","+j+")] %*% rot";
		return Array(readAutos, enonce, prepare, what);
	}




function example_rotationCamip(){
var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*2);  var a =  parseInt(Math.random()*37)*10;
  var enonce = "Dans l'étude Camip, les variables de V21 a V29 forment une échelle qui mesure l'attitude envers l'achat par catalogue. Quel est le vecteur propre normé à la valeur propre de la variable V"+(20+i)+"avec l'Axe"+j+" après rotation avec un angle de "+a+"°. Attention aux données manquantes";
  var command ="phi="+a+"/180*pi;v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;F1=eigen(V)$vector; l=eigen(V)$value; Fl=(F1 %*% diag(sqrt(l)));rot=c(cos(phi),sin(phi),-sin(phi),cos(phi));dim(rot)=c(2,2);Flr=Fl[,1:2] %*% rot; list(Reponse=Flr["+i+","+j+"], 'Flr aaprès rotation'=Flr, 'Fl avant rotation'=Fl[,1:2])";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_rotationCamipW(){
var i =  parseInt(1+Math.random()*9); var j =  parseInt(1+Math.random()*2);  var a =  parseInt(Math.random()*37)*10;
  var enonce = "Dans l'étude Camip, les variables de V21 a V29 forment une échelle qui mesure l'attitude envers l'achat par catalogue. Quel est le vecteur propre normé à la valeur propre de la variable V"+(20+i)+"avec l'Axe"+j+" apres rotation avec un angle de "+a+"°. Attention aux données manquantes";
  var command ="phi="+a+"/180*pi;v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;F1=eigen(V)$vector; l=eigen(V)$value; Fl=(F1 %*% diag(sqrt(l)));rot=c(cos(phi),sin(phi),-sin(phi),cos(phi));dim(rot)=c(2,2);(Fl[,1:2] %*% rot)["+i+","+j+"]";
	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}


//plotrotationCamip
function rotationCamip(){
		i =  parseInt(1+Math.random()*9); j =  parseInt(1+Math.random()*9); if(i==j) { if(j<9) j++; else j--; }; a =  parseInt(Math.random()*37)*10;
		var enonce = "Effectue un plot pour l'etude CAMIP qui présente le vecteur propre normé à la valeur propre apres rotation avec un angle de "+a+" sur les axes "+i+" et "+ j;
		var prepare="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v);.pc=princomp(v);phi="+a+"/180*pi;rot=c(cos(phi),sin(phi),-sin(phi),cos(phi));dim(rot)=c(2,2);x=c(-1,1,-1,1);dim(x)=c(2,2);colnames(x)=colnames(v)[c("+i+","+j+")];Fl=.pc$loading %*% diag(.pc$sdev);";
		var what = "Fl[,c("+i+","+j+")] %*% rot";
			return Array(readCamip, enonce, prepare, what);

}


function example_comunautesAutos(){
var i =  parseInt(1+Math.random()*6); 
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'etude sur les Voitures, quelle est la valeur de la communauté de la variable " + varlabs[i-1];
 var command ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n; F1=eigen(V)$vector; l=eigen(V)$value; Fl=(F1 %*% diag(sqrt(l)));C=Fl[,1:2] %*% t(Fl[,1:2]);list(Reponse=diag(C)["+i+"],'Communautés'=C,'Variances'=V)";
     setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_comunautesAutosW(){
var i =  parseInt(1+Math.random()*6); 
var varlabs = new Array("Cylindree", "Poids/Puissance", "Longueur", "Volume du coffre", "Consommation", "Vitesse");
 var enonce = "Dans l'etude sur les Voitures, quelle est la valeur de la communauté de la variable " + varlabs[i-1];
 var command ="n=nrow(X);M=scale(X[,-1], scale=FALSE); V = t(M) %*% M/n; F1=eigen(V)$vector; l=eigen(V)$value; Fl=(F1 %*% diag(sqrt(l)));diag(Fl[,1:2] %*% t(Fl[,1:2]))["+i+"]";
 var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}

//plotcomunautesAutos
function example_plotcomunautesAutos(){
		if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
		var i =  parseInt(1+Math.random()*5);
		var enonce = "Effectue un plot pour l'étude sur les Voitures qui compare les variances aux comunautés quand on retient "+i+" axes factoriels";
		var command ="X=X[,-1];.pc=princomp(X);Fl=(.pc$loading %*% diag(.pc$sdev))[,1:"+i+"];n=nrow(X);df=data.frame(Variances=diag(var(X)*(n-1)/n), Communautes=diag(Fl %*% t(Fl)));matplot(1:6,df,type='l',ylab='Valeurs', xlab='Variables');axis(1, at=1:6, labels=names(X));legend(4,max(df), names(df),lwd=2, col=1:2)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}
}


function example_plotcomunautesAutosW(){
		var i =  parseInt(1+Math.random()*5);
		var enonce = "Effectue un plot pour l'étude sur les Voitures qui compare les variances aux comunautés quand on retient "+i+" axes factoriels";
		var command ="X=X[,-1];.pc=princomp(X);Fl=(.pc$loading %*% diag(.pc$sdev))[,1:"+i+"];n=nrow(X);df=data.frame(Variances=diag(var(X)*(n-1)/n), Contributions=diag(Fl %*% t(Fl)));matplot(1:6,df,type='l',ylab='Valeurs', xlab='Variables');axis(1, at=1:6, labels=names(X));legend(4,max(df), names(df),lwd=2, col=1:2)";
		var tkw=window.open("mc_explorer.html");
 $(tkw).load(function(){
	     setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparamW(tkw,"x", readAutos+command);
	$("#submitajax",tkw.document).click();	
	// alert("Please click again to plot !")
	$("#outputframe",tkw.document).focus();
	if (!tkw.document.funhashkey){
		tkw.document.funhashkey = gethashkey2W(tkw);
		//alert(tkw.document.funhashkey);
	}
    if(tkw.document.funhashkey){
//	    if($("outputpre", tkw.document).text().length > 0){
	  //alert(tkw.document.funhashkey);
	  setRequestW(tkw,"GET", opencpurl + "/ocpu/tmp/"+tkw.document.funhashkey+"/graphics/1");
	  $("#submitform", tkw.document).click();	
	  $("#outputframe", tkw.document).focus();
	}		
});
}



function example_comunautesCamip(){
var i =  parseInt(1+Math.random()*9);
  var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la valeur de la comunauté de la variable V"+(20+i)+". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;F1=eigen(V)$vector; l=eigen(V)$value; Fl=(F1 %*% diag(sqrt(l))); C=Fl[,1:2] %*% t(Fl[,1:2]);list(Reponse=diag(C)["+i+"],'Communautés'=C, 'Variances'=V)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_comunautesCamipW(){
var i =  parseInt(1+Math.random()*9);
  var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la valeur de la comunauté de la variable V"+(20+i)+". Attention aux données manquantes";
  var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);M=scale(v,scale=FALSE); V=t(M) %*% M/n;F1=eigen(V)$vector; l=eigen(V)$value; Fl=(F1 %*% diag(sqrt(l))); diag(Fl[,1:2] %*% t(Fl[,1:2]))["+i+"]";
 var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
    setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax", tkw.document).click();	
	$("#ajaxoutput", tkw.document).focus();
	});
}

//plotcomunautesCamip
function example_plotcomunautesCamip(){
		if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
		var i =  parseInt(1+Math.random()*8)
		var enonce = "Effectue un plot pour l'etude CAMIPs qui compare les variances aux comunautés quand on retient "+i+" axes factoriels";
		var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); .pc=princomp(v);Fl=(.pc$loading %*% diag(.pc$sdev))[,1:"+i+"];n=nrow(v);df=data.frame(Variances=diag(var(v)*(n-1)/n), Communautes=diag(Fl %*% t(Fl)));matplot(1:9,df,type='l',ylab='Valeurs', xlab='Variables');axis(1, at=1:9, labels=names(v));legend(6,max(df), names(df),lwd=2, col=1:2)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}
}


function example_plotcomunautesCamipW(){
		var i =  parseInt(1+Math.random()*8)
		var enonce = "Effectue un plot pour l'etude CAMIPs qui compare les variances aux comunautés quand on retient "+i+" axes factoriels";
		var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); .pc=princomp(v);Fl=(.pc$loading %*% diag(.pc$sdev))[,1:"+i+"];n=nrow(v);df=data.frame(Variances=diag(var(v)*(n-1)/n), Contributions=diag(Fl %*% t(Fl)));matplot(1:9,df,type='l',ylab='Valeurs', xlab='Variables');axis(1, at=1:9, labels=names(v));legend(6,max(df), names(df),lwd=2, col=1:2)";
		var tkw=window.open("mc_explorer.html");
 $(tkw).load(function(){
	     setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax",tkw.document).click();	
	//alert("Please click again to plot !")
	$("#outputframe",tkw.document).focus();
	if (!tkw.document.funhashkey){
		tkw.document.funhashkey = gethashkey2W(tkw);
		//alert(tkw.document.funhashkey);
	}
    if(tkw.document.funhashkey){
//	    if($("outputpre", tkw.document).text().length > 0){
	  //alert(tkw.document.funhashkey);
	  setRequestW(tkw,"GET", opencpurl + "/ocpu/tmp/"+tkw.document.funhashkey+"/graphics/1");
	  $("#submitform", tkw.document).click();	
	  $("#outputframe", tkw.document).focus();
	}		
});
}
