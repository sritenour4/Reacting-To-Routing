import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const FilmDetails = () => {
    const { filmid } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(film => setFilm(film));
    }, []);

    return (
        <main className="container">
            <section className="row justify-content-center text-center mt-5">
                <div className="col-md-6">
                    <div className="card-shadow">
                        <div className="card-body">
                            <h1 className="card-title">{film?.title}</h1>
                            <p className="card-text">{film?.description}</p>
                            <p className="card-text">Director: {film?.director}</p>
                            <p className="card-text">Producer: {film?.producer}</p>
                            <p className="card-text">Release date: {film?.release_date}</p>
                            <Link to="/films" className="btn btn-secondary">Go Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default FilmDetails;