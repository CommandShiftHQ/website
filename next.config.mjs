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
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'imgs.xkcd.com'
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com'
      },
      {
        protocol: 'https',
        hostname: 'www.hostinger.com'
      },
      {
        protocol: 'https',
        hostname: 'github.com'
      },
      {
        protocol: 'https',
        hostname: 'a.storyblok.com'
      },
      {
        protocol: 'https',
        hostname: 'ubuntucommunity.s3.dualstack.us-east-2.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: 'mcrcodes.s3.eu-west-2.amazonaws.com'
      }
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["isolated-vm"],
  },
};

export default withMDX(withBuilderDevTools(config));
