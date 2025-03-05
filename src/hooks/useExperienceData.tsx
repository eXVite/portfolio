import { useTranslate } from "./useTranslate";

interface ExperienceDataType {
  Title: string;
  SubTitle: string;
  Date: string;
  Description: string;
}
const useExperienceData = () => {
  const { t } = useTranslate();

  const getExperienceData = () => {
    return [
      {
        Title: "Full Stack Developer",
        SubTitle: "Tus Media",
        Date: `12/2023 - ${t("experience_date_actual", "Actualmente")}`,
        Description: t(
          "experience_desc_tus_media",
          "Desarrollo y mantenimiento de una plataforma de un <span>aula virtual</span> con mucho flujo de usuarios, muchas interacciones <span>realtime</span> e integraciones con <span>IA</span>."
        ),
      },
      {
        Title: "Full Stack Developer",
        SubTitle: "NTTData",
        Date: `06/2021 - 11/2023`,
        Description: t(
          "experience_desc_nttdata",
          "Desarrollo y mantenimiento de varias aplicaciones para clientes como la <span>Generalitat de Catalunya</span>, trato con cliente y responsable del equipo de desarrollo de un aplicativo."
        ),
      },
      {
        Title: "Full Stack Developer",
        SubTitle: "Cesc-It",
        Date: `11/2020 - 04/2021`,
        Description: t(
          "experience_desc_cescit",
          "<span>Contrato en practicas</span>, desarrollo de una api de gestión de reservas y personal para una barbería, además de la obtención de un certificado de Udemy en <span>Springboot</span>."
        ),
      },
      {
        Title: "CFGS de  desarrollo de aplicaciones web",
        SubTitle: "Intitut Pedralbes",
        Date: `2020 - 2021`,
        Description: t(
          "experience_desc_ip",
          "Ciclo Formativo De Grado Superior de desarrollo de aplicaciones web."
        ),
      },
      {
        Title: "Back End Developer",
        SubTitle: "NTTData",
        Date: `01/2020 - 04/2020`,
        Description: t(
          "experience_desc_nttdata_2",
          "<span>Contrato en practicas</span>, fueron mis primeros pasos en el mundo profesional del desarrollo, en estos meses me centré en crear unas buenas bases del desarrollo web."
        ),
      },
      {
        Title: "CFGS de desarrollo de aplicaciones multiplataforma",
        SubTitle: "Intitut Pedralbes",
        Date: `2018 - 2020`,
        Description: t(
          "experience_desc_dam",
          "Ciclo Formativo De Grado Superior de desarrollo de aplicaciones multiplataforma."
        ),
      },
    ] as ExperienceDataType[];
  };

  return { getExperienceData };
};

export default useExperienceData;
