<?php

namespace App\Http\Controllers;

use App\Http\Requests\ComponentItemRequest;
use App\Models\ComponentItem;
use Illuminate\Http\Request;

class ComponentItemController extends Controller
{
    public function index(Request $request)
    {
        $data = ComponentItem::when($request->keyword, function ($q) use ($request) {
            return $q->where('content', 'LIKE', "%{$request->keyword}%");
        })->when($request->locale, function ($q) use ($request) {
                $q->locale($request->locale);
            })->when($request->componentName, function ($q) use ($request) {
                $q->whereHas('component', function ($q) use ($request) {
                    $q->where('name', $request->componentName);
                });
            });

        return $request->paginated ? $data->paginate($request->per_page) : $data->get();
    }

    public function store(ComponentItemRequest $request)
    {
        $data = ComponentItem::create($request->all());

        if ($request->attachment) {
            $data->attachments()->create($request->attachment);
        }

        if ($request->attachments) {
            $data->attachments()->createMany($request->attachments);
        }

        return ['message' => 'Data has been saved'];
    }

    public function update(ComponentItemRequest $request, ComponentItem $componentItem)
    {
        $componentItem->update($request->all());

        if ($request->attachment) {
            $componentItem->attachments()->create($request->attachment);
        }

        if ($request->attachments) {
            $componentItem->attachments()->createMany($request->attachments);
        }

        return ['message' => 'Data has been saved'];
    }

    public function destroy(ComponentItem $componentItem)
    {
        $componentItem->delete();
        $componentItem->attachments()->delete();
        // TODO: remove attachments
    }
}
