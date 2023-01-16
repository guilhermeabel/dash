<?php

namespace App\Http\Controllers;

use App\Models\Entry;
use App\Models\Item;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\StoreEntryRequest;
use Inertia\Inertia;

class EntryController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $entries = Entry::latest()->get();

        return Inertia::render('Entry/Index', ['entries' => $entries]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        return Inertia::render('Entry/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEntryRequest $request) {
        Entry::create(
            $request->validated()
        );

        return Redirect::route('entries.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Entry  $entry
     * @return \Illuminate\Http\Response
     */
    public function show(Entry $entry) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Entry  $entry
     * @return \Illuminate\Http\Response
     */
    public function edit(Entry $entry) {
        $items = Item::where('entry_id', $entry->id)->get();

        return Inertia::render('Entry/Edit', [
            'entry' => [
                'id' => $entry->id,
                'month' => $entry->month,
            ],
            'items' => [...$items]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Entry  $entry
     * @return \Illuminate\Http\Response
     */
    public function update(StoreEntryRequest $request, Entry $entry) {
        $entry->update($request->validated());

        return Redirect::route('entries.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Entry  $entry
     * @return \Illuminate\Http\Response
     */
    public function destroy(Entry $entry) {
        $entry->delete();

        return Redirect::route('entries.index');
    }
}