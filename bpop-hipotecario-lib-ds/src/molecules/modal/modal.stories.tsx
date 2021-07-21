import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "./modal";

export default {
  title: "Molecules/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Autorización para el tratamiento de datos personales",
  buttonText: "OK",
  isDisabledButton: false,
  show: true,
  children: `En adición y complemento de las autorizaciones previamente otorgadas, autorizo de manera expresa y previa sin
  lugar a pagos ni retribuciones al BANCO POPULAR S.A. (en adelante “EL BANCO”), a sus cesionarios o a quien
  represente los derechos, para que efectúe el Tratamiento de mis Datos Personales de la manera y para las
  finalidades que se señalan a continuación. Para efectos de la presente autorización, se entiende por “Datos
  Personales” la información personal de carácter financiero, crediticio, comercial, profesional, sensible
  (definidas en la ley tales como mis huellas, imagen o voz entre otros), técnico y administrativo, privada,
  semiprivada pasada, presente o futura, contenida en medios físicos, digitales o electrónicos y por
  “Tratamiento de datos personales” todo tipo de actividad, acción, operación o proceso, incluyendo pero sin
  limitarse a: recolectar, consultar, recopilar, evaluar, catalogar, clasificar, ordenar, grabar, almacenar,
  actualizar, modificar, aclarar, reportar, informar, analizar, utilizar, compartir, circularizar, suministrar,
  suprimir, procesar, solicitar, verificar, intercambiar, retirar, transferir, transmitir, disponer, organizar,
  ajustar, modelar, unir, consolidar, fusionar, combinar, agregar, resumir, digitalizar, explotar, rentabilizar,
  aprovechar, emplear y/o divulgar, y, efectuar operaciones sobre mis Datos Personales. Esta autorización para
  el Tratamiento de mis Datos Personales se hace extensiva a las entidades que conforman el Conglomerado
  Financiero Aval, listadas en la Resolución 0155 de 2019 expedida por la Superintendencia Financiera de
  Colombia o cualquier otra norma que la modifique, adicione o reemplace, así como a las entidades que forman
  parte del Grupo Empresarial Sarmiento Angulo, listadas en el Certificado de Existencia y Representación Legal
  de EL BANCO expedido por la Cámara de Comercio de Bogotá (en conjunto “LAS ENTIDADES AUTORIZADAS”). La
  autorización que otorgo a EL BANCO y a LAS ENTIDADES AUTORIZADAS por el presente medio para el Tratamiento de
  mis Datos Personales tendrá las siguientes finalidades: a. Promocionar, comercializar u ofrecer, de manera
  individual o conjunta productos y/o servicios propios u ofrecidos en alianza comercial, a través de los
  canales autorizados en la ley o contrato, o para complementar, optimizar o profundizar el portafolio de
  productos y/o servicios actualmente ofrecidos. b. Como elemento de análisis en etapas pre-contractuales,
  contractuales y post-contractuales para establecer y/o mantener relaciones contractuales, incluyendo como
  parte de ello, los siguientes propósitos: I. Evaluar riesgos derivados de la relación contractual potencial,
  vigente o concluida. II. Realizar, validar, autorizar o verificar transacciones incluyendo, cuando sea
  requerido, la consulta y reproducción de datos sensibles tales como mi huella, imagen o voz. III. Obtener
  conocimiento de mi perfil comercial o transaccional. IV. Conocer sobre el nacimiento, modificación,
  celebración, extinción, novedades, hábitos de pago, comportamiento crediticio o cumplimiento de obligaciones
  directas, contingentes o indirectas, de las obligaciones vigentes, activas o pasivas, o las que en el futuro
  llegue a celebrar, incluyendo información referente al manejo, estado, cumplimiento de mis obligaciones de
  pago derivadas de las relaciones, contratos y servicios, hábitos de pago, incluyendo aportes al sistema de
  seguridad social, obligaciones y las deudas vigentes, vencidas sin cancelar, procesos, o la utilización
  indebida de servicios financieros, en bases de datos administradas directamente por las partes contratantes,
  por operadores de información financiera, autoridades o entidades estatales, operadores de información y/o
  entidades que formen parte del Sistema de Seguridad Social Integral, empresas prestadoras de servicios
  públicos y de telefonía móvil, o administrador de bases de datos o entidades similares que en un futuro se
  establezca y que tenga por objeto alguna de las anteriores actividades. V. Ejercer mis derechos, incluyendo
  los referentes a actividades de cobranza judicial y extrajudicial y las gestiones conexas para obtener el pago
  de las obligaciones a mi cargo o de mi empleador. VI Recolectar y entregar información a autoridades
  extranjeras con competencia sobre EL BANCO, LAS ENTIDADES AUTORIZADAS o sobre sus actividades, productos y/o
  servicios, cuando se requiera para dar cumplimiento a sus deberes legales o reglamentarios, incluyendo dentro
  de éstos, aquellos referentes a la prevención de la evasión fiscal, lavado de activos y financiación del
  terrorismo u otros propósitos similares. Para efectos de lo dispuesto en el presente literal b, EL BANCO en lo
  que resulte aplicable, podrá efectuar el Tratamiento de mis Datos Personales ante entidades de consulta, que
  manejen o administren bases de datos para los fines legalmente definidos, domiciliadas en Colombia o en el
  exterior, sean personas naturales o jurídicas, colombianas o extranjeras. c. Realizar ventas cruzadas de
  productos y/o servicios ofrecidos por EL BANCO o por alguna de LAS ENTIDADES AUTORIZADAS o sus aliados
  comerciales, incluyendo la celebración de convenios de marca compartida. d. Elaborar y reportar información
  contenida en encuestas de satisfacción, estudios y análisis de mercado, para lo cual autorizo la posibilidad
  de contactarme para dichos propósitos. e. Enviar mensajes a través de medios físicos o digitales, sobre
  promociones, campañas comerciales, publicitarias, de mercadeo, sorteos, eventos u otros beneficios, así como
  dar a conocer otros servicios y/o productos ofrecidos por EL BANCO; LAS ENTIDADES AUTORIZADAS o sus aliados
  comerciales. f. Enviar notificaciones a través de medios físicos o digitales, para remitir extractos, campañas
  institucionales o de educación financiera e informar acerca de las innovaciones o modificaciones efectuadas en
  sus productos y/o servicios, dar a conocer las mejoras o cambios en sus canales de atención. g. Para que mis
  Datos Personales puedan ser utilizados como medio de prueba. Mis Datos Personales podrán consultarse,
  circular, transmitirse y/o transferirse a la totalidad de las áreas de EL BANCO así como a los proveedores de
  servicios, entidades públicas o que presten servicios públicos tales como notarías, Registraduría nacional del
  Estado Civil, Contraloría, Procuraduría, DIAN, oficinas de registro, cajas de compensación, administradoras de
  fondos de pensiones y de cesantías, operadores de información a través de las cuales se liquidan cesantías,
  aportes a seguridad social y parafiscales (tales como Aportes en Línea, SOI, SIMPLE), usuarios de red, redes
  de distribución y personas que realicen la promoción de sus productos y servicios, incluidos call centers,
  domiciliados en Colombia o en el exterior, sean personas naturales o jurídicas, colombianas o extranjeras a su
  fuerza comercial, equipos de telemercadeo y/o procesadores de datos que trabajen en nombre de EL BANCO,
  incluyendo contratistas, delegados, outsourcing, tercerización, red de oficinas o aliados, con el objeto de
  desarrollar servicios de alojamiento de sistemas, de mantenimiento, servicios de análisis, servicios de
  mensajería por e-mail o correo físico, servicios de entrega, gestión de transacciones de pago y cobranza,
  implementación de software o servicios tecnológicos (en adelante los “Terceros”) los cuales están obligados a
  garantizar la reserva de la información de acuerdo con lo estipulado en la Ley 1581 de 2012. En consecuencia,
  como titular, entiendo y acepto que mediante la presente autorización concedo a estos Terceros, autorización
  para: Acceder a mis Datos Personales en la medida en que así lo requieran para la prestación de los servicios
  para los cuales fueron contratados y sujeto al cumplimiento de los deberes que les correspondan como
  encargados del Tratamiento de mis Datos Personales. Compartir mis Datos Personales con las entidades gremiales
  a las que pertenezca la entidad, para fines comerciales, estadísticos y de estudio y análisis de mercadeo. Es
  entendido que las personas naturales y jurídicas, nacionales y extrajeras mencionadas anteriormente ante las
  cuales EL BANCO puede llevar a cabo el Tratamiento de mis Datos Personales, también cuentan con mi
  autorización para permitir dicho Tratamiento. Adicionalmente, mediante el otorgamiento de la presente
  autorización, manifiesto: (I) Que los Datos Personales suministrados son veraces, verificables y completos.
  (II) Que conozco y entiendo que el suministro de la presente autorización es voluntaria, razón por la cual no
  me encuentro obligado a otorgar la presente autorización. (III) Que conozco y entiendo que mediante la simple
  presentación de una comunicación escrita puedo limitar en todo o en parte el alcance de la presente
  autorización, y haber sido informado sobre mis derechos a conocer, actualizar y rectificar mis Datos
  Personales, el carácter facultativo de mis respuestas a las preguntas que sean hechas cuando versen sobre
  datos sensibles o sobre datos de los niños, niñas o adolescentes, solicitar prueba de la autorización otorgada
  para su tratamiento, ser informado sobre el uso que se ha dado a los mismos, presentar quejas ante la
  autoridad competente por infracción a la ley una vez haya agotado el trámite de consulta o reclamo ante EL
  BANCO, revocar la presente autorización, solicitar la supresión de mis datos en los casos en que sea
  procedente y ejercer en forma gratuita mis derechos y garantías constitucionales y legales.`,
};
