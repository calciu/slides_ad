mn=10;mx=1000;sz=100
d = round(runif(sz,mn,mx),0)
sd=sort(d)
cf = cumsum(sd)/sum(d)
qztx="Calculez le percentile d'odre "
for(i in 2:19){
  paste(qztx, i/20)
}