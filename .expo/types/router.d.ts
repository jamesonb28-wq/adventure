/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/bluestart`; params?: Router.UnknownInputParams; } | { pathname: `/cereal`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/key`; params?: Router.UnknownInputParams; } | { pathname: `/nocereal`; params?: Router.UnknownInputParams; } | { pathname: `/nokey`; params?: Router.UnknownInputParams; } | { pathname: `/redstart`; params?: Router.UnknownInputParams; } | { pathname: `/start`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/bluestart`; params?: Router.UnknownOutputParams; } | { pathname: `/cereal`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/key`; params?: Router.UnknownOutputParams; } | { pathname: `/nocereal`; params?: Router.UnknownOutputParams; } | { pathname: `/nokey`; params?: Router.UnknownOutputParams; } | { pathname: `/redstart`; params?: Router.UnknownOutputParams; } | { pathname: `/start`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/bluestart${`?${string}` | `#${string}` | ''}` | `/cereal${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/key${`?${string}` | `#${string}` | ''}` | `/nocereal${`?${string}` | `#${string}` | ''}` | `/nokey${`?${string}` | `#${string}` | ''}` | `/redstart${`?${string}` | `#${string}` | ''}` | `/start${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString | Router.ExternalPathString | `/bluestart` | `/cereal` | `/` | `/key` | `/nocereal` | `/nokey` | `/redstart` | `/start` | `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}
