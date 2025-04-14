import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 xs:pt-12 sm:pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Information</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/about" className="text-xs sm:text-sm text-gray-600 hover:text-ekka-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-xs sm:text-sm text-gray-600 hover:text-ekka-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/delivery-info" className="text-xs sm:text-sm text-gray-600 hover:text-ekka-primary transition-colors">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs sm:text-sm text-gray-600 hover:text-ekka-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Account</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/my-account" className="text-xs sm:text-sm text-gray-600 hover:text-ekka-primary transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/order-history" className="text-xs sm:text-sm text-gray-600 hover:text-ekka-primary transition-colors">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-xs sm:text-sm text-gray-600 hover:text-ekka-primary transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-xs sm:text-sm text-gray-600 hover:text-ekka-primary transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-xs sm:text-sm text-gray-600 hover:text-ekka-primary transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - hidden on extra small screens, merged with policies */}
          <div className="hidden sm:block">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/discount-prices" className="text-xs sm:text-sm text-gray-600 hover:text-ekka-primary transition-colors">
                  Discount Prices
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs sm:text-sm text-gray-600 hover:text-ekka-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-xs sm:text-sm text-gray-600 hover:text-ekka-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/customer-service" className="text-xs sm:text-sm text-gray-600 hover:text-ekka-primary transition-colors">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-xs sm:text-sm text-gray-600 hover:text-ekka-primary transition-colors">
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Newsletter</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Get instant updates about our new products and special promotions!</p>
            <div className="flex flex-col xs:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-r-none xs:w-auto text-xs sm:text-sm focus-visible:ring-ekka-primary mb-2 xs:mb-0"
              />
              <Button className="rounded-l-none xs:rounded-l-none bg-ekka-primary hover:bg-ekka-primary/90 text-xs sm:text-sm py-1.5 h-auto">
                Subscribe
              </Button>
            </div>
            <div className="flex items-center space-x-2 xs:space-x-3 mt-4 sm:mt-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-1.5 xs:p-2 rounded-full shadow-sm hover:text-ekka-primary transition-colors"
              >
                <Facebook className="h-4 w-4 xs:h-5 xs:w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-1.5 xs:p-2 rounded-full shadow-sm hover:text-ekka-primary transition-colors"
              >
                <Twitter className="h-4 w-4 xs:h-5 xs:w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-1.5 xs:p-2 rounded-full shadow-sm hover:text-ekka-primary transition-colors"
              >
                <Instagram className="h-4 w-4 xs:h-5 xs:w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-1.5 xs:p-2 rounded-full shadow-sm hover:text-ekka-primary transition-colors"
              >
                <Linkedin className="h-4 w-4 xs:h-5 xs:w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-200 text-center text-gray-600">
          <p className="text-xs sm:text-sm">© {new Date().getFullYear()} Sahara All Rights Reserved.</p>
          <div className="flex justify-center mt-3 sm:mt-4">
            {/* <img
              src="https://t4.ftcdn.net/jpg/04/73/84/61/360_F_473846184_0k637f6855ZJqaulKqAmgJTEVGVibR1P.jpg"
              alt="Payment Methods"
              className="h-10 sm:h-10"
            /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
