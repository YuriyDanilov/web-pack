
import { ContactServices } from './cont-serv'
import { Contact } from './contacts'

export class AddContact {
    constructor(selector, contactService) {
        this.selector = selector;
        this.contactService = contactService;
        this.onAdd = () => { }
        document.addEventListener(
            "DOMContentLoaded",
            () => {
                this.init();
                this.binds();
            }
        );
    }

    init() {
        this.container = document.querySelector(this.selector);
        this.name = this.container.querySelector('#name');
        this.type = this.container.querySelector('#type');
        this.value = this.container.querySelector('#value');
        this.addBtn = this.container.querySelector('.btn');
    }

    binds() {
        this.addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.add()
        });
    }

    add() {
        if (this.value.value == '' || this.name.value == '' || this.type.value == '') {
            alert('Заполните поля');
            return;
        }

        let contact = new Contact(
            this.value.value,
            this.name.value,
            this.type.value,
        );
        this.contactService.addContact(contact).then(response => {
            if (response.status === "error")
                this.addError(response.error);
            this.successAdd();
        })

    }

    addError(text) {
        alert(text);
    }

    successAdd() {
        this.onAdd();
        this.clearForm();
    }

    clearForm() {
        this.name.value = ''
        this.value.value = ''
    }
}

import { contact } from './contacts';

let contactService = new ContactServices();
let addContact = new AddContact('.contacts-info', contactService);
addContact.onAdd = () => {
    contact.update()
}