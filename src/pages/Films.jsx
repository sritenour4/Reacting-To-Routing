import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => setFilms(films));
    }, []);

    return (
        <main className="container">
            <section className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <div className="row justify-content-center">
                        <Link to="/" className="btn btn-primary m-2">Go Home</Link>
                        <Link to="/films" className="btn btn-primary m-2">View Films</Link>
                        <Link to="/people" className="btn btn-primary m-2">View People</Link>
                        <Link to="/locations" className="btn btn-primary m-2">View Locations</Link>
                    </div>
                    <ul className="list-group">
                        {films.map(film => (
                            <li key={`film-item-${film.id}`} className="list-group-item d-flex justify-content-between align-items-center">{film.title}
                                <Link to={`/films/${film.id}`} className="btn btn-outline-info">Read Profile</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Films;