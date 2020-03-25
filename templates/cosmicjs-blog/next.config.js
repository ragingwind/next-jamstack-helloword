require('dotenv').config()

module.exports = {
  env: {
    NEXT_TEMPLATE_COSMICJS_OBJECT_ID: process.env.NEXT_TEMPLATE_COSMICJS_OBJECT_ID,
    NEXT_TEMPLATE_COSMICJS_READ_KEY: process.env.NEXT_TEMPLATE_COSMICJS_READ_KEY,
  },
}