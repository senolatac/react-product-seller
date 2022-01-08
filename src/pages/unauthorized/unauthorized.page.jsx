import { Link } from 'react-router-dom';


const UnauthorizedPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <span className="display-1">
                        401
                    </span>
                    <div className="mb-4 lead">
                        Unauthorized! Access to this resource is denied.
                    </div>

                    <Link to="/home" className="btn btn-link">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export {UnauthorizedPage};
