import React, { useEffect } from 'react';
import ContactForm from '../../component/ContactForm';
import Filter from '../../component/Filter';
import Contacts from '../../component/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperation } from '../../redux/contacts';
import style from './ContactsView.module.css';

export default function ContactsView(props) {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  return (
    <section className={style.section}>
      <div className={style.wrap}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={style.wrap}>
        <h2>Contacts</h2>
        {contacts?.length > 0 && <Filter />}
        {contacts?.length > 0 && <Contacts />}
      </div>
    </section>
  );
}
