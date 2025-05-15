"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Shield, Users, Heart, Sparkles, Award } from "lucide-react";

const features = [
  {
    icon: <Star className="w-8 h-8 text-amber-500" />,
    title: "Eğitici Oyunlar",
    description:
      "Çocukların zihinsel ve fiziksel gelişimini destekleyen eğitici oyun alanları.",
    image:
      "https://plus.unsplash.com/premium_photo-1726812194411-dead4f0e267b?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    title: "Güvenli Alan",
    description: "Uzman gözetmenler eşliğinde %100 güvenli oyun ortamı.",
    image:
      "https://plus.unsplash.com/premium_photo-1677529102407-0d075eb2cbb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    title: "Sosyal Etkileşim",
    description:
      "Yeni arkadaşlar edinme ve sosyal becerileri geliştirme fırsatı.",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <Heart className="w-8 h-8 text-pink-500" />,
    title: "Geniş oturma alanları",
    description:
      "Çocuklarınızın oyun ve aktivite yaparken rahatça oturabilecek geniş oturma alanları.",
    image:
      "https://images.unsplash.com/photo-1659277318898-9562d00c3b49?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-purple-500" />,
    title: "V-R oyun alanı",
    description:
      "V-R oyun alanı ile çocukların oyun ve aktivite yaparken daha fazla eğlence ve ilgi alabilirler.",
    image:
      "https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <Award className="w-8 h-8 text-amber-600" />,
    title: "Uzman Eğitmenler",
    description:
      "Deneyimli ve çocuk gelişimi uzmanı eğitmenlerimiz ile güvende.",
    image:
      "https://plus.unsplash.com/premium_photo-1711381020483-60dee81eb1c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Features = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14 px-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-5">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-2">
            Çocuklarınız için özenle tasarlanmış, güvenli ve eğlenceli bir dünya
            sunuyoruz. Her detay onların mutluluğu ve gelişimi için düşünüldü.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-7">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl shadow-sm sm:shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-amber-50"
            >
              <div className="relative h-36 sm:h-44 md:h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="absolute -top-3 -right-3 w-12 h-12 sm:-top-4 sm:-right-4 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-100">
                {feature.icon}
              </div>

              <div className="p-4 sm:p-5 bg-white flex-grow flex flex-col">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base flex-grow leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-14 sm:mt-16 md:mt-20 text-center bg-gradient-to-r from-blue-700 to-blue-950 rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-9 lg:p-10 shadow-lg sm:shadow-xl mx-2 sm:mx-0">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-500 mb-2 sm:mb-3">
            Hemen Rezervasyon Yapın!
          </h3>
          <p className="text-amber-400 mb-5 sm:mb-7 max-w-2xl mx-auto font-light text-sm sm:text-base px-2">
            Çocuğunuzun unutulmaz anılar biriktireceği bu eğlence dolu dünyaya
            katılın.
          </p>
          <button className="bg-white text-amber-600 hover:bg-amber-50 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md active:scale-95">
            Rezervasyon Yap
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
