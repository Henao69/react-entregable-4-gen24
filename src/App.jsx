import { useEffect, useState } from "react";
import "./App.css";
import useUserCrud from "./hooks/useUserCrud";
import UserCard from "./components/UserCard";
import FormUser from "./components/FormUser";
import ModalDelete from "./components/ModalDelete";

function App() {
  const [updateInfo, setUpdateInfo] = useState();
  const [formClose, setFormClose] = useState(true);
  const [deleteInfo, setDeleteInfo] = useState();
  const [deleteUser, setDeleteUser] = useState(true);

  const { users, getAllUsers, createNewUser, deleteUserByID, updateUserByID } =
    useUserCrud();

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleOpenForm = () => {
    setFormClose(false);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Users CRUD</h1>
        <button onClick={handleOpenForm} className="app__btn">
          Create new user
        </button>
      </header>
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserByID={updateUserByID}
        setUpdateInfo={setUpdateInfo}
        setFormClose={setFormClose}
        formClose={formClose}
      />
      <ModalDelete 
        deleteInfo={deleteInfo}
        setDeleteUser={setDeleteUser}
        deleteUser={deleteUser}
        deleteUserByID={deleteUserByID}
      />
      <div className="app__user-container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            setUpdateInfo={setUpdateInfo}
            setFormClose={setFormClose}
            setDeleteUser={setDeleteUser}
            setDeleteInfo={setDeleteInfo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
