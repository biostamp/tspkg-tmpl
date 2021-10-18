module.exports = {
  prompts: {
    PKG_NAME: {
      type: 'string',
      required: true,
      label: 'Package Name',
    },
    PKG_DESC: {
      type: 'string',
      default: '',
      label: 'Package Description',
    },
    PKG_VERSION: {
      type: 'string',
      default: '0.1.0',
      label: 'Package Version',
    },
  },
  completeMessage: '',
}
