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
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shaswatkr96@gmail.example" target="_blank" rel="noreferrer" className="btn btn-white btn-lg">
                                <i className="bi bi-envelope-fill"></i>
                                {" "}Email
                            </a>
                        </div>

                        <div className='col d-grid gap-2'>
                            <a href="https://www.linkedin.com/in/shaswat-kumar/" target="_blank" rel="noreferrer" className="btn btn-linkedin btn-lg">
                                <i className="bi bi-linkedin"></i>
                                {" "}LinkedIn
                            </a>
                        </div>
                    </div>

                    <section className='text-start'>
                        <h2> About </h2>
                        <p className="lead">
                            I am a fullstack developer with a passion for JavaScript. I love working on new projects using optimized and latest coding standards. I like being active, constantly asking questions and gathering information about the project to either enhance it or to fix something.
                        </p>
                    </section>

                    <section className='text-start'>
                        <h2> Interests </h2>
                        <p className="lead">
                            Food expert. Learning Spanish. Reader. Chinese buff. Investor. Travel geek. Cold Coffee fanatic.
                        </p>
                    </section>
                </div>

                <footer className="card-footer text-muted p-4">
                    <div className='row'>
                        <div className='col text-center'>
                            <a href="https://github.com/shaswatkr" target="_blank" rel="noreferrer" className="btn btn-footer btn-lg">
                                <i className="bi bi-github"></i>
                            </a>
                        </div>
                        <div className='col text-center'>
                            <a href="https://www.instagram.com/shaswatkr/" target="_blank" rel="noreferrer" className="btn btn-footer btn-lg">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                        <div className='col text-center'>
                            <a href="https://wa.me/7992253118/" target="_blank" rel="noreferrer" className="btn btn-footer btn-lg">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </div>
                        <div className='col text-center'>
                            <a href="https://t.me/shaswatkr" target="_blank" rel="noreferrer" className="btn btn-footer btn-lg">
                                <i className="bi bi-telegram"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div >
    );
}

export default App;
