import fs from "fs";

const pathOfComplexInput = "./complexInput.txt";

export async function carregarArquivo() {
  try {
    const dados = await fs.promises.readFile(pathOfComplexInput, "utf-8");
    return dados;
  } catch (erro) {
    console.error("Erro ao carregar o arquivo:", erro);
    throw erro;
  }
}

async function loadAndBringComplexInput() {
  try {
    const conteudo = await carregarArquivo();
    const resultado = processContent(conteudo);

    return resultado;
  } catch (erro) {
    console.error("Erro ao carregar o arquivo ou processar:", erro);
    throw erro;
  }
}

function processContent(conteudo) {
  return conteudo;
}

export const processedComplexString = await loadAndBringComplexInput();
