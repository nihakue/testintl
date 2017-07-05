# Small POC that demonstrates the impact of react-redux's connect HOC on react-intl, and the injectIntl workaround.
By wrapping connected components in injectIntl, rerenders are triggered by props changing. This way, we don't have to use the key={locale} hack and remount everything.

## To run
`yarn install && yarn star`
