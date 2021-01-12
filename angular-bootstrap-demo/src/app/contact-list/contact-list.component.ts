import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  selectedContact: Contact;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.contacts = this.dataService.getContacts();
  }

  public selectContact(contact: Contact) {
    this.selectedContact = contact;
  }

}
