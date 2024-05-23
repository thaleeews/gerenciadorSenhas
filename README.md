# Gerenciamento de Senhas

Este é um aplicativo de gerenciamento de senhas desenvolvido em React Native. Ele permite que os usuários cadastrem, editem e visualizem suas senhas. O aplicativo utiliza Firebase para autenticação e armazenamento dos dados.

## Funcionalidades

- **Login e Cadastro:** Permite aos usuários criar uma conta e fazer login utilizando e-mail e senha. A autenticação é gerenciada pelo Firebase Authentication.
- **Adição de Senhas:** Os usuários podem adicionar novas senhas fornecendo informações como "Local da senha", "Senha" e "Observações". As senhas são armazenadas no Firebase Realtime Database.
- **Visualização de Senhas:** As senhas cadastradas são exibidas em uma lista na tela principal após o login. Cada item da lista exibe o local, a senha e as observações.
- **Edição de Senhas:** Cada senha na lista possui um ícone de lápis que permite aos usuários editar as informações da senha selecionada. A edição também é refletida no Firebase.
Caso o usuário deseje, ele também pode deletar a senha clicando no ícone da lixeira.
- **Geração de Senhas:** Uma funcionalidade para gerar senhas aleatórias de 15 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais. Cada vez que o botão "Gerar" é clicado, uma nova senha é gerada.

**Tela de Login**
![image](https://github.com/thaleeews/gerenciadorSenhas/assets/100948036/78b33ea9-7ad4-49b9-b65d-e51d48a12092)

**Tela de Cadastro**
![image](https://github.com/thaleeews/gerenciadorSenhas/assets/100948036/27bae855-acb9-45c2-b54e-1bb740298b23)

**Tela Inicial**
![image](https://github.com/thaleeews/gerenciadorSenhas/assets/100948036/170f1dd2-3655-4cf1-ac39-086e9103a318)

**Tela de Adição de Senha**
![image](https://github.com/thaleeews/gerenciadorSenhas/assets/100948036/25f0f22f-dc85-4d3a-b4e5-478459a9cef4)

**Tela de Gerar Senha**
![image](https://github.com/thaleeews/gerenciadorSenhas/assets/100948036/f123be57-e709-4e55-9e4d-4c4c068f4935)

**Tela de Edição de Senha**
![image](https://github.com/thaleeews/gerenciadorSenhas/assets/100948036/aee592d9-8e28-4dbd-b8f1-c86f8df1319b)





