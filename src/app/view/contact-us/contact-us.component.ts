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

  ngAfterViewInit(): void {
    // Animate Sidebar Info (Slide in from left)
    gsap.from('.staggered-sidebar', {
      opacity: 0,
      x: -30,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contact-wrapper',
        start: 'top 80%',
      },
    });

    // Animate Form Fields (Slide in from right)
    gsap.from('.staggered-form', {
      opacity: 0,
      x: 30,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contact-wrapper',
        start: 'top 75%',
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