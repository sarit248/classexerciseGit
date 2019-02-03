import { Component } from '@angular/core';
import { ContactUs } from '../../models/contactUs';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
    public contactUs: ContactUs = new ContactUs();

    public send(): void {
        alert(`
    First Name: ${this.contactUs.firstName}
    Last Name: ${this.contactUs.lastName}
    Email: ${this.contactUs.mail}
    Message: ${this.contactUs.message}`);
    }
}

