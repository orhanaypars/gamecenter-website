"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Heart, Award, Shield } from "lucide-react";

const galleryImages = [
  {
    src: "https://plus.unsplash.com/premium_photo-1671490640232-ca2c42627ff9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Renkli Oyun Alanı",
    title: "Renkli Oyun Alanı",
    description: "Çocukların en sevdiği renkli ve eğlenceli oyun alanımız.",
  },
  {
    src: "https://images.unsplash.com/photo-1549057736-889b732754a2?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Tırmanma Duvarı",
    title: "Tırmanma Duvarı",
    description: "Motor becerilerini geliştiren güvenli tırmanma alanı.",
  },
  {
    src: "https://images.unsplash.com/photo-1600332604491-cd2392c2242d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Top Havuzu",
    title: "Top Havuzu",
    description: "Eğlencenin ve enerjinin hiç bitmediği renkli top havuzumuz.",
  },

  {
    src: "https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "VR Oyun Alanı",
    title: "VR Oyun Alanı",
    description: "Teknoloji ve eğlencenin buluştuğu sanal gerçeklik deneyimi.",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661645173047-61e750821b0c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sosyal Oyun Alanı",
    title: "Sosyal Oyun Alanı",
    description: "Arkadaşlarla keyifli vakit geçirme alanı.",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1738814197420-118521822e0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Yemek yeme alanları",
    title: "Yemek yeme alanları",
    description:
      "Çocuklarınızın yemek yemek için güvenli ve eğlenceli bir ortam.",
  },
];

const values = [
  {
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    title: "Güvenlik",
    description: "Çocuklarınız en güvenli ortamda eğlensin.",
  },
  {
    icon: <Star className="w-8 h-8 text-amber-500" />,
    title: "Kalite",
    description: "En iyi ekipmanlar ve eğitim programları.",
  },
  {
    icon: <Heart className="w-8 h-8 text-pink-500" />,
    title: "Sevgi",
    description: "Her çocuğa özel ilgi ve sevgi dolu bir ortam.",
  },
  {
    icon: <Award className="w-8 h-8 text-purple-500" />,
    title: "Uzmanlık",
    description: "Deneyimli ve uzman eğitmen kadrosu.",
  },
];

const AboutUs = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2"
          >
            Hakkımızda
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-amber-500 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Çocukların hayal dünyalarını genişleten, eğlenceli ve güvenli bir
            eğlence dünyası yarattık.
          </motion.p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <motion.div
            className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/aboutus.jpg"
              alt="Çocuklar eğlenirken"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Hikayemiz
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              2010 yılında çocukların eğlenirken öğrenebileceği güvenli bir alan
              yaratma hayaliyle yola çıktık. Bugün, binlerce çocuğun mutlulukla
              anılar biriktirdiği bir aile olduk.
            </p>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Uzman ekibimiz ve özenle tasarlanmış alanlarımızla, her çocuğun
              kendini özel hissedeceği bir ortam sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="bg-blue-50 px-6 py-4 rounded-lg text-center">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                  13+
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Yıllık Deneyim
                </p>
              </div>
              <div className="bg-amber-50 px-6 py-4 rounded-lg text-center">
                <p className="text-2xl sm:text-3xl font-bold text-amber-600">
                  5000+
                </p>
                <p className="text-gray-600">Mutlu Çocuk</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Values */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Değerlerimiz
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md hover:shadow-lg transition-all duration-300 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
            Oyun Alanlarımız
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="group relative rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-40 sm:h-48 md:h-56 w-full flex-shrink-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      {image.title}
                    </h4>
                    <p className="text-gray-200 text-sm sm:text-base">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center text-white mx-2 sm:mx-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-light text-amber-300 mb-4">
            Bize Katılmaya Hazır mısınız?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto font-medium">
            Çocuğunuzun eğlenceli ve güvenli bir ortamda vakit geçirmesini
            sağlayın.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Hemen İletişime Geçin
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
