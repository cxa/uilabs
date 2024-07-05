module.exports = {
  plugins: {
    "posthtml-include": {
      root: "src/common",
      posthtmlExpressionsOptions: {
        locals: {
          domain: "realazy.com",
          ...(process.env.POSTHTML_INCLUDE_PROJ && {
            proj: process.env.POSTHTML_INCLUDE_PROJ,
          }),
        },
      },
    },
  },
};
