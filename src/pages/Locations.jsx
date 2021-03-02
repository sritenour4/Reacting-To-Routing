import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Locations = () => {
    const [locations, setlocations] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res => res.json())
            .then(locations => setlocations(locations));
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
                        {locations.map(location => (
                            <li key={`location-item-${location.id}`} className="list-group-item d-flex justify-content-between align-items-center">{location.name}
                                <Link to={`/locations/${location.id}`} className="btn btn-outline-info">Read Profile</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Locations;