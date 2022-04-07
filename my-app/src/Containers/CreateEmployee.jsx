import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";


const CreateEmployee = () => {
  const onFormSubmit  = (data) => console.log(data);
  const onErrors = (errors) => console.error(errors);

  // register va enregistrer les références
  const { register, formState: { errors }, handleSubmit } = useForm();
  //const { errors } = formState;
  const registerOptions = {
    firstName: { required: "First name is required", maxLength: {
      value: 20,
      message: 'Please enter your first name between 1 and 20 characters'
    } },
    lastName: { required: "Last name is required", maxLength: {
      value: 20,
      message: 'Please enter your last name between 1 and 20 characters'
    }  },
    startDate: { required: "Start date is required", maxLength: {
      value: 20,
      message: 'Please enter your start date in good format'
    }  },
    department: { required: "Department is required", maxLength: {
      value: 20,
      message: 'Please enter your department between 1 and 20 characters'
    }  },
    dateOfBirth: { required: "Date of birth is required", maxLength: {
      value: 20,
      message: 'Please enter your date of birth in good format'
    }  },
    street: { required: "Street is required", maxLength: {
      value: 20,
      message: 'Please enter your street between 1 and 20 characters'
    }  },
    city: { required: "City is required", maxLength: {
      value: 20,
      message: 'Please enter your city between 1 and 20 characters'
    }  },
    state: { required: "State is required", maxLength: {
      value: 20,
      message: 'Please enter your state between 1 and 20 characters'
    }  },
    zipCode: { required: "Zip code is required", maxLength: {
      value: 20,
      message: 'Please enter your zip code in good format'
    }  },
    
  };
  return (
    <>
      <NavLink className="main-nav-item" to={"/employee-list"}>
        <i className="fa fa-sign-out"></i>
        View current employee
      </NavLink>
      <form className="createEmployee" onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <h1>Create Employee</h1>
        <div className="field">
          <label htmlFor="firstName">First Name</label>
          <input
            className="fieldInput is-invalid"  type="text" name="firstName"
            {...register("firstName", registerOptions.firstName)}
          />
          {errors?.firstName && (
            <span className="red">{errors.firstName.message}</span>
          )}
        </div>
        <div className="field">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="fieldInput" type="text" name="lastName"
            {...register("lastName", registerOptions.lastName)}
          />
          {errors?.lastName && (
            <span className="red">{errors.lastName.message}</span>
          )}
        </div>
        <div className="field">
          <label htmlFor="street">Street</label>
          <input
            className="fieldInput" type="text" name="street"
            {...register("street", registerOptions.street)}
          />
          {errors?.street && <span className="red">{errors.street.message}</span>}
        </div>
        <div className="field">
          <label htmlFor="firstName">City</label>
          <input
            className="fieldInput" type="text" name="city"
            {...register("city", registerOptions.city)}
          />
          {errors?.city && <span className="red">{errors.city.message}</span>}
        </div>
        <div className="field">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            className="fieldInput" name="zipCode"
            type="number"
            {...register("zipCode", registerOptions.zipCode)}
          />
          {errors?.zipCode && (
            <span className="red">{errors.zipCode.message}</span>
          )}
        </div>
        
        <button className="CTA">Save</button>
        
      </form>
    </>
  );
};

export default CreateEmployee;
