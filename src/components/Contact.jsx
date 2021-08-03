import React from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
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
                    <ContactForm />
                </div>
                <div className="col-md-7">
                    İletişim bilgileri listesi
                </div>
            </div>
        </div>
    )
}
