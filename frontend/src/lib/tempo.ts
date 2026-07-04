/**
 * Formata minutos trabalhados no formato falado do rodeio ("9h30", "0h45"),
 * usado no comprovante de fechamento, Histórico de Turnos e Scorecard.
 */
export function formatarDuracao(minutos: number): string {
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;
  return `${horas}h${minutosRestantes.toString().padStart(2, "0")}`;
}
