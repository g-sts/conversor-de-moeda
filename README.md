# Conversor de Moedas

Aplicação front-end desenvolvida utilizando HTML, CSS e JavaScript puro. Este projeto realiza a conversão de valores entre diferentes moedas com base em cotações atualizadas em tempo real, utilizando a API pública da [ExchangeRate-API](https://www.exchangerate-api.com/).

---

## Funcionalidades

- Conversão entre moedas selecionadas  
- Atualização dinâmica do valor convertido  

---

## Tecnologias Utilizadas

- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) — estrutura semântica da aplicação  
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) — estilização e layout responsivo com Flexbox  
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) — captura dos inputs do usuário, requisição assíncrona à API e manipulação do DOM  
- [ExchangeRate-API](https://www.exchangerate-api.com/) — API pública para obtenção das taxas de câmbio em tempo real  

---

## Como Funciona

1. O usuário insere o valor a ser convertido no campo de input.  
2. Seleciona as moedas de origem e destino no menu select.  
3. Ao iniciar a conversão, o JavaScript captura os valores dos inputs e dos selects.  
4. É realizada uma requisição assíncrona para a API ExchangeRate-API para obter a taxa de câmbio atualizada.  
5. O valor convertido é calculado aplicando a taxa de câmbio recebida.  
6. O resultado é exibido na interface.
