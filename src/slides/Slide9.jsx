import Slide from '../components/Slide';
import { motion } from 'framer-motion';

export default function Slide9({ isActive, direction }) {
  // Data untuk 4 kartu yang mengelilingi lingkaran
  // Nilai x dan y digunakan untuk mengatur jarak dari tengah lingkaran.
  // Semakin kecil angkanya, semakin dekat jarak kartu ke lingkaran tengah.
  const cards = [
    {
      title: "Perlindungan & Kehormatan",
      desc: "Menutup aurat memancarkan sinyal kehormatan dan mencegah gangguan.",
      ref: "QS. Al-Ahzab: 59",
      x: 0,
      y: -285 // DIUBAH: Dari -250 menjadi -285 agar menjauh ke atas
    },
    {
      title: "Bukti Ketaatan",
      desc: "Menutup aurat merupakan bukti menundukkan hawa nafsu demi perintah Allah.",
      ref: "QS. Al-Ahzab: 36",
      x: 360,
      y: 0
    },
    {
      title: "Menutup Pintu Fitnah",
      desc: "Mencegah perzinaan dan pelecehan; bagian dari sistem pencegahan moral.",
      ref: "QS. An-Nur: 30-31",
      x: 0,
      y: 285 // DIUBAH: Dari 250 menjadi 285 agar menjauh ke bawah dan tetap simetris
    },
    {
      title: "Mensucikan Hati",
      desc: "Memperkuat penghargaan terhadap karakter dan ketakwaan, bukan fisik semata.",
      ref: "QS. Al-Ahzab: 53",
      x: -360,
      y: 0
    }
  ];

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <Slide isActive={isActive} direction={direction}>
      {/* Container utama, diatur tinggi agar kartu atas/bawah tidak terpotong pada desktop */}
      <div className="w-full h-full min-h-[700px] flex flex-col md:flex-row items-center justify-center relative md:pt-0 pt-8 gap-6 md:gap-0">

        {/* LINGKARAN TENGAH */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative md:absolute z-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary border-[6px] md:border-[8px] border-[#8c7a4b]/10 shadow-2xl flex items-center justify-center overflow-hidden mb-6 md:mb-0 shrink-0"
        >
          {/* Subtle Image Background */}
          <img
            src="/images/hikmah.jpg"
            alt="Ilustrasi Hikmah"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          />

          {/* Garis pinggir emas bagian dalam */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-accent/80 flex flex-col justify-center items-center bg-primary/70 z-10 backdrop-blur-[2px]">
            <h3 className="text-accent text-sm md:text-lg tracking-[0.2em] font-medium mb-1 md:mb-2 uppercase">
              Hikmah
            </h3>
            <h2 className="text-white text-xl md:text-3xl font-bold text-center leading-tight">
              Menutup<br />Aurat
            </h2>
          </div>
        </motion.div>

        {/* KARTU-KARTU YANG MENGELILINGI */}
        {cards.map((card, index) => (
          <motion.div
            key={index}
            // Animasi dimulai dari tengah lingkaran (x: 0, y: 0) lalu menyebar ke posisinya
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
            animate={{ opacity: 1, x: isMobile ? 0 : card.x, y: isMobile ? 0 : card.y, scale: 1 }}
            transition={{ delay: 0.4 + (index * 0.15), duration: 0.7, ease: "easeOut" }}
            className={`bg-white p-6 rounded-[2rem] shadow-xl w-full max-w-sm md:w-80 text-center border border-primary/5 z-20 flex flex-col justify-center items-center ${isMobile ? 'relative' : 'absolute'}`}
          >
            {/* Judul Point Diperbesar (text-2xl) */}
            <h4 className="text-xl md:text-2xl font-bold text-primary mb-3 leading-tight">
              {card.title}
            </h4>

            {/* Deskripsi Diperbesar (text-base -> setara 16px) */}
            <p className="text-sm md:text-base text-primary-dark/80 mb-4 leading-relaxed">
              {card.desc}
            </p>

            {/* Ayat Referensi */}
            <p className="text-xs md:text-sm font-bold text-accent tracking-wide">
              {card.ref}
            </p>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}