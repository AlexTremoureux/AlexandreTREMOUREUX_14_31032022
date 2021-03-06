/* eslint-disable no-useless-escape */
import { dateMax, dateMin, today } from "./constantes";

export const registerOptions = {
  firstName: {
    required: "First name is required",
    maxLength: {
      value: 40,
      message: "Please enter your first name between 1 and 40 characters",
    },
    pattern: {
      value: /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/,
      message: "Please enter your first name in good format",
    },
  },
  lastName: {
    required: "Last name is required",
    maxLength: {
      value: 40,
      message: "Please enter your last name between 1 and 40 characters",
    },
    pattern: {
      value: /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/,
      message: "Please enter your last name in good format",
    },
  },
  startDate: {
    required: "Start date is required",
    min: {
      value: dateMin,
      message: "Please check your start date",
    },
    max: {
      value: today,
      message: "Please check your start date",
    },
  },
  department: {
    required: "Department is required",
  },
  dateOfBirth: {
    required: "Date of birth is required",
    min: {
      value: dateMin,
      message: "Please check your date of birth, you look too old",
    },
    max: {
      value: dateMax,
      message: "Please check your date of birth, you look too young",
    },
  },
  street: {
    required: "Street is required",
    maxLength: {
      value: 50,
      message: "Please enter your street between 1 and 50 characters",
    },
    pattern: {
      value:
        /^[a-zA-Z0-9]+[\s]*[a-zA-Z0-9.\-\,\#]+[\s]*[a-zA-Z0-9.\-\,\#]+[a-zA-Z0-9\s.\-\,\#]*$/,
      message: "Please enter your address in good format",
    },
  },
  city: {
    required: "City is required",
    maxLength: {
      value: 40,
      message: "Please enter your city between 1 and 40 characters",
    },
    pattern: {
      value: /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/,
      message: "Please enter your city in good format",
    },
  },
  state: {
    required: "State is required",
  },
  zipCode: {
    required: "Zip code is required",
    pattern: {
      value: /^\d{5}?$/,
      message: "Please enter your zip code in good format ",
    },
  },
};

export const selectOptions = [
  { value: "Sales", label: "Sales" },
  { value: "Marketing", label: "Marketing" },
  { value: "Engineering", label: "Engineering" },
  { value: "Human Resources", label: "Human Resources" },
  { value: "Legal", label: "Legal" },
];
export const states = [
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  {
    name: "California",
    abbreviation: "CA",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    name: "Florida",
    abbreviation: "FL",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
  },
  {
    name: "Guam",
    abbreviation: "GU",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
  },
  {
    name: "Maine",
    abbreviation: "ME",
  },
  {
    name: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
  },
  {
    name: "Montana",
    abbreviation: "MT",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
  },
  {
    name: "New York",
    abbreviation: "NY",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
  },
  {
    name: "Palau",
    abbreviation: "PW",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
  },
  {
    name: "Texas",
    abbreviation: "TX",
  },
  {
    name: "Utah",
    abbreviation: "UT",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
  },
  {
    name: "Washington",
    abbreviation: "WA",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
  },
];
export const columnsTable = [
  {
    Header: "First Name",
    accessor: "firstName", // accessor is the "key" in the data
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Date of birth",
    accessor: "dateOfBirth",
  },
  {
    Header: "Start date",
    accessor: "startDate",
  },
  {
    Header: "Street",
    accessor: "street",
  },
  {
    Header: "City",
    accessor: "city",
  },

  {
    Header: "State",
    accessor: "state",
  },
  {
    Header: "Zip Code",
    accessor: "zipCode",
  },
  {
    Header: "Department",
    accessor: "department",
  },
];
