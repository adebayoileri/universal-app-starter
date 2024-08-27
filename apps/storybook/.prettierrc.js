import common from '@repo/prettier-config'
export default {
  ...common,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['tw']
}
