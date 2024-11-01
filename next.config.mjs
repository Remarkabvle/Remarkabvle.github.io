import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.licdn.com', 'back.aisha.group'], // Tashqi manbalar uchun domenlarni qo'shing
  },
};

export default withNextIntl(nextConfig);
