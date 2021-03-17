<?php

namespace App\Http\Controllers;

use App\Http\Requests\ComponentRequest;
use App\Models\Component;
use Illuminate\Http\Request;

class ComponentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Component::when($request->keyword, function ($q) use ($request) {
            $q->where('name', "LIKE", "%{$request->keyword}%");
        })
            ->orderBy($request->sortField ?: 'field', $request->sortDirection ?: 'asc')
            ->paginate($request->pageSize);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ComponentRequest $request)
    {
        $component = Component::create($request->all());
        return ['message' => __('Data has been saved')];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Component  $component
     * @return \Illuminate\Http\Response
     */
    public function show(Component $component)
    {
        return $component;
    }

    public function getByName(string $name, Request $request)
    {
        $component = Component::firstOrCreate([
            'name' => $name,
            'locale' => $request->locale
        ], [
            'name' => $name,
            'locale' => $request->locale
        ]);

        return $component->load(['items', 'attachments']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Component  $component
     * @return \Illuminate\Http\Response
     */
    public function update(ComponentRequest $request, Component $component)
    {
        $component->update($request->all());
        return ['message' => __('Data has been updated')];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Component  $component
     * @return \Illuminate\Http\Response
     */
    public function destroy(Component $component)
    {
        $component->delete();
        return ['message' => __('Data has been deleted')];
    }
}
