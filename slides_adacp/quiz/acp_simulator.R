x1=as.integer(runif(20,1,8))
x2=as.integer(runif(20,1,8))
plot(x1,x2)
err=rnorm(20,0,2)
x3=.7*x1+err
x3=1+round(6*(x3-min(x3))/(max(x3)-min(x3)))
err=rnorm(20,0,2)
x4=-.6*x1+err
x4=1+round(6*(x4-min(x4))/(max(x4)-min(x4)))
err=rnorm(20,0,2)
x5=.7*x2+err
x5=1+round(6*(x5-min(x5))/(max(x5)-min(x5)))
df=data.frame(x1,x2,x3,x4,x5)
o=order(runif(5,1,1000))
df=df[,o]
.PC <- princomp(~x1+x2+x3+x4+x5, cor=FALSE, data=df)
unclass(loadings(.PC))  # component loadings
biplot(.PC)
plot(hclust(dist(.PC$scores[,1:2])))

.PC$sd^2  # component variances

#data for quiz
ss=as.matrix(df)
dim(ss)=c(20*5)
ss

dim(ss)=c(20,5)
df=data.frame(ss)


