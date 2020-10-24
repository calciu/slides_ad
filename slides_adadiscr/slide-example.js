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

var readCAMIP = 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/camip/camip.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE);'
var readAutos = 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/autos/autos.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE);'
var readCBC2000 = 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/CharlesBookClub/CharlesBookClub2000.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE);'
var readSalesC = 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/salescontest/salescontest.csv"));'

var opencpurl = "http://marketing.iae.univ-lille1.fr";
var endpIdentityJson = "/ocpu/library/base/R/identity/json";
var endpIdentitySave = "/ocpu/library/base/R/identity/save";
//var endpIdentityJson = "/R/pub/base/identity/json";
//var endpIdentitySave = "/R/pub/base/identity/save";
var enonceCAMIP = "Dans l'etude CAMIP on essaye de trouver l'axe discriminant formé de la combinaison linéaire des variables V41,V42 et V44 qui explique au mieux le regroupement des consommateurs par rapport à la disponibilité d'acheter par catalogue (variable V3; 1=Pas disponible, 2 evenuellement dispo. et 3=trés disponible). "
var enonceCBC = "Dans la base de données clients CharlesBookClub2000 on essaye de trouver l'axe discriminant formé de la cominaison linéaire des variables R (Récence),F (Fréquence), M (Montant)  qui distingue au mieu les acheteurs des nonacheteurs du livre sur Florence. La variable expliquée nommée Florence est codée selon les deux modalités 1=Achat et 0=non-achat. "
var enonceSalesC = "L'étude enregistre le comportement commercial de 45 vendeurs observés pendant un mois selon quatre criteres (variables) (voir support de cours). Ils sont groupés dans l'ordre en 3 groupes de taille égale: très bons, moyens et mauvais vendeurs. Ces groupes ont été constitués suite a un concours de vente. "

function example_example(){
	alert("A red button indicates an example demo.");
	//window.open("mc_toolkit.html")
}

function example_groupmeansSalesC(){
	    var i =  parseInt(1+Math.random()*4); 
		var j = parseInt(1+Math.random()*3);
var enonce = enonceSalesC+"Quelle est la moyenne de la variable "+i+" pour le groupe "+j+"? ";
    var command = "library(MASS);g=rep(1:3,each=15);ad=lda(g~X$V1+X$V2+X$V3+X$V4);ad$mean["+j+","+i+"]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readSalesC+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_intragroupvarsSalesC(){
	    var i =  parseInt(1+Math.random()*4); 
		var j = parseInt(1+Math.random()*3);
var enonce = enonceSalesC+"Quelle est la variance intragroupe (W) de la variable "+i+" pour le groupe "+j+"? ";
    var command = "library(MASS);st=1+15*("+j+"-1);M=scale(X[st:(st+14),-1],center=TRUE,scale=FALSE);diag(t(M) %*% M/15)["+i+"]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readSalesC+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_intragroupvarmSalesC(){
	    var i =  parseInt(1+Math.random()*4); 
		//var j = parseInt(1+Math.random()*3);
var enonce = enonceSalesC+"Quelle est la variance intragroupe moyenne de la variable "+i+"? ";
    var command = "library(MASS);mgc1=scale(X[1:15,-1],center=TRUE,scale=FALSE);W1=t(mgc1) %*% mgc1/15;mgc2=scale(X[16:30,-1],center=TRUE,scale=FALSE);W2=t(mgc2) %*% mgc2/15;mgc3=scale(X[31:45,-1],center=TRUE,scale=FALSE);W3=t(mgc3) %*% mgc3/15;diag((W1+W2+W3)/3)["+i+"]";

;
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readSalesC+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_intergroupvarsSalesC(){
		var j = parseInt(1+Math.random()*4);//var gps = j==1? new Array(2,3):j==2?new Array(1,3):new Array(1,2);
var enonce = enonceSalesC+"Quelle est la variance intergroupe (B) de la variable "+j+"? ";
    var command = "library(MASS);g=rep(1:3,each=15);ad=lda(g~X$V1+X$V2+X$V3+X$V4);mgc=scale(ad$mean,center=TRUE,scale=FALSE);diag(t(mgc) %*% mgc/3)["+j+"]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readSalesC+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_coefsdiscrSalesC(){
		var j = parseInt(1+Math.random()*4);//var gps = j==1? new Array(2,3):j==2?new Array(1,3):new Array(1,2);
var enonce = enonceSalesC+"Quel est le coefficient de la variable "+j+" dans la (premiere) fonction discriminante? ";
    var command = "library(MASS);g=rep(1:3,each=15);ad=lda(g~X$V1+X$V2+X$V3+X$V4);ad$scaling["+j+",1]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readSalesC+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_scorsdiscrSalesC(){
		var i = parseInt(1+Math.random()*45);//var gps = j==1? new Array(2,3):j==2?new Array(1,3):new Array(1,2);
var enonce = enonceSalesC+"Quel est le score du vendeur "+i+" sur le premier axe discriminant ? ";
    var command = "library(MASS);g=rep(1:3,each=15);ad=lda(g~X$V1+X$V2+X$V3+X$V4);predict(ad)$x["+i+",1]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readSalesC+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_cuttingscoreSalesC(){
		var i = parseInt(1+Math.random()*3);
		var gps  = i==1? new Array(2,3):i==2?new Array(1,3):new Array(1,2);
var enonce = enonceSalesC+"Quel est le cutting score entre le groupe "+gps[0]+" et le groupe "+gps[1]+"?";
    var command = "library(MASS);g=rep(1:3,each=15);ad=lda(g~X$V1+X$V2+X$V3+X$V4);st=1+15*("+i+"-1);mean(predict(ad)$x[-(st:(st+14)),1])";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readSalesC+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_hitrateSalesC(){
var i = parseInt(1+Math.random()*4);
var enonce = enonceSalesC+"Quel est le hit rate (pourcentage d'affectations correctes) obtenu pour "+(i==4?'de l\'ensemble des groupes':' le groupe '+i+' ')+"?";
    var command = "library(MASS);g=rep(1:3,each=15);ad=lda(g~X$V1+X$V2+X$V3+X$V4);dcfmx=diag(table(g,predict(ad)$class)); 100*"+(i==4?'sum(dcfmx)/45':'dcfmx['+i+']/15');
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readSalesC+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}



function example_groupmeansCBC(){
	    var i =  parseInt(1+Math.random()*3); 
		var j = parseInt(1+Math.random()*2);
		var vlbls = new Array("Récence", "Fréquence", "Montant");
		var glbls = new Array("non-acheteurs","acheteurs");
var enonce = enonceCBC + "Quelle est la moyenne de la variable "+vlbls[i-1]+" pour les "+glbls[j-1]+"? ";
    var command = "library(MASS);g=rep(1:3,each=15);ad=lda(X$Florence~X$R+X$F+X$M);ad$mean["+j+","+i+"]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCBC2000+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_intragroupvarsCBC(){
	    var i =  parseInt(1+Math.random()*3); 
		var j = parseInt(1+Math.random()*2);
		var vlbls = new Array("Récence", "Fréquence", "Montant");
		var glbls = new Array("non-acheteurs","acheteurs");
var enonce = enonceCBC + "Quelle est la variance intragroupe (W) de la variable "+vlbls[i-1]+" pour les "+glbls[j-1]+"? ";
    var command = "library(MASS);df=X[X$Florence=="+[j-1]+",c('R','F','M')];mgc=scale(df,center=TRUE,scale=FALSE);diag(t(mgc) %*% mgc/nrow(df))["+i+"]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCBC2000+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_intragroupvarmCBC(){
	    var i =  parseInt(1+Math.random()*3); 
		var vlbls = new Array("Récence", "Fréquence", "Montant");
		//var j = parseInt(1+Math.random()*3);
var enonce = enonceCBC + "Quelle est la variance intragroupe moyenne de la variable "+vlbls[i-1]+"? ";
    var command = 'library(MASS);mgc1=scale(X[X$Florence==1,c("R","F","M")],center=TRUE,scale=FALSE);W1=t(mgc1) %*% mgc1/nrow(mgc1);mgc2=scale(X[X$Florence==0,c("R","F","M")],center=TRUE,scale=FALSE);W2=t(mgc2) %*% mgc2/nrow(mgc2);diag((nrow(mgc1)*W1+nrow(mgc2)*W2)/nrow(X))['+i+']';
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCBC2000+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_intergroupvarsCBC(){
		var j = parseInt(1+Math.random()*3);//var gps = j==1? new Array(2,3):j==2?new Array(1,3):new Array(1,2);
				var vlbls = new Array("Récence", "Fréquence", "Montant");
var enonce = enonceCBC + "Quelle est la variance intergroupe (B) de la variable "+j+"? ";
    var command = "library(MASS);ad=lda(X$Florence~X$R+X$F+X$M);mgc=scale(ad$mean,center=TRUE,scale=FALSE);diag(t(mgc) %*% mgc/2)["+j+"]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCBC2000+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_coefsdiscrCBC(){
		var j = parseInt(1+Math.random()*3);//var gps = j==1? new Array(2,3):j==2?new Array(1,3):new Array(1,2);
		var vlbls = new Array("Récence", "Fréquence", "Montant");
var enonce = enonceCBC + "Quel est le coefficient de la variable "+vlbls[j-1]+" dans la (premiere) fonction discriminante? ";
    var command = "library(MASS);ad=lda(X$Florence~X$R+X$F+X$M);ad$scaling["+j+",1]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCBC2000+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_scorsdiscrCBC(){
		var i = parseInt(1+Math.random()*2000);//var gps = j==1? new Array(2,3):j==2?new Array(1,3):new Array(1,2);
var enonce = enonceCBC + "Quel est le score du client "+i+" sur le premier axe discriminant ? ";
    var command = "library(MASS);ad=lda(X$Florence~X$R+X$F+X$M);predict(ad)$x["+i+",1]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCBC2000+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_cuttingscoreCBC(){
   var enonce = enonceCBC + "Quel est le cutting score entre le groupe des acheteurs et celui des non-acheteurs ?";
    var command = "library(MASS);ad=lda(X$Florence~X$R+X$F+X$M);m1=mean(predict(ad)$x[as.numeric(rownames(X[X$Florence==1,])),1]);n1=nrow(X[X$Florence==1,]);m2=mean(predict(ad)$x[as.numeric(rownames(X[X$Florence==0,])),1]);n2=nrow(X[X$Florence==0,]);(n2*m1+n1*m2)/(n1+n2)";

    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCBC2000+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_hitrateCBC(){
var i = parseInt(1+Math.random()*3);
var enonce = enonceCBC + "Quel est le hit rate (pourcentage d'affectations correctes) obtenu pour "+(i==3?'de l\'ensemble des groupes':' le groupe '+i+' ')+"?";
    var command = "library(MASS);ad=lda(X$Florence~X$R+X$F+X$M);n=table(X$Florence);dcfmx=diag(table(X$Florence,predict(ad)$class)); 100*"+(i==3?'sum(dcfmx)/nrow(X)':'dcfmx['+i+']/n['+i+']');
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCBC2000+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_groupmeansCAMIP(){
	    var i =  parseInt(1+Math.random()*3); 
		var j = parseInt(1+Math.random()*3);
		var vlbls = new Array("V41","V42","V44");
var enonce = enonceCAMIP + "Quelle est la moyenne de la variable "+vlbls[i-1]+" pour le groupe "+j+"? ";
    var command = "library(MASS);ad=lda(X$V3~X$V41+X$V42+X$V44);ad$mean["+j+","+i+"]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCAMIP+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_intragroupvarsCAMIP(){
	    var i =  parseInt(1+Math.random()*3); 
		var j = parseInt(1+Math.random()*3);
		var vlbls = new Array("V41","V42","V44");
var enonce = enonceCAMIP + "Quelle est la variance intragroupe (W) de la variable "+vlbls[i-1]+" pour le groupe "+j+" ?";
    var command = 'library(MASS);df=X[X$V3=='+j+',c("V41","V42","V44")];mgc=scale(df,center=TRUE,scale=FALSE);diag(t(mgc) %*% mgc/nrow(df))['+i+']';
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCAMIP+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_intragroupvarmCAMIP(){
	    var i =  parseInt(1+Math.random()*3); 
		//var j = parseInt(1+Math.random()*3);
		var vlbls = new Array("V41","V42","V44");
var enonce = enonceCAMIP + "Quelle est la variance intragroupe moyenne de la variable "+vlbls[i-1]+"? ";
    var command = 'library(MASS);mgc1=scale(X[X$V3==1,c("V41","V42","V44")],center=TRUE,scale=FALSE);W1=t(mgc1) %*% mgc1/nrow(mgc1);mgc2=scale(X[X$V3==2,c("V41","V42","V44")],center=TRUE,scale=FALSE);W2=t(mgc2) %*% mgc2/nrow(mgc2);mgc3=scale(X[X$V3==3,c("V41","V42","V44")],center=TRUE,scale=FALSE);W3=t(mgc3) %*% mgc3/nrow(mgc3);diag((nrow(mgc1)*W1+nrow(mgc2)*W2+nrow(mgc3)*W3)/nrow(X))['+i+']';
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCAMIP+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_intergroupvarsCAMIP(){
		var j = parseInt(1+Math.random()*3);//var gps = j==1? new Array(2,3):j==2?new Array(1,3):new Array(1,2);
		var vlbls = new Array("V41","V42","V44");
var enonce = enonceCAMIP + "Quelle est la variance intergroupe (B) de la variable "+vlbls[j-1]+"? ";
    var command = "library(MASS);ad=lda(X$V3~X$V41+X$V42+X$V44);mgc=scale(ad$mean,center=TRUE,scale=FALSE);diag(t(mgc) %*% mgc/3)["+j+"]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCAMIP+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_coefsdiscrCAMIP(){
		var j = parseInt(1+Math.random()*3);//var gps = j==1? new Array(2,3):j==2?new Array(1,3):new Array(1,2);
		var vlbls = new Array("V41","V42","V44");
var enonce = enonceCAMIP + "Quel est le coefficient de la variable "+vlbls[j-1]+" dans la (premiere) fonction discriminante ?";
    var command = "library(MASS);ad=lda(X$V3~X$V41+X$V42+X$V44);ad$scaling["+j+",1]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCAMIP+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_scorsdiscrCAMIP(){
		var i = parseInt(1+Math.random()*124);//var gps = j==1? new Array(2,3):j==2?new Array(1,3):new Array(1,2);
var enonce = enonceCAMIP + "Quel est le score du répondant "+i+" sur le premier axe discriminant ? ";
    var command = "library(MASS);ad=lda(X$V3~X$V41+X$V42+X$V44);predict(ad)$x["+i+",1]";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCAMIP+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_cuttingscoreCAMIP(){
		var i = parseInt(1+Math.random()*3);
		var gps  = i==1? new Array(2,3):i==2?new Array(1,3):new Array(1,2);
var enonce = enonceCAMIP + "Quel est le cutting score entre le groupe "+gps[0]+" et le groupe "+gps[1]+"?";
    var command = "library(MASS);ad=lda(X$V3~X$V41+X$V42+X$V44);mean(predict(ad)$x[-(X$V3=="+i+"),1])";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCAMIP+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_hitrateCAMIP(){
var i = parseInt(1+Math.random()*4);
var enonce = enonceCAMIP + "Quel est le hit rate (pourcentage d'affectations correctes) obtenu pour "+(i==4?'de l\'ensemble des groupes':' le groupe '+i+' ')+"?";
    var command = "library(MASS);ad=lda(X$V3~X$V41+X$V42+X$V44);n=table(X$V3);dcfmx=diag(table(X$V3,predict(ad)$class)); 100*"+(i==4?'sum(dcfmx)/nrow(X)':'dcfmx['+i+']/n['+i+']');
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", readCAMIP+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}
