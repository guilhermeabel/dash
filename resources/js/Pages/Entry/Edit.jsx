import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import { Index as ItemIndex } from "../Item/Index";
import { Create as ItemCreate } from "../Item/Create";
import { Wrapper } from "../../Components/Wrappers";
import { Container } from "../../Components/Wrappers";


const Edit = () => {
	const { entry } = usePage().props;
	const { data, setData, put, errors } = useForm({
		month: entry.month || "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		put(route("entries.update", entry.id));
	}
	const destroy = () => {
		if (confirm("Are you sure you want to delete this entry?")) {
			Inertia.delete(route("entries.destroy", entry.id));
		}
	}

	return (
		<Wrapper>
			<Container>
				{/* <div>
					<h1 className="mb-8 text-3xl font-bold">
						<InertiaLink
							href={route("entries.index")}
							className="text-indigo-600 hover:text-indigo-700"
						>
							Months
						</InertiaLink>
						<span className="font-medium text-indigo-600"> / </span>
						Edit
					</h1>
				</div> */}
				{/* <form name="createForm" onSubmit={handleSubmit}> */}
				<div className="flex flex-col">
					<div className="mb-4">
						<label className="">Month</label>
						{/* <input
								type="text"
								className="w-full px-4 py-2"
								label="Month"
								name="month"
								value={data.month}
								onChange={(e) =>
									setData("month", e.target.value)
								}
							/>
							<span className="text-red-600">
								{errors.month}
							</span> */}
						<p className="font-bold">{data.month}</p>
					</div>
				</div>
				<div className="flex justify-between mt-4 mb-5">
					<ItemIndex />
				</div>
				<div className="flex justify-between mt-4 mb-5">
					<ItemCreate />
				</div>
				<div className="flex justify-end">
					{/* <button
							type="submit"
							className="px-4 py-2 text-white bg-green-500 rounded"
						>
							Update
						</button> */}
					{/* <button
							onClick={destroy}
							tabIndex="-1"
							type="button"
							className="px-4 py-2 text-white bg-red-500 rounded"
						>
							Delete
						</button> */}
				</div>
				{/* </form> */}
			</Container>
		</Wrapper>
	);
};

export default Edit;
