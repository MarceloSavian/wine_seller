# GET Client

> ## Sucesso

1. 🔴 Recebe um **GET** na rota **/api/:clientId/wineAdvice**
2. 🔴 **Gera** um ranking com as categorias mais compradas pelo cliente
3. 🔴 **Retorna** um produto que condiz com o primeiro item do ranking

> ## Respostas

1. 🔴 Retorna **400** se o clientId enviado for invalido
2. 🔴 Retorna **200** se encontrar o produto
3. 🔴 Retorna **500** se acontecer algum erro inesperado

> ## ATENÇÃO!!!

Utilize a rota **/api/client/byPurchaseValue** para descobrir um clientId valido para a requisição