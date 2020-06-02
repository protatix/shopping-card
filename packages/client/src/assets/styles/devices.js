const size = {
    breakpoint1: '610px',
    breakpoint2: '930px',
    breakpoint3: '1440px',
    breakpoint4: '1920px',
  }
  
  export const device = {
    mobile: `(max-width: ${size.breakpoint1})`,
    tablet: `(min-width: ${size.breakpoint1}) and (max-width: ${size.breakpoint2})`,
    laptop: `(min-width: ${size.breakpoint2}) and (max-width: ${size.breakpoint3})`,
    laptopL: `(min-width: ${size.breakpoint3}) and (max-width: ${size.breakpoint4})`,
    desktop: `(min-width: ${size.breakpoint4})`,
  };