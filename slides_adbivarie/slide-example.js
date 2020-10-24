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
var readAutos = 'X <- read.csv(url("http://claree.univ-lille1.fr/Rweb/cases/autos/autos.txt"), header=TRUE, sep=" ", na.strings="NA", dec=".", strip.white=TRUE);'

var opencpurl = "http://marketing.iae.univ-lille1.fr";
var endpIdentityJson = "/ocpu/library/base/R/identity/json";
var endpIdentitySave = "/ocpu/library/base/R/identity/save";
var endpIdentityPng= "/ocpu/library/base/R/identity/png";
var endpIdentityPrint= "/ocpu/library/base/R/identity/print";
//var endpIdentityJson = "/R/pub/base/identity/json";
//var endpIdentitySave = "/R/pub/base/identity/save";

function example_example(){
	alert("A red button indicates an example demo.");
	//window.open("mc_toolkit.html")
}


function example_compmeanCamip(){
            var isdif = parseInt(Math.random()*2)
            var xa =  parseInt(1+Math.random()*1000); var sa = parseInt(0.5 + 3*Math.random()*xa);
            var xb =  parseInt(1+Math.random()*1000); var sb = parseInt(0.5 + 3*Math.random()*xb);
        var enonce = "Dans l'étude CAMIP, la dépense moyenne pour des achats par catalogue est de " + xa + " pour les hommes  et de " + xb + "  pour les femmes. L'ecart type chez les hommes  est de " + sa + "  et chez les femmes " + sb + ". Quelle est la probabilité que la moyenne des femmes soit "+(isdif?' differente de ':' semblable a ')+ "celle des hommes";
        var command ="n=table(X$V44); na=n[1];nb=n[2];xa="+xa+";xb="+xb+";sa="+sa+";sb="+sb+";"+(isdif?'':'1-')+"pnorm(abs(xa-xb)/sqrt(sa^2/na+sb^2/nb))";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
        addhttpparam("x", readCamip+command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
}

function example_compmeanstudCamip(){
            var isdif = parseInt(Math.random()*2)
            var na =  parseInt(1+Math.random()*30); var nb =  parseInt(1+Math.random()*30);
            var xa =  parseInt(1+Math.random()*1000); var sa = parseInt(0.5 + 3*Math.random()*xa);
            var xb =  parseInt(1+Math.random()*1000); var sb = parseInt(0.5 + 3*Math.random()*xb);
        var enonce = "Dans une étude effectuée sur un échantillon de "+na+" hommes et "+nb+"femmes, la dépense moyenne d'achat est de " + xa + " pour les hommes  et de " + xb + "  pour les femmes. L'ecart type chez les hommes  est de " + sa + "  et chez les femmes " + sb + ". Quelle est la probabilité que la moyenne des femmes soit "+(isdif?' differente de ':' semblable a ')+ "celle des hommes";
        var command ="na="+na+";nb="+nb+";xa="+xa+";xb="+xb+";sa="+sa+";sb="+sb+";"+(isdif?'':'1-')+"pt(abs(xa-xb)/sqrt(((na-1)*sa^2 + (nb-1)*sb^2) /(na + nb - 2)*(1/na+ 1/nb)), na+nb-2)";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
        addhttpparam("x", command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
}


function example_comppropCamip(){
 var ifpessim = parseInt(Math.random()*2);
 var pa = parseInt(Math.random()*100)/100;
 var pb = parseInt(Math.random()*100)/100;
 var enonce = "La proportion des hommes qui achetent par catalogue est de "+pa+" et celle des femmes est de "+pb+" . Quelle est la probabilité que la proportion des femmes soit differente de celle des hommes "+(ifpessim?'(altervative pessimiste)':'(altervative optimiste)')+" ?"
var command = "n=table(X$V44); na=n[1];nb=n[2]; pa="+pa+"; pb="+pb+";"+(ifpessim?'p=0.5':'p=(na*pa+nb*pb)/(n[1]+n[2])')+";pnorm(abs(pa-pb)/sqrt(p*(1-p)*(1/na +1/na)))";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
        addhttpparam("x", readCamip+command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
}


function example_plotCompMean(){
        if (!document.funhashkey)
                document.funhashkey = gethashkey2();
    if(document.funhashkey){
          setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
          $("#submitform").click();
          $("#outputframe").focus();
        }else{
            var xa =  parseInt(1+Math.random()*1000); var sa = parseInt(0.5 + 3*Math.random()*xa);
            var xb =  parseInt(1+Math.random()*1000); var sb = parseInt(0.5 + 3*Math.random()*xb);
var enonce = "Dans l'étude CAMIP, la dépense moyenne pour des achats par catalogue est de " + xa + " pour les hommes  et de " + xb + "  pour les femmes. L'ecart type chez les hommes  est de " + sa + "  et chez les femmes " + sb + ". Faites le plot";
   var command ='plotCompmean<-function(n1,m1,s1,n2,m2,s2,alpha=.05,nss=6,ctxt=" moyennes"){ ss1=s1/sqrt(n1) ;ss2=s2/sqrt(n2);x=seq((m1-nss*ss1),(m1+nss*ss1),length=31); y=dnorm(x,mean=m1,sd=ss1); x1=seq((m2-nss*ss2),(m2+nss*ss2),length=31); y1=dnorm(x1,mean=m2,sd=ss2); mxy=max(y);mxy1=max(y1);  plot(x,y,t="l", ylim=range(c(y,y1)),xlim=range(c(x,x1)), main=paste("Comparaison de", ctxt),col="red"); lines(x1,y1, col="blue");lines(c(m1,m1),c(0,mxy),col="red"); lines(c(m2,m2),c(0,mxy1),col="blue")};n=table(X$V44);n1 =n[1]; n2=n[2]; m1='+xa+';m2='+xb+';s1='+sa+'; s2='+sb+';plotCompmean(n1,m1,s1,n2,m2,s2,alpha=.05,nss=6,ctxt=" moyennes")'
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
        addhttpparam("x", readCamip+command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }
}

function example_plotCompProp(){
        if (!document.funhashkey)
                document.funhashkey = gethashkey2();
    if(document.funhashkey){
          setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
          $("#submitform").click();
          $("#outputframe").focus();
        }else{
 var pa = parseInt(Math.random()*100)/100;
 var pb = parseInt(Math.random()*100)/100;
var enonce = "La proportion des hommes qui achetent par catalogue est de "+pa+" et celle des femmes est de "+pb+" . Faites un plot!"
var command ='plotCompmean<-function(n1,m1,s1,n2,m2,s2,alpha=.05,nss=6,ctxt=" moyennes"){ ss1=s1/sqrt(n1) ;ss2=s2/sqrt(n2);x=seq((m1-nss*ss1),(m1+nss*ss1),length=31); x1=seq((m2-nss*ss2),(m2+nss*ss2),length=31);x_ = sort(c(x,x1));gap=round(max(diff(x_))/min(diff(x)),0);step=2*nss*ss1/31;x_ = if(gap>1) if(m1<m2)x_=c(x,seq(x[length(x)]+step,x[length(x)]+gap*step,step),x1) else x_=c(x1,seq((x1[length(x1)]+step),(x1[length(x1)]+gap*step),step),x);y=dnorm(x_,mean=m1,sd=ss1); y1=dnorm(x_,mean=m2,sd=ss2); mxy=max(y);mxy1=max(y1);  plot(x_,y,t="l", ylim=range(c(y,y1)),xlim=range(c(x,x1)), main=paste("Comparaison de", ctxt),col="red"); lines(x_,y1, col="blue");lines(c(m1,m1),c(0,mxy),col="red"); lines(c(m2,m2),c(0,mxy1),col="blue");  if(m1<1 && m2<1)   y_=dnorm(x_,mean=m1,sd=.25/sqrt(n1)); y1_=dnorm(x_,mean=m2,sd=.25/sqrt(n2));lines(x_,y_, col="red", lty=2);lines(x_,y1_, col="blue", lty=2);};n=table(X$V44);n1=n[1];m1='+pa+';s1=sqrt(m1*(1-m1)/n1);n2=n[2];m2='+pb+';s2=sqrt(m2*(1-m2)/n2);plotCompmean(n1,m1,s1,n2,m2,s2,alpha=.05,nss=6, ctxt="proportions")'
   setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
        addhttpparam("x", readCamip+command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }
}

function example_chi2Camip(){
var x11 = 5+parseInt(Math.random()*25);
var x21 = Math.max(40-x11,26);
var enonce ="Supposons que suite au croisement, dans l'étude CAMIP, des questions 3 (avoir acheté par catalogue) et 27 (être homme où femme), il y a " + x11 + " hommes qui n'ont jamais acheté par catalogue et "+x21+" hommes qui avait déjà acheté mais pas cette année. Quelle est la valeur du Chi2 pour le tableau qui résulte de ce croisement?"
    var command = "xt=table(X$V4,X$V44);xt[1,1]="+x11+";xt[2,1]="+x21+";tc=table(X$V44);tl=table(X$V4);xt[3,1]=tc[1]-sum(xt[-3,1]); xt[,2]=tl-xt[,1];chsqt=chisq.test(xt, correct=FALSE);list(Resultat=chsqt[[1]], 'Quantile 5%' = qchisq(.95,prod(dim(xt)-1)), p=chsqt$p.value, Observe = chsqt$observed, Theorique=chsqt$expected)";
        setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_cspearman(){
var a = new Array;
for(i=0;i<8;i++)a[i] = new Array(Math.random(),i+1);
b=a.sort();
c="";
for(i=0;i<8;i++) c=c+b[i][1]+",";
c=c.slice(0,15);
var enonce = "Le classement des concepts de pages web dans un experiment d'analyse conjointe donné par un participant pour exprimer sa préférence est "+c+". Quel est le coefficient de correlation des rangs de Spearman entre ce classement et classement initial de 1 à 8 de ces concepts?"
var command = "r1=c("+c+");n=length(r1);r0=1:n;d2=(r1-r0)^2;1-6*sum(d2)/(n*(n^2-1))"
   setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}
	
function example_taukendall(){
var a = new Array;
for(i=0;i<8;i++)a[i] = new Array(Math.random(),i+1);
b=a.sort();
c="";
for(i=0;i<8;i++) c=c+b[i][1]+",";
c=c.slice(0,15);
var enonce = "Le classement des concepts de pages web dans un experiment d'analyse conjointe donné par un participant pour exprimer sa préférence est "+c+". Quel est le tau de Kendal qui exprime la relation entre ce classement et classement initial de 1 à 8 de ces concepts?"
var command = "r1=c("+c+");n=length(r1);tau <- function(c,n){s=0;n=length(c); for(i in 1:(n-1)){f = c[i]; diff = f  - c[-(1:i)];z = ifelse(diff > 0 , 1, -1); s = s + sum(z)};return(2*s/(n^2 - n))};tau(r1,n)"
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

