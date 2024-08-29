import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/RO5555.png'
import { Link } from 'react-scroll';
import Headroom from 'react-headroom';
import { useEffect, useRef, useState } from 'react';


const navigation = [
    { id: 'Profile', href: '/', current: false },
    { id: 'Technology', href: '/technology', current: false },
    { id: 'About', href: '/about', current: false },
    { id: 'Experience', href: '/experience', current: false },
    { id: 'Project', href: '/project', current: false },
    { id: 'Contact', href: '/contact', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  

const Navbar2 = () => {

  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);

  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
        setIsOpen(false); // Open the menu when scrolling up
      } else {
        setScrollDirection('down');
        setIsOpen(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the panel when a link is clicked
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false); // Close the panel when clicking outside
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Headroom style={{
      webkitTransition: 'all .5s ease-in-out',
      mozTransition: 'all .5s ease-in-out',
      oTransition: 'all .5s ease-in-out',
      transition: 'all .5s ease-in-out',
      zIndex:100,
    }}>
    <Disclosure as="nav" className="mb-8 bg-slate-900 bg-opacity-80">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute right-0 mr-6 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton onClick={() => setIsOpen(!isOpen)} /* Toggle the panel */ className="group inline-flex items-center justify-center rounded-md p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className={`block h-6 w-6`} />
              {/* <XMarkIcon aria-hidden="true" className={`${isOpen ? "hidden":"block"} h-6 w-6`} /> */}
            </DisclosureButton>
          </div>
          <div className="flex w-2/4 -ml-2 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src={logo}
                className="h-14"
              />
            </div>
            <div className="hidden absolute pt-2 right-0 flex items-center sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    // key={item.name}
                    // aria-current={item.current ? 'page' : undefined}
                    activeClass="active" 
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    href={item.href}

                    className={classNames(
                      item.current ? 'bg-gradient-to-r from-pink-500 to-purple-500  text-white' : 'bg-gradient-to-r hover:from-red-500 hover:to-purple-500',
                      'rounded-sm px-3 py-2 text-md font-small',
                    )}
                  >
                    {item.id}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          </div> */}
        </div>
      </div>
    
      <DisclosurePanel 
      ref={panelRef}
      className={`${isOpen ? '':'hidden'}absolute w-screen text-center bg-slate-900 bg-opacity-90 sm:block `}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              activeClass="active" 
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              href={item.href}
              onClick={handleLinkClick} // Close the panel when a link is clicked
              className={classNames(
                item.current ? 'bg-gradient-to-r from-pink-500 to-purple-500  text-white' : 'bg-gradient-to-r hover:from-red-500 hover:to-purple-500',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.id}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </Headroom>
  )
}

export default Navbar2