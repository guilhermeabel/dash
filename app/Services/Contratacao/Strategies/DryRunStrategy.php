<?php

namespace App\Services\Contratacao\Strategies;

class DryRunStrategy implements StrategyInterface {
    public function run() {
        return;
    }

    public function getType() : string {
        return "signup";
    }
}
