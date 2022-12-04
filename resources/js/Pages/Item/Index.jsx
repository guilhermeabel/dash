import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

export const Index = () => {
	const { items } = usePage().props;

	if (!items) {
		return <></>;
	}

	const destroy = (id) => {
		if (confirm("Are you sure you want to delete this item?")) {
			Inertia.delete(route("items.destroy", id));
		}
	}

	return <table className="min-w-full">
		<thead className="border-b">
			<tr>
				<th scope="col" className="px-2 text-sm text-gray-900 py-4 text-left">Name</th>
				<th scope="col" className="px-2 text-sm text-gray-900 py-4 text-left">Type</th>
				<th scope="col" className="px-2 text-sm text-gray-900 py-4 text-left">Value</th>
				<th scope="col" className="px-2 text-sm text-gray-900 py-4 text-left">Description</th>
				<th scope="col" className="w-2"></th>
			</tr>
		</thead>
		<tbody>
			{items?.map((item) =>
				<tr key={item.id}>
					<td className="px-2 py-4 whitespace-nowrap font-medium text-gray-900">{item.name}</td>
					<td className="px-2 py-4 whitespace-nowrap font-medium text-gray-900">{item.type}</td>
					<td className="px-2 py-4 whitespace-nowrap font-medium text-gray-900">{item.value}</td>
					<td className="px-2 py-4 whitespace-nowrap font-medium text-gray-900">{item.description}</td>
					<td className="px-2 py-4 text-right">
						<button
							onClick={() => destroy(item.id)}
							tabIndex="-1"
							type="button"
							className="px-4 py-2 text-white bg-red-500 rounded"
						>
							X
						</button>
					</td>
				</tr>)
			}
		</tbody>
	</table>
}
