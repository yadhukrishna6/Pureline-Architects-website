import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { MessageService } from 'primeng/api';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  providers: [MessageService]
})
export class ContactUsComponent implements AfterViewInit{
   isSubmitting = false;
  formSubmitted = false;

    constructor(private messageService: MessageService) {}

@ViewChild('contactSection') contactSection!: ElementRef;
 @ViewChild('contactInfoSection') contactInfoSection!: ElementRef;
 ngAfterViewInit(): void {
    const formElements = this.contactSection.nativeElement.querySelectorAll('.form-group, .submit-btn');
  const boxes = this.contactInfoSection.nativeElement.querySelectorAll('.info-box');

    gsap.from(formElements, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: this.contactSection.nativeElement,
        start: 'top 80%',
      },
    });

    gsap.from('.contact-image img', {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.contactSection.nativeElement,
        start: 'top 85%',
      }
    });
     gsap.from(boxes, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: this.contactInfoSection.nativeElement,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }

  

 form = {
    fullname: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

 submitForm(form: any) {
  if (!form.valid) {
    Object.values(form.controls).forEach((control: any) => {
      control.markAsTouched(); // show all field errors
    });
    return;
  }

  const serviceID = 'service_jqqdunw';
  const templateID = 'template_b5b47bc';
  const publicKey = 'lOsHqlGuivZ3C9Ce_';

  this.isSubmitting = true;

  emailjs.send(serviceID, templateID, form.value, publicKey)
    .then(() => {
      this.isSubmitting = false;
      this.formSubmitted = true;
      form.resetForm();
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      this.isSubmitting = false;
    });
}

}