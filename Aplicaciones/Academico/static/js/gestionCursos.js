
(function(){
    
    const btnEliminacion = document.querySelectorAll('.btn-eliminacion')
    btnEliminacion.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            const confirmacion = confirm('seguro?')
            if (!confirmacion) {
                e.preventDefault()
            }
        })
    })

})()