import { useRef } from "react";
import "../style/createResume.css";
import { formToObj } from "../services/formatter";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resumeActions } from "../store/resume";

const CreateResume = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();
  const onNext = (e) => {
    e.preventDefault();
    const form = formRef.current;
    console.log(formToObj(form));
    dispatch(resumeActions.setPersonalDetails(formToObj(form)));
    navigate("/create/1");
  };
  const personalData = useSelector((state) => state.resume.setPersonalDetails);
  console.log(personalData);

  return (
    <div className="container">
      <h1>Create Your Resume Here!!</h1>
      <div className="order-md-1 innerContainer">
        <form
          ref={formRef}
          className="needs-validation"
          noValidate=""
          onSubmit={onNext}
        >
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">First name </label>
              <input
                name="firstName"
                id="firstName"
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">Last name</label>
              <input
                name="lastName"
                id="lastName"
                type="text"
                className="form-control"
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              Email <span className="text-muted">(Optional)</span>
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className="form-control"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input
              name="address"
              id="address"
              type="text"
              className="form-control"
              placeholder="1234 Main St"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address2">
              Address 2 <span className="text-muted">(Optional)</span>
            </label>
            <input
              name="address2"
              id="address2"
              type="text"
              className="form-control"
              placeholder="Apartment or suite"
            />
          </div>
          <div className="row">
            <div className="col-md-5 mb-3">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                className="custom-select d-block w-100"
                required
              >
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="state">State</label>
              <select
                id="state"
                name="state"
                className="custom-select d-block w-100"
                required
              >
                <option value="">Choose...</option>
                <option>California</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="zip">Zip</label>
              <input
                name="zip"
                id="zip"
                type="text"
                className="form-control"
                placeholder=""
                required
              />
            </div>
          </div>
          {/* <button
            className="btn btn-primary btn-lg btn-block"
            type="submit"
            onClick={onNext}
          >
            Next <i className="bi bi-arrow-right-square"></i>
          </button> */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="submit"
              value="Next"
              className="btn btn-primary btn-lg "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateResume;
