import { DepartamentoModelo } from "./departamento.modelo";

export class CiudadModelo{
    id?: number;
    nombre?: String;
    departamentoId?: number;
    departamento: DepartamentoModelo = new DepartamentoModelo();
}