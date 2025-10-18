import {
    IsInt,
    IsOptional,
    IsString,
    IsDate,
    IsNumber,
    MaxLength,
    Min

} from "class-validator";
import {Type} from "class-transformer";

export class FinanzasMensualesDto {
    @IsOptional()
    @IsInt ({ message: "EL campo 'id' debe ser un numero entero."})
    @Min(0, {message: "El ID no puede ser negativo."})
    id?: number | null;

    @IsOptional()
    @Type(() => Date)
    @IsDate({ message: "El campo 'fecha' debe contener una fecha valida"})
    fecha?: Date | null;

    @IsOptional()
    @Type(() => Number)
    @IsNumber({}, {message: "El campo 'ingresos' debe ser un numero"})
    ingresos?: number | null;

    @IsOptional()
    @Type(() => Number)
    @IsNumber({}, {message: "El campo 'egresos' debe ser un numero"})
    egresos?: number | null;

    @IsOptional()
    @IsNumber({}, { message: "El campo 'saldo_final' debe ser un número." })
    saldo_final?: number | null;

    @IsOptional()
    @IsString({ message: "El campo 'responsable' debe ser una cadena de texto." })
    @MaxLength(100, { message: "El campo 'responsable' no puede exceder los 100 caracteres." })
    responsable?: string | null;

    @IsOptional()
    @IsString({ message: "El campo 'tipo_ingreso' debe ser una cadena de texto." })
    @MaxLength(100, { message: "El campo 'tipo_ingreso' no puede exceder los 100 caracteres." })
    tipo_ingreso?: string | null;

    @IsOptional()
    @IsString({ message: "El campo 'tipo_egreso' debe ser una cadena de texto." })
    @MaxLength(100, { message: "El campo 'tipo_egreso' no puede exceder los 100 caracteres." })
    tipo_egreso?: string | null;

    @IsOptional()
    @IsString({ message: "El campo 'metodo_pago' debe ser una cadena de texto." })
    @MaxLength(50, { message: "El campo 'metodo_pago' no puede exceder los 50 caracteres." })
    metodo_pago?: string | null;

    @IsOptional()
    @IsNumber({}, { message: "El campo 'donaciones' debe ser un número." })
    donaciones?: number | null;

    @IsOptional()
    @IsNumber({}, { message: "El campo 'gastos_actividad' debe ser un número." })
    gastos_actividad?: number | null;

    @IsOptional()
    @IsString({ message: "El campo 'observaciones' debe ser una cadena de texto." })
    observaciones?: string | null;

    @IsOptional()
    @IsString({ message: "El campo 'comentarios' debe ser una cadena de texto." })
    comentarios?: string | null;
}