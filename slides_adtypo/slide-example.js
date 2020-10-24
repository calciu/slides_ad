// JavaScript Document
function variableDefined (name) {
    return typeof this[name] !== 'undefined';
}

$("button[data-example]")
	.addClass("btn btn-small btn-danger examplebutton tohide")
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
var readAutos = 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/autos/autos.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE);'

var opencpurl = "http://marketing.iae.univ-lille1.fr";
var endpIdentityJson = "/ocpu/library/base/R/identity/json";
var endpIdentitySave = "/ocpu/library/base/R/identity/save";
var endpIdentityPrint= "/ocpu/library/base/R/identity/print";
var endpIdentityPng= "/ocpu/library/base/R/identity/png";
//var endpIdentityJson = "/R/pub/base/identity/json";
//var endpIdentitySave = "/R/pub/base/identity/save";

function example_example(){
	alert("A red button indicates an example demo.");
	//window.open("mc_toolkit.html")
}

function example_disteuclidAutos(){
    var i =  parseInt(1+Math.random()*10); var j =  parseInt(1+Math.random()*10); if(i==j) { if(j<10) j++; else j--; };
    var obslabs=new Array("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW"); 
    var enonce = "Dans l'étude sur les Voitures, quelle est la distance euclidiene dans l'espace defini par les deux premiers axes factoriels entre les  observations "+obslabs[i-1]+" et "+obslabs[j-1]+"?";
	var command ="X=X[,-1]; n=nrow(X);.pc=princomp(X);a="+i+";b="+j+"; i=max(a,b); j = min(a,b);d=dist(.pc$scores[,1:2]);list(Resultat=d[n*(j-1) - j*(j-1)/2 + i-j], Distances = d)";
        setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	//Quelle est la distance euclidiene dans l'espace defini par les deux premiers axes factoriels entre la troisieme et la quatrieme observation?
}

function example_disteuclidCamip(){
    var i =  parseInt(1+Math.random()*114); var j =  parseInt(1+Math.random()*114); if(i==j) { if(j<114) j++; else j--; };
	var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. quelle est la distance euclidiene dans l'espace defini par les deux premiers axes factoriels entre les  observations "+i+" et "+j+"?. Attention aux données manquantes";
	var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);.pc=princomp(v);a=78;b=13;i=max(a,b);j = min(a,b) ;d=dist(.pc$scores[,1:2]); list(Resultat=d[n*(j-1) - j*(j-1)/2 + i-j],Distances=d)";
   setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function scoresAutos(){
		var enonce = "Effectue un plot pour l'etude sur les Voitures qui presente les scores factoriels sur les axes 1 et 2 ";
		var prepare ='X=X[,-1];rownames(X)=c("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");.pc=princomp(X);';
        var what = '.pc, choice=c(1,2)';
		return Array(readAutos, enonce, prepare, what);
}

function scoresCamip(){
		var enonce = "Effectue un plot pour l'etude CAMIP qui presente les scores factoriels sur les axes 1 et 2";
		var prepare ='v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);.pc=princomp(v);';
		var what = '.pc, choice=c(1,2)';
		return Array(readCamip, enonce, prepare, what);
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

function example_hclustAutos(){
    var i =  parseInt(1+Math.random()*10); var j =  parseInt(2+Math.random()*4);
	var midx = parseInt(1+Math.random()*4);
	var methode = new Array("lien simple","lien complet", "chainage moyen", "ward");
    var obslabs=new Array("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW"); 
    var enonce = "Dans l'étude sur les Voitures, Effectuez une classification hièrarchique ascendante sur les deux premiers axes factoriels par la méthode "+methode[midx]+". Si vous devez retenir "+j+" groupes dans quel groupe ce trouverait l'observation "+i+"?"
	var command ="X=X[,-1]; n=nrow(X);.pc=princomp(X);mthd="+midx+";ng="+j+";obs="+i+";hc=hclust(dist(.pc$scores[,1:2]), method = c('single', 'complete', 'average','ward')[mthd]);ct=cutree(hc,k=ng);list(Resultat=ct[obs], 'Affectation aux groupes' = sort(ct), 'Taille des groupes'=table(ct))";
   setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readAutos+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	//Quelle est la distance euclidiene dans l'espace defini par les deux premiers axes factoriels entre la troisieme et la quatrieme observation?
}

function example_hclustCamip(){
    var i =  parseInt(1+Math.random()*114); var j =  parseInt(2+Math.random()*8);
	var midx = parseInt(1+Math.random()*4);
	var methode = new Array("lien simple","lien complet", "chainage moyen", "ward");
	var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Effectuez une classification hièrarchique ascendante sur les deux premiers axes factoriels par la méthode "+methode[midx-1]+". Si vous devez retenir "+j+" groupes dans quel groupe ce trouverait l'observation "+i+"?. Attention aux données manquantes";
	var command ="v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);.pc=princomp(v);mthd="+midx+";ng="+j+";obs="+i+";hc=hclust(dist(.pc$scores[,1:2]), method = c('single', 'complete', 'average','ward')[mthd]);ct=cutree(hc,k=ng);list(Resultat=ct[obs], 'Affectation aux groupes' = sort(ct),'Taille des groupes'=table(ct))";
   setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function hclustAutos(){
		var midx = parseInt(Math.random()*4);
	var methode = new Array("lien simple","lien complet", "chainage moyen", "ward");
	var enonce = "Dans l'etude Voiture, effectuez une classification hièrarchique ascendante sur les deux premiers axes factoriels par la méthode de "+methode[midx]+".";
		var command ='X=X[,-1];rownames(X)=c("Austin", "Citroen", "Fiat", "Ford", "Opel", "Peugeot", "Renault", "Seat", "Toyota", "VW");.pc=princomp(X);.hc=hclust(dist(.pc$scores[,1:2]),method=c("single", "complete", "average","ward")['+(midx+1)+']);plot(.hc)';
	return Array(readAutos, enonce, command);
}
function hclustCamip(){
		var midx = parseInt(Math.random()*4);
	var methode = new Array("lien simple","lien complet", "chainage moyen", "ward");
	var enonce = "Dans l'etude Camip, les variables de V21 a V29 forment une echelle qui mesure l'attitude envers l'achat par catalogue. Effectuez une classification hièrarchique ascendante sur les deux premiers axes factoriels par la méthode de "+methode[midx]+".";
		var command ='v=X[,21:29]; v[v == 0] = NA ; v=na.omit(v); n=nrow(v);.pc=princomp(v);.hc=hclust(dist(.pc$scores[,1:2]),method=c("single", "complete", "average","ward")['+(midx+1)+']);plot(.hc)';
	return Array(readCamip, enonce, command);
}

function example_plotHclust(ec){
		if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
    setExampleRequest(ec[1],"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", ec[0]+ec[2]);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}
}

function example_quizbin(){
    var i =  parseInt(1+Math.random()*26); var j =  parseInt(1+Math.random()*26); if(i==j) { if(j<26) j++; else j--; };
	var code1 = (64+i); var code2 = (64+j);  
    c1=(code1.toString(2)).split("");c2=(code2.toString(2)).split("");
    var enonce = "La plupart des caracteres et signes de ponctuation selon la codification ASCII se voient attribues de nombre de 1 à 127 qui en representation informatique ocupent 7 positions binaires. Le lettres majuscules A,B,C .. sont codée 65,66,67 ....Quelle est la distance binaire (xor/or ou u/(u+p)) entre "+String.fromCharCode(code1)+" et "+String.fromCharCode(code2)+"?";
var command = "x = c("+c1[0]+","+c1[1]+","+c1[2]+","+c1[3]+","+c1[4]+","+c1[5]+","+c1[6]+"); y = c("+c2[0]+","+c2[1]+","+c2[2]+","+c2[3]+","+c2[4]+","+c2[5]+","+c2[6]+");dist(rbind(x,y),method='binary')[]";
  setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_distbin(){
    var nn =  parseInt(5 + 10*Math.random()); var ee =  parseInt(4+Math.random()*4); 
    var enonce = 'Affichez  '+nn+' profils  avec '+ee+' positions binaires et calculez les distances.';
    var command = 'simBprofiles<-function(n,e){bprfs=NULL;for(i in 1:n) bprfs=rbind(bprfs,as.numeric(rev(intToBits(as.integer(runif(1)*sum(2^(0:(e-1))))))[-(1:(32-e))]));return(bprfs)}; n='+nn+';e='+ee+';bprfs=simBprofiles(n,e);d=dist(bprfs,method="binary");list(Profils=bprfs, Distances=d)';
       setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
        addhttpparam("x", command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }


