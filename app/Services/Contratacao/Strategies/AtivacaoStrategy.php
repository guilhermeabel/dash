<?php

namespace App\Services\Contratacao\Strategies;

class AtivacaoStrategy implements StrategyInterface {
    public function run() {
        echo "Contrato Ativado";
    }

    public function getType() : string {
        return "signup";
    }
}
