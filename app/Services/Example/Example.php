<?

use App\Services\Contratacao\ContratacaoService;
use App\Services\Contratacao\Strategies\AtivacaoStrategy;

$cupom = "Amazon";
$planoEntity = new PlanoEnitity();
$contratoEntity = new ContratoEntity();
$extensoes = [];

$contratacao = new ContratacaoService(new AtivacaoStrategy());

$contratacao->setCupom($cupom);
$contratacao->setPlano($planoEntity);
$contratacao->setContratoBase($contratoEntity);
$contratacao->setPeriodicidade($periodicidadeDef);
$contratacao->setExtensoes($extensoes);

$contratacao->run();
