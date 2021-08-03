import React, { useState } from 'react'

export default function ContactForm(props) {

    const formAlanlar = {
        isim: '',
        soyisim: '',
        telefon: '',
        mail: ''
    }

    const [alanlar, setAlanlar] = useState(formAlanlar);

    const alanlarDegisti = (e) => {
        var alanIsim = e.target.name;
        var alanDeger = e.target.value;

        setAlanlar({
            ...alanlar,
            [alanIsim]: alanDeger
        })
    }

    const verileriKaydet = (e) => {
        e.preventDefault();
        //console.log(alanlar)
        props.ekle(alanlar);
    }

    return (
        <form onSubmit={verileriKaydet}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" onChange={alanlarDegisti} name="isim" placeholder="İsim giriniz" />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" onChange={alanlarDegisti} name="soyisim" placeholder="Soyisim giriniz" />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-phone"></i>
                        </div>
                    </div>
                    <input className="form-control" onChange={alanlarDegisti} name="telefon" placeholder="Telefon giriniz" />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope-square"></i>
                        </div>
                    </div>
                    <input className="form-control" onChange={alanlarDegisti} name="mail" placeholder="Mail adresi giriniz" />
                </div>
            </div>
            <div className="form-group">
                <input type="submit" value="Kaydet" className="btn btn-success btn-block" />
            </div>
        </form>
    )
}
