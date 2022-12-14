import Header from "../components/Header";

import { AiOutlineLaptop } from "react-icons/ai";
import { MdEngineering } from "react-icons/md";
import { BsFillMouse2Fill } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
import Panel from "../components/Panel";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Modulo Didáctico Virtual</title>
      </Head>

      <Header />
      <div className="container white-text pt-3 pt-lg-4 pb-4 text-center text-lg-left">
        <div className="row align-items-center">
          <div className="col-lg display-lg-none">
            <Panel />
          </div>

          <div className="col-lg">
            <p className="font-size-3 font-size-lg-1 font-weight-bold">
              Propuesta de Prácticas Virtuales del Tablero de Control del Módulo
              Didáctico de Control de Caudal de Lazo Cerrado para el Laboratorio
              de Instrumentación y Control
            </p>

            <p className="font-size-4 pb-3">
              Universidad Politécnica Territorial de Valencia
            </p>

            <a
              href="https://caudal.netlify.app/"
              className="btn btn-secondary font-size-6"
            >
              ¡Visita el Modulo!
            </a>
          </div>
          <div className="col-lg display-none display-lg-block">
            <Panel />
          </div>
        </div>
      </div>

      <div className="container caracteristicas white-text pb-2">
        <div className="caracteristica">
          <AiOutlineLaptop /> Educación a Distancia
        </div>
        <div className="caracteristica">
          <MdEngineering /> Prácticas de Laboratorio Virtuales
        </div>
        <div className="caracteristica">
          <BsFillMouse2Fill /> Modulo Interactivo
        </div>
        <div className="caracteristica">
          <MdLibraryBooks /> Información Teórica
        </div>
      </div>
    </>
  );
}
