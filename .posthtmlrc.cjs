const exprs = {
  locals: {
    domain: "realazy.com",
    public_root: process.env.POSTHTML_INCLUDE_PUBLIC_ROOT,
    proj: process.env.POSTHTML_INCLUDE_PROJ,
  },
};

module.exports = {
  plugins: {
    "posthtml-include": {
      root: "src/common",
      posthtmlExpressionsOptions: exprs,
    },
    "posthtml-expressions": exprs,
  },
};
