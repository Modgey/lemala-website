import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from '../i18nConfig'; // Corrected path to be ../ from lib/

export default async function initTranslations(
  locale: string,
  namespaces: string[],
  i18nInstance?: any, // Use a more specific type if available from i18next
  resources?: any      // Use a more specific type if available from i18next
) {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../public/locales/${language}/${namespace}.json`) // This path is relative to `lib/i18n.ts` execution context or build process output.
                                                                // If `lib` is at root, and `public` is at root, `../public` might be correct depending on how dynamic imports are resolved during build.
                                                                // A safer bet might be to ensure it's relative to project root if possible, or test this specific pathing.
                                                                // For now, assuming the build process handles `../public` correctly from `lib`.
                                                                // More robust: use path.resolve if running in a context where that's available and consistent.
                                                                // Given it's an import() string, it's usually relative to the file itself.
                                                                // So if i18n.ts is in lib/, then ../public/ points to root/public/. This should be correct.
      )
    );
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
} 