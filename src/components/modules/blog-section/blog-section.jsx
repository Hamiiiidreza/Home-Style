import React from "react";
import BlogCard from "./blog-card";
import SectionHeader from "../../ui/section-header";
import ButtonCard from "../../ui/button-card";

const BlogSection = ({
    showHeader = true,
    headerTitle = "Articles",
    count = 3,
    showFullCards = false,
}) => {

    const blogs = [
        {
            id: 1,
            image: "/Images/blog-1.png",
            title: "7 ways to decor your home",
            fullTitle: "7 ways to decor your home like a professional",
            date: "October 12, 2023"
        },
        {
            id: 2,
            image: "/Images/blog-2.png",
            title: "Kitchen organization",
            fullTitle: "Inside a beautiful kitchen organization",
            date: "October 14, 2023"
        },
        {
            id: 3,
            image: "/Images/blog-3.png",
            title: "Decor your bedroom",
            fullTitle: "Decor your bedroom for your children",
            date: "October 16, 2023"
        },
        {
            id: 4,
            image: "/Images/blog-4.png",
            title: "Modern texas home",
            fullTitle: "Modern texas home is beautiful and completely kid-friendly",
            date: "October 18, 2023"
        },
        {
            id: 5,
            image: "/Images/blog-5.png",
            title: "Modern texas home",
            fullTitle: "Modern texas home is beautiful and completely kid-friendly",
            date: "October 20, 2023"
        },
        {
            id: 6,
            image: "/Images/blog-6.png",
            title: "Modern texas home",
            fullTitle: "Modern texas home is beautiful and completely kid-friendly",
            date: "October 21, 2023"
        },
        {
            id: 7,
            image: "/Images/blog-7.png",
            title: "Modern texas home",
            fullTitle: "Modern texas home is beautiful and completely kid-friendly",
            date: "October 22, 2023"
        },
        {
            id: 8,
            image: "/Images/blog-8.png",
            title: "Modern texas home",
            fullTitle: "Modern texas home is beautiful and completely kid-friendly",
            date: "October 25, 2023"
        },
        {
            id: 9,
            image: "/Images/blog-9.png",
            title: "Modern texas home",
            fullTitle: "Modern texas home is beautiful and completely kid-friendly",
            date: "October 28, 2023"
        },
    ];

    return (
        <section className="w-full pt-10 pb-20 bg-white">
            <div className="container">

                {showHeader && (
                    <SectionHeader
                        title={headerTitle}
                        linkText="More Articles"
                        to="/articles"
                        mbClass="mb-10"
                    />
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[25px] gap-y-[40px]">
                    {blogs.slice(0, count).map((blog) => (
                        <BlogCard
                            key={blog.id}
                            {...blog}
                            showFull={showFullCards}
                        />
                    ))}
                </div>
                {count === 9 && (
                    <div className="w-full flex justify-center mt-20">
                        <ButtonCard
                            title="Show More"
                            onClick={() => console.log("Show more clicked")}
                            className="font-InterMedium text-neutral-07 text-base text-center leading-7 tracking-button-s whitespace-nowrap box-border inline-flex items-center justify-center gap-2 px-10 py-1.5 rounded-full border border-neutral-07 cursor-pointer transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;