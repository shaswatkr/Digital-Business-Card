import './App.css';
import img from "./assets/Profile Pic - 3.jpg";

function App() {
    return (
        <div className='container mt-4'>
            <div className="card mx-auto" style={{ width: "30rem" }}>
                <img src={img} className="card-img-top" alt="Profile Pic" />

                <div className="card-body text-center">
                    <header>
                        <h5 className="card-title display-3"> Shaswat Kumar </h5>

                        <h5 className="job-title"> FullStack Developer </h5>
                    </header>

                    <div className='row mt-4 mb-4'>
                        <div className='col d-grid gap-2'>
                            <button type="button" className="btn btn-white btn-lg">
                                <i class="bi bi-envelope-fill"></i>
                                {" "}Email
                            </button>
                        </div>

                        <div className='col d-grid gap-2'>
                            <button type="button" className="btn btn-linkedin btn-lg">
                                <i class="bi bi-linkedin"></i>
                                {" "}LinkedIn
                            </button>
                        </div>
                    </div>

                    <section className='text-start'>
                        <h2> About </h2>
                        <p className="lead">
                            I am a fullstack developer with a passion for JavaScript. I write working on new projects using optimized and latest codes.
                        </p>
                    </section>

                    <section className='text-start'>
                        <h2> Interests </h2>
                        <p className="lead">
                            Food expert. Spanish scholar. Reader. Internet fanatic. Chinese buff. Investor. Travel geek. Cold Coffee fanatic.
                        </p>
                    </section>
                </div>

                <footer class="card-footer text-muted p-4">
                    <div className='row'>
                        <div className='col text-center'>
                            <button type="button" className="btn btn-footer btn-lg">
                                <i class="bi bi-github"></i>
                            </button>
                        </div>
                        <div className='col text-center'>
                            <button type="button" className="btn btn-footer btn-lg">
                                <i class="bi bi-instagram"></i>
                            </button>
                        </div>
                        <div className='col text-center'>
                            <button type="button" className="btn btn-footer btn-lg">
                                <i class="bi bi-whatsapp"></i>
                            </button>
                        </div>
                        <div className='col text-center'>
                            <button type="button" className="btn btn-footer btn-lg">
                                <i class="bi bi-telegram"></i>
                            </button>
                        </div>
                    </div>
                </footer>
            </div>
        </div >
    );
}

export default App;
