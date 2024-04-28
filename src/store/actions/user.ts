const ADD_USER = "user/add";
const EDIT_USER = "user/edit";
const DELETE_USER = "user/delete";

const addUser = () => ({
  type: ADD_USER,
});

const editUser = () => ({
  type: EDIT_USER,
});

const deleteUser = () => ({
  type: DELETE_USER,
});

export { addUser, editUser, deleteUser };
