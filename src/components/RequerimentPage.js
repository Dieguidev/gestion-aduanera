import React from "react";
import "../style/requerimiento.css";
//import { useNavigate } from "react-router-dom";

export default function RequerimentPage() {
  //No hace falta utilizar la logica de saber si esta autenticado aqui, porque ya lo validamos en el App.js

 // console.log(isAuthenticated);
  //const navigate = useNavigate();
  // if (!isAuthenticated) {
  //   navigate("/");
  // }


  return (
    <div className="requeriment">
      <div className="browser-frame">
        <div className="browser-header">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="title">S&S WEB</span>
        </div>
        <div className="browser-content">
          <h1>REQUERIMIENTO DE ATENCIÓN ADUANERA</h1>
          <form id="requerimientoForm">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cliente">CLIENTE</label>
                <input type="text" id="cliente" name="cliente" required />
              </div>
              <div className="form-group">
                <label htmlFor="aduana">ADUANA</label>
                <input type="text" id="aduana" name="aduana" required />
              </div>
              <div className="form-group">
                <label htmlFor="terminal">
                  TERMINAL PORTUARIO / DEPÓSITO TEMPORAL
                </label>
                <input type="text" id="terminal" name="terminal" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="customer">CUSTOMER</label>
                <input type="text" id="customer" name="customer" required />
              </div>
              <div className="form-group">
                <label htmlFor="regimen">RÉGIMEN</label>
                <input type="text" id="regimen" name="regimen" required />
              </div>
              <div className="form-group">
                <label htmlFor="observaciones">OBSERVACIONES</label>
                <textarea
                  id="observaciones"
                  name="observaciones"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <h3>TRANSPORTE</h3>
                <input type="text" placeholder="VÍA TRANSPORTE" required />
                <input type="text" placeholder="ETD" required />
                <input type="text" placeholder="ETA" required />
              </div>
              <div className="form-group">
                <h3>DOCUMENTOS</h3>
                <div className="file-upload-group">
                  <div className="file-upload">
                    <label htmlFor="factura">FACTURA COMERCIAL</label>
                    <input
                      type="file"
                      id="factura"
                      name="factura"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                  <div className="file-upload">
                    <label htmlFor="packing">PACKING LIST</label>
                    <input
                      type="file"
                      id="packing"
                      name="packing"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                  <div className="file-upload">
                    <label htmlFor="traduccion">TRADUCCIÓN DE FACTURA</label>
                    <input
                      type="file"
                      id="traduccion"
                      name="traduccion"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                  <div className="file-upload">
                    <label htmlFor="transporte">DOCUMENTO DE TRANSPORTE</label>
                    <input
                      type="file"
                      id="transporte"
                      name="transporte"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                  <div className="file-upload">
                    <label htmlFor="origen">CERTIFICADO DE ORIGEN</label>
                    <input
                      type="file"
                      id="origen"
                      name="origen"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                  <div className="file-upload">
                    <label htmlFor="poliza">PÓLIZA</label>
                    <input
                      type="file"
                      id="poliza"
                      name="poliza"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                  <div className="file-upload">
                    <label htmlFor="control">DOCUMENTOS DE CONTROL</label>
                    <input
                      type="file"
                      id="control"
                      name="control"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                  <div className="file-upload">
                    <label htmlFor="otros">OTROS</label>
                    <input
                      type="file"
                      id="otros"
                      name="otros"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <h3>MERCANCÍA</h3>
                <input type="text" placeholder="DESCRIPCIÓN" required />
                <input type="text" placeholder="REFERENCIA" required />
              </div>
              <div className="form-group logo-button">
                <img
                  src="/Imagenes/Logo.png"
                  alt="Grupo S&S Logo"
                  className="logo"
                />
                <button type="submit">SOLICITAR</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
