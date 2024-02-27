import Header from "./lib/components/header"
import CartEmpty from "./lib/components/cart-empty"

const Page = () => {
    return (
        <>
            <Header />
            <main className="py-[49px]">
                <CartEmpty />
            </main>
        </>
    )
}

export default Page
