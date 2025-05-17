"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Link from "next/link";

const stripePublishableKey =
  "pk_test_51ROruHBeEQ1d7k8c9hKPtJ6fheiegXkcjlhGLR8LnojmhozGtSj9ohgMKrRTxdikCHOwb0UcGewjcMhqoCIBUlpG00OsfmL28E";
const stripePromise =
  typeof window !== "undefined" && stripePublishableKey
    ? loadStripe(stripePublishableKey as string)
    : null;

function BalanceForm() {
  const stripe = useStripe();
  const elements = useElements();
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState("");
  const [gameCard, setGameCard] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const cardNumber = searchParams?.get("cardNumber");
    if (cardNumber) setGameCard(cardNumber);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    // Backend'de bir PaymentIntent oluşturuluyor
    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Number(amount) * 100, gameCard }),
    });
    const { clientSecret, error: backendError } = await res.json();

    if (backendError) {
      setMessage(backendError);
      setLoading(false);
      return;
    }

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
    <div
      className="flex items-center justify-center min-h-screen px-2"
      style={{
        background: "linear-gradient(135deg, #e0e7ff 0%, #fef3c7 100%)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg space-y-6 border"
        style={{
          borderColor: "#fbbf24",
        }}
      >
        <h2
          className="text-3xl font-extrabold text-center mb-6 tracking-wide drop-shadow"
          style={{ color: "#2563eb" }}
        >
          Bakiye Yükle
        </h2>
        <label className="block">
          <span className="font-semibold text-lg" style={{ color: "#2563eb" }}>
            Oyun Kartı Numarası
          </span>
          <input
            type="text"
            required
            value={gameCard}
            onChange={(e) => setGameCard(e.target.value)}
            className="mt-3 block w-full px-6 py-4 rounded-xl border-2 text-lg transition-all duration-200 placeholder-gray-400 shadow-md font-mono tracking-widest"
            style={{
              borderColor: "#2563eb",
              background: "#f1f5fd",
              color: "#1e293b",
            }}
            placeholder="Oyun kartı numaranızı girin"
            maxLength={32}
            autoComplete="off"
          />
        </label>
        <label className="block">
          <span className="font-semibold text-lg" style={{ color: "#2563eb" }}>
            Yüklenecek Tutar (₺)
          </span>
          <input
            type="number"
            min="1"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-3 block w-full px-6 py-4 rounded-xl border-2 text-lg transition-all duration-200 placeholder-gray-400 shadow-md"
            style={{
              borderColor: "#2563eb",
              background: "#f1f5fd",
              color: "#1e293b",
            }}
            placeholder="Örn: 100"
          />
        </label>
        <label className="block">
          <span className="font-semibold text-lg" style={{ color: "#2563eb" }}>
            Kart Bilgileri
          </span>
          <div
            className="mt-3 p-4 border-2 rounded-xl shadow-md"
            style={{
              borderColor: "#2563eb",
              background: "#f1f5fd",
            }}
          >
            <div
              className="mb-2 text-sm font-medium"
              style={{ color: "#2563eb" }}
            >
              Kart Numarası, Son Kullanma Tarihi ve CVC giriniz
            </div>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "18px",
                    color: "#1e293b",
                    letterSpacing: "1px",
                    fontFamily: "monospace",
                    backgroundColor: "#f1f5fd",
                    "::placeholder": {
                      color: "#a5b4fc",
                      fontStyle: "italic",
                    },
                  },
                  invalid: {
                    color: "#e11d48",
                  },
                },
              }}
            />
            <div className="mt-2 text-xs text-gray-400">
              Örnek: 4242 4242 4242 4242 12/34 123
            </div>
          </div>
        </label>
        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full py-3 px-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-200 disabled:opacity-50"
          style={{
            background: "linear-gradient(90deg, #2563eb 0%, #fbbf24 100%)",
            color: "#fff",
            fontWeight: 800,
            letterSpacing: 1,
          }}
        >
          {loading ? "Yükleniyor..." : "Bakiye yükle"}
        </button>
        <Link href="/balancehistory">
          <button
            type="submit"
            disabled={!stripe || loading}
            className="w-full py-3 px-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-200 disabled:opacity-50"
            style={{
              background: "linear-gradient(90deg, #2563eb 0%, #fbbf24 100%)",
              color: "#fff",
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            {loading ? "Yükleniyor..." : "Bakiye geçmişi"}
          </button>
        </Link>
        {message && (
          <div
            className="text-center text-base mt-2 font-semibold"
            style={{ color: "#e11d48" }}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}

// Suspense ile sarmalanmış BalanceForm
export default function Page() {
  if (!stripePublishableKey) {
    return (
      <div
        className="flex items-center justify-center min-h-screen px-2"
        style={{
          background: "linear-gradient(135deg, #e0e7ff 0%, #fef3c7 100%)",
        }}
      >
        <div
          className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg border text-center font-semibold text-lg"
          style={{ borderColor: "#fbbf24", color: "#e11d48" }}
        >
          Stripe anahtarı bulunamadı. Lütfen ortam değişkenini ayarlayın.
        </div>
      </div>
    );
  }
  return (
    <Elements stripe={stripePromise}>
      <Suspense>
        <BalanceForm />
      </Suspense>
    </Elements>
  );
}
