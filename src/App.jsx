
import './App.css'
import iconcart from './assets/icon-cart.svg'
import productdesktop from './assets/image-product-desktop.jpg'
import productmobile from './assets/image-product-mobile.jpg'

function App() {

  return (
    <>
     <div className="flex flex-col justify-center items-center h-[100vh] bg-[hsl(30,38%,92%)] border md:flex-row">
            <img className="hidden h-[375px] w-[300px] rounded-l-xl md:block md:h-[400px]" src={productdesktop}/>
            <img className="block h-[300px] w-[350px] rounded-t-xl md:hidden" src={productmobile}/>  
            <section className="h-[400px] w-[350px] rounded-b-xl px-8 py-6 bg-white md:w-[300px] md:rounded-r-xl md:rounded-bl-none md:py-4">
                <p className="font-medium text-[hsl(228,12%,48%)] tracking-[0.2em]">PERFUME</p>
                <h1 className="py-4 font-fraunces text-3xl text-[hsl(212,21%,14%)] md:text-4xl md:py-2">Gabrielle Essence Eau De Parfum</h1>
                <p className="text-[14px] py-4 font-medium text-[hsl(228,12%,48%)] md:py-2">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <article className="flex items-center py-3 pb-6 md:pb-3 md:py-2">
                    <div className="">
                        <h2 className="font-fraunces text-3xl text-[#427f69]">$149.99</h2>
                    </div>
                    <div className="px-8 text-[hsl(228,12%,48%)] line-through">
                        <p>$169.99</p>
                    </div>
                </article>
                <button className="flex items-center justify-center gap-x-2 bg-[#427f69] hover:bg-[#1a4032] rounded-lg w-full py-3  text-white text-center md:hover:bg-[#1a4032]">
                    <img src={iconcart} alt=""/>
                    Add to Cart
                </button>
            </section>
        </div>
    </>
  )
}

export default App
