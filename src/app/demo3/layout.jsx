import Header from "../components/PageDemo3/Header/Header"
// import Footer from "../components/PageDemo1/Footer/footer"
// import { background } from "@chakra-ui/react"

export const Layout = ({ children }) => {
  return (
    <>
        <div style={{background: "#fff"}}>
            <Header />
            <main style={{
                paddingTop: "84px",
                margin: "0 auto",
                width: "100%",
            }}>
                {children}
            </main>
            {/* <Footer /> */}
        </div>
    </>
  )
}

export default Layout
