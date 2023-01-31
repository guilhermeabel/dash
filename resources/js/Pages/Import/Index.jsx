import { React, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import { PageWrapper } from "../../Components/Wrappers";

const Index = () => {
	const { imports } = usePage().props;
	const [searchValue, setSearchValue] = useState('');

	if (!imports) {
		return <></>;
	}

	const filterItem = (item) => {
		return item.title.toLowerCase().includes(searchValue.toLowerCase())
			|| item.category.toLowerCase().includes(searchValue.toLowerCase())
			|| item.date.toLowerCase().includes(searchValue.toLowerCase());
	}

	const filteredImports = imports.filter(item => filterItem(item));

	return (
		<PageWrapper pageTitle="Imports">
			{/* <div className="flex items-center justify-between mb-6">
				<InertiaLink
					className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
					href={route("imports.create")}>
					Create Entry
				</InertiaLink>
			</div> */}

			<div className="flex items-center justify-between mb-6">
				<input
					className="px-6 py-2 rounded-md focus:outline-none"
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					placeholder="Search"
				/>
			</div>

			<div className="overflow-x-auto bg-white rounded shadow mb-5">
				<table className="w-full min-w-full text-sm table-auto whitespace-nowrap">
					<thead className="text-white bg-gray-600">
						<tr className="text-left font-normal">
							<th className="px-6 py-3 text-center">#</th>
							<th className="px-6 py-3 text-center">Date</th>
							<th className="px-6 py-3 text-center">Category</th>
							<th className="px-6 py-3 text-center">Title</th>
							<th className="px-6 py-3 text-center">Amount</th>
						</tr>
					</thead>
					<tbody>
						{filteredImports?.map((item) => (
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
