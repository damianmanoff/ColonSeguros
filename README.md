Backend del challenge propuesto por Colón Seguros
# Contenido

- Servicio para saber si una cadena de ADN es mutante o no.
-- POST /mutant/ 
-- PAYLOAD {"dna" :["AGTC",...]}
-- Posibles respuestas status:200 => OK es mutante, status:401 => FORBIDDEN => es humano


- Servicio de estadisticas de cantidad de mutantes.
-- POST /stat/ 
-- PAYLOAD {}
-- RESPUESTA {
    "count_mutant_dna": INT, => cantidad de ADNs almacenados correspondiente a mutantes
    "count_human_dna": INT, => cantidad de ADNs correspondiente a humanos
    "ratio": FLOAT => Porcentaje promedio de mutantes
}
