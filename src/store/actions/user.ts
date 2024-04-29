import { Contact } from "../../types";

const ADD_USER = "users/add";
const EDIT_USER = "users/edit";
const DELETE_USER = "users/delete";

const addUser = (newContact: Contact) => ({
  type: ADD_USER,
  payload: newContact,
});

const editUser = (contact: Contact) => ({
  type: EDIT_USER,
  payload: contact,
});

const deleteUser = (contactId: string) => ({
  type: DELETE_USER,
  payload: contactId,
});

export { addUser, editUser, deleteUser };
