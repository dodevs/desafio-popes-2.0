# desafio-popes-2.0
\o/ Desafiooooo \o/

## Rotas
A Api esta rodando na porta 5000

/ - estado atual do switch (nome, porta01 e porta02)
/:attr - somente atributo, que pode ser nome, porta01 ou porta0
/historic - todos os estados do switch (GET)
/historic - cria novo estado dentro do historico (POST)
/historic/:id - apaga determinado estado (DELETE)
/historic/:id - atualiza estado

## Socket (Nao testado)
É emitido também na porta 5000 o estado atual do swith a cada chamada do cron (10s default)
nome da chamada: switchCurrent
