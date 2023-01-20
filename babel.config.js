module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel",
      [
        'module-resolver',
        {
          alias: {
            app: './src/app',
            components: './src/components',
            hooks: './src/hooks',
            infrastructure: './src/infrastructure',
            models: './src/models',
            context: './src/context',
            mock_services: './src/mock_services',
            utils: './src/utils',
          },
        },
      ],
    ],
  };
};
