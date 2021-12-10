import { RegisterForm } from './reg-form'
import { LoginForm } from './log-form'
import { UserServices } from './user-serv'
import { ContactServices } from './cont-serv'
import { Contact } from './contacts'
import { AddContact } from './add-cont'
import '../styles/index.scss'

let exit = document.querySelector('.btn-exit');
exit.addEventListener('click', () => {
    document.querySelector('.container').style.display = 'flex';
    exit.style.display = 'none';
    document.querySelector('.contacts').style.display = 'none';
})