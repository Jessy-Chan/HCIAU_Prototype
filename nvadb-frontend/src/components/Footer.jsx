import React from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';

const Footer = ({ contact = {} }) => {
  const { content, locale, changeLocale } = useContent();
  const { footer } = content;
  const { address = '', phone = '', hours = '' } = contact;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{footer.quicklinkstitles}</h3>
            <ul className="space-y-2 text-gray-500">
              {footer.quicklinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-gray-300">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{footer.contacttitle}</h3>
            <div className="text-gray-500">
              {address && <p>{footer.contact.address}</p>}
              {phone && <p>{footer.contact.phonetext}: {footer.contact.phone}</p>}
              {hours && <p>{footer.contact.hourstext}: {footer.contact.hours}</p>}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{footer.followtitle}</h3>
            <div className="flex space-x-4 text-gray-500">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-white">
          <p>&copy; {new Date().getFullYear()} {footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
