import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import { PageWrapper } from "../../Components/Wrappers";

const Index = () => {
	const { imports } = usePage().props;

	if (!imports) {
		return <></>;
	}

	const destroy = (id) => {
		if (confirm("Are you sure you want to delete this item?")) {
			Inertia.delete(route("imports.destroy", id));
		}
	}

	return (
		<PageWrapper pageTitle="Imports">
			{/* <div className="flex items-center justify-between mb-6">
				<InertiaLink
					className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
					href={route("imports.create")}>
					Create Entry
				</InertiaLink>
			</div> */}

			<div className="overflow-x-auto bg-white rounded shadow mb-5">
				<table className="w-full text-sm table-auto whitespace-nowrap">
					<thead className="text-white bg-gray-600">
						<tr className="text-left font-normal">
							<th className="px-6 py-3">#</th>
							<th className="px-6 py-3">Date</th>
							<th className="px-6 py-3">Category</th>
							<th className="px-6 py-3">Title</th>
							<th className="px-6 py-3">Amount</th>
						</tr>
					</thead>
					<tbody>
						{imports?.map((item) => (
							<tr key={item.id} className="">
								<td className="border-t">
									<p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">{item.id}</p>
								</td>
								<td className="border-t">
									<p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">{item.date}</p>
								</td>
								<td className="border-t">
									<p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">{item.category}</p>
								</td>
								<td className="border-t">
									<p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">{item.title}</p>
								</td>
								<td className="border-t">
									<p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">{item.amount}</p>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</PageWrapper>

	);
}

export default Index;
