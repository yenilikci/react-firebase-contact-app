import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import firebaseDB from '../firebase'

export default function Contact() {

    const [iletisimVeriler, setIletisimVeriler] = useState({});

    useEffect(() => {
        //get data
        firebaseDB.child('iletisim').on('value', snapshot => {
            if (snapshot.val() != null) {
                setIletisimVeriler({
                    ...snapshot.val()
                })
                console.log(iletisimVeriler);
            }
        })
    }, [])

    //push data
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
                    <table className="table table-borderless table-strip">
                        <thead className="thead-light">
                            <tr>
                                <th>İsim-Soyisim</th>
                                <th>Mail</th>
                                <th>Telefon</th>
                                <th>İşlem</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(iletisimVeriler).map(id => {
                                    return <tr key={id}>
                                        <td>{iletisimVeriler[id].isim} {iletisimVeriler[id].soyisim}</td>
                                        <td>{iletisimVeriler[id].mail}</td>
                                        <td>{iletisimVeriler[id].telefon}</td>
                                        <td>
                                            <a className="btn text-primary">
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-primary">
                                                <i className="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
