"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Transaction = {
  id: string;
  type: "yükleme" | "harcama";
  amount: number;
  status: "başarılı" | "başarısız";
  date: string;
  cardNumber: string;
  description?: string;
};

const mockHistory: Transaction[] = [
  {
    id: "1",
    type: "yükleme",
    amount: 100,
    status: "başarılı",
    date: "2024-06-01 14:23",
    cardNumber: "1234567890",
    description: "Stripe ile bakiye yükleme",
  },
  {
    id: "2",
    type: "harcama",
    amount: 30,
    status: "başarılı",
    date: "2024-06-02 16:10",
    cardNumber: "1234567890",
    description: "Oyun makinesi harcaması",
  },
  {
    id: "3",
    type: "yükleme",
    amount: 50,
    status: "başarısız",
    date: "2024-06-03 11:05",
    cardNumber: "1234567890",
    description: "Stripe ile bakiye yükleme",
  },
  {
    id: "4",
    type: "harcama",
    amount: 20,
    status: "başarısız",
    date: "2024-06-04 13:45",
    cardNumber: "1234567890",
    description: "Oyun makinesi harcaması",
  },
];

export default function BalanceHistoryPage() {
  const [history, setHistory] = useState<Transaction[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Burada gerçek API'den veri çekilebilir.
    setHistory(mockHistory);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0e7ff 0%, #fef3c7 100%)",
        padding: 24,
      }}
      className="flex flex-col items-center"
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 w-full max-w-full sm:max-w-2xl"
        style={{ border: "2px solid #fbbf24" }}
      >
        <button
          onClick={() => router.back()}
          className="mb-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded shadow"
        >
          ← Geri
        </button>
        <h2
          className="text-2xl font-extrabold mb-6 text-center"
          style={{ color: "#2563eb" }}
        >
          İşlem Geçmişi
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-base min-w-[600px]">
            <thead>
              <tr style={{ background: "#f1f5fd" }}>
                <th className="py-2 px-2 text-left">Tarih</th>
                <th className="py-2 px-2 text-left">Kart No</th>
                <th className="py-2 px-2 text-left">İşlem</th>
                <th className="py-2 px-2 text-left">Tutar (₺)</th>
                <th className="py-2 px-2 text-left">Durum</th>
                <th className="py-2 px-2 text-left">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              {history.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-6">
                    Kayıtlı işlem bulunamadı.
                  </td>
                </tr>
              )}
              {history.map((tx) => (
                <tr key={tx.id}>
                  <td className="py-2 px-2">{tx.date}</td>
                  <td className="py-2 px-2 font-mono">{tx.cardNumber}</td>
                  <td className="py-2 px-2">{tx.type}</td>
                  <td className="py-2 px-2">{tx.amount}</td>
                  <td
                    className="py-2 px-2 font-bold"
                    style={{
                      color: tx.status === "başarılı" ? "#22c55e" : "#e11d48",
                    }}
                  >
                    {tx.status}
                  </td>
                  <td className="py-2 px-2">{tx.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
