// DragoMc Network — Crear 2 Google Forms automáticamente
// 1. Ve a https://script.google.com > Nuevo proyecto
// 2. Pega este código > Guardar > Ejecutar crearFormsDragoMc
// 3. Acepta permisos > Mira en Registro los 2 links edit + responder
// 4. Manda el link de responder, ves rtas en Forms > Respuestas > Sheets

function crearFormsDragoMc() {
  // ---------- HELPER 25 ----------
  var h = FormApp.create('DragoMc Network — Postulación Helper');
  h.setDescription('Postulación Helper DragoMc · 25 preguntas · Responde claro. Mínimo Quiz 60%.');
  h.setCollectEmail(true);
  h.setLimitOneResponsePerUser(true);

  var helperQs = [
    '1. Nombre o apodo',
    '2. Edad',
    '3. Discord (usuario + ID)',
    '4. Nick de Minecraft',
    '5. País y horas al día activo',
    '6. ¿Cuál es el trabajo de un Helper y qué tiene prohibido hacer?',
    '7. Escribe las 5 normas más importantes de DragoMc',
    '8. ¿Qué es spam, flood y toxicidad? Da un ejemplo de cada uno',
    '9. ¿Qué es un ticket y cómo se atiende de inicio a fin?',
    '10. ¿Qué es una prueba válida? ¿Qué debe tener?',
    '11. Usuario hace spam repitiendo mensajes, ¿qué haces paso a paso?',
    '12. Un usuario insulta a otro en chat público, ¿cómo actúas?',
    '13. Estás ayudando y te insultan a ti, ¿cómo reaccionas?',
    '14. Te preguntan algo que no sabes, ¿qué haces?',
    '15. Crees que alguien usa hacks pero no tienes pruebas, ¿lo sancionas?',
    '16. Tu amigo rompe una norma, ¿lo ayudas a evitar sanción?',
    '17. Un usuario perdió items por bug, ¿qué haces tú como Helper?',
    '18. Hay evento y no hay Mods conectados, ¿qué haces?',
    '19. Ves a otro Helper haciendo mal su trabajo, ¿qué haces?',
    '20. Te llegan 3 tickets a la vez, ¿en qué orden los atiendes?',
    '21. ¿Por qué quieres ser Helper en DragoMc?',
    '22. ¿Cómo te comportas trabajando con otros Staff?',
    '23. ¿Qué harías si no puedes conectarte una semana?'
  ];
  helperQs.forEach(function(t, i) {
    var item;
    if (i < 5) item = h.addTextItem();
    else item = h.addParagraphTextItem();
    item.setTitle(t).setRequired(true);
  });
  h.addMultipleChoiceItem().setTitle('24. ¿Te comprometes a respetar normas, ser respetuoso e imparcial?').setChoiceValues(['Sí, me comprometo','No']).setRequired(true);
  h.addMultipleChoiceItem().setTitle('25. ¿Aceptas examen Quiz-Staff 60% y entrevista por voz?').setChoiceValues(['Sí, acepto','No']).setRequired(true);

  // ---------- JR MOD 25 ----------
  var j = FormApp.create('DragoMc Network — Postulación Jr Mod');
  j.setDescription('Postulación Jr Mod DragoMc · 25 preguntas · Requiere experiencia / Helper previo.');
  j.setCollectEmail(true);
  j.setLimitOneResponsePerUser(true);

  var jrQs = [
    '1. Nombre o apodo',
    '2. Edad',
    '3. Discord (usuario + ID)',
    '4. Nick de Minecraft',
    '5. País, horas al día y experiencia previa Staff',
    '6. Diferencia entre Helper, Jr Mod y Mod en DragoMc',
    '7. Explica mute, kick, tempban y ban permanente con ejemplo',
    '8. Video claro de hacks de un usuario normal, ¿qué haces paso a paso?',
    '9. Dos usuarios peleando e insultándose en público, ¿cómo los separas?',
    '10. Reporte que parece falso para perjudicar, ¿cómo lo verificas?',
    '11. ¿Cómo debe ser una prueba válida para sancionar?',
    '12. Abuso de bug pequeño por primera vez, ¿baneas directo?',
    '13. Un Helper se equivoca en público, ¿lo corriges en público?',
    '14. Tienes 5 tickets a la vez, ¿en qué orden los atiendes?',
    '15. ¿En qué casos escalas a SrMod/Admin y no resuelves tú?',
    '16. Un amigo VIP te pide que lo desbannes, ¿qué haces?',
    '17. Un Mod te ordena sancionar sin pruebas, ¿obedeces?',
    '18. Usuario pierde items por sanción injusta de otro Staff, ¿cómo lo reparas?',
    '19. Detectas posible dupeo pero no hay Admin conectado, ¿qué haces en 5 min?',
    '20. ¿Cómo documentas un caso grave para que otro Staff lo entienda?',
    '21. ¿Por qué quieres subir a Jr Mod en DragoMc?',
    '22. ¿Cómo trabajarías con Helpers a tu cargo?',
    '23. Si tomas decisión justa pero impopular y te funan, ¿cómo reaccionas?'
  ];
  jrQs.forEach(function(t, i) {
    var item;
    if (i < 5) item = j.addTextItem();
    else item = j.addParagraphTextItem();
    item.setTitle(t).setRequired(true);
  });
  j.addMultipleChoiceItem().setTitle('24. ¿Te comprometes a imparcialidad, actividad y confidencialidad?').setChoiceValues(['Sí, me comprometo','No']).setRequired(true);
  j.addMultipleChoiceItem().setTitle('25. ¿Aceptas prueba 7-15 días, Quiz 70% y entrevista?').setChoiceValues(['Sí, acepto','No']).setRequired(true);

  Logger.log('HELPER EDIT: ' + h.getEditUrl());
  Logger.log('HELPER RESPONDER: ' + h.getPublishedUrl());
  Logger.log('JR MOD EDIT: ' + j.getEditUrl());
  Logger.log('JR MOD RESPONDER: ' + j.getPublishedUrl());
}
