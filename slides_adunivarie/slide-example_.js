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
var opencpurl = "http://marketing.iae.univ-lille1.fr";
var endpIdentityJson = "/ocpu/library/base/R/identity/json";
var endpIdentitySave = "/ocpu/library/base/R/identity/save";
var endpIdentityPng = "/ocpu/library/base/R/identity/png"; // mymodif 231218
var endpIdentityPrint= "/ocpu/library/base/R/identity/print"; // mymodif 050119 
//var endpIdentityJson = "/R/pub/base/identity/json";
//var endpIdentitySave = "/R/pub/base/identity/save";


function example_meanCamip(){
	    var i =  parseInt(2+Math.random()*43);
	var enonce = "Dans l'etude Camip, quelle est la moyenne de la variable V"+i;
	var command ="list(Reponse=mean(X$V" + i + "[X$V" + i + "!=0]),'Tableau de frequences'=table(X$V"+i+"))";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_meanCamipW(){
    var i =  parseInt(2+Math.random()*43);
	var enonce = "Dans l'etude Camip, quelle est la moyenne de la variable V"+i;
	var command ="mean(X$V" + i + "[X$V" + i + "!=0])";
 	var tkw=window.open("mc_explorer.html"); //toolkitwindow
$(tkw).load(function(){
	setExampleRequestW(tkw,enonce,"POST",opencpurl +  endpIdentityJson);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
}

function example_diffmeanmissingCamip(){
    var i =  parseInt(20+Math.random()*24);
	var enonce = "Dans l'etude Camip, de combien baisse la moyenne a cause des réponses manquantes dans la variable V"+i;
	var command ="list(Reponse=mean(X$V" + i + "[X$V" + i + "!=0])-mean(X$V"+i+"), 'Tableau de frequences'=table(X$V"+i+"))";
	setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_diffmeanmissingCamipW(){
    var i =  parseInt(20+Math.random()*24);
	var enonce = "De combien baisse la moyenne a cause des réponses manquantes dans la variable V"+i;
	var command ="mean(X$V" + i + "[X$V" + i + "!=0])-mean(X$V"+i+")";
	var tkw=window.open("mc_explorer.html");
$(tkw).load(function(){
	setExampleRequestW(tkw,enonce,"POST",opencpurl +  endpIdentityJson);
	addhttpparamW(tkw,"x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
}

function example_meanvarsdCamip(){
	    var i =  parseInt(2+Math.random()*43);
		var cidx = parseInt(1+Math.random()*3);
		var clabs = new Array("moyenne", "variance", "ecart type");
		var cname = new Array("mean","var", "sd")
	var enonce = "Dans l'etude Camip, quelle est la moyenne de la variable V"+i;
		var enonce = "Dans l'etude Camip, quelle est la "+ clabs[cidx-1] + " de la variable V" + i + ". Attention aux données manquantes";
	var command ="v=X$V" + i + "; v=v[v != 0];list(Reponse="+cname[cidx-1]+"(v), 'Tableau de frequences'=table(X$V"+i+"))";
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_freprangs(){
    var nn =  parseInt(5 + 10*Math.random()); var ee =  parseInt(3+Math.random()*4); 
    var enonce = 'Affichez la fonction de repartition des rangs pour '+nn+' classements  et '+ee+' elements de choix.';
    var command ='simNrangs<-function(n,e){;nrangs=NULL;for(i in 1:n) nrangs=rbind(nrangs,sample(1:e,e));return(nrangs);};n='+nn+';e='+ee+';nrangs=simNrangs(n,e);fLrangs<-function(nrangs){;rangs=LETTERS[nrangs];dim(rangs)=c(n,e);return(rangs);};rangs=fLrangs(nrangs);fFrepr<-function(nrangs){;e=ncol(nrangs);frepr=rep(0,e*e);dim(frepr)=c(e,e);rownames(frepr)=LETTERS[1:e];for(i in 1:e){;tb=table(nrangs[,i]);frepr[1:e%in%as.numeric(names(tb)),i]=tb;};return(frepr);};list("Rangs"=rangs,"Fonction de repartition de rangs"=fFrepr(nrangs));'
        setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
        addhttpparam("x", command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }

function example_matrpref(){
    var nn =  parseInt(5 + 10*Math.random()); var ee =  parseInt(3+Math.random()*4); 
    var enonce = 'Affichez la Matrice des preferences pour '+nn+' classements  et '+ee+' elements de choix.';
    var command ='simNrangs<-function(n,e){;nrangs=NULL;for(i in 1:n) nrangs=rbind(nrangs,sample(1:e,e));return(nrangs);};n='+nn+';e='+ee+';nrangs=simNrangs(n,e);fLrangs<-function(nrangs){;rangs=LETTERS[nrangs];dim(rangs)=c(n,e);return(rangs);};rangs=fLrangs(nrangs);fMpref<-function(nrangs){;mpref=rep(0,e*e);dim(mpref)=c(e,e);colnames(mpref)=LETTERS[1:e];rownames(mpref)=LETTERS[1:e];diag(mpref)=NA;for(i in 1:n){;line=nrangs[i,];jj=NULL;for(j in 1:(e-1)){;jj=c(jj,line[j]);mpref[line[j],-jj]=mpref[line[j],-jj]+1;};};return(mpref);};list("Rangs"=rangs, "Matrice des preferences"=fMpref(nrangs))'

         setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
        addhttpparam("x", command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }

function example_tableCamip2(){
    var i =  parseInt(2+Math.random()*43); i=(i==41 | i==42)?2:i;
        var enonce = "Dressez le tableau des effectifs et fréquences de la variable V"+i;
        var command ='X=X[,-1];attach(X);v="V'+i+'";tb=table(eval(as.name(v)), exclude=0);detach(X);dft=data.frame(Valeurs=c(names(tb),"Total"),Frequence=c(as.numeric(tb),sum(tb)),Freq.Rel=c(round(as.numeric(tb/sum(tb)),2),1));dft';
        setExampleRequest(enonce,"POST", opencpurl+endpIdentityPrint);
        addhttpparam("x", readCamip+command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
}

function example_qnorm(){
    var pq =  parseInt(100*Math.random())/100; var m =  parseInt(5+Math.random()*16); var s =  parseInt(10+Math.random()*21)
var enonce = 'Calculez x, pour qui le quantile P(X <= x)= '+pq+' pour une variable normale X de moyenne '+m+' et de variance '+s*s+'.';
   var command ='z=qnorm('+pq+');m='+m+';s='+s+';m+z*s';
        setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
        addhttpparam("x", command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }

function example_pnorm(){
    var x =  parseInt(5+Math.random()*16); var m =  parseInt(5+Math.random()*16); var s =  parseInt(10+Math.random()*21); var iflower = parseInt(2*Math.random());
var enonce = 'Calculez P(X '+ (iflower?"<=":">")+x+') pour une variable normale X de moyenne '+m+' et de variance '+s*s+'.';
   var command ='x='+x+';m='+m+';s='+s+'; z=(x-m)/s; pnorm(z, lower.tail = '+(iflower?"T":"F")+')';
        setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
        addhttpparam("x", command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }

function example_plotPnorm(){
        if (!document.funhashkey)
                document.funhashkey = gethashkey2();
    if(document.funhashkey){
          setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
          $("#submitform").click();
          $("#outputframe").focus();
        }else{
    var x =  parseInt(5+Math.random()*16); var m =  parseInt(5+Math.random()*16); var s =  parseInt(10+Math.random()*21); var iflower = parseInt(2*Math.random());
var enonce = 'Faites le plot de P(X '+ (iflower?"<=":">")+x+') pour une variable normale X de moyenne '+m+' et de variance '+s*s+'.';
   var command ='plotPnorm<-function(xx,m,s,nss=4){x=seq((m-nss*s),(m+nss*s),length=31);  y=dnorm(x,mean=m,sd=s);  mxy=max(y);  plot(x,y,t="l", main=paste("P(X '+ (iflower?"<=":">")+x+')", round(pnorm((xx-m)/s,lower.tail='+(iflower?"T":"F")+'),3))); lines(c(m,m),c(0,mxy),col="red");  lines(c(xx,xx),c(0,mxy),col="blue");  legend("topright", c("m","x"), col=c(2,4), lwd=3)};x='+x+';m='+m+';s='+s+';plotPnorm(x,m,s)'
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
        addhttpparam("x", command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }
}

function example_pnorm2(){
    var a =  parseInt(5+Math.random()*16); var b =  parseInt(5+Math.random()*16); var m =  parseInt(5+Math.random()*16); var s =  parseInt(10+Math.random()*21); var aa=(a<b?a:b);var bb=(a<b?b:a)
var enonce = 'Calculez P('+aa+' <=X <= '+bb+') pour une variable normale X de moyenne '+m+' et de variance '+s*s+'.';
   var command ='a='+aa+';b='+bb+';m='+m+';s='+s+';pnorm((b-m)/s)-pnorm((a-m)/s)';
        setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
        addhttpparam("x", command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }

function example_plotPnorm2(){
        if (!document.funhashkey)
                document.funhashkey = gethashkey2();
    if(document.funhashkey){
          setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
          $("#submitform").click();
          $("#outputframe").focus();
        }else{
    var a =  parseInt(5+Math.random()*16); var b =  parseInt(5+Math.random()*16); var m =  parseInt(5+Math.random()*16); var s =  parseInt(10+Math.random()*21); var aa=(a<b?a:b);var bb=(a<b?b:a)
var enonce = 'Faites le plot de P('+aa+' <= X <= '+bb+') pour une variable normale X de moyenne '+m+' et de variance '+s*s+'.';
   var command ='plotPnorm2<-function(m,s,nss=4){x=seq((m-nss*s),(m+nss*s),length=31);  y=dnorm(x,mean=m,sd=s);  mxy=max(y);  plot(x,y,t="l", main=paste("P(X'+aa+' <=X <= '+bb+') = ", round(pnorm(('+bb+'-m)/s)-pnorm(('+aa+'-m)/s),3))); lines(c(m,m),c(0,mxy),col="red");  lines(c('+a+','+a+'),c(0,mxy),col="blue"); lines(c('+b+','+b+'),c(0,mxy),col="blue");  legend("topright", c("m","a,b"), col=c(2,4), lwd=3)};m='+m+';s='+s+';plotPnorm2(m,s)'
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
        addhttpparam("x", command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }
}



function example_iconf(){
    var x =  parseInt(5+Math.random()*16); var s =  parseInt(10+Math.random()*21);
var enonce = "L'association des étudiants d'une université envisage d'ouvrir un ciné-club afin d'en évaluer la fréquentation, elle a réalisé une enquête par sondage sur un échantillon de 1000 individus. Une moyenne de fréquentation de "+ x + " séances par an et par individu a été obtenue avec un écart type s = " + s +". Le nombre réel de fréquentations (à un seuil de confiance de 95%) oscilera autour de " + x + " avec + ou - :";
   var command ="z=qnorm(.975);n=1000;s=" + s + ";z*s/sqrt(n)";
	setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}

function example_plotIconf(){	
	if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
var x =  parseInt(5+Math.random()*16); var s =  parseInt(10+Math.random()*21);
var enonce = "L'association des étudiants d'une université envisage d'ouvrir un ciné-club afin d'en évaluer la fréquentation, elle a réalisé une enquête par sondage sur un échantillon de 1000 individus. Une moyenne de fréquentation de "+ x + " séances par an et par individu a été obtenue avec un écart type s = " + s +". Effectuez le plot.";
   var command ='plotIconf<-function(n,xm,s,nc=.95,nss=4){ z=qnorm(nc+(1-nc)/2) ;  ss=s/sqrt(n) ; x=seq((xm-nss*ss),(xm+nss*ss),length=31); y=dnorm(x,mean=xm,sd=ss);  mxy=max(y);  yz=dnorm(xm-z*ss,mean=xm,sd=ss);  plot(x,y,t="l");  lines(c(xm,xm),c(0,mxy),col="red");  lines(c(xm-z*ss,xm-z*ss),c(0,yz),col="blue");  lines(c(xm+z*ss,xm+z*ss),c(0,yz),col="blue"); legend("topright", c("z=0","z(a)"), col=c(2,4), lwd=3)};n=1000;xm=' + x + ';s=' + s + ';plotIconf(n,xm,s)'
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}
}

function example_plotIconfp(){	
	if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
	var p = Math.round(Math.random()*100)/100;
var enonce = "Dans le cadre d'une étude de notoriété, " + p*100 + " % des personnes interrogées ont déclaré connaître la marque M. Un échantillon aléatoire non exhaustif de 1000 individus a été utilisé. Dans une approche optimiste la vraie proportion (à un seuil de confiance de 95%) oscilera autour de " + p*100 + "% avec + ou - : ";
   var command ='plotIconfp<-function(n,p,nc=.95,nss=4){ xm=p;z=qnorm(nc+(1-nc)/2) ;  ss=sqrt((p*(1-p))/n); x=seq((xm-nss*ss),(xm+nss*ss),length=31); y=dnorm(x,mean=xm,sd=ss);ypess=dnorm(x,mean=xm,sd=0.5/sqrt(n));  mxy=max(y);  yz=dnorm(xm-z*ss,mean=xm,sd=ss);  plot(x,y,t="l"); lines(x,ypess,t="l",lty=2,col="red");  lines(c(xm,xm),c(0,mxy),col="red");  lines(c(xm-z*ss,xm-z*ss),c(0,yz),col="blue");  lines(c(xm+z*ss,xm+z*ss),c(0,yz),col="blue"); legend("topright", c("z=0","z(a)"), col=c(2,4), lwd=3)};n=1000;p='+p+';plotIconfp(n,p);'
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}
}


function example_iconfW(){
    var x =  parseInt(5+Math.random()*16); var s =  parseInt(10+Math.random()*21);
var enonce = "L'association des étudiants d'une université envisage d'ouvrir un ciné-club afin d'en évaluer la fréquentation, elle a réalisé une enquête par sondage sur un échantillon de 1000 individus. Une moyenne de fréquentation de "+ x + " séances par an et par individu a été obtenue avec un écart type s = " + s +". Le nombre réel de fréquentations (à un seuil de confiance de 95%) oscilera autour de " + x + " avec + ou - :";
   var command ="z=qnorm(.975);n=1000;s=" + s + ";z*s/sqrt(n)";
    	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparamW(tkw,"x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
	}

function example_iconfsavef(){
   var command ="function(n, s){qnorm(.975)*s/sqrt(n)}";
	setRequest("POST", opencpurl + endpIdentitySave);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}

function example_iconfusef(){
	if(!document.funhashkey) document.funhashkey = gethashkey("object");
//	alert(document.funhashkey);
	setRequest("POST", "http://marketing.iae.univ-lille1.fr/R/tmp/" + document.funhashkey + "/json");
    addhttpparam("n", 1000);
	addhttpparam("s", 30);
	$("#submitajax").click();		
		$("#ajaxoutput").focus();
}


function example_iconfexh(){
var x =  parseInt(5+Math.random()*16); var s =  parseInt(10+Math.random()*21);
var enonce="L'association des étudiants d'une université de 2000 étudiants envisage d'ouvrir un ciné-club; afin d'en évaluer la fréquentation, elle a réalisé une enquête par sondage sur un échantillon de 1000 individus. Une moyenne de fréquentation de "+ x + " séances par an et par individu a été obtenue avec un écart type s = "+ s + ". Le nombre réel de fréquentations (à un seuil de confiance de 95%) oscilera autour de "+ x + " avec + ou - :";
var command ="z=qnorm(.975);s=" + s + ";n=1000;N=2000;z*s/sqrt(n)*sqrt((N-n)/(N-1))";
	setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_iconfexhW(){
var x =  parseInt(5+Math.random()*16); var s =  parseInt(10+Math.random()*21);
var enonce="L'association des étudiants d'une université de 2000 étudiants envisage d'ouvrir un ciné-club; afin d'en évaluer la fréquentation, elle a réalisé une enquête par sondage sur un échantillon de 1000 individus. Une moyenne de fréquentation de "+ x + " séances par an et par individu a été obtenue avec un écart type s = "+ s + ". Le nombre réel de fréquentations (à un seuil de confiance de 95%) oscilera autour de "+ x + " avec + ou - :";
var command ="z=qnorm(.975);s=" + s + ";n=1000;N=2000;z*s/sqrt(n)*sqrt((N-n)/(N-1))";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	 setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparamW(tkw,"x", command);
		$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});}


function example_iconfpetit(){
var x =  parseInt(5+Math.random()*16); var s =  parseInt(4+Math.random()*7); var n =  parseInt(10+Math.random()*20);
var enonce="L'association des étudiants d'une université envisage d'ouvrir un ciné-club; afin d'en évaluer la fréquentation, elle a réalisé une enquête par sondage sur un échantillon de " + n + " individus. Une moyenne de fréquentation de  " + x + "  séances par an et par individu suit une loi de Student à  " + (n-1) + "  degrés de liberté, avec un écart type s =  " + s + " . Le nombre réel de fréquentations (à un seuil de confiance de 95%) oscilera autour de  " + x + "  avec + ou - :";
var command="n="+n+";s="+s+";qt(.975,n-1)*s/sqrt( n )"; 
	setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_iconfpetitW(){
var x =  parseInt(5+Math.random()*16); var s =  parseInt(4+Math.random()*7); var n =  parseInt(10+Math.random()*20);
var enonce="L'association des étudiants d'une université envisage d'ouvrir un ciné-club; afin d'en évaluer la fréquentation, elle a réalisé une enquête par sondage sur un échantillon de " + n + " individus. Une moyenne de fréquentation de  " + x + "  séances par an et par individu suit une loi de Student à  " + (n-1) + "  degrés de liberté, avec un écart type s =  " + s + " . Le nombre réel de fréquentations (à un seuil de confiance de 95%) oscilera autour de  " + x + "  avec + ou - :";
var command="qt(.975," + (n-1) + ")*" + s +"/sqrt(" + n + ")"; 
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	 setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparamW(tkw,"x", command);
		$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
	}


function example_iconfCamip(){
ai=new Array(); for(i = 4;i<= 13; i++) ai.push(i);for(i = 15;i<= 37; i++) ai.push(i); ai.push(41)
i = parseInt(1+Math.random()*ai.length); 
var enonce = "Calculez l'intervalle de confiance positif de la moyenne de la variable V" + (i+1)  + ". ";
var command = "x=X$V" +(ai[i]+1) + "[X$V" +(ai[i]+1) + "!=0];n=length(x);s=sd(x);list(Reponse=qnorm(.975)*s/sqrt(n), 'Distribution de frequence'=table(x))";
	setExampleRequest(enonce,"POST",opencpurl +  endpIdentityPrint);
	addhttpparam("x", readCamip + command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_iconfCamipW(){
ai=new Array(); for(i = 4;i<= 13; i++) ai.push(i);for(i = 15;i<= 37; i++) ai.push(i); ai.push(41)
i = parseInt(1+Math.random()*ai.length); 
var enonce = "Calculez l'intervalle de confiance positif de la moyenne de la variable V" + (i+1)  + ". ";
var command = "x=X$V" +(ai[i]+1) + "[X$V" +(ai[i]+1) + "!=0];n=length(x);s=sd(x);qnorm(.975)*s/sqrt(n)";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	 setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparamW(tkw,"x", readCamip+command);
		$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
	}


function example_iconfppess(){
	p = Math.round(Math.random()*100)/100;
var enonce = "Dans le cadre d'une étude de notoriété, " + p*100 + " % des personnes interrogées ont déclaré connaître la marque M. Un échantillon aléatoire non exhaustif de 1000 individus a été utilisé. Dans une approche pessimiste la vraie proportion (à un seuil de confiance de 95%) oscilera autour de " + p*100 + "% avec + ou - :";
var command = "n=1000;qnorm(.975)*sqrt((0.5*(1-0.5))/n)";
	setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_iconfppessW(){
	p = Math.round(Math.random()*100)/100;
var enonce = "Dans le cadre d'une étude de notoriété, " + p*100 + " % des personnes interrogées ont déclaré connaître la marque M. Un échantillon aléatoire non exhaustif de 1000 individus a été utilisé. Dans une approche pessimiste la vraie proportion (à un seuil de confiance de 95%) oscilera autour de " + p*100 + "% avec + ou - :";
var command = "n=1000;qnorm(.975)*sqrt((0.5*(1-0.5))/n)";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	 setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparamW(tkw,"x", command);
		$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
	}

function example_iconfpopti(){
	p = Math.round(Math.random()*100)/100;
var enonce = "Dans le cadre d'une étude de notoriété, " + p*100 + " % des personnes interrogées ont déclaré connaître la marque M. Un échantillon aléatoire non exhaustif de 1000 individus a été utilisé. Dans une approche optimiste la vraie proportion (à un seuil de confiance de 95%) oscilera autour de " + p*100 + "% avec + ou - : ";
var command = "n=1000;p="+p+";qnorm(.975)*sqrt(p*(1-p)/n)";
	setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_iconfpoptiW(){
	p = Math.round(Math.random()*100)/100;
var enonce = "Dans le cadre d'une étude de notoriété, " + p*100 + " % des personnes interrogées ont déclaré connaître la marque M. Un échantillon aléatoire non exhaustif de 1000 individus a été utilisé. Dans une approche optimiste la vraie proportion (à un seuil de confiance de 95%) oscilera autour de " + p*100 + "% avec + ou - : ";
var command = "n=1000;qnorm(.975)*sqrt(" + p +"*(1-" + p +")/n)";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	 setExampleRequestW(tkw,enonce,"POST",opencpurl +  endpIdentityJson);
	addhttpparamW(tkw,"x", command);
		$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
}


function example_iconfpdiff(){
	p = Math.round(Math.random()*100)/100;
var enonce = "Dans le cadre d'une étude de notoriété, " + p*100 + " % des personnes interrogées ont déclaré connaître la marque M. Un échantillon aléatoire non exhaustif de 1000 individus a été utilisé.  Quelle est la différence de précision entre l'approche pessimiste et optimiste (à un seuil de confiance de 95%) de cette estimation:";
// n=1000;p=.25;sqrt(0.5*(1-0.5)/n)-sqrt((p*(1-p))/n)
var command = "n=1000;p="+p+";qnorm(.975)*(sqrt(0.5*(1-0.5)/n) - sqrt(p*(1-p)/n))";
	setExampleRequest(enonce,"POST",opencpurl +  endpIdentityJson);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_iconfpdiffW(){
	p = Math.round(Math.random()*100)/100;
var enonce = "Dans le cadre d'une étude de notoriété, " + p*100 + " % des personnes interrogées ont déclaré connaître la marque M. Un échantillon aléatoire non exhaustif de 1000 individus a été utilisé.  Quelle est la différence de précision entre l'approche pessimiste et optimiste (à un seuil de confiance de 95%) de cette estimation:";
// n=1000;p=.25;sqrt(0.5*(1-0.5)/n)-sqrt((p*(1-p))/n)
var command = "n=1000;qnorm(.975)*(sqrt(0.5*(1-0.5)/n) - sqrt(" + p +"*(1-" + p +")/n))";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	 setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparamW(tkw,"x", command);
		$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
	}


function example_testhyp(){
var xs =  parseInt(40+Math.random()*11); var xm =  parseInt(55+Math.random()*21); var s =  parseInt(55+Math.random()*21); var n =  parseInt(100+Math.random()*201);	
var enonce = "Le seuil de rentabilité d'un produit industriel nouveau s'élève à " + xs + " unités vendues par consomateur. Sur un échantillon de " + n + " consommateurs, une intention d'achat moyenne de " + xm + " a été repérée, avec un écart-type de " + s + ". Quel est le risque de se trouver sous le seuil de rentabilité (avec une précision de 0.001) ?";
command="n=" + n + ";xs=" + xs + ";xm=" + xm + ";s=" + s + ";1-pnorm((xm - xs)/s*sqrt(n))";
	setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}
function example_plotTesthyp(){	
	if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
var xs =  parseInt(40+Math.random()*11); var xm =  parseInt(55+Math.random()*21); var s =  parseInt(55+Math.random()*21); var n =  parseInt(100+Math.random()*201);	
var enonce = "Le seuil de rentabilité d'un produit industriel nouveau s'élève à " + xs + " unités vendues par consomateur. Sur un échantillon de " + n + " consommateurs, une intention d'achat moyenne de " + xm + " a été repérée, avec un écart-type de " + s + ". Executé un plot";
command='plotTesthyp<-function(n,xm, xs, s,alpha=.05,nss=6){ss=s/sqrt(n) ;  z=abs(xm-xs)/ss ;  zc=ifelse(xm>xs,qnorm(1-alpha),qnorm(alpha));  pc=ifelse(xm>xs,1-pnorm(z),pnorm(z));  T=ifelse(xm>xs,xs+qnorm(.95)*ss,xs-qnorm(.95)*ss);Tbil=c(xm-qnorm(.975)*ss, xm+qnorm(.975)*ss);  beta=ifelse(T>xs,pnorm((T-xm)/ss),pnorm((xm-T)/ss));  x=seq((xm-nss*ss),(xm+nss*ss),length=31);  y=dnorm(x,mean=xm,sd=ss);  mxy=max(y);plot(x,y,t="l", main=paste("Test unilateral ", ifelse(xm>xs,"droite", "gauche")," (alpha=5% -> ",round(1-pnorm(z),3),"), beta= ",round(beta,3),")"));yy=dnorm(T,mean=xs,sd=ss);yt=dnorm(T,mean=xm,sd=ss);lines(c(xm,xm),c(0,mxy),col="red");lines(c(xs,xs),c(0,yy), col="green");lines(c(T,T),c(0,yy),col="blue");lines(c(Tbil[1],Tbil[1]),c(0,yy),col="red");lines(c(Tbil[2],Tbil[2]),c(0,yy),col="red");legend("topright", c("xm;z(a/2)","z(a)","xs"), col=c(2,4,3), lwd=3)};n = ' + n +'; xm = '+ xm + '; xs = ' + xs + '; s = ' + s + '; plotTesthyp(n,xm, xs, s)' 
 
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}
}

function example_plotTesthyp2(){	
	if (!document.funhashkey)
		document.funhashkey = gethashkey2();
    if(document.funhashkey){
	  setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
	  $("#submitform").click();	
	  $("#outputframe").focus();
	}else{
var xs =  parseInt(40+Math.random()*11); var xm =  parseInt(55+Math.random()*21); var s =  parseInt(55+Math.random()*21); var n =  parseInt(100+Math.random()*201);	
var enonce = "Le seuil de rentabilité d'un produit industriel nouveau s'élève à " + xs + " unités vendues par consomateur. Sur un échantillon de " + n + " consommateurs, une intention d'achat moyenne de " + xm + " a été repérée, avec un écart-type de " + s + ". Executé un plot";
command='plotTesthyp<-function(n,xm, xs, s,alpha=.05,nss=6){ss=s/sqrt(n) ;  z=abs(xm-xs)/ss ;  zc=ifelse(xm>xs,qnorm(1-alpha),qnorm(alpha));  pc=ifelse(xm>xs,1-pnorm(z),pnorm(z));  T=ifelse(xm>xs,xs+qnorm(.95)*ss,xs-qnorm(.95)*ss);Tbil=c(xm-qnorm(.975)*ss, xm+qnorm(.975)*ss);  beta=ifelse(T>xs,pnorm((T-xm)/ss),pnorm((xm-T)/ss));  x=seq((T-nss*ss),(T+nss*ss),length=31);  y=dnorm(x,mean=T,sd=ss); x1=seq((xm-nss*ss),(xm+nss*ss),length=31); y1=dnorm(x1,mean=xm,sd=ss);  mxy=max(y);plot(x,y,t="l", ylim=range(c(y,y1)),xlim=range(c(x,x1)), col="blue", lty=3, main=paste("Unilateral ", ifelse(xm>xs,"droite","gauche"), " (alpha=5% -> ",round(1-pnorm(z),3),", beta= ",round(beta,3),")"));lines(x1,y1);yt=dnorm(T,mean=xs,sd=ss);lines(c(xs,xs),c(0,yt),col="green");if(xm<xs){lines(c(xs-z*ss,xs-z*ss),c(0,mxy),col="red")}else{lines(c(xs+z*ss,xs+z*ss),c(0,mxy),col="red")}; lines(c(T,T),c(0,mxy),col="blue");lines(c(Tbil[1],Tbil[1]),c(0,yt),col="red");lines(c(Tbil[2],Tbil[2]),c(0,yt),col="red");legend("topright", c("xm;z(a/2)","z(a)","xs"), col=c(2,4,3), lwd=3, cex=1.25)};n = ' + n +'; xm = '+ xm + '; xs = ' + xs + '; s = ' + s + '; plotTesthyp(n,xm, xs, s)';
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	}
}



function example_testhypW(){
var xs =  parseInt(40+Math.random()*11); var xm =  parseInt(55+Math.random()*21); var s =  parseInt(55+Math.random()*21); var n =  parseInt(100+Math.random()*201);	
var enonce = "Le seuil de rentabilité d'un produit industriel nouveau s'élève à " + xs + " unités vendues par consomateur. Sur un échantillon de " + n + " consommateurs, une intention d'achat moyenne de " + xm + " a été repérée, avec un écart-type de " + s + ". Quel est le risque de se trouver sous le seuil de rentabilité (avec une précision de 0.001) ?";
command="n=" + n + ";xs=" + xs + ";xm=" + xm + ";s=" + s + ";1-pnorm((xm - xs)/s*sqrt(n))";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	 setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparamW(tkw,"x", command);
		$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
	}


function example_testhyppess(){
var p =  parseInt(100*Math.random())/100; var ps =  parseInt(100*Math.random()*p)/100;  var n =  parseInt(100+Math.random()*201);	
var enonce = "Le taux de notoriété de la marque M mesuré sur un échantillon de "+ n + " consommateurs à la suite d'une campagne publicitaire était de "+ (100*p) + "%. Le taux de notoriété précédemment connu s'élevait à "+ (100*ps) + "%. Quel est le risque (version pessimiste) que la campagne n'ait pas eu d'effet sur la notoriété? (précision 0.0001)";
command = "n="+ n + ";ps="+ ps + ";p="+ p + ";1-pnorm((p-ps)/sqrt(.5*(1-.5)/n))";
	setExampleRequest(enonce,"POST",opencpurl +  endpIdentityJson);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_testhyppessW(){
var p =  Math.random(); var ps =  Math.random()*p;  var n =  parseInt(100+Math.random()*201);	
var enonce = "Le taux de notoriété de la marque M mesuré sur un échantillon de "+ n + " consommateurs à la suite d'une campagne publicitaire était de "+ (100*p) + "%. Le taux de notoriété précédemment connu s'élevait à "+ (100*ps) + "%. Quel est le risque (version pessimiste) que la campagne n'ait pas eu d'effet sur la notoriété? (précision 0.0001)";
command = "n="+ n + ";ps="+ ps + ";p="+ p + ";1-pnorm((p-ps)/sqrt(.5*(1-.5)/n))";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	 setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparamW(tkw,"x", command);
		$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
	}


function example_testhyppopti(){
var p =  parseInt(100*Math.random())/100; var ps =  parseInt(100*Math.random()*p)/100;  var n =  parseInt(100+Math.random()*201);	
var enonce ="Le taux de notoriété de la marque M mesuré sur un échantillon de "+ n + " consommateurs à la suite d'une campagne publicitaire était de "+ (100*p) + "%. Le taux de notoriété précédemment connu s'élevait à "+ (100*ps) + "%. Quel est le risque (version optimiste) que la campagne n'ait pas eu d'effet sur la notoriété? (précision 0.0001)";
command = "n="+ n + ";ps="+ ps + ";p="+ p + ";1-pnorm((p-ps)/sqrt(p*(1-p)/n))";
	setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparam("x", command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_testhyppoptiW(){
var p =  Math.random(); var ps =  Math.random()*p;  var n =  parseInt(100+Math.random()*201);	
var enonce ="Le taux de notoriété de la marque M mesuré sur un échantillon de "+ n + " consommateurs à la suite d'une campagne publicitaire était de "+ (100*p) + "%. Le taux de notoriété précédemment connu s'élevait à "+ (100*ps) + "%. Quel est le risque (version optimiste) que la campagne n'ait pas eu d'effet sur la notoriété? (précision 0.0001)";
command = "n="+ n + ";ps="+ ps + ";p="+ p + ";1-pnorm((p-ps)/sqrt(p*(1-p)/n))";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	 setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparamW(tkw,"x", command);
		$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
}


function iconfppessCamip1(){
var i = parseInt(15+Math.random()*14)
var enonce = "Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: "
enonce = enonce + "\""+vl[i]+ "\"";
var command =  "x=X$V"+(i+1)+"[which(X$V"+(i+1)+"!=0)];n=length(x);list(Reponse=qnorm(.975)*sqrt(.5*(1-.5)/n),'Distribution de frequence'=table(x))";
var ret = [enonce,command];
return(ret)
}
function iconfppessCamip2(){
var i = parseInt(4+Math.random()*10)
var enonce = "Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui ont";
enonce = enonce + "\""+vl[i]+ "\"";
var command = "x=X$V"+(i+1)+"[which(X$V"+(i+1)+"!=0)];n=length(x);list(Reponse=qnorm(.975)*sqrt(.5*(1-.5)/n),'Distribution de frequence'=table(x))";
var ret = [enonce,command];
return(ret)
}
function iconfppessCamip3(){
var i = parseInt(29+Math.random()*9)
var enonce = "Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui donnent de l'importance à:  "
enonce = enonce + "\""+vl[i]+ "\"";
var command = "x=X$V"+(i+1)+"[which(X$V"+(i+1)+"!=0)];n=length(x);list(Reponse=qnorm(.975)*sqrt(.5*(1-.5)/n),'Distribution de frequence'=table(x))";
var ret = [enonce,command];
return(ret)
}


function example_iconfppessCamip(){
	var i =  parseInt(1+Math.random()*3);
switch(i) {
    case 1:
        var ret = iconfppessCamip1();
        break
    case 2:
       var ret = iconfppessCamip2();
        break
    case 3:
        var ret = iconfppessCamip3();
        break
    default:
	   alert("error");
}
	enonce = ret[0];
	command = ret[1];
	 setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
		$("#submitajax").click();	
	$("#ajaxoutput").focus();
}

function example_iconfppessCamipW(){
	var i =  parseInt(1+Math.random()*3);
switch(i) {
    case 1:
        var ret = iconfppessCamip1();
        break
    case 2:
       var ret = iconfppessCamip2();
        break
    case 3:
        var ret = iconfppessCamip3();
        break
    default:
	   alert("error");
}
	enonce = ret[0];
	command = ret[1];
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	 setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparamW(tkw,"x", readCamip+command);
		$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
	}


function iconfpoptiCamip1(){
var i = parseInt(15+Math.random()*14)
var enonce = "Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: "
enonce = enonce + "\""+vl[i]+ "\"";
var command =  "x=X$V"+(i+1)+"[which(X$V"+(i+1)+"!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;list(Reponse=qnorm(.975)*sqrt(p*(1-p)/n),'Distribution de frequences'=table(x))";
var ret = [enonce,command];
return(ret)
}
function iconfpoptiCamip2(){
var i = parseInt(4+Math.random()*10)
var enonce = "Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui ont";
enonce = enonce + "\""+vl[i]+ "\"";
var command =  "x=X$V"+(i+1)+"[which(X$V"+(i+1)+"!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;list(Reponse=qnorm(.975)*sqrt(p*(1-p)/n),'Distribution de frequences'=table(x))";
var ret = [enonce,command];
return(ret)
}
function iconfpoptiCamip3(){
var i = parseInt(29+Math.random()*9)
var enonce = "Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui donnent de l'importance à:  "
enonce = enonce + "\""+vl[i]+ "\"";
var command =  "x=X$V"+(i+1)+"[which(X$V"+(i+1)+"!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;list(Reponse=qnorm(.975)*sqrt(p*(1-p)/n),'Distribution de frequences'=table(x))";
var ret = [enonce,command];
return(ret)
}


function example_iconfpoptiCamip(){
	var i =  parseInt(1+Math.random()*3);
switch(i) {
    case 1:
        var ret = iconfpoptiCamip1();
        break
    case 2:
       var ret = iconfpoptiCamip2();
        break
    case 3:
        var ret = iconfpoptiCamip3();
        break
    default:
	   alert("error");
}
	enonce = ret[0];
	command = ret[1];
	 setExampleRequest(enonce,"POST", opencpurl + endpIdentity);
	addhttpparam("x", readCamip+command);
		$("#submitajax").click();	
	$("#ajaxoutput").focus();
}



function example_iconfpoptiCamipW(){
	var i =  parseInt(1+Math.random()*3);
switch(i) {
    case 1:
        var ret = iconfpoptiCamip1();
        break
    case 2:
       var ret = iconfpoptiCamip2();
        break
    case 3:
        var ret = iconfpoptiCamip3();
        break
    default:
	   alert("error");
}
	enonce = ret[0];
	command = ret[1];
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	 setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparamW(tkw,"x", readCamip+command);
		$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});}


function example_qchisq(){
    var pq =  parseInt(100*Math.random())/100; var dl =  parseInt(2+Math.random()*18)
var enonce = 'Calculez x, pour qui le quantile P(X <= x)= '+pq+' ou X suit une loi khi-deux avec '+dl+' degres de liberte.';
   var command ='qchisq('+pq+','+dl+')';
        setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
        addhttpparam("x", command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }

function example_pchisq(){
    var x =  parseInt(2+Math.random()*20); var dl =  parseInt(2+Math.random()*18); var iflower = parseInt(2*Math.random());
   var enonce = 'Calculez P(X '+ (iflower?"<=":">")+x+') où X suit une loi khi-deux avec '+dl+' degrés de liberté.';
   var command ='pchisq(' + x + ', '+dl+', lower.tail = '+(iflower?"T":"F")+')';
        setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
        addhttpparam("x", command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }

function example_plotPchisq(){
        if (!document.funhashkey)
                document.funhashkey = gethashkey2();
    if(document.funhashkey){
          setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
          $("#submitform").click();
          $("#outputframe").focus();
        }else{
        var x =  parseInt(2+Math.random()*20); var dl =  parseInt(2+Math.random()*18); var iflower = parseInt(2*Math.random());
var enonce = 'Faites le plot de P(X '+ (iflower?"<=":">")+x+') où X suit une loi khi-deux avec '+dl+' degrés de liberté.';
   var command ='plotPchisq<-function(xx,dl){x=0:35;  y=dchisq(x,dl);  mxy=max(y);  plot(x,y,t="l", main=paste("P(X ", "'+(iflower?">":"<=")+'",xx,"), dl=",dl));  lines(c(xx,xx),c(0,mxy),col="red")};x='+x+';dl='+dl+';plotPchisq(x,dl)'
    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
        addhttpparam("x", command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }
}

function example_pchisq2(){
    var a =  parseInt(2+Math.random()*20); var b = parseInt(2+Math.random()*20);var dl =  parseInt(2+Math.random()*18);   var aa=(a<b?a:b);var bb=(a<b?b:a)
var enonce = 'Calculez P('+aa+' <=X <= '+bb+') où X suit une loi khi-deux avec '+dl+' degrés de liberté.';
   var command ='pchisq(' + bb + ','+dl+')-pchisq('+aa+','+dl+')';
        setExampleRequest(enonce,"POST", opencpurl + endpIdentityJson);
        addhttpparam("x", command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }

function example_plotPchisq2(){
        if (!document.funhashkey)
                document.funhashkey = gethashkey2();
    if(document.funhashkey){
          setRequest("GET", opencpurl + "/ocpu/tmp/"+document.funhashkey+"/graphics/1");
          $("#submitform").click();
          $("#outputframe").focus();
        }else{
 var a =  parseInt(2+Math.random()*20); var b = parseInt(2+Math.random()*20);var dl =  parseInt(2+Math.random()*18);   var aa=(a<b?a:b);var bb=(a<b?b:a)
var enonce = 'Faites le plot de P('+aa+' <= X <= '+bb+') où X suit une loi khi-deux avec '+dl+' degrés de liberté.';
 var command ='plotPchisq2<-function(dl){x=0:35;  y=dchisq(x,dl);  mxy=max(y);  plot(x,y,t="l", main=paste("P(X'+aa+' <=X <= '+bb+'), (dl='+dl+') = ", round(pchisq('+bb+','+dl+')-pchisq('+aa+','+dl+'),3)));  lines(c('+a+','+a+'),c(0,mxy),col="blue");lines(c('+b+','+b+'),c(0,mxy),col="blue"); };dl='+dl+';plotPchisq2(dl)'


    setExampleRequest(enonce,"POST", opencpurl + endpIdentityPng);
        addhttpparam("x", command);
        $("#submitajax").click();
        $("#ajaxoutput").focus();
        }
}

function example_chi2univCamip(){
	var i = 41; while(i==41) i=parseInt(1+Math.random()*44);
enonce="Calculez la valeur du CHI2 de la variable V"+(i+1);
command ="x=X$V"+(i+1)+"[which(X$V"+(i+1)+"!=0)];tb=table(x);chsqt=chisq.test(tb, correct=FALSE);list(Resultat=chsqt[[1]], 'Quantile 5%' = qchisq(.95,dim(tb)-1), p=chsqt$p.value, Observe = chsqt$observed, Theorique=chsqt$expected)";
	 setExampleRequest(enonce,"POST", opencpurl + endpIdentityPrint);
	addhttpparam("x", readCamip+command);
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
}


function example_chi2univCamipW(){
	var i = 41; while(i==41) i=parseInt(1+Math.random()*44);
enonce="Calculez la valeur du CHI2 de la variable V"+(i+1);
command ="x=X$V"+(i+1)+"[which(X$V"+(i+1)+"!=0)];chisq.test(table(x), correct=FALSE)[[1]]";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	 setExampleRequestW(tkw,enonce,"POST", opencpurl + endpIdentityJson);
	addhttpparamW(tkw,"x", readCamip+command);
		$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
	}

function example_exampleCamip(){
	i =  parseInt(1+Math.random()*43);
	alert(vl[i]);
}
