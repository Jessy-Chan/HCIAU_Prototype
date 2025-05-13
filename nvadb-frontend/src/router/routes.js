import { createBrowserRouter } from 'react-router-dom';
import MobileLayout from '../layouts/MobileLayout';
import React from 'react';

// Add this import at the top
const Home = React.lazy(() => import('../pages/home/HomePage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MobileLayout />,
    children: [
      {
        index: true,
        element: <React.Suspense fallback={<div>Loading...</div>}>
          <Home />
        </React.Suspense>
      },
      {
        path: 'search',
        async lazy() {
          const { default: Component } = await import('../pages/search');
          return { Component };
        }
      },
      {
        path: 'about',
        children: [
          { 
            path: 'history',
            async lazy() {
              const { default: Component } = await import('../pages/about/History');
              return { Component };
            }
          },
          { 
            path: 'mission-vision',
            async lazy() {
              const { default: Component } = await import('../pages/about/MissionVision');
              return { Component };
            }
          },
          { 
            path: 'org-chart',
            async lazy() {
              const { default: Component } = await import('../pages/about/OrgChart');
              return { Component };
            }
          },
          { 
            path: 'director-message',
            async lazy() {
              const { default: Component } = await import('../pages/about/DirectorMessage');
              return { Component };
            }
          },
          { 
            path: 'board',
            async lazy() {
              const { default: Component } = await import('../pages/about/BoardDevelopment');
              return { Component };
            }
          },
          { 
            path: 'buildings',
            async lazy() {
              const { default: Component } = await import('../pages/about/Buildings');
              return { Component };
            }
          },
          { 
            path: 'staff',
            async lazy() {
              const { default: Component } = await import('../pages/about/StaffDirectory');
              return { Component };
            }
          },
          { 
            path: 'contact',
            async lazy() {
              const { default: Component } = await import('../pages/about/Contact');
              return { Component };
            }
          },
          { 
            path: 'integrity',
            async lazy() {
              const { default: Component } = await import('../pages/about/IntegrityUnit');
              return { Component };
            }
          },
          { 
            path: 'partners',
            async lazy() {
              const { default: Component } = await import('../pages/about/CorporatePartners');
              return { Component };
            }
          },
          { 
            path: 'donations',
            async lazy() {
              const { default: Component } = await import('../pages/about/ArtisticDonations');
              return { Component };
            }
          }
        ]
      },
      {
        path: 'visit',
        children: [
          {
            path: 'location',
            async lazy() {
              const { default: Component } = await import('../pages/visit/Location');
              return { Component };
            }
          },
          {
            path: 'admission',
            async lazy() {
              const { default: Component } = await import('../pages/visit/Admission');
              return { Component };
            }
          },
          {
            path: 'facilities',
            async lazy() {
              const { default: Component } = await import('../pages/visit/Facilities');
              return { Component };
            }
          },
          {
            path: 'cafe',
            async lazy() {
              const { default: Component } = await import('../pages/visit/Cafe');
              return { Component };
            }
          }
        ]
      },
      {
        path: 'exhibitions',
        children: [
          {
            path: 'current',
            async lazy() {
              const { default: Component } = await import('../pages/exhibitions/Current');
              return { Component };
            }
          },
          {
            path: 'upcoming',
            async lazy() {
              const { default: Component } = await import('../pages/exhibitions/Upcoming');
              return { Component };
            }
          },
          {
            path: 'archive',
            async lazy() {
              const { default: Component } = await import('../pages/exhibitions/Archive');
              return { Component };
            }
          },
          {
            path: 'curators-choice',
            async lazy() {
              const { default: Component } = await import('../pages/exhibitions/CuratorsChoice');
              return { Component };
            }
          },
          {
            path: 'ethics',
            async lazy() {
              const { default: Component } = await import('../pages/exhibitions/Ethics');
              return { Component };
            }
          },
          {
            path: 'shop',
            async lazy() {
              const { default: Component } = await import('../pages/exhibitions/Shop');
              return { Component };
            }
          },
          {
            path: 'photos',
            async lazy() {
              const { default: Component } = await import('../pages/exhibitions/PhotoGallery');
              return { Component };
            }
          },
          {
            path: 'videos',
            async lazy() {
              const { default: Component } = await import('../pages/exhibitions/VideoGallery');
              return { Component };
            }
          }
        ]
      },
      {
        path: 'engage',
        children: [
          { 
            path: 'programs', 
            async lazy() {
              const { default: Component } = await import('../pages/engage/Programs');
              return { Component };
            }
          },
          { 
            path: 'membership', 
            async lazy() {
              const { default: Component } = await import('../pages/engage/Membership');
              return { Component };
            }
          },
          { 
            path: 'learn', 
            async lazy() {
              const { default: Component } = await import('../pages/engage/Learn');
              return { Component };
            }
          },
          { 
            path: 'resources', 
            async lazy() {
              const { default: Component } = await import('../pages/engage/ResourceMedia');
              return { Component };
            }
          }
        ]
      },
      {
        path: 'research',
        children: [
          {
            path: 'publications',
            async lazy() {
              const { default: Component } = await import('../pages/research/Publications');
              return { Component };
            }
          },
          {
            path: 'archive',
            async lazy() {
              const { default: Component } = await import('../pages/research/Archive');
              return { Component };
            }
          },
          {
            path: 'downloads',
            async lazy() {
              const { default: Component } = await import('../pages/research/Downloads');
              return { Component };
            }
          },
          {
            path: 'open-data',
            async lazy() {
              const { default: Component } = await import('../pages/research/GovernmentData');
              return { Component };
            }
          },
          {
            path: 'faq',
            async lazy() {
              const { default: Component } = await import('../pages/research/FAQ');
              return { Component };
            }
          },
          {
            path: 'help',
            async lazy() {
              const { default: Component } = await import('../pages/research/Help');
              return { Component };
            }
          }
        ]
      },
      {
        path: 'services',
        children: [
          {
            path: 'applications',
            async lazy() {
              const { default: Component } = await import('../pages/services/Applications');
              return { Component };
            }
          },
          {
            path: 'artist-database',
            async lazy() {
              const { default: Component } = await import('../pages/services/ArtistDB');
              return { Component };
            }
          },
          {
            path: 'feedback',
            async lazy() {
              const { default: Component } = await import('../pages/services/Feedback');
              return { Component };
            }
          },
          {
            path: 'mobile-apps',
            async lazy() {
              const { default: Component } = await import('../pages/services/MobileApps');
              return { Component };
            }
          }
        ]
      },
      {
        path: 'media',
        children: [
          {
            path: 'press',
            async lazy() {
              const { default: Component } = await import('../pages/media/PressReleases');
              return { Component };
            }
          },
          {
            path: 'announcements',
            async lazy() {
              const { default: Component } = await import('../pages/media/Announcements');
              return { Component };
            }
          },
          {
            path: 'yae',
            async lazy() {
              const { default: Component } = await import('../pages/media/YoungArtEntrepreneurs');
              return { Component };
            }
          },
          {
            path: 'videos',
            async lazy() {
              const { default: Component } = await import('../pages/media/Videos');
              return { Component };
            }
          }
        ]
      },
      {
        path: 'legal',
        children: [
          {
            path: 'privacy',
            async lazy() {
              const { default: Component } = await import('../pages/legal/Privacy');
              return { Component };
            }
          },
          {
            path: 'security',
            async lazy() {
              const { default: Component } = await import('../pages/legal/Security');
              return { Component };
            }
          },
          {
            path: 'terms',
            async lazy() {
              const { default: Component } = await import('../pages/legal/Terms');
              return { Component };
            }
          },
          {
            path: 'disclaimer',
            async lazy() {
              const { default: Component } = await import('../pages/legal/Disclaimer');
              return { Component };
            }
          },
          {
            path: 'charter',
            async lazy() {
              const { default: Component } = await import('../pages/legal/Charter');
              return { Component };
            }
          }
        ]
      },
      {
        path: 'other',
        children: [
          {
            path: 'sitemap',
            async lazy() {
              const { default: Component } = await import('../pages/other/Sitemap');
              return { Component };
            }
          },
          {
            path: 'portal',
            async lazy() {
              const { default: Component } = await import('../pages/other/PortalLinks');
              return { Component };
            }
          },
          {
            path: 'staff-portal',
            async lazy() {
              const { default: Component } = await import('../pages/other/ProtectedPortal');
              return { Component };
            }
          },
          {
            path: 'intranet',
            async lazy() {
              const { default: Component } = await import('../pages/other/ProtectedPortal');
              return { Component };
            }
          },
          {
            path: 'hrmis',
            async lazy() {
              const { default: Component } = await import('../pages/other/ProtectedPortal');
              return { Component };
            }
          }
        ]
      }
    ]
  }
]);

export default router;