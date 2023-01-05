

import SpiritLogo from "../../assets/Spirit.jpg"
const LoginForm = () => {


    return (
        <div className="container-fluid">

        <div className="row">
            <div className="col-3 mx-auto text-center">
                <img src={SpiritLogo} width="250px" height="250px"/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-4 mx-auto">
                <form className="bg-light p-5 rounded" style={{marginTop: "-50px", boxShadow: "0 .5rem 1rem rgba(255, 255, 255, .5)"}}>
                    <h2 className="text-center font-large">Sign In</h2>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control"></input>
                    </div>

                    <div className="form-group text-center mt-4">
                        <button className="btn mx-auto text-light" style={{backgroundColor: "grey"}}>Login</button>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <p className="text-center">Don't have an account?</p>
                    <div className="row text-center">
                        <a href="" className="link-secondary">Sign Up</a>
                    </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default LoginForm;