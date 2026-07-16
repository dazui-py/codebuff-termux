export const isTermux =
  process.platform === 'linux' &&
  (!!process.env.TERMUX_VERSION ||
    process.env.PREFIX?.includes('com.termux'))
