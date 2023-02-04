import { ApontamentoModulo } from "./apontamento-modulo.model"

export class Apontamento {
  id?: string
  modulo?: ApontamentoModulo
  data?: Date
  horas?: number
  minutos?: number
  descricao?: string
}
