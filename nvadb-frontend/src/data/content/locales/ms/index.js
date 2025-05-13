import { about } from './about';
import { visit } from './visit';
import { exhibitions } from './exhibitions';
import { engage } from './engage';
import { research } from './research';
import { services } from './services';
import { media } from './media';
import { legal } from './legal';
import { other } from './other';
import { home } from './home';
import Upcoming from '../../../../pages/exhibitions/Upcoming';
import Announcements from '../../../../pages/media/Announcements';
import Security from '../../../../pages/legal/Security';

export const ms = {
  home,
  about,
  visit,
  exhibitions,
  engage,
  research,
  services,
  media,
  legal,
  other,
  metadata: {
    siteName: 'Lembaga Pembangunan Seni Visual Kebangsaan',
    search: 'Carian',
    searchPlaceholder: 'Carian di dalam laman...',
    siteUrl: 'https://www.artgallery.gov.my/',
    languages: ['en', 'ms'],
    version: '1.0.0',
    lastUpdated: '2025-5-12',
    navigation: {
      primary: [
        {
          title: 'Tentang Kami',
          path: '/about',
          items: [
            { title: 'Sejarah', path: '/about/history' },
            { title: 'Misi & Visi', path: '/about/mission-vision' },
            { title: 'Carta Organisasi', path: '/about/org-chart' },
            { title: 'Perutusan Pengarah', path: '/about/director-message' },
            { title: 'Lembaga Pembangunan', path: '/about/board' }
          ]
        },
        {
          title: 'Lawatan',
          path: '/visit',
          items: [
            { title: 'Lokasi', path: '/visit/location' },
            { title: 'Kemasukan', path: '/visit/admission' },
            { title: 'Kemudahan', path: '/visit/facilities' },
            { title: 'Kafe', path: '/visit/cafe' }
          ]
        },
        {
          title: 'Pameran',
          path: '/exhibitions',
          items: [
            { title: 'Terkini', path: '/exhibitions/current' },
            { title: 'Akan Datang', path: '/exhibitions/upcoming' },
            { title: 'Arkib', path: '/exhibitions/archive' },
            { title: 'Pilihan Kurator', path: '/exhibitions/curators-choice' },
            { title: 'Etika', path: '/exhibitions/ethics' },
            { title: 'Kedai', path: '/exhibitions/shop' },
            { title: 'Galeri Foto', path: '/exhibitions/photos' },
            // { title: 'Galeri Video', path: '/exhibitions/videos' }
          ]
        },
        {
          title: 'Libat Sama',
          path: '/engage',
          items: [
            { title: 'Program', path: '/engage/programs' },
            { title: 'Keahlian', path: '/engage/membership' },
            { title: 'Pembelajaran', path: '/engage/learn' },
            { title: 'Sumber', path: '/engage/resources' }
          ]
        },
        {
          title: 'Penyelidikan',
          path: '/research',
          items: [
            { title: 'Penerbitan', path: '/research/publications' },
            { title: 'Arkib', path: '/research/archive' },
            { title: 'Muat Turun', path: '/research/downloads' },
            { title: 'Data Terbuka', path: '/research/open-data' },
            { title: 'Pautan', path: '/research/links' },
            { title: 'Soalan Lazim', path: '/research/faq' },
            { title: 'Bantuan', path: '/research/help' }
          ]
        },
        {
          title: 'Perkhidmatan',
          path: '/services',
          items: [
            { title: 'Permohonan', path: '/services/applications' },
            { title: 'Pangkalan Data Artis', path: '/services/artist-database' },
            { title: 'Maklum Balas', path: '/services/feedback' },
            { title: 'Aplikasi Mudah Alih', path: '/services/mobile-apps' }
          ]
        },
        {
          title: 'Media',
          path: '/media',
          items: [
            { title: 'Siaran Akhbar', path: '/media/press' },
            { title: 'Pengumuman', path: '/media/announcements' },
            { title: 'Usahawan Seni Muda', path: '/media/yae' },
            { title: 'Video', path: '/media/videos' }
          ]
        },
        {
          title: 'Perundangan',
          path: '/legal',
          items: [
            { title: 'Dasar Privasi', path: '/legal/privacy' },
            { title: 'Keselamatan', path: '/legal/security' },
            { title: 'Terma Penggunaan', path: '/legal/terms' },
            { title: 'Penafian', path: '/legal/disclaimer' },
            { title: 'Piagam Pelanggan', path: '/legal/charter' }
          ]
        }
      ]
    }
  },
  footer: {
    quicklinkstitle: 'Pautan Pantas',
    quicklinks: [
      { title: 'Lawati Kami', path: '/visit' },
      { title: 'Pameran Terkini', path: '/exhibitions/current' },
      { title: 'Hubungi', path: '/about/contact' },
      { title: 'Soalan Lazim', path: '/research/faq' }
    ],
    contacttitle: 'Hubungi Kami',
    contact: {
      address: 'Jalan Tembaga, Off Jalan Chan Sow Lin, 55200 Kuala Lumpur, Malaysia',
      phonetext: 'Telefon',
      phone: '+603-9222 8888',
      hourstext: 'Waktu Operasi',
      hours: 'Isnin - Jumaat: 10:00 AM - 6:00 PM'
    },
    followtitle: 'Ikuti Kami',
    rights: 'Hak Cipta © 2025 Lembaga Pembangunan Seni Visual Kebangsaan. Semua hak terpelihara.',
  }
};

export default ms;