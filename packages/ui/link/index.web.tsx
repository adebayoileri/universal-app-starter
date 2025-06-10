import NextLink from 'next/link'
import type { ComponentProps } from 'react'
import type { UniversalLinkProps } from './index.types'

/* --- <Link/> --------------------------------------------------------------------------------- */

export const Link = (props: UniversalLinkProps) => {
    // Props
    const {
        children,
        href,
        style,
        replace,
        onPress,
        target,
        scroll,
        shallow,
        passHref,
        prefetch,
        locale,
        as,
    } = props

    // -- Render --

    return (
        <NextLink
            href={href}
            style={style as unknown as ComponentProps<typeof NextLink>['style']}
            onClick={onPress}
            target={target}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            passHref={passHref}
            prefetch={prefetch}
            locale={locale}
            as={as}
        >
            {children}
        </NextLink>
    )
}
