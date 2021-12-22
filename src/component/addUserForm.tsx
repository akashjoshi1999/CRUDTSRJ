import React, { useState } from "react";
import { IBaseUser } from "./interface";
import validator, { noErrors, FormErrors } from "../validator";

interface IProps {
  onAddUser: (user: IBaseUser) => void;
}
const initUser = { profession: "", name: "", age: "" };
const AddUserForm: React.FunctionComponent<IProps> = props => {
  const [formValue, setFormValue] = useState(initUser);
  const [errors, setErrors] = useState<FormErrors>({});
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rules = [
      { key: "name", required: true, label: "Name" },
      { key: "profession", required: true, label: "Profession" },
      { key: "age", required: true, label: "Age" },
      { key: "name", maxLength: 16, label: "name" },
      { key: "name", minLength: 4, label: "name" },
      { key: "age", minValue: 18, label: "Age" },
      { key: "age", maxValue: 60, label: "Age" }
    ];
    validator(
      formValue,
      rules,
      (errors: any): any => {
        if (noErrors(errors)) {
          props.onAddUser(formValue);
          setFormValue(initUser);
          return false;
        }
        setErrors(errors);
      }
    );
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div className="user-form">
      <h1>add users</h1>
      <form className="form-edit" onSubmit={onFormSubmit}>
        <div className="form-row">
          <label>Name</label>
          <input
            type="text"
            placeholder="please input name"
            name="name"
            value={formValue.name}
            onChange={onInputChange}
          />
          {errors["name"] && errors["name"].length > 0 && (
            <div className="form-error">{errors["name"].join(",")}</div>
          )}
        </div>
        <div className="form-row">
          <label>Profession</label>
          <input
            type="text"
            placeholder="please input profession"
            name="profession"
            value={formValue.profession}
            onChange={onInputChange}
          />
          {errors["profession"] && errors["profession"].length > 0 && (
            <div className="form-error">{errors["profession"].join(",")}</div>
          )}
        </div>
        <div className="form-row">
          <label>Age</label>
          <input
            type="number"
            placeholder="please input age"
            name="age"
            value={formValue.age}
            onChange={onInputChange}
          />
          {errors["age"] && errors["age"].length > 0 && (
            <div className="form-error">{errors["age"].join(",")}</div>
          )}
        </div>
        <div className="form-row">
          <button>Add new user</button>
        </div>
      </form>
    </div>
  );
};
export default AddUserForm;
