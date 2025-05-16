import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// .env.local dosyanıza şu satırları ekleyin ve değerleri doldurun:
// EMAIL_USER=orhanaypars35@gmail.com
// EMAIL_PASS=uygulama_sifreniz

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Tüm alanları doldurun." });
  }

  // Nodemailer transporter ayarları
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "orhanaypars35@gmail.com",
      pass: process.env.EMAIL_PASS || "ozyhhitxbqdrubhd",
    },
  });

  try {
    await transporter.sendMail({
      from: `"Land of MOA" <${
        process.env.EMAIL_USER || "orhanaypars35@gmail.com"
      }>`,
      to: "orhanaypars35@gmail.com", // Tüm iletiler bu adrese gönderiliyor
      replyTo: email,
      subject: `Yeni İletişim Formu Mesajı - ${name}`,
      text: `Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`,
    });

    return res.status(200).json({ message: "Mesaj başarıyla gönderildi!" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("E-posta gönderim hatası:", error.message);
    } else {
      console.error("E-posta gönderim hatası:", error);
    }
    return res
      .status(500)
      .json({ error: "Mesaj gönderilemedi. Lütfen tekrar deneyin." });
  }
}
