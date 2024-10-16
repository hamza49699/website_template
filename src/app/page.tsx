import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="bg-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-bold">FASCO</div>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="#"
                   className="text-black">Home
                </Link>
              </li>
              <li>
                <Link href="#"
                   className="text-black">Deals
                </Link>
              </li>
              <li>
                <Link href="#"
                   className="text-black">New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#"
                   className="text-black">Packages
                </Link>
              </li>
              <li>
                <Link href="#"
                   className="text-black">Sign in
                </Link>
              </li>
              <button className="bg-black text-white py-2 px-4 rounded">Log In</button>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex justify-between items-center py-16 px-8 bg-white">
        <div className="w-1/3 p-4 bg-gray-100 rounded-lg">
          <Image src="/image 2 28.png" alt="Man Seated" width={500} height={500} className="w-full h-96" />
        </div>

        {/* Middle Section with Gray Box */}
        <div className="text-center">

          {/* Small Gray Box */}
          <div className="bg-gray-100  h-60 mx-9 mb-12 rounded">
            <Image src="/images (9).png" alt="" width={500} height={600} /> 
          </div>
          <h2 className="text-6xl font-bold">ULTIMATE SALE</h2>
          <button className="mt-8 py-3 px-6 bg-black text-white text-lg rounded">Shop Collection</button>
        </div>

        <div className="w-1/3 p-4 bg-gray-100 rounded-lg">
          <Image src="/image 227 (1).png" alt="Woman Standing" width={500} height={500} className="w-full h-96" />
        </div>
      </section>
      <section className="flex justify-center space-x-12 py-8 bg-gray-200">
  <p className="text-2xl font-semibold tracking-wider uppercase text-gray-800">CHANEL</p>
  <p className="text-2xl font-semibold tracking-wider lowercase text-gray-800">LOUIS VUITTON</p>
  <p className="text-2xl font-semibold tracking-wider uppercase text-gray-800">PRADA</p>
  <p className="text-2xl font-semibold tracking-wider lowercase text-gray-800">Calvin Klein</p>
  <p className="text-2xl font-semibold tracking-wider uppercase text-gray-800">DENIM</p>
</section>

<section className="bg-white py-16 px-8">
  <div className="container mx-auto flex space-x-12 items-center">
    
    {/* Left Section */}
    <div className="w-1/2">
      <h2 className="text-4xl font-bold mb-4">Deals Of The Month</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Scelerisque duis ultrices sollicitudin aliquam sem.
      </p>
      
      <button className="bg-black text-white py-3 px-6 rounded shadow-md">Buy Now</button>

      <div className="mt-8">
        <p className="text-lg font-semibold mb-4">Hurry, Before It’s Too Late!</p>
        {/* Countdown Timer */}
        <div className="flex space-x-4">
          <div className="bg-gray-100 p-4 text-center rounded">
            <p className="text-2xl font-bold">02</p>
            <p className="text-sm text-gray-600">Days</p>
          </div>
          <div className="bg-gray-100 p-4 text-center rounded">
            <p className="text-2xl font-bold">06</p>
            <p className="text-sm text-gray-600">Hr</p>
          </div>
          <div className="bg-gray-100 p-4 text-center rounded">
            <p className="text-2xl font-bold">05</p>
            <p className="text-sm text-gray-600">Mins</p>
          </div>
          <div className="bg-gray-100 p-4 text-center rounded">
            <p className="text-2xl font-bold">30</p>
            <p className="text-sm text-gray-600">Sec</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Right Section - Carousel of Deals */}
    <div className="w-1/2">
      <div className="flex space-x-4">
        
        {/* Card 1 */}
        <div className="bg-gray-100 rounded-lg p-4 w-1/3 shadow-md">
          <Image 
            src="/image (3).png" 
            alt="Spring Sale"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <div className="mt-4">
            <p className="text-gray-500 text-sm">01 — Spring Sale</p>
            <p className="text-lg font-bold">30% OFF</p>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-gray-100 rounded-lg p-4 w-1/3 shadow-md">
          <Image 
            src="/image (2).png" 
            alt="Spring Sale"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <div className="mt-4">
            <p className="text-gray-500 text-sm">02 — Summer Sale</p>
            <p className="text-lg font-bold">50% OFF</p>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="bg-gray-100 rounded-lg p-4 w-1/3 shadow-md">
          <Image 
            src="/image (1).png" 
            alt="Spring Sale"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <div className="mt-4">
            <p className="text-gray-500 text-sm">03 — Fall Sale</p>
            <p className="text-lg font-bold">40% OFF</p>
          </div>
        </div>
        
      </div>
      
      {/* Carousel Controls */}
      <div className="flex justify-center mt-4 space-x-2">
        <button className="p-2 bg-gray-300 rounded-full shadow-md">
          <span>&lt;</span>
        </button>
        <button className="p-2 bg-gray-300 rounded-full shadow-md">
          <span>&gt;</span>
        </button>
      </div>
    </div>
    
  </div>
</section>

<section className="bg-white py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">New Arrivals</h2>
    <p className="text-gray-600 mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dui ut diam sollicitudin aliquam.
    </p>

    {/* Category Tabs */}
    <div className="flex justify-center space-x-4 mb-12">
      <button className="py-2 px-4 bg-gray-100 text-black rounded-md">Men's Fashion</button>
      <button className="py-2 px-4 bg-black text-white rounded-md">Women's Fashion</button>
      <button className="py-2 px-4 bg-gray-100 text-black rounded-md">Women's Accessories</button>
      <button className="py-2 px-4 bg-gray-100 text-black rounded-md">Men's Accessories</button>
      <button className="py-2 px-4 bg-gray-100 text-black rounded-md">Discount Deals</button>
    </div>

    {/* Product Cards */}
    <div className="grid grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-left">
        <Image src="/images (2).png" alt="Shiny Dress" width={300} height={400} className="rounded-md mb-4" />
        <h3 className="text-lg font-bold mb-2">Shiny Dress</h3>
        <p className="text-sm text-gray-500">Modern Outfit</p>
        <p className="text-lg font-bold mt-2">$93.50</p>
        <p className="text-sm text-red-500">20% OFF</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-left">
        <Image src="/images (3).png" alt="Long Dress" width={300} height={400} className="rounded-md mb-4" />
        <h3 className="text-lg font-bold mb-2">Long Dress</h3>
        <p className="text-sm text-gray-500">Modern Outfit</p>
        <p className="text-lg font-bold mt-2">$98.50</p>
        <p className="text-sm text-red-500">15% OFF</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-left">
        <Image src="/images (4).png" alt="Full Sweater" width={300} height={400} className="rounded-md mb-4" />
        <h3 className="text-lg font-bold mb-2">Full Sweater</h3>
        <p className="text-sm text-gray-500">Winter Collection</p>
        <p className="text-lg font-bold mt-2">$99.50</p>
        <p className="text-sm text-red-500">10% OFF</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
        </div>
      </div>

     {/* Card 4 */}
     <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-left">
        <Image src="/images (5).png" alt="White dress" width={300} height={400} className="rounded-md mb-4" />
        <h3 className="text-lg font-bold mb-2">White Dress</h3>
        <p className="text-sm text-gray-500">Winter Collection</p>
        <p className="text-lg font-bold mt-2">$99.50</p>
        <p className="text-sm text-red-500">10% OFF</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
        </div>
      </div>

       {/* Card 5 */}
       <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-left">
        <Image src="/images (6).png" alt="Full Sweater" width={300} height={400} className="rounded-md mb-4" />
        <h3 className="text-lg font-bold mb-2">Color Dress</h3>
        <p className="text-sm text-gray-500">Winter Collection</p>
        <p className="text-lg font-bold mt-2">$99.50</p>
        <p className="text-sm text-red-500">10% OFF</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
        </div>
      </div>

       {/* Card 6 */}
       <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-left">
        <Image src="/images (7).png" alt="Full Sweater" width={300} height={400} className="rounded-md mb-4" />
        <h3 className="text-lg font-bold mb-2">White Shirt</h3>
        <p className="text-sm text-gray-500">Winter Collection</p>
        <p className="text-lg font-bold mt-2">$99.50</p>
        <p className="text-sm text-red-500">10% OFF</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
        </div>
      </div>
</div>
</div>
</section>

<section className="bg-gray-200 py-16">
  <div className="container mx-auto flex justify-between items-center">
    {/* Left Side - Image with Labels */}
    <div className="relative w-1/2">
      <Image
        src="/image.png"
        alt="Peaky Blinders Model"
        width={500}
        height={600}
        className="w-full h-auto"
      />
      {/* Labels */}
      <div className="absolute top-8 left-4 bg-white px-2 py-1 text-sm shadow-lg">Flat Cap</div>
      <div className="absolute top-24 left-4 bg-white px-2 py-1 text-sm shadow-lg">Suspenders</div>
      <div className="absolute top-40 left-4 bg-white px-2 py-1 text-sm shadow-lg">Hugo Boss</div>
      <div className="absolute bottom-16 left-4 bg-white px-2 py-1 text-sm shadow-lg">Santorini Shoes</div>
    </div>

    {/* Right Side - Product Info */}
    <div className="w-1/2 pl-16">
      <h3 className="text-lg font-semibold text-gray-500">Women Collection</h3>
      <h1 className="text-5xl font-bold mb-4">Peaky Blinders</h1>
      <h4 className="text-lg font-semibold mb-2">DESCRIPTION</h4>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultricies sollicitudin aliquam sem. Scelerisque duis ultricies sollicitudin.
      </p>

      <div className="mb-4">
        <p className="text-lg font-semibold mb-1">Size:</p>
        <button className="px-4 py-2 border border-gray-400 rounded-lg">M</button>
      </div>

      <p className="text-2xl font-bold mb-6">$100.00</p>

      <button className="bg-black text-white py-3 px-6 rounded-lg">Buy Now</button>
    </div>
  </div>

  {/* Features Banner */}
  <div className="container mx-auto mt-16 py-8 bg-white grid grid-cols-4 gap-8 text-center">
    <div>
      <Image src="/icon.png" alt="High Quality" width={50} height={50} className="mx-auto mb-4" />
      <p className="font-semibold">High Quality</p>
      <p className="text-gray-500">Crafted from top materials</p>
    </div>
    <div>
      <Image src="/icon (1).png" alt="Warranty Protection" width={50} height={50} className="mx-auto mb-4" />
      <p className="font-semibold">Warranty Protection</p>
      <p className="text-gray-500">Over 2 years</p>
    </div>
    <div>
      <Image src="/icon2.png" alt="Free Shipping" width={50} height={50} className="mx-auto mb-4" />
      <p className="font-semibold">Free Shipping</p>
      <p className="text-gray-500">Order over 150$</p>
    </div>
    <div>
      <Image src="/icon3.png" alt="24/7 Support" width={50} height={50} className="mx-auto mb-4" />
      <p className="font-semibold">24/7 Support</p>
      <p className="text-gray-500">Dedicated support</p>
    </div>
  </div>
</section>

<section>
<div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Image */}
          <div className="lg:w-1/4 mb-8 lg:mb-0">
          <Image
        src="/image2.png"
        alt=""
        width={500}
        height={600}
        className="w-full h-auto"
      />
          </div>

          {/* Subscription Form */}
          <div className="lg:w-2/4 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Subscribe To Our Newsletter
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
              duis ultrices sollicitudin aliquam.
            </p>

            <form className="mt-6 flex justify-center lg:justify-start">
              <input
                type="email"
                placeholder="michael@ymail.com"
                className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button
                type="submit"
                className="ml-4 px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          {/* Left Image */}
          <div className="lg:w-1/4 mb-8 lg:mb-0">
          <Image
        src="/image3.png"
        alt=""
        width={500}
        height={600}
        className="w-full h-auto"
      />
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-20 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        <ul className="flex justify-center space-x-4">
          <li><a href="#" className="hover:underline">Support Center</a></li>
          <li><a href="#" className="hover:underline">Invoicing</a></li>
          <li><a href="#" className="hover:underline">Contract</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">FAQs</a></li>
        </ul>
        <p className="mt-4">© 2024 FASCO. All Rights Reserved.</p>
      </div>
      </div>
</section>


    </div>
  )
}




// https://www.figma.com/design/3QgWdlFiLdPufJQdNAVdtU/FASCO--Fashion-Ecommerce-Website-Page-(Community)?node-id=1-22&node-type=symbol&t=KGctuqflmWyv2vOP-0