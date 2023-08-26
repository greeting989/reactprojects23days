import React from 'react'

function Header() {
   
    return (
      <div
        className="h-1/4 bg-gray-50 flex items-center "
        style={{
          backgroundImage:
            "url(" +
            "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="w-full bg-cover bg-center py-32">
          <div className="container mx-auto text-center text-white">
            <h1 className="text-6xl font-medium mb-6">
              Welcome to Reciper
            </h1>
            <p className="text-2xl mb-12">
              “There is no love sincerer than the love of food.”
            </p>       
          </div>
        </section>
      </div>
    );
  }

export default Header