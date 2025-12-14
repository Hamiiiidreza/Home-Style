import React from 'react'
import Navbar from '../../components/modules/navbar/navbar';
import ArticlesSample from '../../components/templates/articles-details/articles-sample';
import PageHierarchy from '../../components/modules/Page-Hierarchy/page-hierarchy'
import Newsletter from '../../components/modules/news-letter/news-letter';
import Footer from '../../components/modules/footer/footer';

function ArticlesDetails() {


    return (
        <div>
            <Navbar />
            <PageHierarchy
                items={[
                    "Home",
                    "Blog",
                    "How to make a busy bathroom a place to relax",
                ]}
            />
            <ArticlesSample />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ArticlesDetails;
