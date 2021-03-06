import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="h-12 flex justify-center items-center">
        <Link to="/">
        <svg 
        className="h-8 pt-1"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.13 87.95"><title>tosiiublog_logo</title><g id="レイヤー_2" data-name="レイヤー 2"><g id="レイヤー_1-2" data-name="レイヤー 1"><path d="M21.17,17.38v11.4h10c.72,0,1.17.45,1.17,1.35v6.52c0,.9-.45,1.27-1.17,1.27h-10V63.07c0,3.62,2,5.43,6.07,5.43H31a1.1,1.1,0,0,1,1.26,1.27v7.32A1.1,1.1,0,0,1,31,78.36H25.43c-10.14,0-15.21-5.43-15.21-13.75V37.92H4a1.12,1.12,0,0,1-1.27-1.27V30.13A1.17,1.17,0,0,1,4,28.78h6.34V17.38a1.18,1.18,0,0,1,1.26-1.27h8.33A1.14,1.14,0,0,1,21.17,17.38Z" transform="translate(-2.71 -9.41)"/><path d="M83.79,47.51V59.27c0,11.85-6.79,20.09-21.26,20.09-14.3,0-21.18-8.24-21.18-19.82V47.78c0-11.86,6.88-20.36,21.18-20.36C77,27.42,83.79,35.92,83.79,47.51Zm-31.22.54V59c0,6.69,3.35,10.49,10,10.49s10-3.8,10-10.49v-11c0-6.7-3.35-10.77-10-10.77S52.57,41.35,52.57,48.05Z" transform="translate(-2.71 -9.41)"/><path d="M132,39.18a1.21,1.21,0,0,1-.91,1.72l-6.6,2.35c-1,.27-1.45,0-1.72-.9-1.45-4.07-4.71-6.06-9.59-6.06-5.07,0-8.06,2.08-8.06,5.34,0,3.07,2.08,4.34,11.68,7,11.31,3.17,15.83,7.6,15.83,15.48,0,9.22-7.6,15.29-19.27,15.29-10.5,0-18.1-4.35-20.45-11.77-.36-1,0-1.53,1.08-2L99.9,62.8c1.08-.36,1.62-.18,2,1.08,1.35,4.17,5.61,6.7,11.13,6.7s8.86-2.17,8.86-5.7c0-3.26-2.71-5-12.12-7.6C98.9,54.2,94.38,50,94.38,42.35c0-9,7.33-14.93,18.45-14.93C122.61,27.42,129.67,31.76,132,39.18Z" transform="translate(-2.71 -9.41)"/><path d="M155.09,11v8.6a1.44,1.44,0,0,1-1.63,1.63h-7.87c-1.18,0-1.72-.55-1.72-1.63V11a1.51,1.51,0,0,1,1.72-1.63h7.87A1.48,1.48,0,0,1,155.09,11Zm0,18.64V77.09a1.14,1.14,0,0,1-1.27,1.27h-8.59c-.91,0-1.36-.45-1.36-1.27V29.68c0-.81.45-1.27,1.36-1.27h8.59A1.15,1.15,0,0,1,155.09,29.68Z" transform="translate(-2.71 -9.41)"/><path d="M180.06,11v8.6a1.44,1.44,0,0,1-1.62,1.63h-7.88c-1.17,0-1.72-.55-1.72-1.63V11a1.51,1.51,0,0,1,1.72-1.63h7.88A1.48,1.48,0,0,1,180.06,11Zm0,18.64V77.09a1.14,1.14,0,0,1-1.26,1.27h-8.6c-.9,0-1.36-.45-1.36-1.27V29.68c0-.81.46-1.27,1.36-1.27h8.6A1.15,1.15,0,0,1,180.06,29.68Z" transform="translate(-2.71 -9.41)"/><path d="M193.46,62.35V29.68a1.21,1.21,0,0,1,1.35-1.27h8.6a1.12,1.12,0,0,1,1.27,1.27V60.54c0,5.33,2.62,8.59,7.69,8.59,4.7,0,8.77-3.53,10.58-8.59V29.68c0-.81.37-1.27,1.18-1.27h8.69a1.17,1.17,0,0,1,1.35,1.27v47.5a1.16,1.16,0,0,1-1.26,1.18h-8.42a1.12,1.12,0,0,1-1.26-1.18V71.12a18.32,18.32,0,0,1-15.12,8.24C198.7,79.36,193.46,72.48,193.46,62.35Z" transform="translate(-2.71 -9.41)"/><path d="M278.6,10.68V36.11c2.26-4.26,7.33-8.15,14.93-8.15,10.59,0,17.28,7.33,17.28,18.55v14.3c0,11.31-6.6,18.46-17.37,18.46-7.51,0-12.67-3.8-14.93-8.06v6.34c0,.72-.54.81-1,.81h-3.35c-.55,0-.91-.09-.91-.81V10.68a.77.77,0,0,1,.82-.82h3.62C278.33,9.86,278.6,10.14,278.6,10.68Zm0,36.46v13c0,9.41,6.7,14.12,13.85,14.12,7.78,0,13-4.62,13-14V47.05c0-9.41-5.16-14.11-13-14.11C285.3,32.94,278.6,37.73,278.6,47.14Z" transform="translate(-2.71 -9.41)"/><path d="M331.35,10.77V66.6c0,5,2,6.78,7.15,6.78H341c.72,0,1.08.28,1.08,1v2.9c0,.81-.27,1.08-1.08,1.08h-3.17c-7.87,0-11.85-3.62-11.85-11V10.77c0-.54.27-.91,1.08-.91h3.26C331.08,9.86,331.35,10.23,331.35,10.77Z" transform="translate(-2.71 -9.41)"/><path d="M389.45,46.6v14c0,11.31-6.7,18.64-19.1,18.64s-19.09-7.33-19.09-18.55v-14C351.26,35.38,358,28,370.35,28S389.45,35.38,389.45,46.6Zm-32.76.27V60.45c0,9.22,5.16,13.84,13.66,13.84S384,69.67,384,60.45V46.87c0-9.23-5.16-13.93-13.67-13.93S356.69,37.64,356.69,46.87Z" transform="translate(-2.71 -9.41)"/><path d="M422.65,97.36c-11.4,0-16.46-4.34-18.91-11.4-.18-.63-.18-1.17.64-1.45L407,83.43c.72-.27,1.18-.09,1.36.54,1.81,5.52,5.24,8.6,14.29,8.69,8.15-.09,12.85-4.62,12.85-14.12V70.85c-2.26,4.16-7.33,8.05-14.93,8.05-10.67-.09-17.28-7.23-17.28-18.55V46.42c0-11.31,6.61-18.37,17.37-18.46,7.51,0,12.67,3.89,14.93,8V29.68c0-.72.55-.81,1-.81h3.35c.54,0,.9.09.9.81V78.54C440.84,90.21,434.51,97.36,422.65,97.36ZM435.5,59.81V47.05c0-9.41-6.69-14.11-13.84-14.11-7.87.09-13,4.61-13,14V59.9c0,9.41,5.16,14,13,14.12C428.81,74,435.5,69.22,435.5,59.81Z" transform="translate(-2.71 -9.41)"/></g></g></svg>
        </Link>
      </div>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="xl:w-1/3 m-auto" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <footer className="border-t p-2">
          <div className="w-1/3 m-auto">
            © {new Date().getFullYear()}, tosiiu
          </div>
        </footer>
    </div>
  )
}

export default Layout
