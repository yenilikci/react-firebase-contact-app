import React from 'react'
import ContactForm from './ContactForm'

export default function Contact() {

    const veriEkle = nesne => {
        console.log(nesne);
    }

    return (
        <div>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4">
                        İletişim Bilgileri
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm ekle={veriEkle} />
                </div>
                <div className="col-md-7">
                    İletişim bilgileri listesi
                </div>
            </div>
        </div>
    )
}
