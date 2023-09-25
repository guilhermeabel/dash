<?php

namespace App\Services\Contratacao;

class CupomService {
    public function obter(string $cupom, string $tipo) : CupomDTO {
        $cupomDTO = $this->obterCupom($cupom);

        $this->tipoCupomValido($cupom, $tipo);

        return $cupomDTO;
    }

    private function tipoCupomValido(CupomDTO $cupom, string $tipo) {
        if ($tipo == "ativacao") {
            if ($cupom->tipo != "ativacao") {
                throw new \Exception("Cupom não é de ativação");
            }
        }
    }
}
