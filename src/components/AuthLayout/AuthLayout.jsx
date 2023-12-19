import "./AuthLayout.scss"

function AuthLayout({ children }) {
  return (
    <section className="authlayout">
      {children}
    </section>
  );
}

export default AuthLayout;