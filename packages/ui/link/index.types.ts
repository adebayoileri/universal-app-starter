import type { LinkProps as NextLinkProps } from 'next/link'
import type { LinkProps as ExpoLinkProps } from 'expo-router/build/link/Link'

/* --- Types ----------------------------------------------------------------------------------- */

export type UniversalLinkProps = {

    children: React.ReactNode;

    /** Universal - The path to route to on web or mobile. String only. */
    href: string;

    /** Universal - Style prop: https://reactnative.dev/docs/text#style */
    style?: ExpoLinkProps['style'];

    /** Universal - Should replace the current route without adding to the history - Default: false. */
    replace?: boolean;

    /** Universal - Extra handler that fires when the link is pressed. */
    onPress?: ExpoLinkProps['onPress'];

    /** Universal -  */
    target?: ExpoLinkProps['target'];

    // - Expo -

    /** Mobile only - Forward props to child component. Useful for custom buttons - Default: false */
    asChild?: boolean;

    /** Mobile only - Should push the current route, always adding to the history - Default: true */
    push?: boolean;

    /** Mobile only - Used to locate this view in end-to-end tests. */
    testID?: string | undefined;

    /** Mobile only - Used to reference react managed views from native code. */
    nativeID?: string | undefined;

    allowFontScaling?: ExpoLinkProps['allowFontScaling'];
    numberOfLines?: ExpoLinkProps['numberOfLines'];
    maxFontSizeMultiplier?: ExpoLinkProps['maxFontSizeMultiplier'];

    // - Next -

    /** Web only - Whether to override the default scroll behavior - Default: false */
    scroll?: boolean;

    /** Web only - Update the path of the current page without rerunning getStaticProps, getServerSideProps or getInitialProps - Default: false */
    shallow?: boolean;

    /** Web only - Forces `Link` to send the `href` property to its child - Default: false */
    passHref?: boolean;

    /** Web only - Prefetch the page in the background. Any `<Link />` that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production. - Defaultvalue: true */
    prefetch?: boolean;

    /** Web only - The active locale is automatically prepended. `locale` allows for providing a different locale. When `false` `href` has to include the locale as the default behavior is disabled. */
    locale?: string | false;

    /** Web only - Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes) to see how it worked. Note: when this path differs from the one provided in `href` the previous `href`/`as` behavior is used as shown in the [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes). */
    as?: NextLinkProps['as'];

}

export { NextLinkProps, ExpoLinkProps }
