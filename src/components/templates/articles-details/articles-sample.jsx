import React from 'react'

function ArticlesSample() {
  return (
    <div>
      <div className="container inline-flex flex-col items-start gap-10 pt-4 pb-20 bg-white">
        <div className="inline-flex flex-col items-start gap-14">
          <div className="flex flex-col w-full items-start gap-6 mt-6">
            <span
              className="font-InterBold w-fit text-xs text-black tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
            >
              ARTICLE
            </span>
            <h1
              className="font-PoppinsMedium w-[834px] text-[54px] text-neutral-07 tracking-headline-3 leading-14.5 transition-all hover:drop-shadow-custom"
            >
              How to make a busy bathroom a place to relax
            </h1>
            <div className="inline-flex items-start gap-12">
              <div className="inline-flex items-center gap-1">
                <img
                  className="size-6 transition-all hover:drop-shadow-custom"
                  src="/Images/User.svg"
                  alt="user"
                />
                <span
                  className="font-InterRegular w-fit text-base text-neutral-04 tracking-[0] leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                >
                  Henrik Annemark
                </span>
              </div>
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <img
                  className="size-6 transition-all hover:drop-shadow-custom"
                  src="/Images/calendar.svg"
                  alt=""
                />
                <time
                  datetime="2023-10-16"
                  className="font-InterRegular w-fit text-base text-neutral-04 tracking-[0] leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                >
                  October 16, 2023
                </time>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-10">
            <div className="inline-flex flex-col items-start gap-10">
              <img
                className="relative w-[1102px] h-[646.92px] transition-all hover:drop-shadow-custom"
                src="/Images/img-placeholder-3.png"
                alt="Modern bathroom with white bathtub and natural light"
              />
              <div className="w-[1102px] h-[154px] flex flex-col items-start gap-2">
                <p
                  className="self-stretch font-InterRegular text-base text-black leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom"
                >
                  Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them
                  work, and still have room for comfort and relaxation.
                </p>
                <h2
                  className="self-stretch font-PoppinsMedium text-base text-[28px] text-black tracking-headline-6 leading-8.5 transition-all hover:drop-shadow-custom"
                >
                  A cleaning hub with built-in ventilation
                </h2>
                <p
                  className="self-stretch font-InterRegular text-black text-base leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom"
                >
                  Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly
                  equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.
                </p>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-10 w-[1102px] overflow-hidden">
              <div className="inline-flex items-start gap-6">
                <img
                  className="w-[548px] h-[729px] transition-all hover:drop-shadow-custom"
                  src="/Images/articles-details-1.svg"
                  alt="Bathroom storage solution with plants"
                />
                <img
                  className="w-[548px] h-[729px] transition-all hover:drop-shadow-custom"
                  src="/Images/articles-details-2.svg"
                  alt="Organized bathroom shelving with decorative items"
                />
              </div>
              <div className="w-[1102px] h-[196px] flex flex-col items-start gap-2">
                <h2
                  className="self-stretch font-PoppinsMedium text-black text-[28px] leading-8.5 tracking-headline-6 transition-all hover:drop-shadow-custom"
                >
                  Storage with a calming effect
                </h2>
                <p
                  className="self-stretch font-InterRegular tetx-base text-black leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom"
                >
                  Having a lot to store doesn't mean it all has to go in a cupboard. Many bathroom items are better
                  kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to
                  set a calm mood for the entire room (and they'll thrive in the humid air).
                </p>
                <h2
                  className="self-stretch font-PoppinsMedium text-black text-[28px] leading-8.5 tracking-headline-6 transition-all hover:drop-shadow-custom"
                >
                  Kit your clutter for easy access
                </h2>
                <p
                  className="self-stretch font-InterRegular tetx-base text-black leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom"
                >
                  Even if you have a cabinet ready to swallow the clutter, it's worth resisting a little. Let
                  containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out
                  or put back at a moment's notice.
                </p>
              </div>
            </div>
            <div className="inline-flex items-start gap-6">
              <img
                className="w-[548px] h-[729px] transition-all hover:drop-shadow-custom"
                src="/Images/articles-details-3.svg"
                alt="Towel organization system in bathroom"
              />
              <div className="w-[547.99px] h-[248px] flex flex-col items-start gap-2">
                <h2
                  className="self-stretch font-PoppinsMedium text-black text-[28px] leading-8.5 tracking-headline-6 transition-all hover:drop-shadow-custom"
                >
                  An ecosystem of towels
                </h2>
                <p
                  className="self-stretch font-InterRegular tetx-base text-black leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom"
                >
                  Racks or hooks that allow air to circulate around each towel prolong their freshness. They dry
                  quick and the need for frequent washing is minimized.
                </p>
                <h2
                  className="self-stretch font-PoppinsMedium text-black text-[28px] leading-8.5 tracking-headline-6 transition-all hover:drop-shadow-custom"
                >
                  Make your mop disappear
                </h2>
                <p
                  className="self-stretch font-InterRegular tetx-base text-black leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom"
                >
                  Having your cleaning tools organized makes them easier to both use and return to. When they're not
                  needed, close the curtain and feel the peace of mind it brings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlesSample;
