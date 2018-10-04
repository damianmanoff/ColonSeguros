Backend del challenge propuesto por Colón Seguros
# Contenido

- Servicio para saber si una cadena de ADN es mutante o no.
```
POST /mutant/ 
PAYLOAD 
  {
    "dna" :["AGTC",...] -> Array de N posiciones con cadenas de largo N
  }

```

- Las posibles respuestas son
```
status:200 => OK es mutante
```

```
status:401 => FORBIDDEN => es humano
```




- Servicio de estadisticas de cantidad de mutantes.
```
POST /stat/
PAYLOAD {}
```
 
- Formato de la respuesta

```
-- RESPUESTA {
    "count_mutant_dna": INT, => cantidad de ADNs almacenados correspondiente a mutantes
    "count_human_dna": INT, => cantidad de ADNs correspondiente a humanos
    "ratio": FLOAT => Porcentaje promedio de mutantes
}
```

# Algoritmo de busqueda de cadenas mutantes

Para encontrar una cadena en una matriz de NxN lo que se optó fue una variante al algoritmo de backtracking, iterando la matriz, y solo buscando en las direcciones que se puede llegar a una solución, marcando las posiciones y sentidos imposibles para evitar repeticiones.

# Herramientas

- Docker
- NodeJS
- Express
- MongoDB

# Pre Requisitos
- Tener instalado NodeJS
- Tener instalado Docker

# Como levantar el ambiente
- Ejecutar el comando docker-compose build
- Una vez finalizado, correr el comando docker-compose up.
- El api deberá quedar levantada en el puerto 3800