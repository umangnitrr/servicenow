import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ticketServer } from '../../enums';
import $ from 'jquery';
import './Ticket.css';

(function () {
    
    console.log('hello')
    window.addEventListener('click', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
const TicketPage = () => {

    const [ticketNumber, setTicketNumber] = useState(0);

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            question: '',
            mobileChannel: false,
            emailChannel: false
        },
        onSubmit: values => {

            fetch(ticketServer, { method: 'POST', body: JSON.stringify(values), headers: { 'content-Type': 'application/json' } }).then(r => r.json()).then(res => {
                // alert('Ticket has been successfully raised , your ticket number is #' + res.id);
                setTicketNumber(0);
                setTicketNumber(res.id);
                $('#alert').show('fade');
                //formik.resetForm();


            })
        },
    });
    $('#closeAlert').click(function () {
        $('#alert').hide('fade');
    });
    return <div>

        <div className="d-flex flex-column supremo-bgwhite mt-5" style={{
            "width": "60%",
            "alignSelf": "center",
            "margin": "auto"
        }}> <div className="d-flex flex-row justify-content-center mt-5">
                <div ><h3>Create Ticket Portal</h3></div>


            </div>

            <form onSubmit={formik.handleSubmit} class="ml-5 mr-5 needs-validation" noValidate>
                <div className="form-group">
                    <label for="name"><h5>Name</h5></label>
                    <input
                        autoFocus
                        required
                        className="form-control"
                        placeholder="Enter name"
                        id="name"
                        name="name"
                        type="text"
                        aria-label="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        Please enter name.
                    </div>

                </div>
                <div className="form-group">
                    <label for="name"><h5>Phone</h5></label>
                    <input
                        className="form-control"
                        id="phone"
                        name="phone"
                        type="tel"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        pattern='^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$'
                        required
                    />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        Please enter  valid phone number.
                    </div>
                </div>



                <div className="form-group">
                    <label for="email"><h5>Email</h5></label>
                    <input
                        className="form-control"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        required
                    />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        Please enter  valid email.
                    </div>
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="name"><h5>Question</h5>
                        <div className="valid-feedback">
                            Looks good!
                    </div>
                    </label>
                    <textarea
                        required
                        className="form-control"
                        id="question"
                        name="question"
                        rows={4}
                        onChange={formik.handleChange}
                        value={formik.values.question}
                    />

                    <div className="invalid-feedback">
                        Please enter question.
                    </div>
                </div>
                <div>
                    <label className="form-label" htmlFor="channelGroup"><h5>Channel</h5></label>

                </div>

                <div id="channelGroup" className="form-group  d-flex flex-column">
                    <div className="ml-3 pl-1">
                        <input
                            id="mobileChannel"
                            name="mobileChannel"
                            type="checkbox"
                            required={formik.values.emailChannel ? false : true}
                            className="form-check-input"
                            onChange={formik.handleChange}
                            value={formik.values.mobileChannel}
                        />

                        <label className="form-check-label" htmlFor="mobileChannel">Mobile</label>
                    
                    
                        <input
                            id="emailChannel"
                            name="emailChannel"
                            type="checkbox"
                            required={formik.values.mobileChannel ? false : true}
                            className="form-check-input ml-5 pl-4"
                            onChange={formik.handleChange}
                            value={formik.values.emailChannel}
                        />
                        <label className="form-check-label ml-5 pl-4" htmlFor="emailChannel">Email</label>
                        <div className="invalid-feedback ml-mn-20">
                            Please select at least one channel.
                        </div>
                    </div>

                </div>





                <div id="alert" className="alert alert-success alert-dismissible collapse" role="alert">
                    {'Ticket has been successfully raised , your ticket number is #' + ticketNumber}
                    <button id="closeAlert" type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="d-flex flex-row justify-content-center  mt-5 mb-4">

                    <div className="p-2 "> <button className="btn btn-primary supremo-btn justify-content-center mb-5" type="submit">Submit</button></div>

                </div>

            </form>



        </div>
    </div>
}

export default TicketPage;