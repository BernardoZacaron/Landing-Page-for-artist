const livroEsquerda = document.getElementById('livro-esquerda');
const livroDireita = document.getElementById('livro-direita');

function esquerda(){
    if(livroEsquerda.classList.contains('ativo')){
        livroEsquerda.classList.remove('ativo');
        livroEsquerda.classList.add('desativo');
    }else{
        livroEsquerda.classList.remove('desativo');
        livroEsquerda.classList.add('ativo');
        
        livroDireita.classList.remove('ativo');
        livroDireita.classList.add('desativo'); 
    }
        
}
function direita(){
    if(livroDireita.classList.contains('ativo')){
        livroDireita.classList.remove('ativo');
        livroDireita.classList.add('desativo');
    }else{
        livroDireita.classList.remove('desativo');
        livroDireita.classList.add('ativo');
        
        livroEsquerda.classList.remove('ativo');
        livroEsquerda.classList.add('desativo');
    } 
}

(function(){
    livroEsquerda.onclick = function (){
        esquerda();
    };
    
    livroDireita.onclick = function (){
        direita();
    };
})();
