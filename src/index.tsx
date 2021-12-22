import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import AddUserForm from "./component/addUserForm";
import EditUserForm from "./component/editUserForm";
import UserTable from "./component/userTable";
import { IBaseUser, IUser } from "./component/interface";

import "./styles.css";
/**
 * TODO:
 * 表单验证
 * 登录
 * 样式优化
 */

const defaultUsers: Array<IUser> = [
  { profession: "lily", name: "lily hh", id: 1, age: 18 },
  { profession: "bob", name: "bob haha", id: 2, age: 19 }
];
const initCurrentUser: IUser = { profession: "", name: "", age: 10, id: null };

function App() {
  const [users, setUsers] = useState(defaultUsers);
  const [editUser, setEditUser] = useState(initCurrentUser);
  const [editing, setEdit] = useState(false);
  const onAddUser = (newUser: IBaseUser) => {
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id }]);
  };
  const onCurrentUser = (user: IUser) => {
    setEditUser(user);
    setEdit(true);
  };
  const onUpdateUser = (id: number, newUser: IUser) => {
    setEdit(false);
    setUsers(users.map(i => (i.id === id ? newUser : i)));
  };
  const onDeleteUser = (currentUser: IUser) => {
    setUsers(users.filter(i => i.id !== currentUser.id));
  };
  return (
    <div className="App">
      <h1>CRUD App with Hooks</h1>
      <div className="user-flex-wrapper">
        {editing ? (
          <EditUserForm
            user={editUser}
            onUpdateUser={onUpdateUser}
            setEdit={setEdit}
          />
        ) : (
          <AddUserForm onAddUser={onAddUser} />
        )}
        <UserTable
          users={users}
          onEdit={onCurrentUser}
          onDelete={onDeleteUser}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
