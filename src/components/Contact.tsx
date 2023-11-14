import { FunctionComponent, useEffect } from "react";
import { ChangeEvent, FormEvent, useState } from 'react';
import { validate } from "./Utils/contactSchema";
import '../Style/main.scss'
import { MessageState, FormData } from "./Types";
import Aos from "aos";
import "aos/dist/aos.css";


export const Contact: FunctionComponent = () => {
  useEffect(() => {
    Aos.init()
}, [])
    
    const [messages, setMessages] = useState<MessageState[]>([]);
    const [formData, setFormData] = useState<FormData>({
        'name': '',
        subject: '',
        message: '',
      });

      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = validate(formData);
    
        if (!isValid) {
          const errorMessages: MessageState[] = validate.errors?.map((error) => ({ message: error.message ?? '', type: 'error' })) || [];
          setMessages(errorMessages);
          console.log(messages);
          return;
        }
    
        const { 'name': name, subject, message } = formData;
        const mySubject = encodeURIComponent(subject);
        const myBody = encodeURIComponent(`${message}
        
    Cordialement,
    ${name}`);
    
        const mailtoLink = `mailto:adlen3351@gmail.com?subject=${mySubject}&body=${myBody}`;
        window.location.href = mailtoLink;
    
        const valideMessages: MessageState[] = [{ message: "Votre message a été préparé pour l'envoi avec succès.", type: 'success' }];
        setMessages(valideMessages);
    
        setFormData({
          'name': '',
          subject: '',
          message: '',
        });
      };
    return (
  
        <section data-aos="fade-up"
        data-aos-duration="1500"
        className="contact" id="contact">
          <div className="background">
            <div className="form-wrapper">
    <div className="contact-txt">
        <h2>Let's connect!</h2>
        <p className="contact-txt-par">If you ever want to grab a coffe/tea <span className="none">(virtually)</span> or just want a quick chat, you can send me a message here!</p>        
        </div>
    <form className="form" onSubmit={handleSubmit}>

        <input type="text" name="name" id="name" placeholder="name" value={formData['name']} onChange={handleChange} required />
        <label htmlFor="name" data-cursor-pointer="active"></label>

        <input type="text" name="subject" id="subject" placeholder="subject" value={formData.subject} onChange={handleChange}required />
        <label htmlFor="subject" data-cursor-pointer="active"></label>

        <textarea name="message" id="message" placeholder="message" value={formData.message} onChange={handleChange} required />
        <label htmlFor="message" data-cursor-pointer="active"></label>

        <button className="button-submit" type="submit" >SEND MESSAGE</button>
    </form>
    
 
    </div>
    
    </div>
   
    </section>
   
   
    );
}
