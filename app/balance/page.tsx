"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// Stripe public anahtarınızı buraya ekleyin
const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX");

function BalanceForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState("");
  const [gameCard, setGameCard] = useState(""); // Oyun kartı state'i
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    // Backend'de bir PaymentIntent oluşturmalısınız.
    // Aşağıdaki endpoint örnektir, kendi backend'inize göre değiştirin.
    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Number(amount) * 100, gameCard }), // gameCard da gönderiliyor
    });
    const { clientSecret } = await res.json();

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setLoading(false);
      setMessage("Kart bilgisi eksik.");
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: { card: cardElement },
      }
    );

    if (error) {
      setMessage(error.message || "Bir hata oluştu.");
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("Bakiye başarıyla yüklendi!");
      setAmount("");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-2">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg space-y-6 border border-indigo-100"
      >
        <h2 className="text-3xl font-extrabold text-center mb-6 text-indigo-700 tracking-wide drop-shadow">
          Bakiye Yükle
        </h2>
        <label className="block">
          <span className="text-indigo-700 font-semibold text-lg">
            Oyun Kartı Numarası
          </span>
          <input
            type="text"
            required
            value={gameCard}
            onChange={(e) => setGameCard(e.target.value)}
            className="mt-3 block w-full px-6 py-4 rounded-xl border-2 border-indigo-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 bg-indigo-50 text-lg transition-all duration-200 placeholder-gray-400 shadow-md font-mono tracking-widest"
            placeholder="Oyun kartı numaranızı girin"
            maxLength={32}
            autoComplete="off"
          />
        </label>
        <label className="block">
          <span className="text-indigo-700 font-semibold text-lg">
            Yüklenecek Tutar (₺)
          </span>
          <input
            type="number"
            min="1"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-3 block w-full px-6 py-4 rounded-xl border-2 border-indigo-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 bg-indigo-50 text-lg transition-all duration-200 placeholder-gray-400 shadow-md"
            placeholder="Örn: 100"
          />
        </label>
        <label className="block">
          <span className="text-indigo-700 font-semibold text-lg">
            Kart Bilgileri
          </span>
          <div className="mt-3 p-4 border-2 border-indigo-400 rounded-xl bg-indigo-50 shadow-md">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "18px",
                    color: "#3730a3",
                    letterSpacing: "1px",
                    fontFamily: "monospace",
                  },
                },
              }}
            />
          </div>
        </label>
        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-xl font-bold text-lg shadow-lg hover:from-pink-500 hover:to-indigo-500 transition-all duration-200 disabled:opacity-50"
        >
          {loading ? "Yükleniyor..." : "Bakiye Yükle"}
        </button>
        {message && (
          <div className="text-center text-base mt-2 text-pink-600 font-semibold">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}

export default function Page() {
  return (
    <Elements stripe={stripePromise}>
      <BalanceForm />
    </Elements>
  );
}
