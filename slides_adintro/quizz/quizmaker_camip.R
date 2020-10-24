X <- 
  read.table("/Users/mihai/Documents/MyWebSites/Claree/Rweb/cases/camip/camip.txt",
   header=TRUE, sep="", na.strings="NA", dec=".", strip.white=TRUE)
#Variable labels
vl=rep("",ncol(X))
vl[1]='Pourcentage des produits achetés par catalogue'
vl[2]="Disponibilité d'acheter par le catalogue CAMIP"
vl[3]='Déjà commande du catalogue CAMIP'
vl[4]="Confiance dans l'achat d'ordinateurs par catalogue"
vl[5]="Confiance dans l'achat d'imprimantes de sport par catalogue"
vl[6]="Confiance dans l'achat de scanners par catalogue"
vl[7]="Confiance dans l'achat de disquettes par catalogue"
vl[8]="Confiance dans l'achat de logiciels par catalogue"
vl[9]="Confiance dans l'achat d'ordinateurs en magasin"
vl[10]="Confiance dans l'achat d'imprimantes en magasin"
vl[11]="Confiance dans l'achat de scanners en magasin"
vl[12]="Confiance dans l'achat de disquettes en magasin"
vl[13]="Confiance dans l'achat de logiciels en magasin"
vl[14]='Nombre de produits achetés'
vl[15]='CAMIP vend une ligne de produits de haute qualité'
vl[16]='CAMIP offre tout les marques les plus populaires'
vl[17]='CAMIP a un catalogue de très haute qualité'
vl[18]='La description des produits dans le catalogue CAMIP est très précise'
vl[19]='La sélection de produits dans le catalogue CAMIP est très large'
vl[20]="Probabilité réduite que la marchandise soie perdue pendant l'envoie"
vl[21]="Pas besoin de ce consulter avec quelqu'un qui a déjà acheté"
vl[22]="Confiance qu'on livre le produit illustre dans le catalogue"
vl[23]="L'achat par catalogue économise du temps"
vl[24]='Pas difficile de négocier le prix'
vl[25]='Achat du catalogue avec le formulaire le plus simple a remplir'
vl[26]='La marchandise du catalogue est moins chère'
vl[27]='Les catalogues livrent la marchandise au domicile'
vl[28]="Prix bas (catal.) parce qu'on ne doit pas payer des vendeurs"
vl[29]='Possibilité de placer un nombre illimité de commandes'
vl[30]='Disponibilité de discounts pour la quantité achetée est un élément important'
vl[31]='Durée de la livraison est un élément important'
vl[32]='Politique de la société visant le retour de la marchandise est un élément important'
vl[33]="Prévision d'une période d'essai est un élément important"
vl[34]='Années de présence de la société sur le marche est un élément important'
vl[35]='Réputation de la société est un élément important'
vl[36]='Garanties sont un élément important'
vl[37]='Contacte de la société avec les grandes marques etc.'
vl[38]="Préférence d'acheter"
vl[39]="Revenu avant impôt de la famille l'année dernière"
vl[40]='Occupation courante'
vl[41]='Années de travail'
vl[42]='Etat civil'
vl[43]='Sexe'

#Value labels
il1=c("0 %","1-10%","11-15%","16-20%","21% et plus")
il2=c("Pas disponible", "Eventuellement disponible", "Tres disponible")
il3=c("Jamais", "Commande avant", "Commande cette annee")
il4_13=c("Pas du tout confiant", "Pas confiant", "Peut-etre confiant", "Confiant", "Tres confiant")
il14=c("0-1", "2-3", "4-5", "6-7", "8 ou plus")
il15_28=c("Pas du tout daccord", "Pas daccord", "Neutre", "d'accord", "Tout afait d'accord")
il29_37=c("Pas du tout important", "Pas important", "Neutre", "Important", "Tres important")
il38=c("dans un magasin specialise", "dans un magasin discounter", "par catalogue", "par telephone", "par vendeurs qui appellent à la maison")
il39=c("0F - 89999F", "90000F - 149999F", "150000F - 209999F", "210000F - 269999F", "270000F et plus")
il40=c("Productifs", "Autres")
il42=c("seul", "marié", "séparé", "divorcé", "veuve")
il43=c("homme", "femme")
ilst=list(il1,il2,il3,il4_13,il14,il15_28,il29_37,il38,il39,il40,il42,il43)
vil=c(1:3,rep(4,10), 5,rep(6,14),rep(7,9),8:10,11,12)
aRweb="(<a href=\"http://localhost/Claree/Rweb\">Vous pouvez utiliser le système statique R</a>)" 
ch=1;cas="camip";qn=0;qt=1;
for(i in (1:ncol(X))[-41]){
qn=qn+1;time=substr(Sys.time(),1,19); cat(paste("(q",qn,"t",qt,":ch",ch,"-",cas,":",time,")",sep=""),"Combien de réponses manquantes y à-t-il dans la variable", paste("V",i+1,sep=""),aRweb,paste("{#",length(X[,i][X[,i]==0]),".0 }",sep=""),"\n//length(",paste("X$V",i+1,"[X$V",i+1,"==0]",sep=""),")\n\n")
}
qt=qt+1
for(i in (1:ncol(X))[-41]){
qn=qn+1;time=substr(Sys.time(),1,19); cat(paste("(q",qn,"t",qt,":ch",ch,"-",cas,":",time,")",sep=""),"Quelle est la moyenne de la variable ", paste("V",i+1,sep=""),aRweb,paste("{#",mean(X[,i][X[,i]==0]),".0 }",sep=""),"\n//mean(",paste("X$V",i+1,"[X$V",i+1,"==0]",sep=""),")\n\n")
}
qt=qt+1
for(i in (1:ncol(X))[-41]){
qn=qn+1;time=substr(Sys.time(),1,19); cat(paste("(q",qn,"t",qt,":ch",ch,"-",cas,":",time,")",sep=""),"Quelle est la moyenne des codes de réponse à la question:", vl[i],aRweb,paste("{#",mean(X[,i][X[,i]==0]),".0 }",sep=""),"\n//mean(",paste("X$V",i+1,"[X$V",i+1,"==0]",sep=""),")\n\n")
}
qt=qt+1
for(i in (1:ncol(X))[-41]){
qn=qn+1;time=substr(Sys.time(),1,19); cat(paste("(q",qn,"t",qt,":ch",ch,"-",cas,":",time,")",sep=""),"Combien de réponses manquantes y à-t-il à la question:", vl[i],aRweb,paste("{#",length(X[,i][X[,i]==0]),".0 }",sep=""),"\n//length(",paste("X$V",i+1,"[X$V",i+1,"==0]",sep=""),")\n\n")
}
qt=qt+1
for(i in (1:ncol(X))[-41]){
 k=ifelse(i<=40,i,i-1)
 for(j in 1:length(ilst[[vil[k]]])){
  qn=qn+1;time=substr(Sys.time(),1,19); cat(paste("(q",qn,"t",qt,":ch",ch,"-",cas,":",time,")",sep=""),"A la question: - ", vl[i], "Combien de réponses: ", ilst[[vil[k]]][j] , "y a-t-il?",aRweb,paste("{#",ifelse(i!=40,table(X[,i][X[,i]!=0])[j],table(X[,i])[j]),"}",sep=""),"\n//",ifelse(i!=40,paste("table(X[,",i,"][X[,",i,"]!=0])[",j,"]", sep=""),paste("table(X[,",i,"])[",j,"]",sep="")),"\n\n")
 }
}
qt=qt+1
for(i in (4:13)){
qn=qn+1;time=substr(Sys.time(),1,19); cat(paste("(q",qn,"t",qt,":ch",ch,"-",cas,":",time,")",sep=""),"Combien de personnes n'ont pas", vl[i],aRweb,paste("{#",length(X[,i][X[,i]<=2]),".0 }",sep=""),"\n//length(",paste("(X[,",i,"][X[,",i,"]<=2]",sep=""),"\n\n")
}
for(i in (14:19)){
qn=qn+1;time=substr(Sys.time(),1,19); cat(paste("(q",qn,"t",qt,":ch",ch,"-",cas,":",time,")",sep=""),"Combien de personnes pensent", vl[i],aRweb,paste("{#",length(X[,i][X[,i]>3]),".0 }",sep=""),"\n//length(",paste("(X[,",i,"][X[,",i,"]>3]",sep=""),"\n\n")
}
for(i in (20:37)){
qn=qn+1;time=substr(Sys.time(),1,19); cat(paste("(q",qn,"t",qt,":ch",ch,"-",cas,":",time,")",sep=""),"Combien de personnes pensent qu'en vente par correspondence", vl[i],aRweb,paste("{#",length(X[,i][X[,i]>3]),".0 }",sep=""),"\n//length(",paste("(X[,",i,"][X[,",i,"]>3]",sep=""),"\n\n")
}
