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
                    "خانه",
                    "بلاگ",
                    "چگونه یک سرویس بهداشتی شلوغ را به فضایی آرامش‌بخش تبدیل کنیم",
                ]}
            />
            <ArticlesSample />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ArticlesDetails;
