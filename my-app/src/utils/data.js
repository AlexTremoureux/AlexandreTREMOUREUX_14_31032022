 /*
const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      const data = {
        firstName: firstNameInputElement.current?.value,
        lastName: lastNameInputElement.current?.value,
        dateOfBirth: dateOfBirthInputElement.current?.value,
        startDate: startDateInputElement.current?.value,
        street: streetInputElement.current?.value,
        city: cityInputElement.current?.value,
        state: stateInputElement.current?.value,
        zipCode: zipCodeInputElement.current?.value,
        department: departmentInputElement.current?.value,
      };

      console.log(data);
    },
    []
  );

  // The following component is an example of your existing Input Component
  const Field = ({ label, register, id, required }) => (
    <div className="field">
      <label>{label}</label>
      <input className="fieldInput" {...register(id, { required: required })} />
      {errors.id && <span>This field is required</span>}
    </div>
  );

  //const { register, handleSubmit, formState: { errors } } = useForm();

const firstNameInputElement = useRef();
  const lastNameInputElement = useRef();
  const dateOfBirthInputElement = useRef();
  const startDateInputElement = useRef();
  const streetInputElement = useRef();
  const cityInputElement = useRef();
  const stateInputElement = useRef();
  const zipCodeInputElement = useRef();
  const departmentInputElement = useRef();

  const fieldOfForm = [
    {
      id: "firstName",
      label: "First Name",
      required: true,
    },
    {
      id: "lastName",
      label: "Last Name",
      required: true,
    },
    {
      id: "dateOfBirth",
      label: "Date of Birth",
    },
    {
      id: "startDate",
      label: "Start Date",
    },
    {
      id: "street",
      label: "Street",
    },
    {
      id: "city",
      label: "City",
    },
    {
      id: "state",
      label: "State",
    },

    {
      id: "zipCode",
      label: "Zip Code",
    },
    {
      id: "department",
      label: "Department",
    },
  ];

 return (
      <form className="createEmployee" onSubmit={handleSubmit(onSubmit)}>
        <Input label="First Name" register={register} required />
        
        <Input label="Last Name" register={register} required />
        <Input label="Date of Birth" register={register}  />
        <Input label="Start Date" register={register}  />
        <Input label="Street" register={register}  />
        <Input label="City" register={register}  />
        <Input label="State" register={register}  />
        <Input label="Zip Code" register={register}  />
        <Input label="Department" register={register}  />
        
        <input className="CTA" value="Save" type="submit" />
      </form>
    );*/