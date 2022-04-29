import React from 'react'

export const Envio = () => {




    return (
        <div>
            <div>

                <h2>Elegí dónde recibir tus compras</h2>
                <p>Podrás ver costos y tiempos de entrega precisos en todo lo que busques.</p>
            </div>
            <div>
                <input placeholder='Ingresar un código postal' />
                <button>Usar</button>
                <button onClick={(e) => {
                    e.preventDefault()
                    window.location.href='https://www.oca.com.ar/Busquedas/CodigosPostales'
                }}>
                    No sé mi código
                </button>
                
            </div>
        </div>
    )
}
