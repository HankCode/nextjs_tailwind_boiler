import NavBar from './NavBar';

function Layout(props) {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
