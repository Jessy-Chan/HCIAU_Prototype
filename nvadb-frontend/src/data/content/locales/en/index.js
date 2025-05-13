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

export const en = {
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
    siteName: 'National Visual Arts Development Board',
    search: 'Search',
    searchPlaceholder: 'Search pages...',
    siteUrl: 'https://www.artgallery.gov.my/',
    languages: ['en', 'ms'],
    version: '1.0.0',
    lastUpdated: '2025-5-12',
    navigation: {
      primary: [
        {
          title: 'About',
          path: '/about',
          items: [
            { title: 'History', path: '/about/history' },
            { title: 'Mission & Vision', path: '/about/mission-vision' },
            { title: 'Organization Chart', path: '/about/org-chart' },
            { title: 'Director\'s Message', path: '/about/director-message' },
            { title: 'Board Development', path: '/about/board' }
          ]
        },
        {
          title: 'Visit',
          path: '/visit',
          items: [
            { title: 'Location', path: '/visit/location' },
            { title: 'Admission', path: '/visit/admission' },
            { title: 'Facilities', path: '/visit/facilities' },
            { title: 'Cafe', path: '/visit/cafe' }
          ]
        },
        {
          title: 'Exhibitions',
          path: '/exhibitions',
          items: [
            { title: 'Current', path: '/exhibitions/current' },
            { title: 'Upcoming', path: '/exhibitions/upcoming' },
            { title: 'Archive', path: '/exhibitions/archive' },
            { title: 'Curator\'s Choice', path: '/exhibitions/curators-choice' },
            { title: 'Ethics', path: '/exhibitions/ethics' },
            { title: 'Shop', path: '/exhibitions/shop' },
            { title: 'Photo Gallery', path: '/exhibitions/photos' },
            { title: 'Video Gallery', path: '/exhibitions/videos' }
          ]
        },
        {
          title: 'Engage',
          path: '/engage',
          items: [
            { title: 'Programs', path: '/engage/programs' },
            { title: 'Membership', path: '/engage/membership' },
            { title: 'Learn', path: '/engage/learn' },
            { title: 'Resources', path: '/engage/resources' }
          ]
        },
        {
          title: 'Research',
          path: '/research',
          items: [
            { title: 'Publications', path: '/research/publications' },
            { title: 'Archive', path: '/research/archive' },
            { title: 'Downloads', path: '/research/downloads' },
            { title: 'Open Data', path: '/research/open-data' },
            { title: 'FAQ', path: '/research/faq' },
            { title: 'Help', path: '/research/help' }
          ]
        },
        {
          title: 'Services',
          path: '/services',
          items: [
            { title: 'Applications', path: '/services/applications' },
            { title: 'Artist Database', path: '/services/artist-database' },
            { title: 'Feedback', path: '/services/feedback' },
            { title: 'Mobile Apps', path: '/services/mobile-apps' }
          ]
        },
        {
          title: 'Media',
          path: '/media',
          items: [
            { title: 'Press Releases', path: '/media/press' },
            { title: 'Announcements', path: '/media/announcements' },
            { title: 'Young Art Entrepreneurs', path: '/media/yae' },
            // { title: 'Videos', path: '/media/videos' }
          ]
        },
        {
          title: 'Legal',
          path: '/legal',
          items: [
            { title: 'Privacy Policy', path: '/legal/privacy' },
            { title: 'Security', path: '/legal/security' },
            { title: 'Terms of Use', path: '/legal/terms' },
            { title: 'Disclaimer', path: '/legal/disclaimer' },
            { title: 'Client Charter', path: '/legal/charter' }
          ]
        }
      ],
      rights: '© 2025 National Visual Arts Development Board. All rights reserved.',
    },
    bottomNav: [
      {title: 'Home', path:'/', icon:'/images/icons/home.png'},
      {title: 'About', path:'/about/history', icon:'/images/icons/about.png'},
      {title: 'Visit', path:'/visit/admission', icon:'/images/icons/visit.png'},
      {title: 'Engage', path:'/engage/membership', icon:'/images/icons/engage.png'},
      {title: 'Legal', path:'/legal/privacy', icon:'/images/icons/legal.png'},
    ],
  },
};

export default en;
