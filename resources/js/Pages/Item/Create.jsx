import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

export const Create = ({ entryId }) => {
	const { entry } = usePage().props;

	const { data, setData, errors, post } = useForm({
		entry_id: entry.id,
		name: "",
		type: "",
		value: "",
		description: "",
	});

	function handleSubmit(e) {
		e.preventDefault();
		post(route("items.store"));
	}

	return (
		<form name="createForm" onSubmit={handleSubmit}>
			<div className="flex flex-row gap-3">
				<div className="mb-4">
					<label className="">Name</label>
					<input
						type="text"
						className="w-full px-4 py-2"
						label="Name"
						name="name"
						value={data.name}
						onChange={(e) =>
							setData("name", e.target.value)
						}
					/>
					<span className="text-red-600">
						{errors.name}
					</span>
				</div>
				<div className="mb-4">
					<label className="">Type</label>
					<input
						type="text"
						className="w-full px-4 py-2"
						label="Type"
						name="type"
						value={data.type}
						onChange={(e) =>
							setData("type", e.target.value)
						}
					/>
					<span className="text-red-600">
						{errors.type}
					</span>
				</div>
				<div className="mb-4">
					<label className="">Value</label>
					<input
						type="text"
						className="w-full px-4 py-2"
						label="Value"
						name="value"
						value={data.value}
						onChange={(e) =>
							setData("value", e.target.value)
						}
					/>
					<span className="text-red-600">
						{errors.value}
					</span>
				</div>
				<div className="mb-4">
					<label className="">Description</label>
					<input
						type="text"
						className="w-full px-4 py-2"
						label="Description"
						name="description"
						value={data.description}
						onChange={(e) =>
							setData("description", e.target.value)
						}
					/>
					<span className="text-red-600">
						{errors.description}
					</span>
				</div>
			</div>
			<div className="mt-4">
				<button
					type="submit"
					className="px-6 py-2 font-bold text-white bg-green-500 rounded"
				>
					Add Item
				</button>
			</div>
		</form>
	);

}
