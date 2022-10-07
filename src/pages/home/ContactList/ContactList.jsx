//component render list message
import ContactItem from "../ContactItem/ContactItem";
import SearchForm from "../SearchForm/SearchForm";
import "./ContactList.css";
function ContactList(props) {
  return (
    <>
      <div className="contactlist_container">
        <div className="ct_searchform">
          <SearchForm />
        </div>
        <div>
          <ul>
            {props.items.map((messageItem) => (
              <ContactItem
                key={Math.random()}
                message={messageItem.message}
                image={messageItem.image}
                name={messageItem.name}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContactList;
