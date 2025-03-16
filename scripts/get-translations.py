import os
import re

def buscar_funcion_t(carpeta):
    # Expresión regular para encontrar la función t con saltos de línea
    patron = re.compile(r't\(\s*"[^"]*"\s*,\s*"[^"]*".*?\)', re.DOTALL)
    
    # Recorrer todos los archivos en la carpeta y subcarpetas
    for raiz, dirs, archivos in os.walk(carpeta):
        for archivo in archivos:
            if archivo.endswith('.tsx') or archivo.endswith('.ts'):
                archivo_path = os.path.join(raiz, archivo)
                try:
                    with open(archivo_path, 'r', encoding='utf-8') as f:
                        contenido = f.read()
                        # Buscar las coincidencias de la función t
                        coincidencias = patron.findall(contenido)
                        if coincidencias:
                            # print(f'En el archivo {archivo_path} se encontraron las siguientes coincidencias:')
                            for coincidencia in coincidencias:
                                print(coincidencia)
                except Exception as e:
                    print(f"Error al leer el archivo {archivo_path}: {e}")

# Ruta de la carpeta donde empezar a buscar
ruta_carpeta = '../src'
buscar_funcion_t(ruta_carpeta)
