## GUBBINS 

Visualizacion: Comparación por año del número de animales ingresados por ataques de perro y el número de pudues ingresados por ataques de perros. 

Con la base de datos que disponemos nos dimos cuenta de que el numero de animales ingresados al centro de rehabilitacion de fauna de Chiloé Silvestre fue aumentando cada año (con excepcion del 2023), con el, tambien fue aumentando los que ingresaban por motivos de ataques de perros. Pero lo curioso, y que decidimos analizar y graficar, es que en casi todos los años analizados (2017-2023) los ataques de perros a pudues representaron másde la mitad de los ataques de perros a todo el resto de los animales, es más, en el año 2020 fueron 19 los animales ingresados por ataques de perros, y de estos, 18 fueron pudues. ¿las razones? no las tenemos especificamente, pero se asume que es por su tamaño y velocidad para escapar del depredador. 

Con estas informaciones nos dimos cuenta de que, si bien los perros atacan a todos los animales, los pudues en particular son su presa favorita de entre todas las demás (que para efectos de esta comparacion los incluimos como "otros").

Con esta información decidí graficar esta relación entre los animales que ingresaron cada año por ataques de perros y la cantidad de pudues que ingresaron por ataques de perros. 

¿Que método o grafico es el que sería más claro? para mostrar esta informacion opté por un gráfico de linea, el que tendría la cantidad de animales en el eje y y los años en el eje x. Las lineas las elegí porque siendo una relacion tan estrecha como la que se quiere mostrar, las variaciones se apreciarian de manera más clara en un gráfico de linea, que con cada punta y valle evidenciaria la estrechez de esta relacion. 

Esta idea nacio de analizar nuestra base de datos, ya limpiada, sobre los ingresos de animales al centro de rehabilitacion y cuidado "Chiloe Silvestre". Esta base de datos muestra los ingresos de animales totales y los que son por ataques de perros, y por otro lado los ingresos especificos de pudues y los que son por ataques de perros. 

Esta base de datos tuvo que ser hecha por nosotros. La organizacion chiloe silvestre, con quienes llevamos counicandonos hace más de un mes, nos prometió que enviaría su base de datos pero no lo ha hecho del todo. En cambio, nos mandaron una tabla con los totales. Frente a esto, tuvimos que hacer a mano una base de datos utilizando esos totales. Por lo mismo, el proceso de limpieza fue facil, puesto que eran pocas variables. 

Una vez que tuvimos lista la base de datos (lo que no fue un trabajo facil puesto que terminó contando con 941 filas) la relacion que describí arriba se pudo ver claramente y solo hubo que eliminar de la tabla los animales y pudues que no ingresaron por ataques de perros. Esto fue muy facil de hacer en collab, filtrando las filas donde la variable "Motivo" fuera "otro" y no "ataque de perro"

Las preguntas que se pueden resolver con esta visualizacion son: ¿Cual es la relacion entre los ataques totales de perros y los ataques a pudues? ¿cual es la proporcion de ataques de perros a pudues dentro de los ataques de perros totales? ¿es el pudu la presa favorita de los perros que atacan animales que luego son enviados a Chiloe Silvestre? ¿Es el pudú el animal más desprotegido frente al perro de los que trata Chiloe Silvestre?

