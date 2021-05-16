import React from 'react';
import ContactForm from '../Components/ContactForm/ContactForm.js';
import ContactList from "../Components/Contacts/ContactList";
import ContactFilter from "../Components/Contacts/ContactFilter";

const PhonebookView=()=>{
    return(
        <div>
            <h2>Phonebook</h2>
            <ContactForm />
            <h2>Contacts</h2>
            <ContactFilter />
            <ContactList />
        </div>
    )
};

export default PhonebookView;