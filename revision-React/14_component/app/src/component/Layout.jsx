const Layout = ({title, children}) => {
  return (
    <div>
       <p>{title}</p>
       {children}
    </div>
  )
}

export default Layout
