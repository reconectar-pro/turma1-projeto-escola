var produtos = [
    {
        imagem: 'imagens/2.png',
        nome: 'Produto',
        texto: 'Descrição do Produto...'
    },
    {
        imagem: 'imagens/3.png',
        nome: 'Produto',
        texto: 'Descrição do Produto...'
    },
    {
        imagem: 'imagens/4.png',
        nome: 'Produto',
        texto: 'Descrição do Produto...'
    },
    {
        imagem: 'imagens/5.png',
        nome: 'Produto',
    },
    {
        imagem: 'imagens/6.png',
        nome: 'Produto',
        texto: 'Descrição do Produto...'
    },
    {
        imagem: 'imagens/10.png',
        nome: 'Produto',
        texto: 'Descrição do Produto...'
    }
   
]
produtos.map((produto) =>{
     document.getElementById('produtos').innerHTML += `
        <div class="produto">
             <img src="${produto.imagem}">
             <div>
             <h2>${produto.nome}</h2>
             <hr>
             <p>${produto.texto}</p>
             <button>Comprar</buttom>
             </div>
        </div>
    `
    
}) 