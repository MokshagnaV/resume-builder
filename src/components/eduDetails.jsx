// import { useState } from "react";
// import { useSelector } from "react-redux";

import { useState } from "react";

const eduBox = (id) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Educational Details - {id}</h4>
        <form>
          <div className="form-group row">
            <label htmlFor="title">Title</label>
            <div className="col-sm-10">
              <input className="form-control" type="text" id="title" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const EduDetails = (props) => {
  // const personalData = useSelector((state) => state.resume.personalDetails);
  const [eduCount, setEduCount] = useState(0);
  const [eduBoxList, setEduBoxList] = useState([]);

  const addEduBox = () => {
    setEduCount(eduCount + 1);
    setEduBoxList([...eduBoxList, eduCount]);
  };

  return (
    <div className="container">
      <h1>Educational Details</h1>
      <button onClick={addEduBox}>Add Education details</button>
      {eduBoxList.map((ed) => (
        <div key={ed}>{eduBox(ed)}</div>
      ))}
    </div>
  );
};
export default EduDetails;
