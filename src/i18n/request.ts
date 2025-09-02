// i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "./service";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return {
    locale,
    messages,
  };
});
