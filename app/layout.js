// This is the new _app.js file, must look like something below

import './ui/styles/global.css';


//it is a top-level React component that wraps all the pages in your application. You can use this component to keep state when navigating between pages
/// you must always have at least one layout at the root level

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}