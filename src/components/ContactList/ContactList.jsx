import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, number, name }) => (
        <li className={css.item} key={id}>
          <Contact number={number} name={name} id={id} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
