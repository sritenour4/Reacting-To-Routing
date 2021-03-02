import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => setPeople(people));
    }, []);

    return (
        <main className="container">

            <section className="row justify-content-center mt-3">
                <div className="col-md-6">
                <div className="row justify-content-center"> 
                    <Link to="/" className="btn btn-primary m-2">Go Home</Link>
                    <Link to="/films" className="btn btn-primary m-2">View Films</Link>
                    <Link to="/people" className="btn btn-primary m-2">View People</Link>
                    <Link to="/locations" className="btn btn-primary m-2">View Locations</Link>
                    </div>
                    <ul className="list-group">
                        {people.map(person => (
                            <li key={`person-item-${person.id}`} className="list-group-item d-flex justify-content-between align-items-center">{person.name}
                                <Link to={`/people/${person.id}`} className="btn btn-outline-info">Read Profile</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default People;