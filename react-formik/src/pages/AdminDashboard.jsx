import { useEffect, useState } from "react";
import AdminNavbar from "../components/AdminNavbar.jsx";
import { getTurfs, addTurf, deleteTurf } from "../services/ApiService.js";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const schema = Yup.object({
title: Yup.string().required("Required"),
location: Yup.string().required("Required"),
price: Yup.number().positive().required("Required"),
description: Yup.string().required("Required"),
});
export default function AdminDashboard() {
const [turfs, setTurfs] = useState([]);


async function refresh() {
const list = await getTurfs();
setTurfs(list);
}
useEffect(() => { refresh(); }, []);
return (
 <div className="row g-4">
      <div className="col-lg-5">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title mb-3">Add Turf</h5>
            <Formik
              initialValues={{ title: "", location: "", price: "", description: "" }}
              validationSchema={schema}
              onSubmit={async (values, { resetForm, setSubmitting }) => {
                try {
                  await addTurf({ ...values, price: Number(values.price) });
                  resetForm();
                  refresh();
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-2">
                    <label className="form-label">Title</label>
                    <Field name="title" className="form-control" />
                    <div className="text-danger small"><ErrorMessage name="title" /></div>
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Location</label>
                    <Field name="location" className="form-control" />
                    <div className="text-danger small"><ErrorMessage name="location" /></div>
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Price</label>
                    <Field name="price" type="number" className="form-control" />
                    <div className="text-danger small"><ErrorMessage name="price" /></div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <Field as="textarea" name="description" className="form-control" rows="3" />
                    <div className="text-danger small"><ErrorMessage name="description" /></div>
                  </div>
                  <button className="btn btn-primary" disabled={isSubmitting}>Save Turf</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <div className="col-lg-7">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h5 className="mb-0">All Turfs</h5>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {turfs.map(t => (
            <div className="col" key={t.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h6 className="card-title">{t.title}</h6>
                  <p className="text-muted mb-1">{t.location}</p>
                  <p className="mb-2">₹{t.price}</p>
                  <p className="small">{t.description}</p>
                  <div className="d-flex gap-2">
                    <Link to={`/admin/turfs/${t.id}/edit`} className="btn btn-sm btn-outline-primary">Edit</Link>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={async () => { await deleteTurf(t.id); refresh(); }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {!turfs.length && <p className="text-muted">No turfs yet.</p>}
        </div>
      </div>

      <hr className="my-4" />
      <h5>Recent Bookings (read-only)</h5>
      <p className="text-muted">
        Open to implement: list all bookings with user names, totals, and dates.
      </p>
    </div>

);
}