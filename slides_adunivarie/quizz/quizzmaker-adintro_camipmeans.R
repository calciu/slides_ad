
X <- read.table("/Users/mihai/Documents/MyWebSites/Claree/Rweb/cases/camip/camip.txt",
   header=TRUE, sep="", na.strings="NA", dec=".", strip.white=TRUE)
aRweb="(<a href=\"http://localhost/Claree/Rweb\">Vous pouvez utiliser le système statique R</a>)" 
q="Quelle est la moyenne de la variable"
for(i in 1:43){
cat(q," ", paste("V",i+1,sep=""),aRweb ,paste("{#",mean(X[i][X[i]>0]), ":0.01}",sep=""),"\n\n")
}
