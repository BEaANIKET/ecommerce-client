'use client '

import { BookPanditNavigateBtn } from "@/elements/bookPanditNavigateEl"
import CarouselEl from "@/elements/HomeEl/CarouselEl"
import { FeturedProductEl } from "@/elements/HomeEl/featuredProductEl"
import HelpChatEl from "@/elements/HomeEl/HelpChatEl"
import { HomeInfoEl } from "@/elements/HomeEl/homeInfoEl"
import { NewProductListEl } from "@/elements/HomeEl/newProductEl"
import { PromotionalBannerEl } from "@/elements/HomeEl/PromotionalBannerEl"
import ShopEl from "@/elements/HomeEl/ShopEl"
import TestimonialsPageEl from "@/elements/HomeEl/TestimonialEl"


export const Home = () => {
    return (
        <>
            <CarouselEl />
            <HomeInfoEl />
            <ShopEl/>
            <h1>Testing</h1>
            <NewProductListEl />
            <FeturedProductEl />
            <PromotionalBannerEl />
            <TestimonialsPageEl />
            {/* <HelpChatEl /> */}
            <BookPanditNavigateBtn />
        </>
    )
}