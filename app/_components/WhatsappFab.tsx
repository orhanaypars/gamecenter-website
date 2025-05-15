import React from "react";
import { motion } from "framer-motion";

const whatsappNumber = "905525845941";

export default function WhatsappFab() {
  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-3 flex items-center justify-center transition-colors group"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}
      initial={{ scale: 1, rotate: 0 }}
      animate={{
        scale: [1, 1.15, 1],
        rotate: [0, -10, 10, -10, 10, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.2, boxShadow: "0 6px 24px rgba(0,0,0,0.25)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374A9.86 9.86 0 012.1 12.868C2.073 7.548 6.659 3.002 12 3c2.652.001 5.151 1.037 7.034 2.929A9.825 9.825 0 0121.9 12.13c.027 5.32-4.559 9.868-9.849 9.869zm8.413-18.282A11.815 11.815 0 0012.003 0C5.373 0 .066 5.306.002 11.876c-.032 2.084.522 4.11 1.607 5.891L.057 24l6.313-1.654a11.876 11.876 0 005.634 1.432h.005c6.627 0 12.034-5.406 12.003-12.033a11.821 11.821 0 00-3.127-8.266z" />
      </svg>
      <span className="absolute left-full ml-3 whitespace-nowrap bg-green-600 text-white px-3 py-2 rounded-full shadow-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Bize hızlıca ulaşın
      </span>
    </motion.a>
  );
}
