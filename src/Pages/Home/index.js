import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { XYPlot, VerticalBarSeries } from 'react-vis';

import './styles.css';

export default function Home() {
    const [repo, setRepo] = useState([]);
    const [graph, setGraph] = useState([]);
    const [loading, setLoading] = useState(true);

    const resultado = [];
    let valor = 0;
    useEffect(() => {
        setLoading(true);
        axios.get('https://api.github.com/users/1nickael1/repos').then(res => {
            setRepo(res.data);
            const dados = res.data;
            valor = dados.length;

            dados.map(async e => {
                await axios
                    .get(
                        `https://api.github.com/repos/1nickael1/${e.name}/commits`
                    )
                    .then(len =>
                        resultado.push({
                            x: resultado.length,
                            y: len.data.length,
                        })
                    );
            });
        });
        setGraph(resultado);
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (resultado.length > 1) {
        setLoading(false);
    }

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="home">
            <h2>Meus projetos =)</h2>

            <XYPlot height={300} width={300}>
                <VerticalBarSeries data={graph} />
            </XYPlot>
            {repo.map(e => {
                return (
                    <button
                        key={e.name}
                        type="button"
                        onClick={() => window.open(`${e.html_url}`, '_blank')}
                    >
                        <div className="cardRepo">
                            <h3>{e.name}</h3>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
