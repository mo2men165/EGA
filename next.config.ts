import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  }
};
 
const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/i182/request.ts' // Adjusted path
});

export default withNextIntl(nextConfig);