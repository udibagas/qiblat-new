<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class MakeMaster extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:master {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Make master command';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $name = $this->argument('name');

        Artisan::call("make:model {$name} -r --api -m -f --force");
        Artisan::call("make:request {$name}Request");
    }
}
