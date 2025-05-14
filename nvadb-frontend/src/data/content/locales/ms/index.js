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
          icon:'/images/icons/about.png',
          icontoggle:'/images/icons/about_w.png',
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
          icon:'/images/icons/visit.png',
          icontoggle:'/images/icons/visit_w.png',
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
          icon:'/images/icons/exhibitions.png',
          icontoggle:'/images/icons/exhibitions_w.png',
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
          icon:'/images/icons/engage.png',
          icontoggle:'/images/icons/engage_w.png',
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
          icon:'/images/icons/research.png',
          icontoggle:'/images/icons/research_w.png',
          items: [
            { title: 'Penerbitan', path: '/research/publications' },
            { title: 'Arkib', path: '/research/archive' },
            { title: 'Muat Turun', path: '/research/downloads' },
            { title: 'Data Terbuka', path: '/research/open-data' },
            { title: 'Soalan Lazim', path: '/research/faq' },
            { title: 'Bantuan', path: '/research/help' }
          ]
        },
        {
          title: 'Perkhidmatan',
          path: '/services',
          icon:'/images/icons/services.png',
          icontoggle:'/images/icons/services_w.png',
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
          icon:'/images/icons/media.png',
          icontoggle:'/images/icons/media_w.png',
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
          icon:'/images/icons/legal.png',
          icontoggle:'/images/icons/legal_w.png',
          items: [
            { title: 'Dasar Privasi', path: '/legal/privacy' },
            { title: 'Keselamatan', path: '/legal/security' },
            { title: 'Terma Penggunaan', path: '/legal/terms' },
            { title: 'Penafian', path: '/legal/disclaimer' },
            { title: 'Piagam Pelanggan', path: '/legal/charter' }
          ]
        }
      ],
      rights: 'Hak Cipta © 2025 Lembaga Pembangunan Seni Visual Kebangsaan. Semua hak terpelihara.',
    },
    bottomNav: [
      {title: 'Utama', path:'/', icon:'/images/icons/home.png'},
      {title: 'Tentang', path:'/about/history', icon:'/images/icons/about.png'},
      {title: 'Lawatan', path:'/visit/admission', icon:'/images/icons/visit.png'},
      {title: 'Libat', path:'/engage/membership', icon:'/images/icons/engage.png'},
      {title: 'Undang', path:'/legal/privacy', icon:'/images/icons/legal.png'},
    ],
  }
};

export default ms;