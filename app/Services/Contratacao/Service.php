<?php

namespace App\Services\Contratacao;

use App\Services\Contratacao\Strategies\StrategyInterface;

class ContratacaoService {
    protected StrategyInterface $strategy;

    protected string $cupom;
    protected PlanoEnitity $plano;
    protected ContratoEntity $contratoBase;
    protected Periodicidade $periodicidade;

    public function __construct(StrategyInterface $strategy) {
        $this->strategy = $strategy;
    }

    private function calcularValorPlano() : float {
        return 0;
    }

    public function setCupom(string $cupom) : self {
        $this->cupom = $cupom;
        return $this;
    }

    public function setPlano() {
    }

    public function setContratoBase() {
    }

    public function setPeriodicidade() {
    }

    public function setExtensoes() {
    }

    public function run() {
        $valorPlano = $this->calcularValorPlano();

        if ($this->cupom !== null) {
            $this->configurarCupom();
        }

        $geraCobranca = true;
        $mudouPlano = true;
        $downgrade = false;

        $contrato = $this->strategy->run();

        if ($geraCobranca) {
            $valorCobranca = $valorPlano - $valorDesconto;
            $this->gerarCobranca($valorCobranca);
        }

        configurarExtensoes();

        configurarModulos();

        notificarUsuario();
    }

    private function gerarCobranca(float $valor) {
        $cobrancaService = new CobrancaService();
        $cobrancaService->gerarCobranca($valor);
    }

    private function configurarCupom() : float {
        $valorDesconto = 0;

        $cupomService = new CupomService();

        $tipo = $this->strategy->getName();
        $cupomService->obter($cupom, $tipo);

        if ($this->periodicidade == Periodicidade::MENSAL) {
            gerarValoresAdicionaisContrato();
            $valorDesconto = $descontoPrimeiroMes;
        }

        if ($this->periodicidade == Periodicidade::ANUAL) {
            $valorDesconto = calcularTotalDescontoCupom();
        }

        return $valorDesconto;
    }
}
