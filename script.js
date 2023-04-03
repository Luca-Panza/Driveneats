let divpratos = 0;
let divbebidas = 0;
let divdoces =  0;

function verificaselecao(){

     divpratos = document.querySelector('.pratos .selecionado');
    
        if ( divpratos !== null ){

    divbebidas = document.querySelector('.bebidas .selecionado');
    
        if ( divbebidas !== null ){

    divdoces = document.querySelector('.doces .selecionado');
    
        if ( divdoces !== null ){

            const fecharpedido = document.querySelector('.selecionar-pedido button');
            fecharpedido.innerText= "Fechar Pedido";
            fecharpedido.classList.add('fecharpedido');
            fecharpedido.removeAttribute("disabled");
            
            }
        }
    }
} 

function botaohabilitado(){

    const prato = divpratos.querySelector('h4').innerText; 
    const pratoprice = Number(divpratos.querySelector('h6').innerText.replace("R$ ", "").replace(",", ".")); 
    const bebida = divbebidas.querySelector('h4').innerText;
    const bebidaprice = Number(divbebidas.querySelector('h6').innerText.replace("R$ ", "").replace(",", ".")); 
    const doce = divdoces.querySelector('h4').innerText;
    const doceprice = Number(divdoces.querySelector('h6').innerText.replace("R$ ", "").replace(",", ".")); 

    const total= pratoprice + bebidaprice + doceprice;


    const mensagem = `
Olá, gostaria de fazer o pedido:
- Prato: ${prato}
- Bebida: ${bebida} 
- Sobremesa: ${doce}
Total: R$ ${(total).toFixed(2)}
`;

    const string = encodeURIComponent(mensagem);
    window.open("https://wa.me/5532999353281?text="+string);

}

function selecionarpedido (seletor){

    const divSelecionadoAnteriormente = document.querySelector('.pratos .selecionado');
    
    if ( divSelecionadoAnteriormente !== null ){

        divSelecionadoAnteriormente.classList.remove('selecionado');
    }
    
    seletor.classList.add ('selecionado');

    verificaselecao();
}

function selecionarpedido1 (seletor){

    const divSelecionadoAnteriormente = document.querySelector('.bebidas .selecionado');
    
    if ( divSelecionadoAnteriormente !== null ){

        divSelecionadoAnteriormente.classList.remove('selecionado');
    }
    
    seletor.classList.add ('selecionado');

    verificaselecao();
}

function selecionarpedido2 (seletor){

    const divSelecionadoAnteriormente = document.querySelector('.doces .selecionado');
    
    if ( divSelecionadoAnteriormente !== null ){

        divSelecionadoAnteriormente.classList.remove('selecionado');
    }
    
    seletor.classList.add ('selecionado');

    verificaselecao();
}