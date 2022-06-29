export class Azienda{

    id: number;

    nome: string;

    constructor(serverObject: any) {
        Object.assign(this, serverObject)
      }
    


}