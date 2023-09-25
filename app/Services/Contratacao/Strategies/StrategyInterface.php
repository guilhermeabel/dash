<?php

namespace App\Services\Contratacao\Strategies;

interface StrategyInterface {
    public function run();

    public function getType() : string;
} 
