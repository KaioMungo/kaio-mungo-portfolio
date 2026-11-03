function escrevendoLetra(){
    function ativaLetra(elemento) {
        const arrayTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrayTexto.forEach((Letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += Letra;
            }, 75 * i);
        });
    }




    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

escrevendoLetra()


function menuMobol(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')




    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-bars');
        ativaMenu.classList.toggle('fa-xmark');
        navMenu.classList.toggle('ativado');
});
}

menuMobol()


const listaFerramentas = document.querySelector('.list-ferramentas');

if (listaFerramentas) {
    const ferramentas = Array.from(listaFerramentas.children);

    ferramentas.forEach((ferramenta) => {
        const copia = ferramenta.cloneNode(true);

        copia.setAttribute('aria-hidden', 'true');

        listaFerramentas.appendChild(copia);
    });
}




