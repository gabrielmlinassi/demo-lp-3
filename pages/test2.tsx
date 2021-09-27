import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card } from "@/landing-page/MoreReasons";

export default function Test2() {
  return (
    <div className="bg-green-300 pl-8">
      <Swiper
        spaceBetween={-50}
        slidesPerView={1.25}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="mx-auto py-8">
          <Card
            description={
              <>
                Why is the SweetRush logo a heart?{" "}
                <span className="text-[#594697]">Because we care!</span>
              </>
            }
            backDescription={
              <>
                We live in a complicated world in the best of times, and now we
                all share added layers of uncertainty and stress. We feel it and
                we know you do. Since the day we opened in 2001, we’ve focused
                on caring and empathy. Now more than ever, all of us need to be
                united and take care of each other, and you can always count on
                us to act accordingly.
              </>
            }
            color="victoria"
          />
        </SwiperSlide>
        <SwiperSlide className="mx-auto py-8">
          <Card
            description={
              <>
                Why is the SweetRush logo a heart?{" "}
                <span className="text-[#594697]">Because we care!</span>
              </>
            }
            backDescription={
              <>
                We live in a complicated world in the best of times, and now we
                all share added layers of uncertainty and stress. We feel it and
                we know you do. Since the day we opened in 2001, we’ve focused
                on caring and empathy. Now more than ever, all of us need to be
                united and take care of each other, and you can always count on
                us to act accordingly.
              </>
            }
            color="victoria"
          />
        </SwiperSlide>
        <SwiperSlide className="mx-auto py-8">
          <Card
            description={
              <>
                Why is the SweetRush logo a heart?{" "}
                <span className="text-[#594697]">Because we care!</span>
              </>
            }
            backDescription={
              <>
                We live in a complicated world in the best of times, and now we
                all share added layers of uncertainty and stress. We feel it and
                we know you do. Since the day we opened in 2001, we’ve focused
                on caring and empathy. Now more than ever, all of us need to be
                united and take care of each other, and you can always count on
                us to act accordingly.
              </>
            }
            color="victoria"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
