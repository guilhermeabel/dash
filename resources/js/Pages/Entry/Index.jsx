import React from "react";
//import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { PageWrapper } from "../../Components/Wrappers";

const Index = () => {
	const { entries } = usePage().props;

	return (
		<PageWrapper pageTitle="Entries">
			<div className="flex items-center justify-between mb-6">
				<InertiaLink
					className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
					href={route("entries.create")}>
					Create Entry
				</InertiaLink>
			</div>

			<div className="overflow-x-auto bg-white rounded shadow">
				<table className="w-full text-sm table-auto whitespace-nowrap">
					<thead className="text-white bg-gray-600">
						<tr className="text-left font-normal">
							<th className="px-6 py-3">#</th>
							<th className="px-6 py-3">Month</th>
							<th className="px-6 py-3">Action</th>
						</tr>
					</thead>
					<tbody>
						{entries?.map(({ id, month }) => (
							<tr key={id} className="">
								<td className="border-t">
									<InertiaLink
										href={route("entries.edit", id)}
										className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
										{id}
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										href={route("entries.edit", id)}
										className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
										{month}
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="1"
										className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
										href={route("entries.edit", id)}>
										Edit
									</InertiaLink>
								</td>
							</tr>
						))}
						{entries?.length === 0 && (
							<tr>
								<td className="px-6 py-4 border-t"
									colSpan="4">
									No entries found.
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
