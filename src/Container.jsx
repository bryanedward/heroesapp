import React from 'react'
import Swal from 'sweetalert2'
import { Background, ButtonS, Message, Title } from './style'
export const Container = () => {


    const btn = () => {
        Swal.fire({
            text: 'Usted es mi vicio favorito',
            confirmButtonText:"Salir"
          })
    }


    return (
        <Background>
            <Message>
                <Title>
                    <h1>Feliz dia Bonita</h1>
                    <img src="assets/dc-arrow.png" alt="" />
                </Title>
                <p>
                    Hola bonita, quería desearle este mensajito
                    para desearle un lindo día,
                    para la chica más preciosa de
                    todas
                </p>
                <ButtonS onClick={btn}>
                    Hacer click !
                </ButtonS>
            </Message>
        </Background>
    )
}
