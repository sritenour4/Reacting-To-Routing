import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


const PersonDetails = () => {
    const { personid } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/People/${personid}`)
            .then(res => res.json())
            .then(person => setPerson(person));
    }, []);

    return (
        <main className="container">
            <section className="row justify-content-center text-center mt-5">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h1 className="card-title">{person?.name}</h1>
                            <p className="card-text">Gender: {person?.gender}</p>
                            <p className="card-text">Age: {person?.age}</p>
                            <p className="card-text">Eye color: {person?.eye_color}</p>
                            <p className="card-text">Hair color: {person?.hair_color}</p>
                            <Link to="/people" className="btn btn-secondary">Go Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PersonDetails;