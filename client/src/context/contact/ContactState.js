import React, { useReducer, Children } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {} from "../types";

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Jill",
                email: "jill@gmail.com",
                phone: "111-111-1111",
                type: "personal"
            },
            {
                id: 2,
                name: "Sara",
                email: "sara@gmail.com",
                phone: "222-222-2222",
                type: "personal"
            },
            {
                id: 3,
                name: "Harry",
                email: "harry@gmail.com",
                phone: "333-333-3333",
                type: "professional"
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact

    // Delete Contact

    // Set current contact

    // Clear current contact

    // Update contact

    // Filter contact

    // CLear Filer

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;