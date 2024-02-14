document.addEventListener('DOMContentLoaded', function() {
    const pedirAgoraButtons = document.querySelectorAll('.pedir');

    pedirAgoraButtons.forEach(function(botao) {
        botao.addEventListener('click', function() {
            const idDoPedido = botao.id.replace('Pedido', '');

            alert(`Pedido Adicionado`);
        });
    });

    
    let show = true;
    const menuContent = document.querySelector('.content');
    const menuToggle = menuContent.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', () => {
        document.body.style.overflow = show ? 'hidden' : 'initial'
        menuContent.classList.toggle('on', show);
        show = !show;
    });
});
