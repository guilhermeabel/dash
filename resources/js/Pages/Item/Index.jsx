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

	return <table className="table min-w-full">
		<thead className="border-b">
			<tr>
				<th className="px-2 text-sm text-gray-900 py-4 text-left">Name</th>
				<th className="px-2 text-sm text-gray-900 py-4 text-left">Type</th>
				<th className="px-2 text-sm text-gray-900 py-4 text-left">Value</th>
				<th className="px-2 text-sm text-gray-900 py-4 text-left">Description</th>
				<th className="w-2"></th>
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
							className="delete"
						>
							<i className="fa-solid fa-xmark"></i>
						</button>
					</td>
				</tr>)
			}
		</tbody>
	</table>
}
