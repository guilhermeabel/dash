<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\StoreItemRequest;
use Inertia\Inertia;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Item::latest()->get();

        return Inertia::render('Item/Index', ['items' => $items]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
		return Inertia::render('Item/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreItemRequest $request)
    {
		$item = new Item;
        $item->body = $request->get('item_body');
        $item->user()->associate($request->user());
        $entry = Entry::find($request->get('entry_id'));
        $entry->items()->save($item);

        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function show(Item $item)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function edit(Item $item)
    {
		return Inertia::render('Item/Edit', [
            'item' => [
                'id' => $item->id,
                'month' => $item->month,
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(StoreItemRequest $request, Item $item)
    {
		$item->update($request->validated());

        return Redirect::route('items.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
		$item->delete();

        return Redirect::route('items.index');
    }
}
