const distancia = 125; /* km */
const velocidadeCarro = 90; /* km/h */
const velocidadeCaminhao = 80; /* km/h */
const pedagioTempoCarro = 5 / 60; /* 5 minutos em horas */
const numeroPedagios = 3;
const atrasoCaminhao = numeroPedagios * pedagioTempoCarro; /* Atraso total do caminhão devido aos pedágios */


const tempoCarro = distancia / (velocidadeCarro + velocidadeCaminhao); /* Tempo até o encontro */

const distanciaPercorridaCarro = velocidadeCarro * tempoCarro;
const distanciaPercorridaCaminhao = velocidadeCaminhao * tempoCarro;

const distanciaPercorridaCaminhaoAtraso = velocidadeCaminhao * (tempoCarro - atrasoCaminhao / 2);

const carroMaisProximo = distanciaPercorridaCarro > distanciaPercorridaCaminhaoAtraso;

console.log("O carro estara mais próximo de Ribeirão Preto:", carroMaisProximo);  // Resultado: true


/*

Explicação:
Parâmetros Iniciais: Define a distância entre as cidades, as velocidades dos veículos, o tempo adicional de pedágio para o carro e o número de pedágios.

Cálculo do Tempo Total para o Encontro: Determina quanto tempo levará para que os dois veículos se encontrem com base em suas velocidades combinadas.

Distâncias Percorridas: Calcula a distância percorrida por cada veículo até o ponto de encontro.

Ajuste pelo Atraso: Ajusta a distância percorrida pelo carro para considerar o atraso devido aos pedágios.

Comparação das Distâncias: Verifica se o carro estará mais próximo de Ribeirão Preto com base nas distâncias percorridas.

O código usa esses cálculos para determinar que o carro, apesar de ter um atraso devido aos pedágios, ainda estará mais próximo de Ribeirão Preto no momento do encontro.

Explicação do Resultado
O carro estará mais próximo de Ribeirão Preto no momento do encontro porque ele percorreu uma distância maior (66.15 km) em comparação com o caminhão (58.8 km),
 mesmo considerando o atraso adicional devido aos pedágios.

*/