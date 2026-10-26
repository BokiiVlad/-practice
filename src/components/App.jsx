import {useState} from "react";
import "./App.css";
import ContactForm from "./ContactForm.jsx";
import ContactList from "./ContactList.jsx";
import SearchBox from "./SearchBox.jsx";
import arrayList from "../array.js";

function App() {
  const [array, setArray] = useState(arrayList);
  const [find, setFind] = useState("");

  const deleteNumber = ( id ) => {
    setArray((sepArr)=>{
      return sepArr.filter((contact) => contact.id !== id)
    });
  };

  const addContact = (newContact) =>{
    setArray([...array,newContact])
  };

  const findList = words => {
      setFind(words)
  }
  
  const finalContacts = array.filter((contact)=> contact.name.toLowerCase().includes(find.toLowerCase())
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact}/>
      <SearchBox onFind={findList}/>
      <ContactList array={finalContacts} onDelete={deleteNumber} />
    </div>
  );
}

export default App;
