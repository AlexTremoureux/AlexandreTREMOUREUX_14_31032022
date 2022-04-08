import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import { registerOptions, selectOptions, states } from "../utils/data";
import { useDispatch } from "react-redux";
import { addEmployee } from "../features/listOfEmployeesSlice";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const onFormSubmit = (data) =>
    dispatch(
      addEmployee({
        FirstName: data.firstName,
        LastName: data.lastName,
        StartDate: data.startDate,
        Department: data.department,
        DateOfBirth: data.dateOfBirth,
        Street: data.street,
        City: data.city,
        State: data.state,
        ZipCode: data.zipCode,
      })
    );
  const onErrors = (errors) => console.error(errors);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <>
      <NavLink className="main-nav-item" to={"/employee-list"}>
        <i className="fa fa-sign-out"></i>
        View current employee
      </NavLink>
      <form
        className="createEmployee"
        onSubmit={handleSubmit(onFormSubmit, onErrors)}
      >
        <h1>Create Employee</h1>
        <div className="field">
          <label htmlFor="firstName">First Name</label>
          <input
            className="fieldInput is-invalid"
            type="text"
            name="firstName"
            id="firstName"
            {...register("firstName", registerOptions.firstName)}
          />
          {errors?.firstName && (
            <span className="red">{errors.firstName.message}</span>
          )}
        </div>
        <div className="field">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="fieldInput"
            type="text"
            name="lastName"
            id="lastName"
            {...register("lastName", registerOptions.lastName)}
          />
          {errors?.lastName && (
            <span className="red">{errors.lastName.message}</span>
          )}
        </div>

        <div className="field">
          <label htmlFor="dateOfBirth">Date of birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="trip-start"
            value="2022-04-07"
            min="1950-01-01"
            max="2022-04-07"
            {...register("dateOfBirth")}
          ></input>
        </div>

        <div className="field">
          <label htmlFor="startDate">Start date:</label>
          <input
            type="date"
            id="startDate"
            name="trip-start"
            value="2022-04-07"
            min="1950-01-01"
            max="2022-04-07"
            {...register("startDate")}
          ></input>
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <div className="field">
            <label htmlFor="street">Street</label>
            <input
              className="fieldInput"
              type="text"
              name="street"
              id="street"
              {...register("street", registerOptions.street)}
            />
            {errors?.street && (
              <span className="red">{errors.street.message}</span>
            )}
          </div>
          <div className="field">
            <label htmlFor="city">City</label>
            <input
              className="fieldInput"
              type="text"
              name="city"
              id="city"
              {...register("city", registerOptions.city)}
            />
            {errors?.city && <span className="red">{errors.city.message}</span>}
          </div>
          <div className="field">
            <label>State</label>
            <select {...register("state")}>
              {states.map((opt) => (
                <option key={opt.abbreviation} value={opt.name}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              className="fieldInput"
              name="zipCode"
              id="zipCode"
              type="number"
              {...register("zipCode", registerOptions.zipCode)}
            />
            {errors?.zipCode && (
              <span className="red">{errors.zipCode.message}</span>
            )}
          </div>
        </fieldset>

        <div className="field">
          <label>Department</label>
          <select {...register("department")}>
            {selectOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.value}
              </option>
            ))}
          </select>
        </div>

        <button className="CTA">Save</button>
      </form>
    </>
  );
};

export default CreateEmployee;
