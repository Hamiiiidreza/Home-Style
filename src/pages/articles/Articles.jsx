import React from 'react'
import Navbar from '../../components/modules/navbar/navbar';
import Header from '../../components/templates/header/header';
import Breadcrumb from '../../components/modules/breadcrumb/breadcrumb';
import FilterAndSortpanel from '../../components/ui/filter-and-sortpanel';
import BlogSection from '../../components/modules/blog-section/blog-section';
import Newsletter from '../../components/modules/news-letter/news-letter';
import Footer from '../../components/modules/footer/footer';

function Articles() {
    return (
        <div className='relative'>
            <Navbar />
            <Header
                singleImage="/Images/img-placeholder-4.png"
                isSlidable={false}
                withGradient={false}
            >ّ
                <Breadcrumb
                    title="Blog"
                    name="Our Blog"
                    desc="Home ideas and design inspiration"
                />
            </Header>
            <div className="mt-6">
                <FilterAndSortpanel
                    mode='blog'
                    defaultActiveButton={1}
                />
            </div>
            <BlogSection
                showHeader={false}
                count={9} />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Articles;
