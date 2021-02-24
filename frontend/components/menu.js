export default async ({ $axios }) => {
  return await $axios.$get('/api/menu')
}
