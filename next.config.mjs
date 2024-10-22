import { createMDX } from 'fumadocs-mdx/next';
import createBuilderDevTools from '@builder.io/dev-tools/next';

const withMDX = createMDX();
const withBuilderDevTools = createBuilderDevTools();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/avocado-on-toast.appspot.com/o/**',
      },
      {
        protocol: 'https',
        hostname: 's3.eu-west-2.amazonaws.com',
        port: '',
        pathname: '/mcrcodes/**',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["isolated-vm"],
  },
};

export default withMDX(withBuilderDevTools(config));
