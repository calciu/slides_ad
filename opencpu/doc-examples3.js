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

function example_example(){
	alert("A red button indicates an example demo.");
	//window.open("mc_toolkit.html")
}

function example_executefunction(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/stats/rnorm/json");
	addhttpparamW(tkw,"n", "15");
	addhttpparamW(tkw,"mean", "10");
	$("#submitajax").click();	
	$("#ajaxoutput").focus();
	});
}

function example_executefunctionW(){
	var tkw = window.open("mc_explorer.html");
	$(tkw).load(function(){
	setExampleRequestW(tkw, "This is an Example", "POST", "http://marketing.iae.univ-lille1.fr/R/pub/stats/rnorm/json");
	addhttpparamW(tkw, "n", "15");
	addhttpparamW(tkw, "mean", "10");
    $("#submitajax", tkw.document).click();
	$("#ajaxoutput", tkw.document).focus();
	});
}

function example_readfunction(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/stats/rnorm/ascii");
	$("#submitajax").focus();
	$("#submitajax").click();	
	});
}

function example_readfunctionW(){
	var tkw = window.open("mc_toolkit.html");
	$(tkw).load(function(){
	setRequestW(tkw, "GET", "http://marketing.iae.univ-lille1.fr/R/pub/stats/rnorm/ascii");
    $("#submitajax", tkw.document).focus();
    $("#submitajax",tkw.document).click();
	});
}

function example_plotpng(){
    var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/ggplot2/qplot/png");
	addhttpparamW("x", "speed");
	addhttpparamW("y", "dist");
	addhttpparamW("data", "cars");
	addhttpparamW("geom", '["point", "smooth"]');
	$("#outputframe").hide();
	$("#ajaxoutput").hide();	
	setTimeout('$("#submitblank").click();', 500);	
	});
}

function example_plotpngW(){
	var tkw = window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw, "POST", "http://marketing.iae.univ-lille1.fr/R/pub/ggplot2/qplot/png");
	addhttpparamW(tkw, "x", "speed");
	addhttpparamW(tkw, "y", "dist");
	addhttpparamW(tkw, "data", "cars");
	addhttpparamW(tkw, "geom", '["point", "smooth"]');
	
	$("#outputframe").hide();
	$("#ajaxoutput").hide();
	
   });	
	setTimeout('$("#submitblank").click();', 500);	

}

function example_plotpdf(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/ggplot2/qplot/pdf");
	addhttpparamW(tkw,"x", "speed");
	addhttpparamW(tkw,"y", "dist");
	addhttpparamW(tkw,"data", "cars");
	addhttpparamW(tkw,"geom", '["point", "smooth"]');
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);
	});
}

function example_plotpdfW(){
	tkw = window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw, "POST", "http://marketing.iae.univ-lille1.fr/R/pub/ggplot2/qplot/pdf");
	addhttpparamW(tkw, "x", "speed");
	addhttpparamW(tkw, "y", "dist");
	addhttpparamW(tkw, "data", "cars");
	addhttpparamW(tkw, "geom", '["point", "smooth"]');
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);
	});
}


function example_plotsvg(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/ggplot2/qplot/svg");
	addhttpparamW(tkw,"x", "speed");
	addhttpparamW(tkw,"y", "dist");
	addhttpparamW(tkw,"data", "cars");
	addhttpparamW(tkw,"geom", '["point", "smooth"]');
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);	
	});
}

function example_listpub(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub");
	$("#submitajax").click();
	});
}

function example_liststats(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/stats");
	$("#submitajax").click();
	});
}

function example_listpuboutputs(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/datasets/iris");
	$("#submitajax").click();	
	});
}

function example_getobject1(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/stats/lm/ascii");
	$("#submitajax").click();		
	});
}

function example_getobject2(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/datasets/iris/json");
	$("#submitajax").click();		
	});
}

function example_getobject3(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/datasets/iris/csv");
	$("#submitajax").click();		
	});
}

function example_callwithsave(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/stats/rnorm/save");
	addhttpparamW(tkw,"n", "15");
	addhttpparamW(tkw,"mean", "10");
	$("#submitajax").click();	
	});
}

function example_callsweave(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/utils/Sweave/save");
	addhttpparamW(tkw,"file", "system.file('Sweave','Sweave-test-1.Rnw', package='utils')");
	$("#submitajax").click();		
	});
}

function example_manyplots(){
	document.plothashkey = null;
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/base/identity/save");
	addhttpparamW(tkw,"x", "plot(lm(speed~dist, cars))");
	$("#submitajax").click();
	});
}

function example_carslm(){
	document.lmhashkey = null;
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/stats/lm/save");
	addhttpparamW(tkw,"formula", "speed~dist");
	addhttpparamW(tkw,"data", "cars");
	$("#submitajax").click();
	});
}

function example_getlm(){
	if(!document.lmhashkey) document.lmhashkey = gethashkey("object");
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/tmp/" + document.lmhashkey + "/print");
	$("#submitajax").click();
	});
}

function example_lmsummary(){
	if(!document.lmhashkey) document.lmhashkey = gethashkey("object");
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/base/summary/print");
	addhttpparamW(tkw,"object", document.lmhashkey);
	$("#submitajax").click();	
	});
}

function example_lmplot(){
	if(!document.lmhashkey) document.lmhashkey = gethashkey("object");
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/graphics/plot/save");
	addhttpparamW(tkw,"x", document.lmhashkey);
	$("#submitajax").click();	
	});
}

function example_storefun(){
	document.funhashkey = null;
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/base/identity/save");
	addhttpparamW(tkw,"x", "function(n) {mydata <- rnorm(n); print(lattice::histogram(mydata)); return(n);} ");
	$("#submitajax").click();		
	});
}

function example_readfun(){
	if(!document.funhashkey) document.funhashkey = gethashkey("object");
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/tmp/" + document.funhashkey + "/ascii");
	$("#submitajax").click();		
	});
}

function example_callfun(){
	if(!document.funhashkey) document.funhashkey = gethashkey("object");
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/tmp/" + document.funhashkey + "/png");
	addhttpparamW(tkw,"n", "1000");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);		
	});
}

function example_listusers(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/user");
	$("#submitajax").click();		
	});
}

function example_listuserstores(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/user/jeroenooms");
	$("#submitajax").click();		
	});
}

function example_liststoreobjects(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/user/jeroenooms/mystore");
	$("#submitajax").click();		
	});
}

function example_readuserobject(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/user/jeroenooms/mystore/myfunction/ascii");
	$("#submitajax").click();		
	});
}

function example_calluserfunction(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/user/jeroenooms/mystore/myfunction/json");
	addhttpparamW(tkw,"x", "1234");
	$("#submitajax").click();		
	});
}

function example_argumentprimitive(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/base/list/json");
	addhttpparamW(tkw,"foo", "3.1415e-4");
	addhttpparamW(tkw,"bar", '"AYBABTU"');
	addhttpparamW(tkw,"baz", "TRUE");
	$("#submitajax").click();		
	});
}

function example_argumentjson(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/stats/sd/json");
	addhttpparamW(tkw,"x", "[1,2,3,4,5,6,7,8,9]");
	$("#submitajax").click();	
});}

function example_argumentcode(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/base/identity/json");
	addhttpparamW(tkw,"x", "foo <- 123; bar <- 456; foo + bar;");
	$("#submitajax").click();	
});}

function example_argumenturl(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/graphics/plot/save");
	addhttpparamW(tkw,"x", "http://127.0.0.1http://marketing.iae.univ-lille1.fr/R/pub/datasets/cars/rds");
	$("#submitajax").click();	
});}

function example_uploadfilerds(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/base/identity/json");
	addhttpfile("x");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
});
}

function example_uploadfilefile(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/utils/read.csv/save");
	addhttpfile("!file:file");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
});
}

function example_uploadfilecopy(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/base/identity/json");
	addhttpfile("!copy:myfilename");
	addhttpparamW(tkw,"x", "read.csv(myfilename)");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
});}

function example_getplotpng(){
	if(!document.plothashkey) document.plothashkey = gethashkey("plot");
	if(!document.plothashkey) return;
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/tmp/" + document.plothashkey + "/png");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);		
});}

function example_getplotpnglarge(){
	if(!document.plothashkey) document.plothashkey = gethashkey("plot");;
	if(!document.plothashkey) return;
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/tmp/" + document.plothashkey + "/png");
	addhttpparamW(tkw,"!width", "1000");
	addhttpparamW(tkw,"!height", "600");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);		
});}

function example_getplotpdf(){
	if(!document.plothashkey) document.plothashkey = gethashkey("plot");
	if(!document.plothashkey) return;
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/tmp/" + document.plothashkey + "/pdf");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);		
});}

function example_getplotsvg(){
	if(!document.plothashkey) document.plothashkey = gethashkey("plot");
	if(!document.plothashkey) return;
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/tmp/" + document.plothashkey + "/svg");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);		
});}

function example_carsjson(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/datasets/cars/json");
	$("#submitajax").click();	
});}

function example_carsencode(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/datasets/cars/encode");
	$("#submitajax").click();	
});}

function example_carscsv(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/datasets/cars/csv");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);		
});}

function example_carstable(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/datasets/cars/table");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);		
});}

function example_carsascii(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/datasets/cars/ascii");
	$("#submitajax").click();	
});}

function example_carsrds(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/datasets/cars/rds");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);		
});}

function example_carsrda(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/datasets/cars/rda");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);		
});}

function example_outputfile(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/base/system.file/file");
	addhttpparamW(tkw,"...", '"DESCRIPTION"');
	addhttpparamW(tkw,"package", '"grid"');
	$("#submitajax").click();	
});}

function example_savefile(){
	document.filehashkey = null;
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/utils/write.csv/save");
	addhttpparamW(tkw,"x", "cars");
	addhttpparamW(tkw,"file", '"mycsvfile.csv"');
	$("#submitajax").click();		
});}

function example_getstoredfile(){
	if(!document.filehashkey) document.filehashkey = gethashkey("file");	
	if(!document.filehashkey) return;
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/tmp/" + document.filehashkey + "/bin");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);		
});}

function example_helptext(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/stats/glm/help/text");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);		
});}

function example_helppdf(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/stats/glm/help/pdf");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);	
});}

function example_helphtml(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/stats/glm/help/html");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);	
});}

function example_helpjson(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "http://marketing.iae.univ-lille1.fr/R/pub/stats/glm/help/json");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);	
});}

function example_summarycars(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/base/summary/print");
	addhttpparamW(tkw,"object", 'cars');
	$("#submitajax").click();		
});}

function example_login(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "/auth/login");
	$("#outputframe").hide();
	$("#ajaxoutput").hide();		
	setTimeout('$("#submitblank").click();', 500);		
});}

function example_logout(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "/auth/logout");
	$("#submitajax").click();		
});}

function example_getclientid(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/base/identity/ascii");
	addhttpparamW(tkw,"x", 'config("github.clientid")');
	$("#submitajax").click();		
});}

function example_gethome(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "/home");
	$("#submitajax").click();		
});}

function example_installpackage(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/utils/install.packages/save");
	addhttpparamW(tkw,"pkgs", '"memoise"');
	$("#submitajax").click();	
});}

function example_copypackage(){
	var myhashkey = gethashkey("file");
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"PUT", "/home/memoise");
	addhttpparamW(tkw,"package", myhashkey);
	$("#submitajax").click();		
});}

function example_getpackage(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "/home/memoise");
	$("#submitajax").click();		
});}

function example_deletepackage(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"DELETE", "/home/memoise");
	$("#submitajax").click();		
});}

//STORE

function example_createstore(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"PUT", "/home/demostore");	
	$("#submitajax").click();	
});}

function example_createobject(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/pub/base/identity/save");
	addhttpparamW(tkw,"x", "function(x) {sum(x^2)}");
	$("#submitajax").click();	
});}

function example_copytostore(){
	var myhashkey = gethashkey("object");	
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"PUT", "/home/demostore/myfunction");
	addhttpparamW(tkw,"object", myhashkey);	
	$("#submitajax").click();
});}

function example_callhomefunction(){
	var username = "jeroenooms";
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"POST", "http://marketing.iae.univ-lille1.fr/R/user/" + username + "/demostore/myfunction/json");
	addhttpparamW(tkw,"x", "[1,2,3,4,5]");	
	$("#submitajax").click();
});}

function example_getobjectfromstore(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "/home/demostore/myfunction");
	setTimeout('$("#submitblank").click();', 500);			
});}

function example_getwholestore(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"GET", "/home/demostore");
	setTimeout('$("#submitblank").click();', 500);		
});}

function example_deleteobject(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"DELETE", "/home/demostore/myfunction");
	$("#submitajax").click();	
});}

function example_deletestore(){
	var tkw=window.open("mc_explorer.html");
	$(tkw).load(function(){
	setRequestW(tkw,"DELETE", "/home/demostore");
	$("#submitajax").click();		
});}
