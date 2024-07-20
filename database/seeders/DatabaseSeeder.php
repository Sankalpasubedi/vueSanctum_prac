<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        User::create([
            'name' => 'sanka',
            'email' => 'sanka@gmail.com',
            'password' => Hash::make('123456'),
        ]);
        User::create([
            'name' => 'sankalpa',
            'email' => 'sankalpa@gmail.com',
            'password' => Hash::make('123456'),
        ]);
    }
}
