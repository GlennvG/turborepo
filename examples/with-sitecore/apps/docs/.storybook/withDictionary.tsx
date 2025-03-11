import { I18nProvider } from 'next-localization';
import React from "react";
import dictionary from '../public/locales/en/common.json';

export const withDictionary = (Story: any, context: any) => {

  return (
    <I18nProvider lngDict={dictionary} locale="en">
      <Story />
    </I18nProvider>
  );
}

export default withDictionary;