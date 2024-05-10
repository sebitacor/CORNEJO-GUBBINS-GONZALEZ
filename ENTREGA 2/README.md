# Entrega 2 de José Gubbins, A. González, S. Cornejo

A continuación presentamos el video [AQUÍ](https://uccl0-my.sharepoint.com/:v:/g/personal/sebastian_cornejo_uc_cl/EQXuYmgtkhlJtvC-zXE5_vQBJ1Xpu9rmHitpNXKg0hLjJQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=lZFblu)sobre las bases de datos que hemos recolecta hasta ahora.

También presentamos el link a la presentación [AQUÍ](https://www.canva.com/design/DAGEy_BKMtU/21qSEVNxxQ6DsvuHyPy0NQ/edit?utm_content=DAGEy_BKMtU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton).

El proceso de limpieza de datos se realizó en 2 tandas. La primera fue ordenar la informacion de la base de datos original, la que estaba en un pdf con fallas y siglas que no se entendian sin un índice. El primer paso entonces fue crear la tabla, pasar toda la información a esta, traducir las sigles y, cuando estuvo listo eso, convertir a .csv. 

Ya en este formato pasé a limpiar la base de datos en Google collab usando código. Lo primero fue borrar todas las filas en las que la especie agresora no fueran jaurías de perros, ya que ese es el foco del proyecto, por lo que borré a los gatos asilvestrados de la base de datos. Después, y dado que este proyecto de enfoca en los ciervos, eliminé todas las filas que registraban ataques a otras especies silvestres. 

 

La fuente utilizada es un informe de Conaf titulado: ANÁLISIS DE LA OCURRENCIA DE ATAQUES DE PERROS Y GATOS A FAUNA SILVESTRES PROTEGIDA EN EL SISTEMA NACIONAL DE ÁREAS SILVESTRES PROTEGIDAS DEL ESTADO 2007-2012. 

Esta fuente fue elegida porque es el último (y primer) informe de este tema que realizó Conaf. Sé que es desactualizado y antiguo, pero por eso mismo es importante también, porque entrega antecedentes del mismo tema y permite comparar con la actualidad, a modo de determinar que efectivamente estos ataques han aumentado sobremanera en los últimos años. Además, esta base de datos entrega dos factores muy relevantes: La region y zona silvestre protegida del ataque, y tambien si el animal sobrevivió a este o falleció 

 

Con esta base de datos limpia se puede responder:  

¿En qué regiones los pudús y huemules sufrieron más ataques de perros? 

¿En qué mes y año? 

¿Se salvaron estos animales o murieron? 

 

Ficha técnica (archivo Markdown) para explicar las dimensiones 

Característica de los datos: 

Los datos son cuantitativos aislados. Se exponen los ataques de perros a pudús a huemules como una cifra a modo de determinar la cantidad de estos.  

Alcance metodológico: 

El estudio abarca todo chile, por lo tanto esta base de datos incluye todas las regiones del país y expone precisamente donde ocurrieron estos ataques.  

“En el período analizado (2007 a 2012), se registraron 46 ataques de perros y gatos a 15 especies de fauna silvestres acontecidos en unidades del SNASPE de 8 regiones del país” 

 

Variables incorporadas: variable | descripción 

Región: en que región fue el ataque 

Lugar del ataque: en qué área silvestre protegida fue el ataque (considera parques nacionales, reservas nacionales y monumentos naturales).  

Fecha aprox: fecha aproximada del ataque 

Especie atacada 

Indiv. Muertos: individuos muertos tras el ataque 

Indiv. Recuper: individuos recuperados tras el ataque 

Especie agresora: Qué animal atacó a esta especie nativa. La tabla original incluye jauría perros y gato asilv. (gato asilvestrado), para efectos de este trabajo se eliminó el gato como variable. 

 

Observaciones que tengan sobre la base de datos 

Esta base de datos, si bien es antigua y no muestra tantos casos, es muy completa en el sentido de que incluye muchas variables útiles para este proyecto, como el lugar del ataque, el área protegida y si el animal atacado logró sobrevivir o no.  