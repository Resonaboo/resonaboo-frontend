import "intlayer";
import _1009ooghvlg from './header.ts';
import _1lzhji07pk5 from './home-page.ts';

declare module 'intlayer' {
  interface __DictionaryRegistry {
    "header": typeof _1009ooghvlg;
    "home-page": typeof _1lzhji07pk5;
  }

  interface __DeclaredLocalesRegistry {
    "en": 1;
    "pt-BR": 1;
  }

  interface __RequiredLocalesRegistry {
    "en": 1;
    "pt-BR": 1;
  }

  interface __SchemaRegistry {

  }

  interface __StrictModeRegistry { mode: 'inclusive' }

  interface __EditorRegistry { enabled : false }

  interface __RoutingRegistry { mode: 'prefix-no-default'; defaultLocale: 'en' }
}
