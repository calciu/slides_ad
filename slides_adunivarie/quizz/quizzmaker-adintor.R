// interv de conf moyenne

L'association des �tudiants d'une universit� envisage d'ouvrir un cin�-club; afin d'en �valuer la fr�quentation, elle a r�alis� une enqu�te par sondage sur un �chantillon de 1000 individus. Une moyenne de fr�quentation de 10 s�ances par an et par individu a �t� obtenue avec un �cart type s = 20. Le nombre r�el de fr�quentations (� un seuil de confiance de 95%) oscilera autour de 10 avec + ou - : {#1.239613:0.01}
//z=1.96;n=1000;s=20;z*s/sqrt(n) 

L'association des �tudiants d'une universit� envisage d'ouvrir un cin�-club; afin d'en �valuer la fr�quentation, elle a r�alis� une enqu�te par sondage sur un �chantillon de 500 individus. Une moyenne de fr�quentation de 20 s�ances par an et par individu a �t� obtenue avec un �cart type s = 30. Le nombre r�el de fr�quentations (� un seuil de confiance de 95%) oscilera autour de 20 avec + ou - : {#2.629616:0.01}
//z=1.96;n=500;s=30;z*s/sqrt(n) 


L'association des �tudiants d'une universit� de 2000 �tudiants envisage d'ouvrir un cin�-club; afin d'en �valuer la fr�quentation, elle a r�alis� une enqu�te par sondage sur un �chantillon de 1000 individus. Une moyenne de fr�quentation de 10 s�ances par an et par individu a �t� obtenue avec un �cart type s = 20. Le nombre r�el de fr�quentations (� un seuil de confiance de 95%) oscilera autour de 10 avec + ou - : {#0.8767579:0.01}
//z=1.96;s=20;n=1000;N=2000;z*s/sqrt(n)*sqrt((N-n)/(N-1))


L'association des �tudiants d'une universit� 2000 �tudiants envisage d'ouvrir un cin�-club; afin d'en �valuer la fr�quentation, elle a r�alis� une enqu�te par sondage sur un �chantillon de 500 individus. Une moyenne de fr�quentation de 20 s�ances par an et par individu a �t� obtenue avec un �cart type s = 30. Le nombre r�el de fr�quentations (� un seuil de confiance de 95%) oscilera autour de 20 avec + ou - : {#2.277884:0.01}
//z=1.96;s=30;n=500;N=2000;z*s/sqrt(n)*sqrt((N-n)/(N-1))


L'association des �tudiants d'une universit� envisage d'ouvrir un cin�-club; afin d'en �valuer la fr�quentation, elle a r�alis� une enqu�te par sondage sur un �chantillon de 21 individus. Une moyenne de fr�quentation de 15 s�ances par an et par individu suit une loi de Student � 20 degr�s de libert�, avec un �cart type s = 20. Le nombre r�el de fr�quentations (� un seuil de confiance de 95%) oscilera autour de 15 avec + ou - : {#9.10389:0.01}
//qt(.975,20)*20/sqrt(21) 



Dans le cadre d'une �tude de notori�t�, 25 % des personnes interrog�es ont d�clar� conna�tre la marque M. Un �chantillon al�atoire non exhaustif de 1000 individus a �t� utilis�. Dans une approche pessimiste la vraie proportion (� un seuil de confiance de 95%) oscilera autour de 25% avec + ou - : {#0.01581139:001}
// n=1000;sqrt((0.5*(1-0.5))/n)

Dans le cadre d'une �tude de notori�t�, 25 % des personnes interrog�es ont d�clar� conna�tre la marque M. Un �chantillon al�atoire non exhaustif de 1000 individus a �t� utilis�. Dans une approche optimiste la vraie proportion (� un seuil de confiance de 95%) oscilera autour de 25% avec + ou - : {#0.01369306:001}
// n=1000;p=.25;sqrt((p*(1-p))/n)


Dans le cadre d'une �tude de notori�t�, 25 % des personnes interrog�es ont d�clar� conna�tre la marque M. Un �chantillon al�atoire non exhaustif de 1000 individus a �t� utilis�. Quelle est la diff�rence de pr�cision entre l'approche pessimiste et optimiste (� un seuil de confiance de 95%) de cette estimation: {#0.002118324:0001}
// n=1000;p=.25;sqrt(0.5*(1-0.5)/n)-sqrt((p*(1-p))/n)

Le seuil de rentabilit� d'un produit industriel nouveau s'�l�ve � 50 unit�s vendues par consomateur. Sur un �chantillon de 100 consommateurs, une intention d'achat moyenne de 62 a �t� rep�r�e, avec un �cart-type de 60.Quel type de test d'hypoth�se est applicables ici:{~unilat�ral gauche, ~bilat�ral, =unilat�ral droit}

Le seuil de rentabilit� d'un produit industriel nouveau s'�l�ve � 50 unit�s vendues par consomateur. Sur un �chantillon de 100 consommateurs, une intention d'achat moyenne de 62 a �t� rep�r�e, avec un �cart-type de 60. Est-ce que le risque de tomber en desous du seuil de rentabilit� peut �tre rejet� avec un seuil de risque de 2.5% ?{=Oui,~non}
//n=100;xs=50;xm=62;s=60;(xm - xs)/s*sqrt(n) > qnorm(.975, 0,1)

Le seuil de rentabilit� d'un produit industriel nouveau s'�l�ve � 50 unit�s vendues par consomateur. Sur un �chantillon de 100 consommateurs, une intention d'achat moyenne de 62 a �t� rep�r�e, avec un �cart-type de 60. Est-ce que le risque de tomber en desous du seuil de rentabilit� peut �tre rejet� avec un seuil de risque de 5% ?{=Oui,~non}
//xs=50;xm=62;s=60;(xm - xs)/s*sqrt(n) > qnorm(.95, 0,1)

Le seuil de rentabilit� d'un produit industriel nouveau s'�l�ve � 50 unit�s vendues par consomateur. Sur un �chantillon de 100 consommateurs, une intention d'achat moyenne de 62 a �t� rep�r�e, avec un �cart-type de 60. Quel est le risque de se trouver sous le seuil de rentabilit� (avec une pr�cision de 0.001) ? {#0.02275013:0.001}
//n=100;xs=50;xm=62;s=60;1-pnorm((xm - xs)/s*sqrt(n))


Le seuil de rentabilit� d'un produit industriel nouveau s'�l�ve � 50 unit�s vendues par consomateur. Sur un �chantillon de 100 consommateurs, une intention d'achat moyenne de 56 a �t� rep�r�e, avec un �cart-type de 60.Quel type de test d'hypoth�se est applicables ici:{~unilat�ral gauche, ~bilat�ral, =unilat�ral droit}

Le seuil de rentabilit� d'un produit industriel nouveau s'�l�ve � 50 unit�s vendues par consomateur. Sur un �chantillon de 100 consommateurs, une intention d'achat moyenne de 56 a �t� rep�r�e, avec un �cart-type de 60. Est-ce que le risque de tomber en desous du seuil de rentabilit� peut �tre rejet� avec un seuil de risque de 2.5% ?{~Oui,=Non}
//n=100;xs=50;xm=56;s=60;(xm - xs)/s*sqrt(n) > qnorm(.975, 0,1)

Le seuil de rentabilit� d'un produit industriel nouveau s'�l�ve � 50 unit�s vendues par consomateur. Sur un �chantillon de 100 consommateurs, une intention d'achat moyenne de 56 a �t� rep�r�e, avec un �cart-type de 60. Est-ce que le risque de tomber en desous du seuil de rentabilit� peut �tre rejet� avec un seuil de risque de 5% ?{~Oui,=Non}
//n=100;xs=50;xm=56;s=60;(xm - xs)/s*sqrt(n) > qnorm(.95, 0,1)

Le seuil de rentabilit� d'un produit industriel nouveau s'�l�ve � 50 unit�s vendues par consomateur. Sur un �chantillon de 100 consommateurs, une intention d'achat moyenne de 56 a �t� rep�r�e, avec un �cart-type de 60. Quel est le risque de se trouver sous le seuil de rentabilit� (pr�cision 0.001)? {#0.1586553:0.001}
//n=100;xs=50;xm=56;s=60;1-pnorm((xm - xs)/s*sqrt(n))

Le taux de notori�t� de la marque M mesur� sur un �chantillon de 1000 consommateurs � la suite d'une campagne publicitaire �tait de 25%. Le taux de notori�t� pr�c�demment connu s'�levait � 21%. Peut-on en conclure que la publicit� a fait augmenter de façon significative la connaissance de la marque ? {=Oui,~Non}
//n=1000;ps=0.21;p=0.25;(p-ps)/sqrt(.5*(1-.5)/n) > qnorm(.975)

Le taux de notori�t� de la marque M mesur� sur un �chantillon de 1000 consommateurs � la suite d'une campagne publicitaire �tait de 25%. Le taux de notori�t� pr�c�demment connu s'�levait � 21%. Quel est le risque que la campagne n'ait pas eu d'effet sur la notori�t�? (pr�cision 0.0001){#0.005706018:0.001}
//n=1000;ps=0.21;p=0.25;1-pnorm((p-ps)/sqrt(.5*(1-.5)/n))

Calculez l'intervalle de confiance positif de la moyenne de la variable V5. {#0.2682747:0.001} 
//x=V5[which(V5!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V6. {#0.2572472:0.001} 
//x=V6[which(V6!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V7. {#0.2598555:0.001} 
//x=V7[which(V7!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V8. {#0.2788008:0.001} 
//x=V8[which(V8!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V9. {#0.2737313:0.001} 
//x=V9[which(V9!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V10. {#0.2251080:0.001} 
//x=V10[which(V10!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V11. {#0.2038563:0.001} 
//x=V11[which(V11!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V12. {#0.2020547:0.001} 
//x=V12[which(V12!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V13. {#0.2157455:0.001} 
//x=V13[which(V13!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V14. {#0.2134739:0.001} 
//x=V14[which(V14!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V15. {#0.2739686:0.001} 
//x=V15[which(V15!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V16. {#0.2374606:0.001} 
//x=V16[which(V16!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V17. {#0.2731481:0.001} 
//x=V17[which(V17!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V18. {#0.2720042:0.001} 
//x=V18[which(V18!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V19. {#0.2751966:0.001} 
//x=V19[which(V19!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V20. {#0.2545165:0.001} 
//x=V20[which(V20!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V21. {#0.1806396:0.001} 
//x=V21[which(V21!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V22. {#0.2103114:0.001} 
//x=V22[which(V22!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V23. {#0.2096156:0.001} 
//x=V23[which(V23!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V24. {#0.1779011:0.001} 
//x=V24[which(V24!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V25. {#0.2152163:0.001} 
//x=V25[which(V25!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V26. {#0.2015968:0.001} 
//x=V26[which(V26!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V27. {#0.2351618:0.001} 
//x=V27[which(V27!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V28. {#0.2179877:0.001} 
//x=V28[which(V28!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V29. {#0.2258618:0.001} 
//x=V29[which(V29!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)


Calculez l'intervalle de confiance positif de la moyenne de la variable V30. {#0.1794424:0.001} 
//x=V30[which(V30!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V31. {#0.1661561:0.001} 
//x=V31[which(V31!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V32. {#0.1842989:0.001} 
//x=V32[which(V32!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V33. {#0.1495671:0.001} 
//x=V33[which(V33!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V34. {#0.1924682:0.001} 
//x=V34[which(V34!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V35. {#0.16962:0.001} 
//x=V35[which(V35!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V36. {#0.2103589:0.001} 
//x=V36[which(V36!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V37. {#0.1681907:0.001} 
//x=V37[which(V37!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V38. {#0.1701355:0.001} 
//x=V38[which(V38!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V39. {#0.2290085:0.001} 
//x=V39[which(V39!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V40. {#0.2485936:0.001} 
//x=V40[which(V40!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)


Calculez l'intervalle de confiance positif de la moyenne de la variable V42. {#2.010007:0.001} 
//x=V42[which(V42!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V43. {#0.2463611:0.001} 
//x=V43[which(V43!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif de la moyenne de la variable V44. {#0.08826012:0.001} 
//x=V44[which(V44!=0)];n=length(x);s=sd(x);1.96*s/sqrt(n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui ont "Confiance dans l'achat d'ordinateurs par catalogue" {#0.0880066:0.001}
//x=V5[which(V5!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui ont "Confiance dans l'achat d'imprimantes de sport par catalogue" {#0.0880066:0.001} 
//x=V6[which(V6!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui ont "Confiance dans l'achat de scanners par catalogue" {#0.0880066:0.001} 
//x=V7[which(V7!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui ont "Confiance dans l'achat de disquettes par catalogue" {#0.0880066:0.001} 
//x=V8[which(V8!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui ont "Confiance dans l'achat de logiciels par catalogue" {#0.0880066:0.001} 
//x=V9[which(V9!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui ont "Confiance dans l'achat d'ordinateurs en magasin" {#0.0880066:0.001} 
//x=V10[which(V10!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui ont "Confiance dans l'achat d'imprimantes en magasin" {#0.0880066:0.001} 
//x=V11[which(V11!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui ont "Confiance dans l'achat de scanners en magasin" {#0.0880066:0.001} 
//x=V12[which(V12!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui ont "Confiance dans l'achat de disquettes en magasin" {#0.0880066:0.001} 
//x=V13[which(V13!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui ont "Confiance dans l'achat de logiciels en magasin" {#0.0880066:0.001} 
//x=V14[which(V14!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: CAMIP vend une ligne de produits de haute qualit�' {#0.0880066:0.001} 
//x=V16[which(V16!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: CAMIP offre tout les marques les plus populaires' {#0.0880066:0.001} 
//x=V17[which(V17!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: CAMIP a un catalogue de tr�s haute qualit�' {#0.0880066:0.001} 
//x=V18[which(V18!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: La description des produits dans le catalogue CAMIP est tr�s pr�cise' {#0.0880066:0.001} 
//x=V19[which(V19!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: La s�lection de produits dans le catalogue CAMIP est tr�s large' {#0.0880066:0.001} 
//x=V20[which(V20!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: "Probabilit� r�duite que la marchandise soie perdue pendant l'envoie" {#0.09099072:0.001} 
//x=V21[which(V21!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: "Pas besoin de ce consulter avec quelqu'un qui a d�j� achet�" {#0.09021631:0.001} 
//x=V22[which(V22!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: "Confiance qu'on livre le produit illustre dans le catalogue" {#0.09099072:0.001} 
//x=V23[which(V23!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: "L'achat par catalogue �conomise du temps" {#0.08836362:0.001} 
//x=V24[which(V24!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: Pas difficile de n�gocier le prix' {#0.08836362:0.001} 
//x=V25[which(V25!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: Achat du catalogue avec le formulaire le plus simple a remplir' {#0.0880066:0.001} 
//x=V26[which(V26!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: La marchandise du catalogue est moins ch�re' {#0.08836362:0.001} 
//x=V27[which(V27!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: Les catalogues livrent la marchandise au domicile' {#0.08872503:0.001} 
//x=V28[which(V28!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui sont d'accord avec l'affirmation: "Prix bas (catal.) parce qu'on ne doit pas payer des vendeurs" {#0.08836362:0.001} 
//x=V29[which(V29!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui donnent de l'importance �: Possibilit� de placer un nombre illimit� de commandes' {#0.08983645:0.001} 
//x=V30[which(V30!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui donnent de l'importance �: Disponibilit� de discounts pour la quantit� achet�e' {#0.09301748:0.001} 
//x=V31[which(V31!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui donnent de l'importance �: Dur�e de la livraison' {#0.09021631:0.001} 
//x=V32[which(V32!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui donnent de l'importance �: Politique de la soci�t� visant le retour de la marchandise' {#0.09386698:0.001} 
//x=V33[which(V33!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui donnent de l'importance �: "Pr�vision d'une p�riode d'essai" {#0.08946135:0.001} 
//x=V34[which(V34!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui donnent de l'importance �: Ann�es de pr�sence de la soci�t� sur le marche' {#0.0926013:0.001} 
//x=V35[which(V35!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui donnent de l'importance �: R�putation de la soci�t�' {#0.08983645:0.001} 
//x=V36[which(V36!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui donnent de l'importance �: Garanties' {#0.09301748:0.001} 
//x=V37[which(V37!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)

Calculez l'intervalle de confiance positif (alternative pessimiste) de la proportion des gens qui donnent de l'importance �: Contacte de la soci�t� avec les grandes marques etc.' {#0.09138547:0.001} 
//x=V38[which(V38!=0)];n=length(x);1.96*sqrt(.5*(1-.5)/n)


Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui ont "Confiance dans l'achat d'ordinateurs par catalogue" {#0.08799515:0.001} 
//x=V5[which(V5!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui ont "Confiance dans l'achat d'imprimantes de sport par catalogue" {#0.08799515:0.001} 
//x=V6[which(V6!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui ont "Confiance dans l'achat de scanners par catalogue" {#0.08771995:0.001} 
//x=V7[which(V7!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui ont "Confiance dans l'achat de disquettes par catalogue" {#0.08707443:0.001} 
//x=V8[which(V8!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui ont "Confiance dans l'achat de logiciels par catalogue" {#0.08744388:0.001} 
//x=V9[which(V9!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui ont "Confiance dans l'achat d'ordinateurs en magasin" {#0.08790351:0.001} 
//x=V10[which(V10!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui ont "Confiance dans l'achat d'imprimantes en magasin" {#0.07778596:0.001} 
//x=V11[which(V11!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui ont "Confiance dans l'achat de scanners en magasin" {#0.08172695:0.001} 
//x=V12[which(V12!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui ont "Confiance dans l'achat 
de disquettes en magasin" {#0.08114552:0.001} 
//x=V13[which(V13!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui ont "Confiance dans l'achat de logiciels en magasin" {#0.07852072:0.001} 
//x=V14[which(V14!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: CAMIP vend une ligne de produits de haute qualit�' {#0.08573358:0.001} 
//x=V16[which(V16!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: CAMIP offre tout les marques les plus populaires' {#0.08771995:0.001} 
//x=V17[which(V17!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: CAMIP a un catalogue de tr�s haute qualit�' {#0.08744388:0.001} 
//x=V18[which(V18!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: La description des produits dans le catalogue CAMIP est tr�s pr�cise' {#0.08771995:0.001} 
//x=V19[which(V19!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: La s�lection de produits dans le catalogue CAMIP est tr�s large' {#0.08707443:0.001} 
//x=V20[which(V20!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: "Probabilit� r�duite que la marchandise soie perdue pendant l'envoie" {#0.08988858:0.001} 
//x=V21[which(V21!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: "Pas besoin de ce consulter avec quelqu'un qui a d�j� achet�" {#0.08891103:0.001} 
//x=V22[which(V22!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: "Confiance qu'on livre le produit illustre dans le catalogue" {#0.08988858:0.001} 
//x=V23[which(V23!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: "L'achat par catalogue �conomise du temps" {#0.07111831:0.001} 
//x=V24[which(V24!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: Pas difficile de n�gocier le prix' {#0.08104916:0.001} 
//x=V25[which(V25!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: Achat du catalogue avec le formulaire le plus simple a remplir' {#0.07165116:0.001} 
//x=V26[which(V26!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: La marchandise du catalogue est moins ch�re' {#0.08680502:0.001} 
//x=V27[which(V27!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: Les catalogues livrent la marchandise au domicile' {#0.07956043:0.001} 
//x=V28[which(V28!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui sont d'accord avec l'affirmation: "Prix bas (catal.) parce qu'on ne doit pas payer des vendeurs" {#0.08620841:0.001} 
//x=V29[which(V29!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui donnent de l'importance �: Possibilit� de placer un nombre illimit� de commandes' {#0.0896809:0.001} 
//x=V30[which(V30!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui donnent de l'importance �: Disponibilit� de discounts pour la quantit� achet�e' {#0.08827238:0.001} 
//x=V31[which(V31!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui donnent de l'importance �: Dur�e de la livraison' {#0.08891103:0.001} 
//x=V32[which(V32!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui donnent de l'importance �: Politique de la soci�t� visant le retour de la marchandise' {#0.07892707:0.001} 
//x=V33[which(V33!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui donnent de l'importance �: "Pr�vision d'une p�riode d'essai" {#0.08132568:0.001} 
//x=V34[which(V34!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui donnent de l'importance �: Ann�es de pr�sence de la soci�t� sur le marche' {#0.08443054:0.001} 
//x=V35[which(V35!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui donnent de l'importance �: R�putation de la soci�t�' {#0.0896809:0.001} 
//x=V36[which(V36!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui donnent de l'importance �: Garanties' {#0.08643953:0.001} 
//x=V37[which(V37!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)

Calculez l'intervalle de confiance positif (alternative optimiste) de la proportion des gens qui donnent de l'importance �: Contacte de la soci�t� avec les grandes marques etc.' {#0.02389261:0.001} 
//x=V38[which(V38!=0)];n=length(x);n2=length(x[x>3]);p=n2/n;1.96*sqrt(p*(1-p)/n)


Calculez la valeur du CHI2 de la variable V3 {#2.919355 :0.001} 
//x=V3[which(V3!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V4 {#0.2096774 :0.001} 
//x=V4[which(V4!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V5 {#19.14516 :0.001} 
//x=V5[which(V5!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V6 {#6.080645 :0.001} 
//x=V6[which(V6!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V7 {#3.016129 :0.001} 
//x=V7[which(V7!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V8 {#15.27419 :0.001} 
//x=V8[which(V8!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V9 {#7.532258 :0.001} 
//x=V9[which(V9!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V10 {#39.79032 :0.001} 
//x=V10[which(V10!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V11 {#65.91935 :0.001} 
//x=V11[which(V11!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V12 {#52.85484 :0.001} 
//x=V12[which(V12!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V13 {#68.74194 :0.001} 
//x=V13[which(V13!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V14 {#68.17742 :0.001} 
//x=V14[which(V14!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V15 {#10.83871 :0.001} 
//x=V15[which(V15!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V16 {#2.129032 :0.001} 
//x=V16[which(V16!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V17 {#19.95161 :0.001} 
//x=V17[which(V17!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V18 {#19.79032 :0.001} 
//x=V18[which(V18!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V19 {#19.70968 :0.001} 
//x=V19[which(V19!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V20 {#16.24194 :0.001} 
//x=V20[which(V20!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V21 {#52.18966 :0.001} 
//x=V21[which(V21!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V22 {#27.59322 :0.001} 
//x=V22[which(V22!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V23 {#27.53448 :0.001} 
//x=V23[which(V23!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V24 {#104.9268 :0.001} 
//x=V24[which(V24!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V25 {#70.04878 :0.001} 
//x=V25[which(V25!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V26 {#120.6774 :0.001} 
//x=V26[which(V26!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V27 {#21.51220 :0.001} 
//x=V27[which(V27!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V28 {#95.78689 :0.001} 
//x=V28[which(V28!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V29 {#29.31707 :0.001} 
//x=V29[which(V29!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V30 {#41.96639 :0.001} 
//x=V30[which(V30!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V31 {#62.10811 :0.001} 
//x=V31[which(V31!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V32 {#42.76271 :0.001} 
//x=V32[which(V32!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V33 {#42.15596 :0.001} 
//x=V33[which(V33!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V34 {#56.41667 :0.001} 
//x=V34[which(V34!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V35 {#62.46429 :0.001} 
//x=V35[which(V35!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V36 {#21.54622 :0.001} 
//x=V36[which(V36!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V37 {#64.63063 :0.001} 
//x=V37[which(V37!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V38 {#79.73913 :0.001} 
//x=V38[which(V38!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V39 {#10.75806 :0.001} 
//x=V39[which(V39!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V40 {#11.56452 :0.001} 
//x=V40[which(V40!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V41 {#1.580645 :0.001} 
//chisq.test(table(V41), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V43 {#21.72581 :0.001} 
//x=V43[which(V43!=0)];chisq.test(table(x), correct=FALSE)[1]

Calculez la valeur du CHI2 de la variable V44 {#0.2903226:0.001} 
//x=V44[which(V44!=0)];chisq.test(table(x), correct=FALSE)[1]

