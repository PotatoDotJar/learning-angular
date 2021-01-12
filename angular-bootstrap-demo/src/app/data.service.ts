import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts: Contact[] = [
    {id: 1, name: "Contact 001", description: "This is a description", email: "rmnader@svsu.edu"},
    {id: 2, name: "Contact 002", description: "This is a description", email: "rmnader@svsu.edu"},
    {id: 3, name: "Contact 003", description: "This is a description", email: "rmnader@svsu.edu"},
    {id: 4, name: "Contact 004", description: "This is a description", email: "rmnader@svsu.edu"},
    {id: 5, name: "Contact 005", description: "This is a description", email: "rmnader@svsu.edu"},
    {id: 6, name: "Contact 006", description: "This is a description", email: "rmnader@svsu.edu"},
    {id: 7, name: "Contact 007", description: "This is a description", email: "rmnader@svsu.edu"}
  ];

  constructor() { }

  public getContacts(): Array<Contact> {
    return this.contacts;
  }

  public createContact(contact: Contact) {
    this.contacts.push(contact);
  }
}
