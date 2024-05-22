# Gerenciamento de Senhas

Este é um aplicativo de gerenciamento de senhas desenvolvido em React Native. Ele permite que os usuários cadastrem, editem e visualizem suas senhas. O aplicativo utiliza Firebase para autenticação e armazenamento dos dados.

## Funcionalidades

- **Login e Cadastro:** Permite aos usuários criar uma conta e fazer login utilizando e-mail e senha. A autenticação é gerenciada pelo Firebase Authentication.
- **Adição de Senhas:** Os usuários podem adicionar novas senhas fornecendo informações como "Local da senha", "Senha" e "Observações". As senhas são armazenadas no Firebase Realtime Database.
- **Visualização de Senhas:** As senhas cadastradas são exibidas em uma lista na tela principal após o login. Cada item da lista exibe o local, a senha e as observações.
- **Edição de Senhas:** Cada senha na lista possui um ícone de lápis que permite aos usuários editar as informações da senha selecionada. A edição também é refletida no Firebase.
- **Geração de Senhas:** Uma funcionalidade para gerar senhas aleatórias de 15 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais. Cada vez que o botão "Gerar" é clicado, uma nova senha é gerada.
