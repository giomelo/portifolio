import { useState } from 'react';
import emailjs from 'emailjs-com';

import './Contact.css';

import useTexts from '../../../hooks/useTexts';
import ButtonSocial from '../../../components/buttons/redeSocial/ButtonSocial';

import iconGithub from '../../../assets/icon/github.svg';
import iconItchio from '../../../assets/icon/itchio.svg';
import iconLinkedin from '../../../assets/icon/linkedin.svg';

import iconCopy from '../../../assets/icon/copy.svg'

const Contact = () => {
    const texts = useTexts();

    const email = "giovanamelomr@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [sendStatus, setSendStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            // modelo => ('service', 'template', e.target, 'public key')
            .sendForm('service_1lmd13g', 'template_bv1o5d9', e.target, 'O7TcwhKur6vCProcA')
            .then((result) => {
                console.log('Email enviado com sucesso:', result.text);
                setSendStatus('Mensagem Enviada');
            })
            .catch((error) => {
                console.log('Erro ao enviar e-mail:', error.text);
                setSendStatus('Erro ao enviar a mensagem');
            });

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id="contact">
            <div className="section-contact">
                <div className="header-contact">
                    <h1 className="titleHeader-contact">{texts.TitlePage_Contact}</h1>
                    <div className="header-divider-contact"/>
                </div>
                <div className="panel-contact">
                    <div className="left-contact">
                        <p className="text-logo-contact">{texts.NameLogoContact}</p>
                        <div className="panel-info-contact">
                            <div className="info-email-contact">
                                <p className="text-info-contact">{email}</p>
                                <button className="copy-button-contact" onClick={handleCopyEmail}>
                                    <img src={iconCopy} alt="Copiar email" />
                                </button>
                            </div>
                            <p className="text-info-contact">{texts.TelephoneLogoContact}</p>
                            <div className="divider-contact"/>
                            <div className="redeSocial-contact">
                                <ButtonSocial height={"38px"} width={"38px"} icon={iconLinkedin} alt="Botão Linkedin" href="https://www.linkedin.com/in/giovana-melo-a3771a200/"/>
                                <ButtonSocial height={"38px"} width={"38px"} icon={iconGithub} alt="Botão github" href="https://github.com/giomelo"/>
                                <ButtonSocial height={"42px"} width={"42px"} icon={iconItchio} alt="Botão Itchi.io" href="https://giovana-melo.itch.io"/>
                            </div>
                        </div>
                    </div>
                    <div className="right-contact">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <h3 className="title-form">{texts.TitleForm_Contact}</h3>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder=" "
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="name">{texts.NameForm_Contact}</label>
                            </div>
                            <div className="input-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder=" "
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="email">{texts.EmailForm_Contact}</label>
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder=" "
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="subject">{texts.SubjectForm_Contact}</label>
                            </div>
                            <div className="input-group">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder=" "
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="message">{texts.MessageForm_Contact}</label>
                            </div>
                            <div className="form-actions">
                                <button type="submit">{texts.ButtonSendForm_Contact}</button>
                                <span className="send-status">{sendStatus}</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;