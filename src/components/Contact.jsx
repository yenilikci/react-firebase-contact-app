import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import firebaseDB from '../firebase'

export default function Contact() {

    const [iletisimVeriler, setIletisimVeriler] = useState({});

    useEffect(() => {
        //get data
        firebaseDB.child('iletisim').on('value', snapshot => {
            if(snapshot.val() != null){
                setIletisimVeriler({
                    ...snapshot.val()
                })
                console.log(iletisimVeriler);
            }
        })
    }, [])

    const veriEkle = nesne => {
        //console.log(nesne);
        firebaseDB.child('iletisim').push(
            nesne,
            err => {
                if (err) {
                    console.log(err);
                }
            }
        )
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
