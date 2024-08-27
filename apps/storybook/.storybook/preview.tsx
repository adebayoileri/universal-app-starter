import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Suspense } from 'react'
import { Text } from 'react-native'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import { withPerformance } from 'storybook-addon-performance'
import { useDarkMode } from 'storybook-dark-mode'

export const parameters = {
  chromatic: { viewports: [375], pauseAnimationAtEnd: true },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphonex'
  },
  grid: {
    gridOn: false,
    columns: 4,
    gap: '16px',
    gutter: '16px',
    maxWidth: '1024px'
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'de', title: 'Deutsch' }
        ],
        showName: true
      }
    }
  }
}

const withThemeProvider = (Story: any, context: any) => {
  const mode = useDarkMode() ? 'dark' : 'light'



  return (
    <Suspense fallback={<Text>Provider Suspense Loading</Text>}>
      <SafeAreaProvider
        initialMetrics={initialWindowMetrics}>
        <Story {...context} />
      </SafeAreaProvider>
    </Suspense>
  )
}

export const decorators = [withThemeProvider, withPerformance]
