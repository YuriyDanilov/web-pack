
import { ContactServices } from './cont-serv'
import { LoginForm } from './log-form'
import { UserServices } from './user-serv'

export class Contact {
    constructor(value, name, type, id) {
        this.value = value;
        this.name = name;
        this.type = type;
        this.id = id;
    }

    createContact(contact) {
        let contactElem = document.createElement('div');
        contactElem.classList.add('contact-item');
        contactElem.dataset.index = contact.id;
        contactElem.insertAdjacentHTML('beforeend', '<img class="contact-img" src="img/phonebook.png" alt="X">');

        contactElem.append(`${contact.name}`);

        if (contact.id == activeContact) {
            contactElem.classList.add('active');
        }

        return contactElem;
    }

    showContact() {
        document.querySelector('.contacts-list').innerHTML = '';
        let elem = this.contact.map(contact => this.createContact(contact));
        document.querySelector('.contacts-list').append(...elem);
    }

    createContactInfo(contact) {
        let contactElem = document.createElement('div');
        contactElem.classList.add('none');

        if (contact.id == activeContact) {
            contactElem.classList.remove('none');
            contactElem.classList.add('activeContact');
        }

        let name = document.createElement('div');
        name.innerHTML = 'Имя: ' + contact.name;

        let type = document.createElement('div');
        type.innerHTML = 'Тип: ' + contact.type;

        let value = document.createElement('div');
        value.innerHTML = 'Контакт: ' + contact.value;


        contactElem.append(name, type, value);
        contactElem.classList.add('contact-item');

        return contactElem;
    }

    showContactInfo() {
        document.querySelector('.contacts-show').innerHTML = '';
        let elem = this.contact.map((c) => this.createContactInfo(c));
        document.querySelector('.contacts-show').append(...elem);
    }

    update() {
        contactService.getAll().then(contact => {
            this.contact = contact;
            this.showContact(this.contact);
            this.showContactInfo(this.contact);
        });
    }
}


let activeContact = null;

document.addEventListener('click', (e) => {
    if (!e.target.matches('.contact-item')) return;
    let index = e.target.dataset.index;
    activeContact = index;
    contact.showContact();
    contact.showContactInfo();
    activeContact = null;
})

export let contact = new Contact();

let userService = new UserServices();
let contactService = new ContactServices();
let loginForm = new LoginForm('.login', userService);
loginForm.onLogin = () => {
    contact.update()
}