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

var readCamip = 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/camip/camip.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE);'
var readCBC2000 = 'X <- read.table(url(paste("http://claree.univ-lille1.fr/Rweb/cases/CharlesBookClub/CharlesBookClub2000.txt",sep="")),header=T, sep=" ");'
var readCBC4000 = 'X <- read.table(url(paste("http://claree.univ-lille1.fr/Rweb/cases/CharlesBookClub/CharlesBookClub4000.txt",sep="")),header=T, sep=" ");'
var readCBC6000 = 'X <- read.table(url(paste("http://claree.univ-lille1.fr/Rweb/cases/CharlesBookClub/CharlesBookClub6000.txt",sep="")),header=T, sep=" ");'
var opencpurl = "http://marketing.iae.univ-lille1.fr";
var endpIdentityJson = "/ocpu/library/base/R/identity/json";
var endpIdentitySave = "/ocpu/library/base/R/identity/save";
var endpIdentityPng = "/ocpu/library/base/R/identity/png";
var endpIdentityPrint = "/ocpu/library/base/R/identity/print";

function example_example(){
	alert("A red button indicates an example demo.");
	//window.open("mc_toolkit.html")
}
function example_meanCamip(){
	    var i =  parseInt(2+Math.random()*43);
	var enonce = "Dans l'etude Camip, quelle est la moyenne de la variable V"+i;
	var command ="list(Reponse=mean(X$V" + i + "[X$V" + i + "!=0]),'Tableau de frequences'=table(X$V"+i+"))";
    setExampleRequest(enonce,"POST", "http://marketing.iae.univ-lille1.fr/ocpu/library/base/R/identity/print");
	addhttpparam("x", 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/camip/camip.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE);'+command);
     //  $("#allparameters").hide();
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}




function example_meanCamipW(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setExampleRequestW(tkw,"Quelle est la moyenne de la variable V2","POST", "http://marketing.iae.univ-lille1.fr/ocpu/library/base/R/identity/json");
	addhttpparamW(tkw,"x", 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/camip/camip.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE); mean(X$V2[X$V2>0])');
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
}

function example_missingvalCamip(){
    var i =  parseInt(2+Math.random()*43);
	var enonce = "Combien de réponses manquantes y à-t-il dans la variable V"+i;
	var command ="list(Reponse=length(X$V" + i + "[X$V" + i + "==0]),'Tableau de frequences'=table(X$V"+i+"))";
	setExampleRequest(enonce,"POST", "http://marketing.iae.univ-lille1.fr/ocpu/library/base/R/identity/print");
	addhttpparam("x", 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/camip/camip.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE);'+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_missingvalCamipW(){
    var i =  parseInt(2+Math.random()*43);
	var enonce = "Combien de réponses manquantes y à-t-il dans la variable V"+i;
	var command ="length(X$V" + i + "[X$V" + i + "==0])";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setExampleRequestW(tkw,enonce,"POST", "http://marketing.iae.univ-lille1.fr/ocpu/library/base/R/identity/json");
	addhttpparamW(tkw,"x", 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/camip/camip.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE);'+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
}

 

function example_diffmeanmissingCamip(){
    var i =  parseInt(20+Math.random()*24);
	var enonce = "Dans l'etude Camip, de combien baisse la moyenne a cause des réponses manquantes dans la variable V"+i;
	var command ="list(Reponse=mean(X$V" + i + "[X$V" + i + "!=0])-mean(X$V"+i+"), 'Tableau de frequences'=table(X$V"+i+"))";
	setExampleRequest(enonce,"POST", "http://marketing.iae.univ-lille1.fr/ocpu/library/base/R/identity/print");
	addhttpparam("x", 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/camip/camip.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE); '+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}




function example_diffmeanmissingCamipW(){
    var i =  parseInt(20+Math.random()*24);
	var enonce = "De combien baisse la moyenne a cause des réponses manquantes dans la variable V"+i;
	var command ="mean(X$V" + i + "[X$V" + i + "!=0])-mean(X$V"+i+")";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setExampleRequestW(tkw,enonce,"POST", "http://marketing.iae.univ-lille1.fr/ocpu/library/base/R/identity/json");
	addhttpparamW(tkw,"x", 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/camip/camip.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE); '+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
}

function example_tableCamip(){
    var i =  parseInt(2+Math.random()*43); i=(i==41 | i==42)?2:i;
        var enonce = "Dressez le tableau des effectifs et fréquences de la variable V"+i;
        var command ='tb=table(X[,'+i+'], exclude=0);dft=data.frame(tb);names(dft)=c("Valeurs","Frequence");dft';

//'X=X[,-1];attach(X);v="V'+i+'";tb=table(eval(as.name(v)), exclude=0);detach(X);dft=data.frame(tb);names(dft)=c("Valeurs","Frequence");dft';
        setExampleRequest(enonce,"POST", opencpurl+endpIdentityPrint);
        addhttpparam("x", readCamip+command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
}

function example_tableCamip2(){
    var i =  parseInt(2+Math.random()*43); i=(i==41 | i==42)?2:i;
        var enonce = "Dressez le tableau des effectifs et fréquences de la variable V"+i;
        var command ='tb=table(X[,'+i+'], exclude=0);dft=data.frame(Valeurs=c(names(tb),"Total"),Frequence=c(as.numeric(tb),sum(tb)),Freq.Rel=c(round(as.numeric(tb/sum(tb)),2),1));dft';
// X=X[,-1];attach(X);v="V'+i+'";tb=table(eval(as.name(v)), exclude=0);detach(X);dft=data.frame(Valeurs=c(names(tb),"Total"),Frequence=c(as.numeric(tb),sum(tb)),Freq.Rel=c(round(as.numeric(tb/sum(tb)),2),1));dft';
        setExampleRequest(enonce,"POST", opencpurl+endpIdentityPrint);
        addhttpparam("x", readCamip+command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
}

function example_tableCBC(){
    var file =  parseInt(1+Math.random()*3); var readCBC = eval("readCBC"+2000*file); vn = Array(5,6,18)[parseInt(Math.random()*3)];
        var enonce = "Dressez le tableau des effectifs et fréquences de la variable "+vn+ " du fichier CharlesBookClub" +(file*2000)+".txt";
        var command ='tb=table(X[,'+vn+']);dft=data.frame(tb,cumsum(tb))[,-1];names(dft)=c("Frequence","Frq.Cum");dft';
        setExampleRequest(enonce,"POST", opencpurl+endpIdentityPrint);
        addhttpparam("x", readCBC+command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
}

function example_plotTableCBC(){
        if (!document.funhashkey)
                document.funhashkey = gethashkey2();
    if(document.funhashkey){
          setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
          $("#submitform").click();
          $("#outputframe").focus();
        }else{
    var file =  parseInt(1+Math.random()*3); var readCBC = eval("readCBC"+2000*file); var vn = Array(5,6,18)[parseInt(Math.random()*3)];
        var enonce = "Faites un plot de la distribution et répartition des fréquences de la variable "+vn+ " du fichier CharlesBookClub" +(file*2000)+".txt";
        var command ='tb=table(X[,'+vn+']);bp=barplot(tb,ylim = c(0, sum(tb)), main=paste("Distribution et Repartition de Frequence de",names(X)['+vn+']));lines(bp,cumsum(tb),pch=19)';
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
        addhttpparam("x",readCBC + command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }
}



function example_exampleCamip(){
	i =  parseInt(1+Math.random()*43);
	alert(vl[i]);
}
