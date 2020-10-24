df=c(130,122,89,104,116,100,85,113,108,116,99,78,106,94,98,105,86,64,104,102,73,94,59,84,91,83,95,68,101,89,80,47,26,94,57,38,29,48,57,39,51,40,64,35,51,62,70,68,58,40,65,66,59,52,48,57,70,61,58,64,39,60,48,36,53,62,51,64,31,47,40,42,52,51,39,23,42,37,24,32,41,52,24,36,37,38,42,21,32,29,148,186,171,135,160,151,183,130,163,154,188,190,157,173,37,155,140,132,119,143,128,152,130,102,96,87,114,123,98,117,69,74,132,68,94,83,96,73,82,98,117,112,67,78,81,42,44,32,40,36,30,42,25,41,48,32,40,38,29,36,45,33,36,29,41,30,36,28,32,35,30,28,26,24,33,32,33,20,26,23,28,22,26,28,21,24,22,29,25,26)
dim(df)=c(45,4)
df=data.frame(df) # donnees concours de ventes p.49-50
g=rep(1:3, each=15) # groupes 1=bons, 2=moyens et 3=mauvais ..vendeurs
library(MASS) #charge package qui contient l'analyse discriminante
ad=lda(g~df$X1+df$X2+df$X3+df$X4) #effectue l'analyse discriminante et affecte les infos a l'objet ad
ad$mean #moyennes des variables par groupes
mgc1=scale(df[1:15,],center=TRUE,scale=FALSE)#matrice centrée du groupe 1
W1=t(mgc1) %*% mgc1/15 # matrice de variances du groupe 1 (variance intra groupe, eng. within groupe)
mgc2=scale(df[16:30,],center=TRUE,scale=FALSE)#matrice centrée du groupe 2

W2=t(mgc2) %*% mgc2/15 # matrice de variances du groupe 2 (variance intra groupe, eng. within groupe)
mgc3=scale(df[31:45,],center=TRUE,scale=FALSE)#matrice centrée du groupe 3
W3=t(mgc3) %*% mgc3/15 # matrice de variances du groupe 3 (variance intra groupe,eng. :q:within groupe)
PW=(W1+W2+W3)/3 # matrice des variances intragroupe moyenne (eng. variance pooled within groupes)
mgc=scale(ad$mean,center=TRUE,scale=FALSE) #matrice centrée des moyennes des variables par groupes
t(mgc) %*% mgc/3 #matrice des variances/covariances intergroup (eng. Between groupes)
ad$scaling # coefficients des fonctions (axes) discriminantes (p.53-54)
predict(ad) #calcul des scores discriminants (p. 54-55)
mean(predict(ad)$x[1:30,1] # cutting score entre le groupe 1 et 2 (sur le premier axe discriminant, p.55)
mean(predict(ad)$x[16:45,1] # cutting score entre le groupe 2 et 3 (sur le premier axe discriminant, p.55)
mcf=xtabs(~g+predict(ad)$class) # matrice des confusion (p.56)
sum(diag(mcf)/45) # hit rate (p.56)
