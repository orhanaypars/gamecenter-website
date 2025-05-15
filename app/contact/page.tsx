"use client";

import React, { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm(initialForm);
      } else {
        // Try to get error message from response
        let msg = "Mesaj gönderilemedi. Lütfen tekrar deneyin.";
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch {}
        setError(msg);
      }
    } catch {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
      {/* İletişim Formu */}
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          Email İletişim Formu
        </h2>
        {/* Form, /api/contact endpointine POST isteği gönderiyor. */}
        {/* Bu endpointte nodemailer ile mail gönderimi yapılacak. */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">
              Adınız
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Adınızı girin"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">
              E-posta
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="E-posta adresiniz"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">
              Mesajınız
            </label>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={5}
              placeholder="Mesajınızı yazın"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 rounded transition"
          >
            {loading ? "Gönderiliyor..." : "Gönder"}
          </button>
          {sent && (
            <div className="text-green-600 font-semibold mt-2">
              Mesajınız başarıyla gönderildi!
            </div>
          )}
          {error && (
            <div className="text-red-600 font-semibold mt-2">{error}</div>
          )}
        </form>
      </div>

      {/* Sosyal Medya ve WhatsApp */}
      <div className="w-full md:w-1/3 flex flex-col gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Bize Ulaşın</h3>
          <a
            href="https://wa.me/905525845941"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-600 font-bold hover:underline mb-2"
          >
            <svg width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374A9.86 9.86 0 012.1 12.868C2.073 7.548 6.659 3.002 12 3c2.652.001 5.151 1.037 7.034 2.929A9.825 9.825 0 0121.9 12.13c.027 5.32-4.559 9.868-9.849 9.869zm8.413-18.282A11.815 11.815 0 0012.003 0C5.373 0 .066 5.306.002 11.876c-.032 2.084.522 4.11 1.607 5.891L.057 24l6.313-1.654a11.876 11.876 0 005.634 1.432h.005c6.627 0 12.034-5.406 12.003-12.033a11.821 11.821 0 00-3.127-8.266z" />
            </svg>
            WhatsApp Hattı
          </a>
          <a
            href="mailto:info@landofmoa.com"
            className="flex items-center gap-2 text-blue-900 font-bold hover:underline mb-2"
          >
            <svg width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 8.01c.39.39 1.02.39 1.41 0L20 10.01V20H4z" />
            </svg>
            info@landofmoa.com
          </a>
          <div className="flex flex-col gap-2 mt-2">
            <a
              href="https://instagram.com/landofmoa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-600 font-bold hover:underline"
            >
              <svg
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              Instagram
            </a>
            <a
              href="https://facebook.com/landofmoa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-700 font-bold hover:underline"
            >
              <svg
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.991 22 12" />
              </svg>
              Facebook
            </a>
            <a
              href="https://twitter.com/landofmoa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 font-bold hover:underline"
            >
              <svg
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.07 9.03a12.72 12.72 0 0 1-9.24-4.684 4.48 4.48 0 0 0 1.388 5.978A4.42 4.42 0 0 1 2 9.13v.057a4.48 4.48 0 0 0 3.59 4.393c-.4.11-.82.17-1.25.17-.307 0-.6-.03-.89-.085a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19-.01-.38-.02-.57A9.22 9.22 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.7z" />
              </svg>
              Twitter
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-bold text-blue-900 mb-2">Adresimiz</h4>
          <p className="text-gray-700 font-medium">
            Örnek Mah. Oyun Sok. No: 1, 34000 İstanbul
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
