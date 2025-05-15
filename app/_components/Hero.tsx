"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-amber-50 pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Eğlence Dolu Bir <span className="text-amber-500">Dünya</span>{" "}
              Keşfedin!
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Çocuklarınız için unutulmaz anıların adresi. Eğlence, oyun ve
              öğrenme bir arada!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white text-lg py-6 px-8 rounded-full shadow-lg transform transition hover:scale-105">
                Hemen Rezervasyon Yap
              </Button>
              <Button
                variant="outline"
                className="text-gray-700 border-gray-300 hover:bg-gray-100 text-lg py-6 px-8 rounded-full flex items-center gap-2 group"
              >
                <PlayCircle className="w-6 h-6 group-hover:text-amber-500 transition-colors" />
                Tanıtım Videosu
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { number: "5000+", label: "Mutlu Çocuk" },
                { number: "50+", label: "Oyun Alanı" },
                { number: "99%", label: "Memnuniyet" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-2xl shadow-sm text-center"
                >
                  <p className="text-2xl font-bold text-amber-500">
                    {stat.number}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <Image
              src="https://images.unsplash.com/photo-1642932163549-3af44da6017f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Çocuklar eğlenirken"
              fill
              className="object-cover"
              priority
            />
            {/* Decorative badge */}
            <div className="absolute bottom-10 right-5 bg-blue-900 px-6 py-3 rounded-md shadow-xl">
              <p className="font-bold text-amber-500">
                {" "}
                Mutlu çocuklar ve aileler için doyasıya eğlence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation keyframes */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
