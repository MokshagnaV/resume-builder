import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <h1>Resume Builder</h1>
      <p>
        Build your resume with less efforts. Don't worry about the design. just
        give us the details, we'll take care of the rest!
      </p>
      <Link to="create" className="btn btn-outline-success">
        Let's get Started!
      </Link>
    </div>
  );
};

export default Main;
