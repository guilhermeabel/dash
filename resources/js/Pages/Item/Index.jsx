import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

export const Index = ({ entryId }) => {
	const { items } = usePage().props;

	if (!items) {
		return <></>;
	}

	return <table className="min-w-full">
		<thead className="border-b">
			<tr>
				<th scope="col" className="px-2 text-sm text-gray-900 py-4 text-left">Name</th>
				<th scope="col" className="px-2 text-sm text-gray-900 py-4 text-left">Type</th>
				<th scope="col" className="px-2 text-sm text-gray-900 py-4 text-left">Value</th>
				<th scope="col" className="px-2 text-sm text-gray-900 py-4 text-left">Description</th>
			</tr>
		</thead>
		<tbody>
			{items.map((item, i) =>
				<tr key={i}>
					<td className="px-2 py-4 whitespace-nowrap font-medium text-gray-900">{item.name}</td>
					<td className="px-2 py-4 whitespace-nowrap font-medium text-gray-900">{item.type}</td>
					<td className="px-2 py-4 whitespace-nowrap font-medium text-gray-900">{item.value}</td>
					<td className="px-2 py-4 whitespace-nowrap font-medium text-gray-900">{item.description}</td>
				</tr>)
			}
		</tbody>
	</table>
}
