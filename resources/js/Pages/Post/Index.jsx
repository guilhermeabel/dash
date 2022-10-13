import React from "react";
//import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import PageWrapper from "../../Components/Wrappers";

const Index = () => {
    const { posts } = usePage().props;

    return (
           <PageWrapper	pageTitle="Posts">
                <div className="flex items-center justify-between mb-6">
                    <InertiaLink
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href={route("posts.create")}>
                        Create Post
                    </InertiaLink>
                </div>

                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full text-sm table-auto whitespace-nowrap">
                        <thead className="text-white bg-gray-600">
                            <tr className="text-left font-normal">
                                <th className="px-6 py-3">#</th>
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Description</th>
                                <th className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts?.map(({ id, title, description }) => (
                                <tr key={id} className="">
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route("posts.edit", id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {id}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route("posts.edit", id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {title}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="flex items-center px-6 py-4"
                                            href={route("posts.edit", id)}>
                                            {description}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                            href={route("posts.edit", id)}>
                                            Edit
                                        </InertiaLink>
                                    </td>
                                </tr>
                            ))}
                            {posts?.length === 0 && (
                                <tr>
                                    <td className="px-6 py-4 border-t"
                                        colSpan="4">
                                        No posts found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </PageWrapper>
        
    );
};

export default Index;
