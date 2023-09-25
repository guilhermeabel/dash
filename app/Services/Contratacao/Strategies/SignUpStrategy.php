<?php

namespace App\Services\Contratacao\Strategies;

class SignUpStrategy implements StrategyInterface {
    public function run() {
        echo "Signup completo";
    }

    public function getType() : string {
        return "signup";
    }
}
