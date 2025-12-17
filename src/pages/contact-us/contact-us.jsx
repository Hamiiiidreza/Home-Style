import React from 'react'
import Navbar from '../../components/modules/navbar/navbar';
import PageHierarchy from '../../components/modules/Page-Hierarchy/page-hierarchy'
import SaleBanner from '../../components/modules/sale-banner/sale-banner';
import Footer from '../../components/modules/footer/footer';

function ContactUs() {
  return (
    <div>
      <Navbar />
      <PageHierarchy
        items={[
          "Home",
          "Contact Us",
        ]}
      />
      <div className="container flex flex-col w-full items-start gap-6 mt-10 mb-12">
        <h1
          className="w-[834px] font-PoppinsMedium text-neutral-07 text-[54px] tracking-headline-3 leading-14.5 transition-all hover:drop-shadow-custom"
        >
          We believe in sustainable decor. We're passionate about life at home.
        </h1>
        <p
          className="w-[834px] font-InterRegular text-neutral-07 text-base tracking-[0] leading-6.5 transition-all hover:drop-shadow-custom"
        >
          Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design,
          which <br /> can be incorporated into any decor project. The pieces enchant for their sobriety, to last for
          generations, <br /> faithful to the shapes of each period, with a touch of the present
        </p>
      </div>
      <SaleBanner
        withContainer
        showSaleText={false}
        title="About Us"
        description={
          <>
            3legant is a gift & decorations store based in HCMC,<br /> Vietnam. Est since 2019.<br />
            Our customer service is always prepared to support you <br /> 24/7
          </>
        }
        descriptionClass='text-base leading-6.5'
      />
      <Footer />
    </div>
  )
}

export default ContactUs;
