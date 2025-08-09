# 📋 Buger Eats - Cypress

Esse é um projeto prático direto ao ponto de Cypress Discovery Degustação com o Papito.
Nesse projeto eu adicionei mais alguns cenários de testes e também trabalhei com o faker para auxiliar criação de dados. 

## ⚙️ Pré-requisitos

```bash
- Node.js
- npm 
```

## ⚙️ Instalação

```
# Instale as dependências.
npm install

# Instale as dependências de Upload de Arquivos.
npm install cypress-file-upload

# Instale as dependências do Faker.
npm install @faker-js/faker

# Instale as dependências do Mochawesome.
npm install mochawesome

# Instale as dependências do Doc-gen.
npm install cypress-docgen
```

## 🚀 Execução dos testes ]

```
# Para abrir o Cypress no modo interativo.
npx cypress open

# Para executar o teste no modo headless.
npx cypress run

# Para executar o teste e gerar o Report Mochawesome.
npx cypress run --reporter mochawesome

# Para gerar o arquivo de Doc-gen dos testes.
npx cypress-docgen
```

## 💡 Testes

### Home
- ✅ Validar o título do app.
- ✅ Validar o subtítulo do app.
- ✅ Validar a frase do app.
- ✅ Validar o botão de Cadastre-se.
- ✅ Validar o direcionamento do botão Cadastre-se.

### Cadastro
- ✅ Validar acesso a tela de Cadastro
- ✅ Validar o campo Nome Completo como obrigatório.
- ✅ Validar o campo CPF como obrigatório.
- ✅ Validar o campo E-mail como obrigatório.
- ✅ Validar o campo CEP como obrigatório.
- ✅ Validar o campo Número como obrigatório.
- ✅ Validar o campo Método de Entrega como obrigatório.
- ✅ Validar o campo Foto da CNH como obrigatório.
- ✅ Validar o campo CPF com 12 dígitos.
- ✅ Validar o campo CPF com 10 dígitos.
- ✅ Validar o cadastro apenas com campos obrigatórios informados.
- ✅ Validar cadastro com CPF inválido.
- ✅ Validar a busca por CEP.
- ✅ Validar cadastro com E-mail inválido.
- ✅ Validar cadastro com método de entrega Moto.
- ✅ Validar cadastro com método de entrega Bicicleta.
- ✅ Validar cadastro com método de entrega Van/Carro.
- ✅ Validar envio de arquivo PDF em Foto da CNH.
- ✅ Validar envio de arquivo CSV em Foto da CNH.