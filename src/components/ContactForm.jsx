import React, { useState, useEffect } from "react";

export default function ContactForm(props) {
  const formAlanlar = {
    isim: "",
    soyisim: "",
    telefon: "",
    mail: "",
  };

  const [alanlar, setAlanlar] = useState(formAlanlar);

  useEffect(() => {
    if (props.currentId === "") {
      setAlanlar({
        ...formAlanlar,
      });
    } else {
      setAlanlar({
        ...props.iletisimVeriler[props.currentId],
      });
    }
  }, [props.currentId, props.iletisimVeriler]);

  const alanlarDegisti = (e) => {
    var alanIsim = e.target.name;
    var alanDeger = e.target.value;

    setAlanlar({
      ...alanlar,
      [alanIsim]: alanDeger,
    });
  };

  const verileriKaydet = (e) => {
    e.preventDefault();
    //console.log(alanlar)
    props.veriEkle(alanlar);
  };

  return (
    <div className="card p-2 shadow border-0">
      <form onSubmit={verileriKaydet}>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            onChange={alanlarDegisti}
            name="isim"
            placeholder="İsim giriniz"
            value={alanlar.isim || ""}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            onChange={alanlarDegisti}
            name="soyisim"
            placeholder="Soyisim giriniz"
            value={alanlar.soyisim || ""}
          />
        </div>
        <div className="form-row">
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-phone"></i>
              </div>
            </div>
            <input
              className="form-control"
              onChange={alanlarDegisti}
              name="telefon"
              placeholder="Telefon giriniz"
              value={alanlar.telefon || ""}
            />
          </div>
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-envelope-square"></i>
              </div>
            </div>
            <input
              className="form-control"
              onChange={alanlarDegisti}
              name="mail"
              placeholder="Mail adresi giriniz"
              value={alanlar.mail || ""}
            />
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success btn-block">
            <i class="fas fa-save mx-1"></i>Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}
