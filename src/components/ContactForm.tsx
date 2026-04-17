'use client';

import { useState } from 'react';

interface ErrorResponse {
  error?: string;
  details?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return 'El nombre es requerido';
    if (!formData.email.trim()) return 'El email es requerido';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Email inválido';
    if (!formData.phone.trim()) return 'El teléfono es requerido';
    if (!formData.message.trim()) return 'El mensaje es requerido';
    if (formData.message.length > 5000) return 'El mensaje no puede exceder 5000 caracteres';
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data: ErrorResponse = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setErrorMessage(data.error || 'Error enviando el mensaje');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Error de conexión. Por favor intenta de nuevo.');
      setStatus('error');
      console.error('Error sending form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#FF6B35] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#FF6B35] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        />
      </div>
      <input
        type="tel"
        name="phone"
        placeholder="Tu teléfono"
        value={formData.phone}
        onChange={handleChange}
        required
        disabled={status === 'loading'}
        className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#FF6B35] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      />
      <textarea
        name="message"
        placeholder="Tu mensaje"
        value={formData.message}
        onChange={handleChange}
        required
        disabled={status === 'loading'}
        rows={6}
        className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#FF6B35] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed resize-none transition-all"
      />

      {status === 'success' && (
        <div className="bg-green-900/20 border border-green-800 rounded-lg p-4 text-green-400 animate-in fade-in">
          ✓ Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 text-red-400 animate-in fade-in">
          ✗ {errorMessage || 'Error enviando el mensaje. Por favor intenta de nuevo.'}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#FF6B35] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#e05a24] transition-all uppercase disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
}
