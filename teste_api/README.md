# Testes API com Cypress


Aqui estão os testes API com Cypress.


## **Testes**:  Obtendo clima atual

| Numero do Teste | Teste Case |
|--|--|
|TC01| GET `/weather` - 200 |
|TC02| GET `/weather` - Cidade não encontrada - 404|
|TC03| GET `/weather` - Sem localização - 400 |
|TC04| GET `/weather` - Key Invalida - 401 |



Pré requisitos:

Para executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) (Eu usei a versão `2.26.2` enquanto escrevia este documento)
- [nodejs](https://nodejs.org/en/) (Eu usei a versão `16.14.0` enquanto escrevia este documento)
- NPM (Eu usei a versão `8.5.4` enquanto escrevia este documento)
- [Google Chrome](https://www.google.com/intl/en_us/chrome/) (Eu usei a versão `92.0.4515.131` enquanto escrevia este documento)b

## Instalação

Para instalar as dependências dev, execute `npm install cypress@9.5.4 --save-dev` (ou `npm i cypress --save-dev` para abreviar).

## Configurando as variáveis de ambiente

Antes de executar os testes, algumas variáveis de ambiente precisam ser configuradas.

Faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json) como `cypress.env.json` e defina os valores apropriados para todas as variáveis.

**Observação:** o arquivo `cypress.env.json` não é rastreado pelo git.


### Modo interativo

Execute `npx cypress open` para abrir o Cypress Test Runner para executar testes no modo interativo usando uma janela de visualização da área de trabalho.


___

Feito  por [Thiago Vasconcelos](https://github.com/thiagovasconceloos/).
