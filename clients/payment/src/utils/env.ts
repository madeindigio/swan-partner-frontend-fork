export const env = {
  VERSION: __env.VERSION,
  IS_SWAN_MODE: __env.IS_SWAN_MODE,
  PAYMENT_URL: __env.PAYMENT_URL,
  CLIENT_CHECKOUT_API_KEY: __env.CLIENT_CHECKOUT_API_KEY as string | undefined,
};
