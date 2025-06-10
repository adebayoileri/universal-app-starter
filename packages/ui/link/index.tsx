import { Link as ExpoLink } from 'expo-router'
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
        asChild,
        push,
        testID,
        nativeID,
        allowFontScaling,
        numberOfLines,
        maxFontSizeMultiplier
    } = props

    // -- Render --

    return (
        <ExpoLink
            href={href}
            style={style}
            onPress={onPress}
            target={target}
            asChild={asChild}
            replace={replace}
            push={push}
            testID={testID}
            nativeID={nativeID}
            allowFontScaling={allowFontScaling}
            numberOfLines={numberOfLines}
            maxFontSizeMultiplier={maxFontSizeMultiplier}
        >
            {children}
        </ExpoLink>
    )
}

