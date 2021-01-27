<?php

namespace Database\Seeders;

use App\Models\Lang;
use Illuminate\Database\Seeder;

class LangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Lang::insert([
            [
                'locale' => 'id',
                'key' => 'welcome',
                'text' => 'selamat datang'
            ],
            [
                'locale' => 'en',
                'key' => 'welcome',
                'text' => 'welome'
            ],
            [
                'locale' => 'ar',
                'key' => 'welcome',
                'text' => 'marhaban'
            ],
            [
                'locale' => 'fr',
                'key' => 'welcome',
                'text' => 'bpnjour'
            ],
        ]);
    }
}
