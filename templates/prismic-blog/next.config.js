const withTM = require('next-transpile-modules')(['@next-template/components'])

require('dotenv').config()

module.exports = withTM({
  env: {
    NEXT_TEMPLATE_PRISMIC_SECRET: process.env.NEXT_TEMPLATE_PRISMIC_SECRET
  }
})
