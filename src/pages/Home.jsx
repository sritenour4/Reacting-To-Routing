import{Link} from 'react-router-dom'

const Home = () => {
    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <div className="row justify-content-center">                          
                    <Link to="/" className="btn btn-primary m-2">Home Page</Link>
                    <Link to="/films" className="btn btn-primary m-2">View Films</Link>
                    <Link to="/people" className="btn btn-primary m-2">View People</Link>
                    <Link to="/locations" className="btn btn-primary m-2">View Locations</Link>
                    </div>                    
                    <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1920px-Studio_Ghibli_logo.svg.png" alt=""/>
                     
                </div>
            </section>
        </main>
    )
}

export default Home;