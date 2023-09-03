"use client";

import MainLayout from "@/app/layouts/MainLayout";


export default function Product({ params }) {

    const product = 
        {
          id: 1,
          title: "Brown leather bag",
          description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Intern",
          url: "https://picsum.photos/id/7",
          price: 2500
        };

    return (
        <>
             <MainLayout>
                XX
            </MainLayout>
        </>
    )
}