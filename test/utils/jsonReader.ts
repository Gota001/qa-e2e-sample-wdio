// Importe o módulo 'fs' para trabalhar com arquivos
import * as fs from 'fs';

    // Caminho para o arquivo JSON (ajuste conforme o seu projeto)
    

// Função para ler o arquivo JSON
export function lerMassaDados(massa:string): any {
    try {
        const filePath = './test/data/'+massa+'.json';
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Erro ao ler o arquivo JSON:', error);
        return null;
    }
}