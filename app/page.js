"use client";

import MainLayout from "./layouts/MainLayout";
import CarouselComp from "./components/CarouselComp";
import Product from "./components/Product";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Brown leather bag",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Intern",
      url: "https://picsum.photos/id/7",
      price: 2500
    },
    {
      id: 2,
      title: "School Books",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      url: "https://picsum.photos/id/20",
      price: 1990
    },
  ]
  return (
    <MainLayout>
      <CarouselComp />


      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>

        <div className="grid grid-cols-5 gap-4">
          {products.map((product) => (
            Product({ product })
          ))}
        </div>
      </div>
    
    </MainLayout>
  )
}
