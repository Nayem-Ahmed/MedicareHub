import React from 'react';
import b1 from '../../assets/b1.jpg';

const Blog = () => {
    return (
        <div className="bg-gray-100 min-h-screen ">
            <main className="flex flex-col md:flex-row gap-8 p-8">
                <section className="flex-1">
                    <div className="bg-white shadow-md rounded-lg mb-8">
                        <img className='w-full h-96 object-cover rounded-t-lg' src={b1} alt="Hypertension" />
                        <div className="p-6">
                            <h2 className="text-3xl font-semibold mb-3">Understanding Hypertension</h2>
                            <p className="text-[#130f40] mb-4">Hypertension, also known as high blood pressure, is a common condition that affects the body's arteries...</p>
                            <p className="text-gray-500 mb-4"><em>Published on July 20, 2024</em></p>
                            <a href="" className="text-[#12CBC4] hover:text-teal-600">Read More</a>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg mb-8">
                        <img className='w-full h-96 object-cover rounded-t-lg' src={b1} alt="Diabetes Management" />
                        <div className="p-6">
                            <h2 className="text-3xl font-semibold mb-3">Managing Diabetes Effectively</h2>
                            <p className="text-gray-700 mb-4">Diabetes management involves keeping blood sugar levels as close to normal as possible...</p>
                            <p className="text-[#525252] mb-4"><em>Published on July 15, 2024</em></p>
                            <a href="" className="text-[#12CBC4] hover:text-teal-600">Read More</a>
                        </div>
                    </div>
                </section>
                <aside className="w-full md:w-1/3">
                    <div className="bg-white shadow-md rounded-lg mb-8 p-6">
                        <h3 className="text-[#130f40] text-2xl font-semibold mb-4">Recent Posts</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-2"><a href="" className="text-[#12CBC4] hover:text-teal-600">Understanding Hypertension</a></li>
                            <li className="mb-2"><a href="" className="text-[#12CBC4] hover:text-teal-600">Managing Diabetes Effectively</a></li>
                        </ul>
                    </div>
                    <div className="bg-white shadow-md rounded-lg mb-8 p-6">
                        <h3 className="text-[#130f40] text-2xl font-semibold mb-4">Categories</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-2"><a href="" className="text-[#12CBC4] hover:text-teal-600">Cardiology</a></li>
                            <li className="mb-2"><a href="" className="text-[#12CBC4] hover:text-teal-600">Endocrinology</a></li>
                        </ul>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-[#130f40] text-2xl font-semibold mb-4">Tags</h3>
                        <div className="flex flex-wrap">
                            <a href="" className="bg-[#12CBC4] text-white  p-2 rounded mr-2 mb-2 hover:bg-teal-300">Hypertension</a>
                            <a href="" className="bg-[#12CBC4] text-white  p-2 rounded mr-2 mb-2 hover:bg-teal-300">Diabetes</a>
                            <a href="" className="bg-[#12CBC4] text-white  p-2 rounded mr-2 mb-2 hover:bg-teal-300">Heart Health</a>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default Blog;
