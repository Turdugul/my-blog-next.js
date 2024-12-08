/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.ignoreWarnings = [
          { message: /quill\.snow\.css\.map/ },
        ];
        return config;
      },
};

export default nextConfig;
