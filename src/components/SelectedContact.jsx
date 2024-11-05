import React, { useState, useEffect} from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null); 

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);

        const result = await response.json();
        setContact(result); 
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }
    fetchContact();
  }, [selectedContactId]);
return(
  <div>
    {contact && (
      <div>
        <h2>{contact.name}</h2>
        <p>{contact.email}</p>
        <p>{contact.address.street}</p>
        <p>{contact.address.city}, {contact.address.zipCode}</p>
        <button onClick={() => setSelectedContactId(null)}>Back to Contacts</button>
      </div>
    )}
  </div>
)}

       