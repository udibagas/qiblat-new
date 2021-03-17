export default async ({$axios}, locale) => {
  return await $axios.$get('/api/locale', { params: { locale: 'ar' } });
}
