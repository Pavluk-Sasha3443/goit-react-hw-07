import { useDispatch, useSelector } from "react-redux";
import "../components/App.css";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && !error && <p>Please wait while the search is in progress</p>}
    </>
  );
}

export default App;
