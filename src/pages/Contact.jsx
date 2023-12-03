import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    try {
      // Simular o envio para o back-end
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Limpar a mensagem de sucesso após 3 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <>
      <section className='container-contact'>
        <h1>Pagina de Contato</h1>
        {submitSuccess && <div className="success-message">Mensagem enviada com sucesso!</div>}
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} />

          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleFormChange}></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}
