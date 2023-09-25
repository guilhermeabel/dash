<?php

namespace App\Services\Contratacao\Strategies;

class UpgradeStrategy implements StrategyInterface {
    public function run() {
        echo "Upgrade completo";
    }

    public function getType() : string {
        return "signup";
    }
}
