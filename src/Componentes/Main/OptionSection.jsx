import React from 'react'

const OptionSection = () => {
  return (
    <menu>
        <div id="for_opcoes">
            <div id="legenda"><p id="mais_opcoes">Mais opções:</p></div>
            <div>
                <span className="material-symbols-rounded">
                    settings
                </span>
                <p>Configurações</p>
            </div>
            <div>
                <span className="material-symbols-rounded">
                    notifications
                </span>
                <p>Notificações</p>
            </div>
            <div>
                <span className="material-symbols-rounded">
                    shopping_bag
                </span>
                <p>Meus pedidos</p>
            </div>
            <div>
                <span className="material-symbols-rounded">
                    mail
                </span>
                <p>Fale Conosco</p>
            </div>
            <div>
                <span className="material-symbols-rounded">
                    id_card
                </span>
                <p>Trabalhe Conosco</p>
            </div>
            <div>
                <span className="material-symbols-rounded">
                    login
                </span>
                <p>Entrar ou se cadastrar</p>
            </div>
        </div>
    </menu>
  )
}

export default OptionSection;