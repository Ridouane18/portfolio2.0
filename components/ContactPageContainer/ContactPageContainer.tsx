import React from 'react'
import styles from './ContactPageContainer.module.css';
import emailjs from '@emailjs/browser';

const ContactPageContainer = () => {
  const YOUR_SERVICE_ID = process.env.YOUR_SERVICE_ID || ''
  const YOUR_TEMPLATE_ID = process.env.YOUR_TEMPLATE_ID || ''
  const YOUR_PUBLIC_KEY = process.env.YOUR_PUBLIC_KEY || ''

  // const form = useRef<any>(null)
  async function sendEmail(formData: any) {
    'use server'
    const formattedData: any = {};

    for (const [name, value] of formData) {
      formattedData[name] = value;
    }

    console.log('formData', formData);

    // Construct a new FormData object with the provided values
    const formDataToSend = new FormData();
    formDataToSend.append('name', formattedData['name']);
    formDataToSend.append('email', formattedData['email']);
    formDataToSend.append('subject', formattedData['subject']);
    formDataToSend.append('message', formattedData['message']);

    // Extracting data from FormData
    const extractedData = {} as any;
    for (const [key, value] of formData) {
      extractedData[key] = value;
    }
    console.log('extractedData', extractedData);

    await emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, extractedData, YOUR_PUBLIC_KEY)
      .then((result) => {
        formData.reset();
      }, (error) => {
        console.error(error.text);
      });
  }

  return (
    <form action={sendEmail}>
      <div className={styles.ContactPage_container}>
        <h2 className={styles.ContactPageTitle}>Contact</h2>
        <p className={styles.text}>
          Greetings! I&lsquo;m a seasoned front-end developer proficient in ReactJS, Next.js, JavaScript, and TypeScript. With 3+ years of experience, I specialize in crafting seamless web applications that blend design and functionality. Let&lsquo;s talk about your project – get in touch via the form below!
        </p>
        <div className={styles.inputsContainer}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Name</label>
            <input required type='text' name="name" placeholder='Name here' className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>E-mail</label>
            <input required type='email' name="email" placeholder='E-mail here' className={styles.input} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Subject</label>
            <input type='text' name="subject" placeholder='Subject here' className={styles.input} />
          </div>
          <label className={styles.label}>Message</label>
          <textarea name="message" required placeholder='Message here' rows={10} className={styles.textarea} />
        </div>
        <div className={styles.contact_button_container}>
          <button className={styles.contact_button} type="submit" >Submit</button>
        </div>
      </div>
    </form>
  )
}

export default ContactPageContainer;