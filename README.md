# What is this?
A small POC that demonstrates the impact of react-redux's connect HOC on react-intl, and the injectIntl workaround.
injectIntl puts the intl object in the connected component's props, and rerendering is triggered by locale changing. Using this method, we can avoid having to use the key={locale} hack and remount everything.

# How To run
`yarn install && yarn start`
