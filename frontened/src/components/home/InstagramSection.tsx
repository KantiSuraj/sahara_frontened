import React from 'react';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

interface InstagramPost {
  id: number;
  image: string;
  likes: number;
  comments: number;
}

const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    image: 'https://ext.same-assets.com/3049334603/2369812464.jpeg',
    likes: 124,
    comments: 28
  },
  {
    id: 2,
    image: 'https://ext.same-assets.com/3049334603/3081223028.jpeg',
    likes: 98,
    comments: 14
  },
  {
    id: 3,
    image: 'https://ext.same-assets.com/3049334603/334153140.jpeg',
    likes: 156,
    comments: 32
  },
  {
    id: 4,
    image: 'https://ext.same-assets.com/3049334603/3474038737.jpeg',
    likes: 110,
    comments: 21
  },
  {
    id: 5,
    image: 'https://ext.same-assets.com/3049334603/2283962858.jpeg',
    likes: 132,
    comments: 18
  },
  {
    id: 6,
    image: 'https://ext.same-assets.com/3049334603/988855479.jpeg',
    likes: 89,
    comments: 12
  }
];

const InstagramSection = () => {
  return (
    <section className="py-10 xs:py-12 sm:py-16 md:py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-xl xs:text-2xl md:text-3xl">Instagram Feed</h2>
        <p className="section-subtitle text-xs sm:text-sm md:text-base">Follow us on Instagram for exclusive content and offers</p>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 xs:gap-3 sm:gap-4">
          {instagramPosts.map((post) => (
            <Link href="https://instagram.com" key={post.id} className="group relative block overflow-hidden rounded-lg aspect-square">
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="h-full w-full object-cover object-center transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="text-center text-white">
                  <Instagram className="mx-auto mb-1 xs:mb-2 h-5 w-5 sm:h-7 sm:w-7" />
                  <div className="flex justify-center space-x-2 xs:space-x-4 text-xs sm:text-sm">
                    <span className="hidden xs:inline">{post.likes} likes</span>
                    <span className="xs:hidden">{post.likes}</span>
                    <span className="hidden xs:inline">{post.comments} comments</span>
                    <span className="xs:hidden">{post.comments}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="https://instagram.com"
            className="inline-flex items-center text-ekka-primary hover:text-ekka-primary/90 font-medium text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Follow us on Instagram
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
