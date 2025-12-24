import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('Admin12345!', 12);
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@sukunergy.id' },
    update: {},
    create: {
      email: 'admin@sukunergy.id',
      password: hashedPassword,
      name: 'Admin SUKUNERGY',
      role: 'ADMIN',
    },
  });
  console.log('✅ Created admin user');

  // Create products with variants
  const products = [
    {
      name: 'SUKUNERGY Original',
      slug: 'sukunergy-original',
      description: 'Bar sukun original dengan rasa alami yang kaya protein dan rendah kalori. Cocok untuk camilan sehat sehari-hari.',
      image: '/images/products/sukunergy-original.jpg',
      published: true,
      featured: true,
      variants: [
        {
          name: 'Single Pack',
          price: 5000,
          originalPrice: 7000,
          stock: 100,
          weight: 45,
          calories: 130,
          protein: 15.0,
          carbs: 12.0,
          fat: 3.5,
          fiber: 4.0,
          sugar: 8.0,
          sodium: 120,
          ingredients: 'Sukun (breadfruit), protein whey, madu alami, kacang almond, biji chia, ekstrak vanilla',
          allergens: 'Mengandung kacang, susu. Mungkin mengandung gluten.',
          storageInstructions: 'Simpan di tempat kering dan sejuk. Konsumsi dalam 6 bulan.',
          published: true,
        },
      ],
    },
    {
      name: 'SUKUNERGY Chocolate',
      slug: 'sukunergy-chocolate',
      description: 'Bar sukun dengan perpaduan cokelat premium yang lezat. Tinggi protein, rendah gula, sempurna untuk pecinta cokelat.',
      image: '/images/products/sukunergy-chocolate.jpg',
      published: true,
      featured: true,
      variants: [
        {
          name: 'Single Pack',
          price: 5000,
          originalPrice: 7000,
          stock: 80,
          weight: 45,
          calories: 135,
          protein: 14.0,
          carbs: 13.0,
          fat: 4.0,
          fiber: 3.5,
          sugar: 9.0,
          sodium: 110,
          ingredients: 'Sukun (breadfruit), protein whey, cokelat kakao premium, madu alami, kacang almond',
          allergens: 'Mengandung kacang, susu, kakao. Mungkin mengandung gluten.',
          storageInstructions: 'Simpan di tempat kering dan sejuk. Hindari paparan sinar matahari langsung.',
          published: true,
        },
      ],
    },
    {
      name: 'SUKUNERGY Mixed Nuts',
      slug: 'sukunergy-mixed-nuts',
      description: 'Kombinasi sukun dengan campuran kacang-kacangan premium. Extra crunchy dengan protein tinggi untuk energi maksimal.',
      image: '/images/products/sukunergy-mixed-nuts.jpg',
      published: true,
      featured: false,
      variants: [
        {
          name: 'Single Pack',
          price: 5000,
          originalPrice: 7000,
          stock: 60,
          weight: 50,
          calories: 145,
          protein: 16.0,
          carbs: 11.0,
          fat: 6.0,
          fiber: 5.0,
          sugar: 7.0,
          sodium: 100,
          ingredients: 'Sukun (breadfruit), protein whey, kacang almond, kacang mete, kacang tanah, madu alami',
          allergens: 'Mengandung berbagai kacang, susu. Mungkin mengandung gluten.',
          storageInstructions: 'Simpan dalam wadah kedap udara. Konsumsi dalam 4 bulan untuk kualitas terbaik.',
          published: true,
        },
      ],
    },
  ];

  for (const productData of products) {
    const { variants, ...product } = productData;
    const createdProduct = await prisma.product.create({
      data: product,
    });

    for (const variantData of variants) {
      await prisma.productVariant.create({
        data: {
          ...variantData,
          productId: createdProduct.id,
        },
      });
    }
  }
  console.log('✅ Created products and variants');

  // Create FAQs
  const faqs = [
    {
      question: 'Apa itu SUKUNERGY dan mengapa berbahan dasar sukun?',
      answer: 'SUKUNERGY adalah bar protein berbahan dasar sukun (breadfruit) yang kaya nutrisi. Sukun dipilih karena merupakan superfood lokal Indonesia yang tinggi protein, serat, dan rendah indeks glikemik. Sukun juga bebas gluten alami dan memiliki rasa yang lezat.',
      category: 'Produk',
      published: true,
      sortOrder: 1,
    },
    {
      question: 'Berapa kalori dalam satu bar SUKUNERGY?',
      answer: 'Satu bar SUKUNERGY (45g) mengandung sekitar 130-145 kalori, tergantung varian. Ini sangat ideal sebagai camilan sehat yang mengenyangkan tanpa berlebihan kalori.',
      category: 'Nutrisi',
      published: true,
      sortOrder: 2,
    },
    {
      question: 'Bagaimana cara penyimpanan yang benar?',
      answer: 'Simpan SUKUNERGY di tempat kering dan sejuk, hindari paparan sinar matahari langsung. Setelah dibuka, konsumsi dalam 2-3 hari untuk kualitas terbaik. Produk dapat bertahan hingga 6 bulan jika disimpan dengan benar.',
      category: 'Penyimpanan',
      published: true,
      sortOrder: 3,
    },
    {
      question: 'Apakah SUKUNERGY aman untuk penderita diabetes?',
      answer: 'SUKUNERGY memiliki indeks glikemik rendah dan gula alami dari madu. Namun, kami sarankan konsultasi dengan dokter atau ahli gizi sebelum mengonsumsi jika Anda memiliki kondisi kesehatan khusus seperti diabetes.',
      category: 'Kesehatan',
      published: true,
      sortOrder: 4,
    },
    {
      question: 'Bagaimana cara pemesanan dan pembayaran?',
      answer: 'Anda dapat memesan melalui website ini dengan klik "Order via WhatsApp", atau langsung melalui marketplace seperti Shopee dan TikTok Shop. Pembayaran dapat dilakukan via transfer bank, e-wallet, atau COD (untuk area tertentu).',
      category: 'Pemesanan',
      published: true,
      sortOrder: 5,
    },
  ];

  for (const faq of faqs) {
    await prisma.fAQ.create({ data: faq });
  }
  console.log('✅ Created FAQs');

  // Create testimonials
  const testimonials = [
    {
      name: 'Dian Permata',
      content: 'SUKUNERGY jadi camilan favorit aku! Rasanya enak, mengenyangkan, dan yang paling penting sehat. Cocok banget buat yang lagi program diet seperti aku.',
      rating: 5,
      location: 'Surabaya',
      published: true,
      featured: true,
      sortOrder: 1,
    },
    {
      name: 'Rizky Pratama',
      content: 'Sebagai atlet, aku butuh asupan protein tinggi. SUKUNERGY memberikan energi yang cukup untuk latihan tanpa bikin perut kembung. Recommended!',
      rating: 5,
      location: 'Sidoarjo',
      published: true,
      featured: true,
      sortOrder: 2,
    },
    {
      name: 'Ayu Lestari',
      content: 'Anak-anak suka banget sama rasa cokelat SUKUNERGY. Akhirnya ada camilan sehat yang disukai anak dan approved sama mamanya. Thank you SUKUNERGY!',
      rating: 5,
      location: 'Gresik',
      published: true,
      featured: true,
      sortOrder: 3,
    },
    {
      name: 'Bayu Setiawan',
      content: 'Varian Mixed Nuts-nya juara! Teksturnya crunchy dan rasanya balance. Jadi teman setia saat kerja dari rumah.',
      rating: 5,
      location: 'Mojokerto',
      published: true,
      featured: false,
      sortOrder: 4,
    },
    {
      name: 'Sinta Dewi',
      content: 'Packaging-nya praktis, bisa dibawa kemana-mana. Sukun sebagai bahan dasar juga unik dan mendukung produk lokal Indonesia.',
      rating: 4,
      location: 'Malang',
      published: true,
      featured: false,
      sortOrder: 5,
    },
    {
      name: 'Eko Prasetyo',
      content: 'Harga terjangkau untuk kualitas premium. Sudah coba semua varian dan semuanya enak. SUKUNERGY memang smart fuel for your day!',
      rating: 5,
      location: 'Lamongan',
      published: true,
      featured: false,
      sortOrder: 6,
    },
  ];

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({ data: testimonial });
  }
  console.log('✅ Created testimonials');

  // Create team members
  const teamMembers = [
    {
      name: 'Anandhita Frisilla Utama',
      programStudi: 'Teknik Lingkungan – UPN "Veteran" Jawa Timur',
      instagramUrl: 'https://instagram.com/silaa.frs',
      photo: '/images/team/anandhita.jpg',
      bio: 'Chief Executive Officer yang memimpin visi dan strategi SUKUNERGY.',
      isActive: true,
      sortOrder: 1,
    },
    {
      name: 'Angelita Aliyah Putri',
      programStudi: 'Teknik Lingkungan – UPN "Veteran" Jawa Timur',
      instagramUrl: 'https://instagram.com/angelita.aliyah',
      photo: '/images/team/angelita.jpg',
      bio: 'Chief Operating Officer yang mengelola operasional harian SUKUNERGY.',
      isActive: true,
      sortOrder: 2,
    },
    {
      name: 'Galih Aji Pangestu',
      programStudi: 'Informatika – UPN "Veteran" Jawa Timur',
      instagramUrl: 'https://instagram.com/galiihajiip',
      photo: '/images/team/galih.jpg',
      bio: 'Chief Technology Officer yang mengembangkan teknologi dan inovasi produk.',
      isActive: true,
      sortOrder: 3,
    },
    {
      name: 'Dewi Berliana Putri',
      programStudi: 'Teknik Lingkungan – UPN "Veteran" Jawa Timur',
      instagramUrl: 'https://instagram.com/dewiber_',
      photo: '/images/team/dewi.jpg',
      bio: 'Chief Financial Officer yang mengelola keuangan dan investasi SUKUNERGY.',
      isActive: true,
      sortOrder: 4,
    },
    {
      name: 'Fathimah Ummul Banin',
      programStudi: 'Teknik Lingkungan – UPN "Veteran" Jawa Timur',
      instagramUrl: 'https://instagram.com/fatima.ashoffie',
      photo: '/images/team/fathimah.jpg',
      bio: 'Chief Marketing Officer yang memimpin strategi pemasaran dan branding.',
      isActive: true,
      sortOrder: 5,
    },
  ];

  for (const member of teamMembers) {
    await prisma.teamMember.create({ data: member });
  }
  console.log('✅ Created team members');

  // Create pages
  const pages = [
    {
      title: 'Mengapa Sukun?',
      slug: 'mengapa-sukun',
      content: `
        <h2>Sukun: Superfood Lokal Indonesia</h2>
        <p>Sukun (Artocarpus altilis) adalah buah tropis yang telah menjadi makanan pokok di berbagai negara Pasifik selama berabad-abad. Di Indonesia, sukun tumbuh subur dan memiliki kandungan nutrisi yang luar biasa.</p>
        
        <h3>Keunggulan Nutrisi Sukun:</h3>
        <ul>
          <li><strong>Tinggi Protein:</strong> Mengandung protein lengkap dengan asam amino esensial</li>
          <li><strong>Kaya Serat:</strong> Membantu pencernaan dan menjaga kenyang lebih lama</li>
          <li><strong>Rendah Indeks Glikemik:</strong> Tidak menyebabkan lonjakan gula darah</li>
          <li><strong>Bebas Gluten:</strong> Aman untuk penderita celiac disease</li>
          <li><strong>Kaya Vitamin C:</strong> Meningkatkan sistem imun</li>
          <li><strong>Mengandung Kalium:</strong> Baik untuk kesehatan jantung</li>
        </ul>
        
        <h3>Mengapa SUKUNERGY Memilih Sukun?</h3>
        <p>Kami percaya bahwa Indonesia memiliki kekayaan alam yang luar biasa. Sukun adalah salah satu superfood lokal yang belum dimanfaatkan secara optimal. Dengan mengolah sukun menjadi protein bar, kami ingin:</p>
        <ul>
          <li>Memperkenalkan manfaat sukun kepada masyarakat luas</li>
          <li>Mendukung petani lokal Indonesia</li>
          <li>Menciptakan alternatif camilan sehat berbahan lokal</li>
          <li>Mengurangi ketergantungan pada bahan impor</li>
        </ul>
      `,
      excerpt: 'Pelajari mengapa sukun menjadi pilihan utama SUKUNERGY sebagai bahan dasar protein bar yang sehat dan bergizi.',
      published: true,
      seoTitle: 'Mengapa Sukun? Keunggulan Superfood Lokal Indonesia | SUKUNERGY',
      seoDescription: 'Sukun adalah superfood lokal Indonesia yang tinggi protein, kaya serat, dan rendah indeks glikemik. Pelajari keunggulan sukun sebagai bahan dasar SUKUNERGY.',
    },
    {
      title: 'Cara Konsumsi & Penyimpanan',
      slug: 'cara-konsumsi-penyimpanan',
      content: `
        <h2>Cara Konsumsi SUKUNERGY</h2>
        
        <h3>Waktu Terbaik Mengonsumsi:</h3>
        <ul>
          <li><strong>Sarapan:</strong> Sebagai pengganti atau pelengkap sarapan sehat</li>
          <li><strong>Pre-workout:</strong> 30-60 menit sebelum olahraga untuk energi optimal</li>
          <li><strong>Post-workout:</strong> Dalam 30 menit setelah olahraga untuk pemulihan otot</li>
          <li><strong>Camilan sehat:</strong> Di antara waktu makan untuk menghindari lapar berlebihan</li>
          <li><strong>Malam hari:</strong> Sebagai camilan ringan yang tidak memberatkan pencernaan</li>
        </ul>
        
        <h3>Porsi yang Disarankan:</h3>
        <ul>
          <li>Dewasa: 1-2 bar per hari</li>
          <li>Anak-anak (6-12 tahun): 1/2 - 1 bar per hari</li>
          <li>Atlet/aktif: 2-3 bar per hari sesuai kebutuhan</li>
        </ul>
        
        <h2>Cara Penyimpanan</h2>
        
        <h3>Penyimpanan Optimal:</h3>
        <ul>
          <li>Simpan di tempat kering dan sejuk (suhu ruangan 20-25°C)</li>
          <li>Hindari paparan sinar matahari langsung</li>
          <li>Jauhkan dari sumber panas dan kelembaban tinggi</li>
          <li>Simpan dalam kemasan asli yang tertutup rapat</li>
        </ul>
        
        <h3>Setelah Dibuka:</h3>
        <ul>
          <li>Konsumsi dalam 2-3 hari untuk kualitas terbaik</li>
          <li>Dapat disimpan dalam wadah kedap udara</li>
          <li>Jangan disimpan di kulkas (dapat mengubah tekstur)</li>
        </ul>
        
        <h3>Masa Simpan:</h3>
        <ul>
          <li>Kemasan utuh: 6 bulan dari tanggal produksi</li>
          <li>Setelah dibuka: 2-3 hari</li>
          <li>Selalu cek tanggal kedaluwarsa sebelum konsumsi</li>
        </ul>
        
        <p><em>Catatan: Jika terdapat perubahan warna, aroma, atau tekstur yang tidak normal, segera hentikan konsumsi.</em></p>
      `,
      excerpt: 'Panduan lengkap cara mengonsumsi dan menyimpan SUKUNERGY untuk mendapatkan manfaat optimal.',
      published: true,
      seoTitle: 'Cara Konsumsi & Penyimpanan SUKUNERGY | Panduan Lengkap',
      seoDescription: 'Pelajari cara konsumsi dan penyimpanan SUKUNERGY yang benar untuk mendapatkan manfaat optimal dari protein bar sukun sehat ini.',
    },
  ];

  for (const page of pages) {
    await prisma.page.create({ data: page });
  }
  console.log('✅ Created pages');

  console.log('🎉 Seed completed successfully!');
  console.log('');
  console.log('Admin login credentials:');
  console.log('Email: admin@sukunergy.id');
  console.log('Password: Admin12345!');
  console.log('');
  console.log('🔗 Next steps:');
  console.log('1. Run: npm run dev');
  console.log('2. Visit: http://localhost:3000');
  console.log('3. Admin: http://localhost:3000/admin');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
