import React from 'react'
import Topbar from '../../components/modules/topbar/topbar';
import Navbar from '../../components/modules/navbar/navbar';
import PageHierarchy from '../../components/modules/Page-Hierarchy/page-hierarchy'
import ContactUsFormPage from '../../components/templates/contact-us-form-page/contact-us-form-page';
import Footer from '../../components/modules/footer/footer';

function ContactUs() {
  return (
    < >
      <Topbar />
      <div className='px-3 sm:!px-8 xl:!px-40'>
        <Navbar />
        <PageHierarchy
          items={[
            "خانه",
            "تماس با ما",
          ]}
        />
        <ContactUsFormPage />
        <Footer />
      </div>
    </>
  )
}

export default ContactUs;
