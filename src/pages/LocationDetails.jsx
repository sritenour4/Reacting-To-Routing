import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const LocationDetails = () => {
    const { locationid } = useParams();
    const [location, setlocation] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations/${locationid}`)
            .then(res => res.json())
            .then(location => setlocation(location));
    }, []);

    return (
        <main className="container">
            <section className="row justify-content-center text-center mt-5">
                <div className="col-md-6">
                    <div className="card-shadow">
                        <div className="card-body">
                            <h1 className="card-title">{location?.name}</h1>
                            <p className="card-text">{location?.description}</p>
                            <p className="card-text">Climate: {location?.climate}</p>
                            <p className="card-text">Terrain: {location?.terrain}</p>
                            <p className="card-text">Surface water: {location?.surface_water}</p>
                            <Link to="/locations" className="btn btn-secondary">Go Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LocationDetails;