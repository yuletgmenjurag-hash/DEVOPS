# Gestor de tareas DevOps

API minima en Node.js (sin dependencias) para demostrar practicas DevOps.

## Roles (equipo multidisciplinario)
- **Dev:** escribe codigo y pruebas.
- **Ops:** mantiene el pipeline, Docker y el despliegue.
- Ambos revisan el trabajo del otro mediante Pull Requests.

## Flujo de trabajo (proceso claro)
1. Crear rama `feature/nombre-del-cambio` desde `develop`.
2. Subir cambios y abrir Pull Request hacia `main`.
3. El pipeline debe estar en verde y el companero aprueba.
4. Se une a `main` y Render despliega automaticamente.

## Endpoints
- `GET /health` estado de la app
- `GET /tasks` lista tareas
- `POST /tasks` crea tarea, body: `{"title":"texto"}`

## Comandos
- `npm test` pruebas
- `npm start` levanta la app
- `docker build -t devops-tareas . && docker run -p 3000:3000 devops-tareas`

## Retrospectiva
Ver `docs/GUION.md`.
