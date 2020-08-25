## Maratona FullCycle 4.0 desáfio 01

- criar uma imagem docker que quando executada deverá expor a porta 8080 exibindo a mensagem: Eu sou Full Cycle.

### Comandos para rodar projeto com docker
    - docker-compose up -d --build

### Comandos para rodar a imagem
    - docker pull jamirperoba/maratona-fc-desafio-01
    - docker run -p 8080:8080 jamirperoba/maratona-fc-desafio-01
 
Após executar os comandos acesse por: [http://localhost:8080/](http://localhost:8080/)