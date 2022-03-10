interface BreakPoints {
  mobileMin: number,
  tabletMin: number,
  laptopMin: number,
  desktopMin: number,
}

export const BREAKPOINTS: BreakPoints = {
  mobileMin: 425,
  tabletMin: 768,
  laptopMin: 1024,
  desktopMin: 1500,
}

export const QUERIES = {
  largeMobileAndUp: `(min-width: ${BREAKPOINTS.mobileMin / 16}rem)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
}
