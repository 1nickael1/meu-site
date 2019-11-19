import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './styles.css';

export default function Home() {
    const [repo, setRepo] = useState([]);
    useEffect(() => {
        axios.get('https://api.github.com/users/1nickael1/repos').then(res => {
            setRepo(res.data);
        });
    }, []);
    return (
        <div className="home">
            <h2>Meus projetos =)</h2>
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
