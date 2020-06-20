export class FileModel {
    public archivo: File;
    public nombre: string;
    public url: string;
    public cargando: boolean;
    public progresso: number;

    constructor(file: File) {
        this.archivo = file;
        this.nombre = file.name;
        this.cargando = false;
        this.progresso = 0;
    }
}