aRweb="(<a href=\"http://claree.univ-lille1.fr/Rweb\">Vous pouvez utiliser le système statique R</a>)" 
q="Determiner le quantile de la loi normale centrée réduite tel que"
lPX2x=list(lt="P(X<=x)",gt="PX=>x")  
nq=100
for(i in runif(nq,0,1){
cat(q," ", paste("V",i+1,sep=""),aRweb ,paste("{#",mean(X[i][X[i]>0]), ":0.01}",sep=""),"\n\n")
}
