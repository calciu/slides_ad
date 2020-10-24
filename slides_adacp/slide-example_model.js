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

var readCamip = 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/camip/camip.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE);'
var readAutos = 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/autos/autos.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE);'

var opencpurl = "http://marketing.iae.univ-lille1.fr";
var endpIdentityJson = "/ocpu/library/base/R/identity/json";
var endpIdentitySave = "/ocpu/library/base/R/identity/save";
//var endpIdentityJson = "/R/pub/base/identity/json";
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
	var command =""+cname[cidx-1]+"(X[," + (i+1) + "])";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_meanvarsdCamip(){
	    var i =  parseInt(21+Math.random()*9); 
		var cidx = parseInt(1+Math.random()*3);
		var clabs = new Array("Moyenne", "Variance", "Ecart type");
		var cname = new Array("mean","var", "sd")
	var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Quelle est la "+ clabs[cidx-1] + " de la variable V" + i + ". Attention aux données manquantes";
	var command ="v=X$V" + i + "; v=v[v != 0];"+cname[cidx-1]+"(v)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}
