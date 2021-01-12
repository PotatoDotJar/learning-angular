import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {

  contact: Contact = {
    id: null,
    name: "",
    description: "",
    email: ""
  };

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  createContact() {
    console.log(this.contact);
    this.dataService.createContact(this.contact);
    this.clearContact();
  }

  clearContact() {
    this.contact = {
      id: null,
      name: "",
      description: "",
      email: ""
    };
  }
}
