export class UsuarioModelo{
    id?: String;
    nombre_usuario?: String;
    clave?: string;
    telefono?: string;
    id_persona?: number;
    user?: UsuarioModelo;
    token?: String;
    isLoggedIn: boolean = false;
}