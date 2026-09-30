# Guion de exposicion DevOps (grupo de 2) - 10 a 15 min

**Hilo conductor:** Codigo -> Pruebas -> Construccion -> Despliegue -> Monitorizacion -> Mejora

## Diapositivas
1. **Portada:** titulo, integrantes, fecha (30 de septiembre). Proyecto: Gestor de tareas.
2. **Que es DevOps:** cultura que une Desarrollo y Operaciones. Diagrama del ciclo.

### Persona A (puntos 1 a 4)
3. **Equipos multidisciplinarios:** Dev y Ops, revision cruzada con Pull Requests. *Mostrar:* repo con los 2 colaboradores.
4. **Procesos claros:** ramas main/develop/feature, PR con plantilla, README con reglas. *Mostrar:* tablero GitHub Projects (Por hacer, En progreso, En revision, Hecho).
5. **Automatizacion:** pruebas y build Docker sin intervencion manual. *Mostrar:* Dockerfile y carpeta .github/workflows.
6. **Colaboracion y comunicacion:** daily de 10 min, canal de chat con aviso "Build exitoso/fallido". *Mostrar:* captura del canal.

### Persona B (puntos 5 a 7)
7. **CI/CD:** cada push ejecuta pruebas -> imagen Docker -> Render despliega. **DEMO EN VIVO:** cambiar el texto en app.js desde GitHub, hacer commit, mostrar la pestana Actions en verde y recargar la app.
8. **Monitorizacion y retroalimentacion:** endpoint /health + UptimeRobot (aviso si se cae). *Mostrar:* panel con la app "Up".
9. **Mejora continua - retrospectiva:**
   - Que salio bien: pipeline automatico, revisiones cruzadas.
   - Que salio mal: pocas pruebas, tiempo limitado.
   - Que mejoramos: mas pruebas, base de datos real, metricas con Grafana.
10. **Conclusiones y preguntas.**

## Preguntas probables
- *Diferencia entre CI y CD?* CI integra y prueba cada cambio; CD lo entrega/despliega automaticamente.
- *Por que automatizar?* Menos errores humanos y entregas mas rapidas.
- *Para que sirve /health?* Para que el monitor sepa si la app esta viva.
