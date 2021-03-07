<?php

namespace App\Http\Controllers;

use App\Http\Requests\LangRequest;
use App\Models\Lang;
use Illuminate\Http\Request;

class LangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Lang::when($request->keyword, function ($q) use ($request) {
            $q->where(function ($q) use ($request) {
                $q->where('key', "LIKE", "%{$request->keyword}%")
                    ->orWHere('text', "LIKE", "%{$request->keyword}%");
            });
        })->when($request->locale, function ($q) use ($request) {
            $q->where('locale', $request->locale);
        })->orderBy($request->orderField ?: 'key', $request->orderDirection ?: 'asc')
            ->paginate($request->per_page);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LangRequest $request)
    {
        Lang::create($request->all());
        return ['message' => __('Data has been saved')];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lang  $lang
     * @return \Illuminate\Http\Response
     */
    public function show(Lang $lang)
    {
        return $lang;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Lang  $lang
     * @return \Illuminate\Http\Response
     */
    public function update(LangRequest $request, Lang $lang)
    {
        $lang->update($request->all());
        return ['message' => __('Data has been updated')];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lang  $lang
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lang $lang)
    {
        $lang->delete();
        return ['message' => __('Data has been deleted')];
    }
}
