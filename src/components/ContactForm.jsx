import React from 'react'

export default function ContactForm() {
    return (
        <form>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="İsim giriniz" />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Soyisim giriniz" />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-phone"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Telefon giriniz" />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope-square"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Mail adresi giriniz" />
                </div>
            </div>
            <div className="form-group">
                <input type="submit" value="Kaydet" className="btn btn-success btn-block" />
            </div>
        </form>
    )
}
