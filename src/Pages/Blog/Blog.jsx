import React from 'react';
import b1 from '../../assets/b1.jpg'

const Blog = () => {
    return (
        <div className="">
            <main className="flex flex-col md:flex-row gap-5  p-8">
                <section className=" ">
                    <img className='w-full h-96 object-cover mb-5 rounded-md' src={b1} alt="" />
                    <article className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">Understanding Hypertension</h2>
                        <p className="mb-2">Hypertension, also known as high blood pressure, is a common condition that affects the body's arteries...</p>
                        <p className="text-gray-600 mb-4"><em>Published on July 20, 2024</em></p>
                        <a href="/blog/understanding-hypertension" className="text-blue-600 hover:underline">Read More</a>
                    </article>
                    <img className='w-full h-96 object-cover mb-5 rounded-md' src={b1} alt="" />
                    <article className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">Managing Diabetes Effectively</h2>
                        <p className="mb-2">Diabetes management involves keeping blood sugar levels as close to normal as possible...</p>
                        <p className="text-gray-600 mb-4"><em>Published on July 15, 2024</em></p>
                        <a href="/blog/managing-diabetes" className="text-blue-600 hover:underline">Read More</a>
                    </article>
                </section>
                <aside className=" ">
                    <section className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                        <ul>
                            <li className="mb-2"><a href="/blog/understanding-hypertension" className="text-blue-600 hover:underline">Understanding Hypertension</a></li>
                            <li className="mb-2"><a href="/blog/managing-diabetes" className="text-blue-600 hover:underline">Managing Diabetes Effectively</a></li>
                        </ul>
                    </section>
                    <section className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Categories</h3>
                        <ul>
                            <li className="mb-2"><a href="/category/cardiology" className="text-blue-600 hover:underline">Cardiology</a></li>
                            <li className="mb-2"><a href="/category/endocrinology" className="text-blue-600 hover:underline">Endocrinology</a></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold mb-4">Tags</h3>
                        <div className="flex flex-wrap">
                            <a href="/tag/hypertension" className="bg-gray-200 text-gray-700 p-2 rounded mr-2 mb-2">Hypertension</a>
                            <a href="/tag/diabetes" className="bg-gray-200 text-gray-700 p-2 rounded mr-2 mb-2">Diabetes</a>
                            <a href="/tag/heart-health" className="bg-gray-200 text-gray-700 p-2 rounded mr-2 mb-2">Heart Health</a>
                        </div>
                    </section>
                </aside>
            </main>
        </div>
    );
};

export default Blog;
