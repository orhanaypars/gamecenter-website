import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center">
          Hakkımızda
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-4 text-center">
          Land of Moa, çocukların güvenle oynayabileceği, eğlenirken
          öğrenebileceği modern bir oyun parkıdır. Amacımız, çocuklara sağlıklı,
          güvenli ve eğlenceli bir ortam sunmak; ailelere ise huzur ve güven
          vermektir.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
          <Image
            src="https://plus.unsplash.com/premium_photo-1744726606756-3f55b757c626?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="aboutImage"
            width={500}
            height={500}
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-amber-600 mb-2">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Güvenli ve hijyenik oyun alanları</li>
              <li>Deneyimli ve güler yüzlü personel</li>
              <li>Her yaş grubuna uygun oyun ekipmanları</li>
              <li>Doğum günü ve özel etkinlik organizasyonları</li>
              <li>Aileler için dinlenme ve kafe alanı</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-amber-50 rounded-lg shadow p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Misyonumuz</h3>
          <p className="text-gray-700">
            Çocukların fiziksel, zihinsel ve sosyal gelişimini destekleyen,
            güvenli ve eğlenceli bir ortam sunmak.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Vizyonumuz</h3>
          <p className="text-gray-700">
            Türkiye&apos;nin en sevilen ve en güvenilir çocuk oyun parkı olmak.
          </p>
        </div>
      </section>
    </div>
  );
}

export default page;
