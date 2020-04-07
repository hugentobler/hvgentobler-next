// components/CustomCssProperties
// Enabling colors to change on each page by update custom properties if they exist

const SetProperty = (pathname) => {
  // Store custom pagestyles
  const pageStyles = {
    '/': ['--black', '--white'],
    '/25th': ['--classic-blue', '--yellow']
  };
  // Check if there is custom stylign for active page
  const updateProperties = pageStyles[pathname];
  // Update
  if (updateProperties) {
    document.documentElement.style.setProperty('--background-color', `var(${pageStyles[pathname][0]})`);
    document.documentElement.style.setProperty('--text-color', `var(${pageStyles[pathname][1]})`);
  }
};

export default SetProperty;
