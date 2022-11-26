<?php

namespace App\Http\Controllers;

use App\Models\Month;
use Illuminate\Http\Request;

class MonthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$months = Post::latest()->get();

        return Inertia::render('Month/Index', ['months' => $months]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Month/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Month::create(
            $request->validated()
        );

        return Redirect::route('months.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Month  $month
     * @return \Illuminate\Http\Response
     */
    public function show(Month $month)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Month  $month
     * @return \Illuminate\Http\Response
     */
    public function edit(Month $month)
    {
        return Inertia::render('Month/Edit', [
            'month' => [
                'id' => $month->id,
                'title' => $month->title,
                'description' => $month->description
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Month  $month
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Month $month)
    {
        $month->update($request->validated());

        return Redirect::route('months.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Month  $month
     * @return \Illuminate\Http\Response
     */
    public function destroy(Month $month)
    {
		$month->delete();

        return Redirect::route('months.index');
    }
}
