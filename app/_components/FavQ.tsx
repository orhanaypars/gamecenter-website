"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

function FavQ() {
  return (
    <motion.section
      className="w-full max-w-2xl mx-auto py-8 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Sık Sorulan Sorular
      </motion.h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1">
          <AccordionTrigger>
            <motion.span
              whileHover={{ scale: 1.03, color: "#2563eb" }}
              className="text-blue-900 font-bold"
            >
              Oyun merkezinizde hangi yaş grupları için oyunlar var?
            </motion.span>
          </AccordionTrigger>
          <AccordionContent>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="text-amber-500 font-bold"
            >
              Oyun merkezimizde 3-12 yaş arası çocuklar için uygun, güvenli ve
              eğlenceli oyunlar bulunmaktadır.
            </motion.div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>
            <motion.span
              whileHover={{ scale: 1.03, color: "#2563eb" }}
              className="text-blue-900 font-bold"
            >
              Çocuklarım için gözetim sağlanıyor mu?
            </motion.span>
          </AccordionTrigger>
          <AccordionContent>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="text-amber-500 font-bold"
            >
              Evet, deneyimli personelimiz çocuklarınızın güvenliği için sürekli
              gözetim sağlamaktadır.
            </motion.div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>
            <motion.span
              whileHover={{ scale: 1.03, color: "#2563eb" }}
              className="text-blue-900 font-bold"
            >
              Doğum günü partisi düzenleyebilir miyiz?
            </motion.span>
          </AccordionTrigger>
          <AccordionContent>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="text-amber-500 font-bold"
            >
              Tabii! Oyun merkezimizde doğum günü ve özel etkinlikler için
              paketlerimiz mevcuttur. Detaylar için bizimle iletişime
              geçebilirsiniz.
            </motion.div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q4">
          <AccordionTrigger>
            <motion.span
              whileHover={{ scale: 1.03, color: "#2563eb" }}
              className="text-blue-900 font-bold"
            >
              Oyun alanında yiyecek ve içecek satışı var mı?
            </motion.span>
          </AccordionTrigger>
          <AccordionContent>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="text-amber-500 font-bold"
            >
              Evet, çocuklara uygun sağlıklı atıştırmalıklar ve içecekler sunan
              bir kafeteryamız bulunmaktadır.
            </motion.div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q5">
          <AccordionTrigger>
            <motion.span
              whileHover={{ scale: 1.03, color: "#2563eb" }}
              className="text-blue-900 font-bold"
            >
              Oyun merkeziniz hafta sonu açık mı?
            </motion.span>
          </AccordionTrigger>
          <AccordionContent>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="text-amber-500 font-bold"
            >
              Evet, oyun merkezimiz haftanın her günü açıktır. Çalışma
              saatlerimizi web sitemizden inceleyebilirsiniz.
            </motion.div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.section>
  );
}

export default FavQ;
