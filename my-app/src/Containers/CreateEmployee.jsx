import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { registerOptions, selectOptions, states } from "../utils/data";
import { useDispatch } from "react-redux";
import { ADD_EMPLOYEE } from "../features/listOfEmployeesSlice";
import { Modal } from "react-portal-modal-minimalist";

const CreateEmployee = () => {
  const dispatch = useDispatch();

  // State for modal and his theme
  const [isOpen, setIsOpen] = useState(false);
  const customTheme = {
    backgroundColorWrapper: "rgba(138, 138, 138, 0.6)",
    backgroundColormodal: "#282c34",
    colorText: "white",
    modalWidth: "20%",
    modalHeight: "10%",
    fontSize: "1.8rem",
    transitionCloseBtn: " transform 1000ms",
  };

  // Dispatch in global state
  const onFormSubmit = (data) => {
    dispatch(
      ADD_EMPLOYEE({
        firstName: data.firstName,
        lastName: data.lastName,
        startDate: data.startDate,
        department: data.department,
        dateOfBirth: data.dateOfBirth,
        street: data.street,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
      })
    );
    setIsOpen(true);
    reset();
  };

  const onErrors = (errors) => console.error(errors);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  return (
    <>
      <form
        className="createEmployee"
        onSubmit={handleSubmit(onFormSubmit, onErrors)}
      >
        <h2 className="category">Create Employee</h2>
        <div className="field">
          <label htmlFor="firstName">First Name : </label>
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
          <label htmlFor="lastName">Last Name :</label>
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
          <label htmlFor="dateOfBirth">Date of birth :</label>
          <input
            className="datePicker"
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            {...register("dateOfBirth", registerOptions.dateOfBirth)}
          ></input>
          {errors?.dateOfBirth && (
            <span className="red">{errors.dateOfBirth.message}</span>
          )}
        </div>

        <div className="field">
          <label htmlFor="startDate">Start date :</label>
          <input
            className="datePicker"
            type="date"
            id="startDate"
            name="startDate"
            {...register("startDate", registerOptions.startDate)}
          ></input>
          {errors?.startDate && (
            <span className="red">{errors.startDate.message}</span>
          )}
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <div className="field">
            <label htmlFor="street">Street :</label>
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
            <label htmlFor="city">City :</label>
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
            <label>State :</label>
            <select {...register("state", registerOptions.state)}>
              <option value="">Please choose your State</option>
              {states.map((opt) => (
                <option key={opt.abbreviation} value={opt.name}>
                  {opt.name}
                </option>
              ))}
            </select>
            {errors?.state && (
              <span className="red">{errors.state.message}</span>
            )}
          </div>
          <div className="field">
            <label htmlFor="zipCode">Zip Code :</label>
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
          <label>Department :</label>

          <select {...register("department", registerOptions.department)}>
            <option value="">Please choose your department</option>
            {selectOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.value}
              </option>
            ))}
          </select>
          {errors?.department && (
            <span className="red">{errors.department.message}</span>
          )}
        </div>

        <button className="neumorphismLight save">Save</button>
      </form>
      <Modal
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        theme={customTheme}
      >
        Employee is created!
      </Modal>
    </>
  );
};

export default CreateEmployee;
