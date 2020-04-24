import React, { useEffect, useState } from 'react';

import './styles.css';

export default function Home() {
    return (
        <div className="container">
            <div className="home">
                <div className="bloco1">
                    <div className="header">
                        <h1 className="titulo">Nickael Vereza Bruzzi</h1>
                        <p className="texto">Linha</p>
                        <p className="texto">Olá! Eu sou desenvolvedor Front End/Mobile com foco em React e React Native.
                        Aqui estão alguns dos meus trabalhos.
                    </p>
                    </div>
                    <div className="conteudo">
                        <p className="texto">Conteudo</p>
                    </div>
                </div>
                <div className="bloco2">
                    <h1>Sobre eu</h1>
                </div>
            </div>
        </div>
    );
}
