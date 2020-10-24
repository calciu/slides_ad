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


function example_compmeanCamip(){
	    var xa =  parseInt(1+Math.random()*1000); var sa = parseInt(0.5 + 3*Math.random()*xa);
	    var xb =  parseInt(1+Math.random()*1000); var sb = parseInt(0.5 + 3*Math.random()*xb);
	var enonce = "Dans l'étude CAMIP, la dépense moyenne pour des achats par catalogue est de " + xa + " pour les femmes et de " + xb + "  pour les hommes. L'ecart type chez les femmes  est de " + sa + "  et chez les hommes " + sb + ". Quelle est la probabilité que la moyenne des femmes soit differente de celle des hommes ";
	var command ="n=table(X$V44);pnorm(abs("+xa+"-"+xb+")/sqrt("+sa+"^2/n[1]+"+sb+"^2/n[2]))";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
//	La dépense moyenne pour des achats par catalogue est de 927 pour les hommes et de 682 pour les femmes. L'ecart type chez les hommes est de 2381 et chez les femmes 2177. Quelle est la probabilité que la moyenne des femmes soit differente de celle des hommes {#0.7252632:0.001} 
//xa=927;xb=682;sa=2381;sb=2177;n=table(V44);pnorm(abs(xa-xb)/sqrt(sa*sa/n[1]+sb*sb/n[2]))

}
