"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CardInfoPage() {
  const [cardNumber, setCardNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  // Sadece rakam ve 10 karakter limiti
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Sadece rakam
    if (value.length <= 10) {
      setCardNumber(value);
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cardNumber.length !== 10) {
      setError("Kart numarası 10 rakamdan oluşmalıdır.");
      return;
    }
    setError("");
    setSaved(true);
  };

  const handleBalanceClick = () => {
    router.push(`/balance?cardNumber=${cardNumber}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0e7ff 0%, #fef3c7 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      {/* Oyun Kartı Tasarımı - Üstte */}
      {(saved || cardNumber || fullName) && (
        <div
          style={{
            width: 370,
            maxWidth: "98vw",
            height: 220,
            borderRadius: 24,
            background: "linear-gradient(120deg, #2563eb 0%, #fbbf24 100%)",
            color: "#fff",
            boxShadow: "0 8px 32px rgba(37,99,235,0.13)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 32,
            fontFamily: "Montserrat, Nunito, sans-serif",
            marginBottom: 36,
            border: "2.5px solid #fff",
            position: "relative",
            overflow: "hidden",
            transition: "box-shadow 0.2s",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: 2,
              opacity: 0.96,
              textShadow: "0 2px 8px rgba(0,0,0,0.10)",
            }}
          >
            Land of Moa
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 900,
              letterSpacing: 3,
              margin: "20px 0 12px 0",
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
              fontFamily: "monospace",
              opacity: 0.98,
            }}
          >
            {cardNumber || "0000 0000"}
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 1,
              opacity: 0.97,
              textShadow: "0 1px 4px rgba(0,0,0,0.10)",
            }}
          >
            {fullName || "İsim Soyisim"}
          </div>
          <div
            style={{
              position: "absolute",
              right: 28,
              bottom: 20,
              fontSize: 13,
              opacity: 0.5,
              fontWeight: 500,
              letterSpacing: 1,
            }}
          >
            www.landofmoa.com.tr
          </div>
        </div>
      )}

      {/* Form sadece kaydedilmediyse göster */}
      {!saved && (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            minWidth: 320,
            background: "rgba(255,255,255,0.98)",
            padding: 36,
            borderRadius: 18,
            boxShadow: "0 6px 32px rgba(251,191,36,0.10)",
            backdropFilter: "blur(2px)",
            marginBottom: 18,
            border: "1.5px solid #fbbf24",
            maxWidth: 420,
            width: "100%",
            transition: "box-shadow 0.2s",
          }}
          onSubmit={handleSubmit}
        >
          <label style={{ fontWeight: 700, color: "#1e293b", fontSize: 17 }}>
            Oyun Kartı Numarası
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="Kart Numarası"
              maxLength={10}
              inputMode="numeric"
              style={{
                width: "100%",
                padding: "14px 12px",
                marginTop: 7,
                borderRadius: 9,
                border: "1.5px solid #2563eb",
                fontSize: 18,
                outline: "none",
                background: "#f1f5fd",
                transition: "border 0.2s",
                boxSizing: "border-box",
                marginBottom: 2,
                color: "#1e293b",
                fontFamily: "monospace",
                letterSpacing: 2,
              }}
              disabled={saved}
            />
          </label>
          <label style={{ fontWeight: 700, color: "#1e293b", fontSize: 17 }}>
            İsim Soyisim
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="İsim Soyisim"
              style={{
                width: "100%",
                padding: "14px 12px",
                marginTop: 7,
                borderRadius: 9,
                border: "1.5px solid #2563eb",
                fontSize: 18,
                outline: "none",
                background: "#f1f5fd",
                transition: "border 0.2s",
                boxSizing: "border-box",
                marginBottom: 2,
                color: "#1e293b",
              }}
              disabled={saved}
            />
          </label>
          {error && (
            <div
              style={{
                color: "#e74c3c",
                fontSize: 15,
                marginTop: 2,
                fontWeight: 600,
              }}
            >
              {error}
            </div>
          )}
          <button
            type="submit"
            style={{
              marginTop: 10,
              padding: "14px 0",
              borderRadius: 9,
              border: "none",
              background: "linear-gradient(90deg, #2563eb 0%, #fbbf24 100%)",
              color: "#fff",
              fontWeight: 800,
              fontSize: 19,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(251,191,36,0.12)",
              letterSpacing: 1,
              transition: "background 0.2s",
            }}
          >
            Kaydet
          </button>
        </form>
      )}

      {/* Bakiye Yükle Butonu */}
      {saved && (
        <button
          onClick={handleBalanceClick}
          style={{
            marginTop: 0,
            padding: "15px 40px",
            borderRadius: 12,
            border: "none",
            background: "linear-gradient(90deg, #fbbf24 0%, #2563eb 100%)",
            color: "#fff",
            fontWeight: 900,
            fontSize: 21,
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(37,99,235,0.13)",
            letterSpacing: 1,
            transition: "background 0.2s, transform 0.1s",
          }}
        >
          Bakiye Yükle
        </button>
      )}
    </div>
  );
}
