# TrybeSmith

TrybeSmith é uma API RESTful desenvolvida em TypeScript para gerenciar itens e pedidos de uma loja de armas medievais. A aplicação utiliza MySQL para persistência dos dados e segue a arquitetura MSC (Model-Service-Controller).

**Atenção:** Parte deste projeto foi desenvolvida pela [Trybe](https://www.betrybe.com/) como parte do currículo da formação, e alguns arquivos já foram fornecidos pela instituição, conforme descrito abaixo.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Testes](#testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Tecnologias Utilizadas

- Node.js
- TypeScript
- MySQL
- Sequelize
- Docker
- Express
- Mocha, Chai e Sinon para testes

## Estrutura de Arquivos

Alguns arquivos e configurações iniciais foram desenvolvidos e disponibilizados pela Trybe para auxiliar no desenvolvimento do projeto. Estes incluem:

- **Configurações de ESLint**: `.eslintrc.json`, `.eslintignore`
- **Configurações de ambiente**: `.env.example`
- **Testes e ferramentas de desenvolvimento**: `.mocharc.json`, `nyc`, e `docker-compose.yml`
- **Outros arquivos de configuração**: `.editorconfig`, `.dockerignore`, `tsconfig.json`

Todo o restante foi desenvolvido por mim, conforme os requisitos do projeto.

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório:

    ```bash
    git clone https://github.com/FelipeVergaraChico/trybeSmith.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd trybeSmith
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie os containers Docker (MySQL e aplicação):

    ```bash
    docker-compose up -d
    ```

5. Entre no container
   ```bash
   docker exec -it trybesmith bash
   ```
6. Instale as dependências
   ```bash
   npm install
   ```
7. Inicie o servidor
   ```bash
   npm run dev
   ```
## Configuração

Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente conforme necessário:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_DATABASE=Trybesmith
```

## Uso
A API estará disponível em http://localhost:3000

## Testes
Para rodar os testes unitarios
```bash
npm test
```
Os testes utilizam as bibliotecas Mocha, Chai e Sinon para garantir a cobertura do código.

## Contribuição
Se você deseja contribuir com o projeto:

Faça um fork do repositório.
Crie uma branch com sua feature: 

```bash
git checkout -b minha-feature.
```
Commit suas mudanças: 
```bash
git commit -m 'Minha nova feature'.
```

Faça o push da branch: 
```bash
git push origin minha-feature.
```

Abra um Pull Request.
