import React from "react";
import BlogSection from "../../modules/blog-section/blog-section";

function ArticlesSample() {
  return (
    <>
      <div className="container w-full overflow-x-hidden">
        <div className="mx-auto flex flex-col gap-14 pt-4 pb-20 bg-white px-4">
          <div className="flex flex-col w-full gap-6 mt-6">
            <span className="font-InterBold text-xs text-black">
              ARTICLE
            </span>
            <h1
              className="font-PoppinsMedium w-full max-w-[834px]
            text-[28px] md:text-[36px] lg:text-[44px] xl:text-[54px]
            text-neutral-07 leading-tight xl:leading-14.5
             tracking-headline-6 xl:tracking-headline-3
              transition-all hover:drop-shadow-custom"
            >
              How to make a busy bathroom a place to relax
            </h1>

            <div className="flex flex-wrap items-center gap-6">

              <div className="flex items-center gap-2 transition-all hover:drop-shadow-custom">
                <img className="size-6" src="/Images/User.svg" alt="user" />
                <span className="font-InterRegular text-base text-neutral-04">
                  Henrik Annemark
                </span>
              </div>

              <div className="flex items-center gap-2 transition-all hover:drop-shadow-custom">
                <img className="w-6 h-6" src="/Images/calendar.svg" alt="calendar" />
                <time className="font-InterRegular text-base text-neutral-04">
                  October 16, 2023
                </time>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full">

            <img
              className="w-full max-w-full h-auto object-cover transition-all hover:drop-shadow-custom"
              src="/Images/img-placeholder-3.png"
              alt="Modern bathroom"
            />

            <div className="flex flex-col gap-3 w-full max-w-[1100px]">

              <p className="font-InterRegular text-base leading-7 text-black transition-all hover:drop-shadow-custom">
                Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation.
              </p>

              <h2 className="font-PoppinsMedium text-[24px] md:text-[28px] transition-all hover:drop-shadow-custom">
                A cleaning hub with built-in ventilation
              </h2>

              <p className="font-InterRegular text-base leading-7 text-black transition-all hover:drop-shadow-custom">
                Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.
              </p>
            </div>
          </div>

          {/* ================================================= */}
          {/* ========== Two Images Section (Desktop) ========== */}
          {/* ================================================= */}

          {/* ✅ Desktop Version */}
          <div className="hidden md:flex flex-col gap-10 w-full">

            {/* Images side by side */}
            <div className="flex gap-6 w-full">

              <img
                className="w-1/2 h-auto object-cover transition-all hover:drop-shadow-custom"
                src="/Images/articles-details-1.svg"
                alt="Bathroom storage"
              />

              <img
                className="w-1/2 h-auto object-cover transition-all hover:drop-shadow-custom"
                src="/Images/articles-details-2.svg"
                alt="Bathroom shelving"
              />
            </div>

            <div className="flex flex-col gap-4 w-full">

              <h2 className="font-PoppinsMedium text-[28px] text-black transition-all hover:drop-shadow-custom">
                Storage with a calming effect
              </h2>

              <p className="font-InterRegular text-base leading-7 text-black transition-all hover:drop-shadow-custom">
                Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).
              </p>

              <h2 className="font-PoppinsMedium text-[28px] text-black transition-all hover:drop-shadow-custom">
                Kit your clutter for easy access
              </h2>

              <p className="font-InterRegular text-base leading-7 text-black transition-all hover:drop-shadow-custom">
                Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.
              </p>
            </div>
          </div>

          {/* ================================================= */}
          {/* ========== Two Images Section (Mobile) ========== */}
          {/* ================================================= */}

          {/* ✅ Mobile Version */}
          <div className="flex flex-col gap-10 md:hidden w-full">

            {/* Image 1 + Text */}
            <div className="flex flex-col gap-4">
              <img
                className="w-full h-auto object-cover"
                src="/Images/articles-details-1.svg"
                alt="Bathroom storage"
              />

              <h2 className="font-PoppinsMedium text-[24px]">
                Storage with a calming effect
              </h2>

              <p className="font-InterRegular text-base leading-7 text-black">
                Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).
              </p>
            </div>

            {/* Image 2 + Text */}
            <div className="flex flex-col gap-4">
              <img
                className="w-full h-auto object-cover"
                src="/Images/articles-details-2.svg"
                alt="Bathroom shelving"
              />

              <h2 className="font-PoppinsMedium text-[24px]">
                Kit your clutter for easy access
              </h2>

              <p className="font-InterRegular text-base leading-7 text-black">
                Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.
              </p>
            </div>
          </div>

          {/* ================================================= */}
          {/* ========== Third Image Section (Responsive) ====== */}
          {/* ================================================= */}

          <div className="flex flex-col md:flex-row gap-6 w-full">

            {/* Image always first */}
            <img
              className="w-full md:w-1/2 h-auto object-cover transition-all hover:drop-shadow-custom"
              src="/Images/articles-details-3.svg"
              alt="Towel organization"
            />

            {/* Text always under image in mobile */}
            <div className="flex flex-col gap-3 w-full md:w-1/2">

              <h2 className="font-PoppinsMedium text-[24px] md:text-[28px]">
                An ecosystem of towels
              </h2>

              <p className="font-InterRegular text-base leading-7 text-black">
                Racks or hooks that allow air to circulate around each towel prolong their freshness. They dry quick and the need for frequent washing is minimized.
              </p>

              <h2 className="font-PoppinsMedium text-[24px] md:text-[28px]">
                Make your mop disappear
              </h2>

              <p className="font-InterRegular text-base leading-7 text-black">
                Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BlogSection
        showHeader={true}
        headerTitle="You might also like"
        count={3}
        showFullCards={true}
      />
    </>
  );
}

export default ArticlesSample;
