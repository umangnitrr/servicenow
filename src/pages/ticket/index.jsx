import React from 'react';
import { useFormik } from 'formik';
import { ticketServer } from '../../enums';


const TicketPage = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            question: '',
            mobileChannel: true,
            emailChannel: false
        },
        onSubmit: values => {
            fetch(ticketServer, { method: 'POST', body: JSON.stringify(values), headers: { 'content-Type': 'application/json' } }).then(r => r.json()).then(res => {
                alert('Ticket has been successfully raised , your ticket number is #' + res.id);
            })
        },
    });
    return <div>
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label for="name">Name</label>
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

            </div>
            <div className="form-group">
                <label for="name">Phone</label>
                <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    pattern='^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$'
                />

            </div>



            <div className="form-group">
                <label for="email">Email</label>
                <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="name">Question</label>
                <textarea
                    required
                    className="form-control"
                    id="question"
                    name="question"
                    rows={4}
                    onChange={formik.handleChange}
                    value={formik.values.question}
                />
            </div>
            <label className="form-label" htmlFor="channelGroup">Channel</label>
            <div id="channelGroup" className="form-group form-check">
                <input
                    id="mobileChannel"
                    name="mobileChannel"
                    type="checkbox"
                    required={true}
                    className="form-check-input"
                    onChange={formik.handleChange}
                    value={formik.values.mobileChannel}
                />
                <label className="form-check-label" htmlFor="mobileChannel">Mobile</label>
            </div>

            <div className="form-group form-check">
                <input
                    id="emailChannel"
                    name="emailChannel"
                    type="checkbox"
                    className="form-check-input"
                    onChange={formik.handleChange}
                    value={formik.values.emailChannel}
                />
                <label className="form-check-label" htmlFor="emailChannel">Email</label>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
}

export default TicketPage;