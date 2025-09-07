import React from "react";
import BlogCard from "./blog-card";
import SectionHeader from "../../ui/section-header";

const BlogSection = () => (
    <section className="w-full py-20 bg-white">
        <div className="container">
            <SectionHeader
                title="Articles"
                linkText="More Articles"
                to=""
                mbClass="mb-10"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <BlogCard
                    image="/Images/blog-1.png"
                    title="7 ways to decor your home"
                />
                <BlogCard
                    image="/Images/blog-2.png"
                    title="Kitchen organization"
                />
                <BlogCard
                    image="/Images/blog-3.png"
                    title="Decor your bedroom"
                />
            </div>
        </div>
    </section>
);

export default BlogSection;